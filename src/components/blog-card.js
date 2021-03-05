import React from 'react'

// Styles
import styles from './blog-card.module.scss'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

// 

const BlogCard = (props) => {
    const blogData = props.node

    return (
        <div className={styles.blogItem} data-sal={ props.index % 2 === 0 ? 'slide-right' : 'slide-left'} data-sal-duration="1000">
            <h6 className={styles.dateTag}>{blogData.publishedAt}</h6>
            <Link to={blogData.slug} style={{ textDecoration: 'none' }}>
                <div className={`${styles.blogCard} card`}>
                    <Row noGutters={true} className={styles.fullRow}>
                        <Col xs={12}  md={{ span: 6, order: props.index % 2 === 0 ? 'first' : 'last' }}>
                            <div className={styles.imgDiv} style={{ backgroundImage: `url(${blogData.coverImage.image.publicURL})` }}>

                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className={styles.previewContainer}>
                                <h6 className={styles.tag}>{blogData.category.name}</h6>
                                <h3>{blogData.title}</h3>
                                <p>
                                    {blogData.description}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard