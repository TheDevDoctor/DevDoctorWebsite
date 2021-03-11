import React from 'react'
import Img from 'gatsby-image'

import heroStyles from './main-hero-section.module.scss'

import { Link, graphql, StaticQuery, useStaticQuery } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'

const HeroComponent = () => {
    const data = useStaticQuery(graphql`
    query {
        devFace: file(relativePath: {eq: "dev-face.png"})
        {
            childImageSharp {
                fluid(maxWidth: 555, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        docFace: file(relativePath: {eq: "doc-face.png"})
        {
            childImageSharp {
                fluid(maxWidth: 555, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }`)

    const designerTextStyle = {
        opacity: 1
    }

    const devTextStyle = {
        opacity: 1
    }

    return (

        <section id="section" className="light nopad-t nopad-b section-shadow">
            <Container className={heroStyles.mainContainer}>

                <Row noGutters={true}>
                    <Col xs={6}>
                        <div className={heroStyles.devContainer}>
                            <div>
                                <Img fluid={data.devFace.childImageSharp.fluid} className={heroStyles.devImage}></Img>
                            </div>

                            <Link to="/about">
                                <div id="designer" className={heroStyles.designerText} style={designerTextStyle}>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.left}`}>
                                        <h1 className={`${heroStyles.jobTitle} ${heroStyles.dev}`} >{`<`}<span style={{ fontWeight: 'bolder' }}>dev</span>{`>`}</h1>
                                        <p className={heroStyles.jobDescription}>Developer focussing on creating efficient and beautiful health technology platforms</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={heroStyles.docContainer}>
                            <div>
                                <Img fluid={data.docFace.childImageSharp.fluid} className={heroStyles.docImage}></Img>
                            </div>

                            <Link to="/portfolio">
                                <div id="designer" className={heroStyles.devText}>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.right}`}>
                                        <h1 className={`${heroStyles.jobTitle}`}>doctor</h1>
                                        <p className={heroStyles.jobDescription}>Emergency department doctor working in London for the UK's National Health Service</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroComponent;
