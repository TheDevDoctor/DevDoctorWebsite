import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import styles from './article.module.scss';

import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoGithub } from "react-icons/io5";
import { createElement } from "react";

export const query = graphql`
    query($slug: String!, $imageWidth: Int!) {
  	strapiBlogPost(slug: {eq: $slug}) {
    	slug
    	strapiId
      writer {
        name
      }
      publishedAt(formatString: "Do MMM YYYY")
      coverImage {
        imageWidth
        image {
          childImageSharp {
            fluid( maxWidth: $imageWidth, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
      title
      description
      content
  }
}
`



const Article = ({ data }) => {
  const article = data.strapiBlogPost;

  function renderParagraph(props) {
    const { children } = props;

    if (children && children[0]
      && children.length === 1
      && children[0].props
      && children[0].props.src) { // rendering media without p wrapper

      return children;
    }

    return <p className={styles.articleWidth}>{children}</p>;
  }

  function thematicBreakRenderer(props) {
    const { children } = props;

    return <div className={`title-accent ${styles.articleBreak}`}></div>
  }

  function headingRenderer(props) {

    const heading = "h".concat(props.level)

    return React.createElement("h".concat(props.level), {className: styles.articleWidth}, props.children);
  }

  const articleSEO = {
    metaTitle: article.title,
    metaDescription: article.description,
    article: true,
    shareImage: article.coverImage.image
  }


  return (
    <Layout seo={articleSEO}>
      <div className={styles.articleContainer}>
        <div className={styles.article}>
          <div className={styles.header}>
            <Img fluid={article.coverImage.image.childImageSharp.fluid} className={article.coverImage.imageWidth === 'ArticleWidth' ? styles.coverArticleWidth : article.coverImage.imageWidth === 'WideWidth' ? styles.coverWideWidth : styles.coverScreenWidth} />
            <h1 className={styles.articleWidth}>{article.title}</h1>
            <h4 className={styles.articleWidth}>{article.description}</h4>
            <div className={`${styles.authorContainer} ${styles.articleWidth}`}>
              <div className={styles.textContainer}>
                <p>{article.writer.name}</p>
                <h6>{article.publishedAt}</h6>
              </div>
              <ul className={styles.socialIcons + ' d-none d-lg-flex'}>
                <li>
                  <a href="https://www.instagram.com/thedevdoctor/" target="_blank"><IoLogoInstagram className={styles.socialIcon} /></a>
                </li>
                <li>
                  <a href="https://twitter.com/TheDevDoctor" target="_blank"><IoLogoTwitter className={styles.socialIcon} /></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCWm6kHjTBaX4clFVXJCoD4A" target="_blank"><IoLogoYoutube className={styles.socialIcon} /></a>
                </li>
                <li>
                  <a href="https://github.com/TheDevDoctor" target="_blank"><IoLogoGithub className={styles.socialIcon} /></a>
                </li>
              </ul>

            </div>
          </div>
          <div className={`title-accent ${styles.blogAccent}`}></div>

          
          <div className={`${styles.articleContent} article-content`}>

            <ReactMarkdown renderers={{ paragraph: renderParagraph, thematicBreak: thematicBreakRenderer, heading: headingRenderer }} allowDangerousHtml={true} transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}>{article.content}</ReactMarkdown>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Article;