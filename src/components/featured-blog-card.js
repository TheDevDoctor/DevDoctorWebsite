import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

// Styles

import styles from './featured-blog-card.module.scss'

const BlogFeaturedCard = (props) => {
    const featuredArticle = props.featured.node

    return (
        <Link to={featuredArticle.slug}>
            <BackgroundImage className={`card ${styles.featuredCard}`} fluid={featuredArticle.coverImage.image.childImageSharp.fluid} data-sal="zoom-in" data-sal-duration="1000">
                <div className={styles.cover}>
                    <h3>{featuredArticle.title}</h3>
                    <h6>{featuredArticle.writer.name} · {featuredArticle.publishedAt}</h6>

                    <div className={`${styles.featuredAccent} title-accent negative`} className="d-none d-md-block"></div>
                    <p className="d-none d-md-block">
                        {featuredArticle.description}
                    </p>
                </div>
            </BackgroundImage>
        </Link>
    )
}

export default BlogFeaturedCard