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
            theMission
            previewImage {
                childImageSharp {
                    fluid(maxWidth: 777, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            title
            appLogo {
                childImageSharp {
                    fluid(maxWidth: 130, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            platform {
                platformDescription
                platformInfo {
                    name
                        logo {
                        childImageSharp {
                            fluid(maxWidth: 80) {
                                ...GatsbyImageSharpFluid_withWebp
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
                            fluid(maxWidth: 90) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
            shareImage {
                publicURL
            }
            description
            githubLink
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

    const projectSEO = {
        metaTitle: project.title,
        metaDescription: project.description,
        article: true,
        shareImage: project.shareImage
    }

    function renderParagraph(props) {
        const { children } = props;

        console.log(children)

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

    function headingRenderer(props) {

        const heading = "h".concat(props.level)

        return React.createElement("h".concat(props.level), { className: styles.articleWidth }, props.children);
    }

    function listRenderer(props) {
        var attrs = getCoreProps(props);

        if (props.start !== null && props.start !== 1 && props.start !== undefined) {
            attrs.start = props.start.toString();
        }

        attrs.className = `${styles.articleWidth}`

        return React.createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
    }

    function getCoreProps(props) {
        var source = props['data-sourcepos'];
        /* istanbul ignore next - nodes from plugins w/o position */

        return source ? {
            'data-sourcepos': source
        } : {};
    }


    return (
        <Layout seo={projectSEO}>
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
                                <Col xs={12} md={8}>
                                    <h1>the mission<span className="fullstop-highlight">.</span></h1>
                                    <div className={`title-accent ${styles.accent}`}></div>
                                    <p>
                                        {project.theMission}
                                    </p>
                                </Col>
                                <Col md={4} className="d-none d-md-flex">
                                    <div className={styles.logoContainer}>
                                        <div className={styles.appBackground} style={{ backgroundColor: project.backgroundColor }}>
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
                                                    <Img fluid={member.team_member.profilePic.childImageSharp.fluid} className={styles.profilePic} />
                                                    <div className={`${styles.textContainer} d-none d-lg-block`}>
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
                                    <div className={styles.roleDescriptionContainer}>
                                        <h4 className={`${styles.name} d-xs-block d-sm-block d-md-block d-lg-none d-xl-none`}>{project.teamMember[state.teamMember].team_member.name}</h4>
                                        <p className={`${styles.role} d-xs-block d-sm-block d-md-block d-lg-none d-xl-none`}>{project.teamMember[state.teamMember].role}</p>
                                        <p className={styles.roleDescription}>{project.teamMember[state.teamMember].roleDescription}</p>
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
                                <Col xs={12} md={2}>
                                    <div className={styles.platformContainer}>
                                        {platforms.map((platform, index) => {
                                            return (
                                                <div className={`card ${styles.platformCard} ${index === state.platform ? styles.selected : null}`} onClick={() => platformClick(index)}>
                                                    <Img fluid={platform.platformInfo.logo.childImageSharp.fluid} className={styles.platformPic} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                                <Col xs={12} md={10}>
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

                <div className={styles.story} style={ project.githubLink ? null : {paddingBottom: '3rem'}}>
                    <div className={`${styles.articleContent} article-content`}>

                        <ReactMarkdown renderers={{ paragraph: renderParagraph, thematicBreak: thematicBreakRenderer, heading: headingRenderer, list: listRenderer }} allowDangerousHtml={true} transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}>{project.content}</ReactMarkdown>
                    </div>
                </div>
            </section>

            {
                project.githubLink && <section>
                    <div className={`title-accent ${styles.accent}`}></div>

                    <div className={styles.githubContainer}>

                        <a href={project.githubLink}>
                            <div className={`${styles.githubCard} card`}>
                                <Row noGutters={true}>
                                    <Col>
                                        <div className={styles.githubLogoContainer}>
                                            <IoLogoGithub style={{ fontSize: '6rem' }}></IoLogoGithub>
                                        </div>
                                    </Col>
                                    <Col xs={8}>
                                        <div className={styles.githubTextContainer}>
                                            <h4>PixelDr Github</h4>
                                            <p>See the code for yourself on the GitHub respository</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </a>
                    </div>
                </section>
            }


        </Layout>
    )
}

export default Project;