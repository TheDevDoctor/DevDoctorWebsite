import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

// components
import YoutubePreview from '../components/youtube-preview-card'
import Footer from '../components/footer'
import Layout from '../components/layout'

import { IoLogoYoutube } from 'react-icons/io5'

import DevDocTV from '../assets/images/devdoc-tv.png'


import styles from '../styles/youtube.module.scss'

import PixelDrGame from '../assets/images/pixeldr-game.png'

const YouTubePage = ({ data }) => {
    const youtubeVideos = data.allStrapiYoutubeVideo

    const youtubeSEO = {
        metaTitle: 'Youtube Channel',
        metaDescription: 'Here you can find all my recent uploads to The Dev Doctor YouTube channel'
    }

    return (
        <Layout seo={youtubeSEO}>
            <Container>
                <section className={styles.youtubeSection}>

                    <Row className={styles.heroRowPadding}>
                        <Col xs={12} lg={6} className="align-center">
                            <div className={`${styles.textContainer}`} data-sal="slide-right" data-sal-duration="1000">
                                <h1>The Dev Doctor<span className={styles.youtubeLogo}><IoLogoYoutube></IoLogoYoutube></span></h1>
                                <div className={`${styles.aboutAccent} title-accent`}></div>
                                <h4>
                                    I also have a YouTube channel
                        </h4>
                                <p>I have a YouTube channel called The Dev Doctor, where I talk about the latest developments in technology, healthcare, and everything in between.
                                        <br />
                                    <br />
                                        If you want to see more head over to the channel and subcribe to <a href="https://www.youtube.com/channel/UCWm6kHjTBaX4clFVXJCoD4A" target="_blank" className={styles.youtubeLink}>The Dev Doctor</a> channel</p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 'first' }} lg={{ span: 6, order: 'last' }} className="align-center">
                            <div className={styles.heroImgContainer}>
                                <Img fluid={data.heroImage.childImageSharp.fluid} className={styles.devdoctv} data-sal="slide-left" data-sal-duration="1000"></Img>
                            </div>
                        </Col>
                    </Row>

                </section>
            </Container>

            <section>
                <Container className={styles.listContainer}>
                    <Row>
                        <Col xs={12} data-sal="zoom-in" data-sal-duration="1000">
                            <h1 className={`section-title ${styles.sectionTitle}`}>Latest Videos</h1>
                            <div className={`${styles.titleAccent} title-accent`}></div>
                        </Col>
                    </Row>

                    {youtubeVideos.edges.map((edge, index) => {
                        const video = edge.node;
                        return (
                            <Row className={styles.videoRow} key={index}>
                                <Col md={6} className="align-center" data-sal="slide-right" data-sal-duration="1000">
                                    <YoutubePreview fluidImage={edge.node.thumbnail.childImageSharp.fluid} link={edge.node.videoLink}></YoutubePreview>
                                </Col>
                                <Col md={6} className="align-center" data-sal="slide-left" data-sal-duration="1000">
                                    <div className={`${styles.previewContainer}`}>
                                        <h6 className={styles.tag}>{video.category.name}</h6>
                                        <a href={edge.node.videoLink} target="_blank"><h3>{video.title}</h3></a>
                                        <p>
                                            {video.description}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        )
                    })}

                </Container>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query {
    heroImage: file(relativePath: {eq: "devdoc-tv.png"})
      {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allStrapiYoutubeVideo (
            sort: {
            fields: publishedAt
            order: DESC
            }
        ) {
        edges {
            node {
                    title
                    category {
                    name
                    }
                    thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 465, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    description
                    publishedAt
                    videoLink
                }
            }
        }
    }`

export default YouTubePage