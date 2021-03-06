import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'

// Components
import BlogFeaturedCard from '../components/featured-blog-card'
import BlogCard from '../components/blog-card'

import Footer from '../components/footer'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

// Styles 
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    const blogPosts = useStaticQuery(graphql`
        query {
            allStrapiBlogPost (
                sort: {
                    fields: publishedAt
                    order: DESC
                }) 
                {
                edges {
                    node {
                        slug
                        title
                        description
                        featured
                        publishedAt(formatString: "Do MMM YYYY")
                        category {
                            name
                        }
                        writer {
                            name
                        }
                        coverImage {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 930, quality: 100) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            
                        }
                    }
                }
            }
        }
    `)

    const featured = blogPosts.allStrapiBlogPost.edges.filter(edge => edge.node.featured)[0]

    const blogSEO = {
        metaTitle: 'Health & Technology Blog Page',
        metaDescription: 'All of my blog articles, focussing on technology, life, healthcare, and computer science'
    }

    return (
        <Layout seo={blogSEO}>
            <Container className={blogStyles.blogContainer}>
                <Row className={blogStyles.featuredSection}>
                    <Col xs={12}>
                        <BlogFeaturedCard featured={featured}></BlogFeaturedCard>
                    </Col>
                </Row>
                <section>
                    <Row>
                        <Col xs={12}>
                            <h1 className="section-title">Latest Posts</h1>
                            <div className="title-accent"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {blogPosts.allStrapiBlogPost.edges.map((edge, index) => {
                                return (<BlogCard key={index} index={index} node={edge.node}></BlogCard>)

                            })}
                        </Col>
                    </Row>
                </section>
            </Container>


        </Layout>
    )
}

export default BlogPage