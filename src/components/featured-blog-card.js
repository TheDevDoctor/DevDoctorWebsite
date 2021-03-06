import React from 'react'
import { Link } from 'gatsby'

// Styles

import styles from './featured-blog-card.module.scss'

const BlogFeaturedCard = (props) => {
    const featuredArticle = props.featured.node

    return (
        <Link to={featuredArticle.slug}>
            <div className={`card ${styles.featuredCard}`} style={{backgroundImage: `url(${featuredArticle.coverImage.image.publicURL})` }} data-sal="zoom-in" data-sal-duration="1000">
                <div className={styles.cover}>
                    <h3>{featuredArticle.title}</h3>
                    <h6>{featuredArticle.writer.name} · {featuredArticle.publishedAt}</h6>

                    <div className={`${styles.featuredAccent} title-accent negative`} className="d-none d-md-block"></div>
                    <p className="d-none d-md-block">
                        {featuredArticle.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default BlogFeaturedCard