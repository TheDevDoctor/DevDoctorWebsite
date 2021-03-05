import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

// components
import YoutubePreview from '../components/youtube-preview-card'
import Footer from '../components/footer'
import Layout from '../components/layout'


import styles from '../styles/youtube.module.scss'
import { IoLogoYoutube } from 'react-icons/io5'

import DevDocTV from '../assets/images/devdoc-tv.png'



import PixelDrGame from '../assets/images/pixeldr-game.png'

const YouTubePage = () => {
    const youtubeVideos = useStaticQuery(graphql`
    query {
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
                            publicURL
                        }
                        description
                        publishedAt
                        videoLink
                    }
                }
            }
        }`)

    const youtubeSEO = {
        metaTitle: 'Youtube Channel - The Dev Doctor',
        metaDescription: 'Here you can find all my recent uploads to The Dev Doctor YouTube channel'
    }

    return (
        <Layout seo={youtubeSEO}>
            <Container>
                <section className={styles.youtubeSection}>

                    <Row>
                        <Col xs={12} md={6} className="align-center">
                            <div className={`${styles.textContainer}`} data-sal="slide-right" data-sal-duration="1000">
                                <h1>The Dev Doctor<span className={styles.youtubeLogo}><IoLogoYoutube></IoLogoYoutube></span></h1>
                                <div className={`${styles.aboutAccent} title-accent`}></div>
                                <h4>
                                    I also have a YouTube channel
                        </h4>
                                <p>
                                    I like to use my medical training and understanding of the healthcare industry to create transformative and intuitive healthcare platforms.
                        <br /><br />
                        When I’m not in the Emergency Department, I’m behind my trusty laptop dreaming up my next platform.
                        </p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 'first' }} md={{span:6, order: 'last'}} className="align-center">
                            <img src={DevDocTV} className={styles.devdoctv} data-sal="slide-left" data-sal-duration="1000"></img>
                        </Col>
                    </Row>

                </section>
            </Container>

            <section>
                <Container className={styles.listContainer}>
                    <Row>
                        <Col xs={12} data-sal="zoom-in" data-sal-duration="1000">
                            <h1 className={`section-title ${styles.sectionTitle}`}>Latest Videos</h1>
                            <div className={`title-accent ${styles.titleAccent}`}></div>
                        </Col>
                    </Row>

                    {youtubeVideos.allStrapiYoutubeVideo.edges.map((edge, index) => {
                        const video = edge.node;
                        return (
                            <Row className={styles.videoRow} key={index}>
                                <Col md={6} className="align-center" data-sal="slide-right" data-sal-duration="1000">
                                    <YoutubePreview imageURL={edge.node.thumbnail.publicURL} link={edge.node.videoLink}></YoutubePreview>
                                </Col>
                                <Col md={6} className="align-center" data-sal="slide-left" data-sal-duration="1000">
                                    <div className={`${styles.previewContainer}`}>
                                        <h6 className={styles.tag}>{video.category.name}</h6>
                                        <h3>{video.title}</h3>
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

export default YouTubePage