import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import styles from './project.module.scss'

import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoGithub } from "react-icons/io5";
import { Col, Container, Row } from "react-bootstrap";
import Img from 'gatsby-image';


export const query = graphql`
    query($slug: String!) {
        strapiProject(slug: {eq: $slug}) {
            publishedAt
            backgroundColor
            content
            previewImage {
                childImageSharp {
                    fluid(maxWidth: 777, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            title
            appLogo {
                childImageSharp {
                    fluid(maxWidth: 130, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            platform {
                platformDescription
                platformInfo {
                    name
                        logo {
                        childImageSharp {
                            fixed(width: 80) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
            tagline
            teamMember {
                roleDescription
                role
                team_member {
                    name
                    profilePic {
                        childImageSharp {
                            fixed(width: 90) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
            description
        }
    }`


const Project = ({ data }) => {

    const [state, setState] = useState({
        teamMember: 0,
        platform: 0,
    });

    function teamMemberClick(int) {
        state.teamMember = int;
        setState({ ...state });
    };

    function platformClick(int) {
        state.platform = int;
        setState({ ...state });
    };

    const project = data.strapiProject;
    const team = project.teamMember;
    const platforms = project.platform;

    console.log(project.content)

    function renderParagraph(props) {
        const { children } = props;

        if (children && children[0]
            && children.length === 1
            && children[0].props
            && children[0].props.src) { // rendering media without p wrapper
            console.log(children)

            // fix to lazy load, hopefully gatsby will fix this with gatsby image
            return <img src={children[0].props.src} alt={children[0].props.alt} loading="lazy" />;
        }

        return <p className={styles.articleWidth}>{children}</p>;
    }

    function thematicBreakRenderer(props) {
        const { children } = props;

        return <div className={`title-accent ${styles.articleBreak}`}></div>
    }


    return (
        <Layout>
            <section>
                <div className={styles.headerBanner}>
                    <Container>
                        <Row>
                            <Col>
                                <div className={styles.bannerContent}>
                                    <h1>{project.title}</h1>
                                    <div className={`title-accent ${styles.bannerAccent}`}></div>
                                    <div className={styles.imageContainer}>
                                        <Img fluid={project.previewImage.childImageSharp.fluid} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section>
                <div className={styles.content}>
                    <Container>
                        <div className={`${styles.theMission} ${styles.section}`}>
                            <Row>
                                <Col md={8}>
                                    <h1>the mission<span className="fullstop-highlight">.</span></h1>
                                    <div className={`title-accent ${styles.accent}`}></div>
                                    <p>
                                        Our vision is simple, to connect every healthcare professional on the planet
                                    </p>
                                </Col>
                                <Col md={4}>
                                    <div className={styles.logoContainer}>
                                        <div className={styles.appBackground}>
                                            <Img fluid={project.appLogo.childImageSharp.fluid} className={styles.logo} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className={`${styles.theTeam} ${styles.section}`}>
                            <Row>
                                <Col xs={12}>
                                    <h1>the team<span className="fullstop-highlight">.</span></h1>
                                    <div className={`title-accent ${styles.accent}`}></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className={styles.teamContainer}>

                                        {team.map((member, index) => {
                                            return (
                                                <div className={`card ${styles.teamCard} ${index === state.teamMember ? styles.selected : null}`} onClick={() => teamMemberClick(index)}>
                                                    <Img fixed={member.team_member.profilePic.childImageSharp.fixed} className={styles.profilePic} />
                                                    <div className={styles.textContainer}>
                                                        <h4>{member.team_member.name}</h4>
                                                        <p>{member.role}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div className={styles.roleDescription}>
                                        {project.teamMember[state.teamMember].roleDescription}
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className={`${styles.section}`}>
                            <Row>
                                <Col xs={12}>
                                    <h1>the architecture<span className="fullstop-highlight">.</span></h1>
                                    <div className={`title-accent ${styles.accent}`}></div>
                                </Col>
                            </Row>
                            <Row className={styles.platformRow}>
                                <Col xs={2}>
                                    <div className={styles.platformContainer}>
                                        {platforms.map((platform, index) => {
                                            return (
                                                <div className={`card ${styles.platformCard} ${index === state.platform ? styles.selected : null}`} onClick={() => platformClick(index)}>
                                                    <Img fixed={platform.platformInfo.logo.childImageSharp.fixed} className={styles.platformPic} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                                <Col xs={10}>
                                    <div className={styles.platformTextContainer}>
                                        <h2>{platforms[state.platform].platformInfo.name}</h2>
                                        <p>{platforms[state.platform].platformDescription}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>

            <section>
                <div className={`${styles.storySection}`}>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h1>the story<span className="fullstop-highlight">.</span></h1>
                                <div className={`title-accent ${styles.accent}`}></div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.story}>
                    <div className={`${styles.articleContent} article-content`}>

                        <ReactMarkdown renderers={{ paragraph: renderParagraph, thematicBreak: thematicBreakRenderer }} allowDangerousHtml={true} transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}>{project.content}</ReactMarkdown>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Project;