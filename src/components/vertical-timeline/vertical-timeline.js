// Frameworks
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { IoChevronDown } from 'react-icons/io5'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

import styles from './vertical-timeline.module.scss'



const VerticalTimeline = () => {


    const projects = useStaticQuery(graphql`
        query {
            allStrapiProject {
                edges {
                    node {
                            strapiId
                            slug
                            description
                            title
                            tagline
                            backgroundColor
                            publishedAt(formatString: "MMM YYYY")
                            previewImage {
                                childImageSharp {
                                        fluid(maxWidth: 500, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            
                            appLogo {
                                childImageSharp {
                                        fluid(maxWidth: 50, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            
                        }
                    }
                }
            }
    `)


    return (
        <div className={styles.timeline}>

            {projects.allStrapiProject.edges.map((edge, index) => {
                const project = edge.node

                return (<Row noGutters={true} key={index}>
                    <Col xs={{ span: 10, order: 2 }} md={{ span: 5, order: index % 2 > 0 ? 'last' : 'first' }}>
                        <div className={`${styles.smallScreenContainer} d-xs-flex d-sm-flex d-md-none d-lg-none d-xl-none`} data-sal="zoom-in">
                            <div className={styles.date}>{project.publishedAt}</div>
                            <div className={`${styles.imageContainer}`}>
                                <Img fluid={project.previewImage.childImageSharp.fluid} className={styles.previewImg}></Img>
                            </div>
                        </div>

                        <div className={styles.cardContainer}>
                            <div className={`${styles.projectCard} card`} style={{ borderColor: project.backgroundColor }} data-sal={index % 2 > 0 ? 'slide-left' : 'slide-right'} data-sal-duration="1000" data-sal-delay="250">
                                <div className={styles.header}>
                                    <h3>{project.title}</h3>
                                    <h6>{project.tagline}</h6>
                                    <div className={`${styles.accent} title-accent`}></div>
                                </div>
                                <div className={styles.featuredDescription}>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>

                                <div className={styles.learnMore}>
                                    <Link to={'/project/' + project.slug}>
                                        <p>Learn more</p>
                                        <IoChevronDown></IoChevronDown>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className={styles.lineContainer}>
                            <div className={styles.line}></div>
                            <div className={styles.circle} style={{ background: project.backgroundColor }} data-sal="zoom-in" data-sal-duration="1000">
                                <Img fluid={project.appLogo.childImageSharp.fluid} className={styles.logoImage}></Img>

                                <div className={`${styles.date} ${index % 2 > 0 ? styles.reverse : null}`}>{project.publishedAt}</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={0} md={{ span: 5, order: index % 2 > 0 ? 'first' : 'last' }} className="d-none d-md-flex">
                        <div className={styles.imageContainer} data-sal={index % 2 > 0 ? 'slide-right' : 'slide-left'} data-sal-duration="1000" data-sal-delay="500">
                            <Img fluid={project.previewImage.childImageSharp.fluid} className={styles.previewImg}></Img>
                        </div>
                    </Col>
                </Row>)
            })}
        </div>
    )
}

export default VerticalTimeline