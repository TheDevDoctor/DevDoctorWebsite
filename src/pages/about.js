import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image'

// Components
import Footer from '../components/footer';
import Layout from '../components/layout';

// Images

import aboutDevImage from '../assets/images/dev-image.png';
import { IoAccessibility, IoLibrary, IoLogoYoutube, IoSchool } from "react-icons/io5";

//Styles
import { Col, Container, Row } from 'react-bootstrap'
import aboutStyles from '../styles/about.module.scss'

const SliderWrap = styled.div`
    .slick-slider {
        margin: 2rem 0;
        .slick-list {
            overflow: show;
            .slick-track {
                .slick-slider.slide_item {
                    
                }
            }
        }
    }
`


const AboutPage = ({ data }) => {

    const aboutSEO = {
        metaTitle: 'Some Things About Me',
        metaDescription: 'Everything about me. Doctor, developer, youtube, research, and technology. Bridging the gap between medicine and computer science'
    }

    const otherSection = [
        {
            title: 'youtube',
            subtitle: 'The Dev Doctor',
        },
        {
            title: 'research',
            subtitle: 'Academic Research',
        },
        {
            title: 'education',
            subtitle: 'Where I learnt stuff',
        }
    ]

    const sliderSettings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false
    }


    const [state, setState] = useState({
        selected: 0,
    });

    function handleClick(int) {
        setState({
            selected: int
        });
    };


    return (
        <Layout seo={aboutSEO}>
            <section className={`${aboutStyles.aboutMeSection} highlight-bg`}>
                <Container fluid="md">
                    <Row className="align-center">
                        <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
                            <div className={aboutStyles.textContainer} data-sal="slide-right" data-sal-duration="1000">
                                <h1>about me<span className="fullstop-highlight">.</span></h1>
                                <div className={`${aboutStyles.aboutAccent} title-accent`}></div>
                                <h4>I’m a medical doctor and developer based in London, UK</h4>
                                <p>
                                    I like to use my medical training and understanding of the healthcare industry to create transformative and intuitive healthcare platforms.
                                <br /><br />
                                When I’m not in the Emergency Department, I’m behind my trusty laptop dreaming up my next platform.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className={aboutStyles.heroImageContainer} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="500">
                                <Img className={aboutStyles.aboutHeroImage} fluid={data.aboutHeroImage.childImageSharp.fluid}></Img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={aboutStyles.sectionPadding}>
                <Container fluid="md">
                    <Row className="align-center">
                        <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'last' }}>
                            <div className={`${aboutStyles.textContainer} ${aboutStyles.reverse}`} data-sal="slide-left" data-sal-duration="1000" >
                                <h1>doctor<span className="fullstop-highlight">.</span></h1>
                                <div className={`${aboutStyles.aboutAccent} title-accent`}></div>
                                <h4>
                                    Emergency Department Doctor
                                </h4>
                                <p>
                                    By day (and sometimes night) I’m a junior doctor working in the UK’s National Health service.
                                    <br /><br />
                                    I now work in an Emergency Department in London, but have worked in various surgical and medical specialties, including intensive care and plastic surgery.
                                    <br /><br />
                                    I also worked as a Doctor and the Nightingale hospital during the coronavirus pandemic.
                                </p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 'first' }} md={{ span: 6, order: 'first' }}>
                            <div className={aboutStyles.doctorImageContainer} data-sal="slide-right" data-sal-duration="1000" data-sal-delay="500">
                                <BackgroundImage className={`${aboutStyles.doctorImageCard} card`} fluid={data.nhsImage.childImageSharp.fluid}></BackgroundImage>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="highlight-bg overflow-hidden">
                <Container fluid="md">
                    <Row className="align-center">
                        <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
                            <div className={aboutStyles.textContainer} data-sal="slide-right" data-sal-duration="1000">
                                <h1>developer<span className="fullstop-highlight">.</span></h1>
                                <div className={`${aboutStyles.aboutAccent} title-accent`}></div>
                                <h4>
                                    Dreaming of beautiful health tech platforms
                                </h4>
                                <p>
                                    In my developing work I try to combine modern technology with aesthetic design.
                                <br /><br />
                                    I enjoy using my first hand experience of issues in healthcare to design platforms and algorithms that solve these in an efficient and effective way, all wrapped in a beautiful and intuitive UX/UI.
                                </p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 'first' }} md={{ span: 6, order: 'last' }}>
                            <div className={aboutStyles.devImageContainer} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="500">
                                <Img className={aboutStyles.devImage} fluid={data.devImage.childImageSharp.fluid}></Img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={aboutStyles.otherSectionPadding}>
                <Container fluid="md">
                    <Row className="align-center">
                        <Col xs={{ span: 12, order: 'last' }} sm={{ span: 10, order: 'first' }} md={{ span: 6, order: 'last' }}>
                            <div className={`${aboutStyles.textContainer} ${aboutStyles.otherTextContainer}`} data-sal="slide-left" data-sal-duration="1000">
                                <h1>{otherSection[state.selected].title}<span className="fullstop-highlight">.</span></h1>
                                <div className={`${aboutStyles.aboutAccent} title-accent`}></div>
                                <h4>
                                    {otherSection[state.selected].subtitle}
                                </h4>
                                <div>
                                    {state.selected === 0 && <p>I have a YouTube channel called The Dev Doctor, where I talk about the latest developments in technology, healthcare, and everything in between.
                                        <br/>
                                        <br/>
                                        If you want to see more head over to the channel and subcribe to <a href="https://www.youtube.com/channel/UCWm6kHjTBaX4clFVXJCoD4A" target="_blank" className={aboutStyles.youtubeLink}>The Dev Doctor</a> channel</p>}
                                    {state.selected === 1 && <div><p>Most of my academic research has been focussed around Neuroscience, as I did an undergraduate degree in Neuroscience before studying medicine. Here are some highlights if interested:</p><ul><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4939400/" target="_blank"><li>Nociceptive-Evoked Potentials Are Sensitive to Behaviorally Relevant Stimulus Displacements in Egocentric Coordinates</li></a><li>Patient Safety on the menu: identifying parental concerns to enhance safe care on a paediatric ward</li></ul></div>}
                                    {state.selected === 2 && <p>
                                        <b>2012 - 2018:</b> Bachelor of Medicine & Bachelor of Surgery, UCL<br /><br />
                                        <b>2012 - 2015:</b> Medical Sciences with Neuroscience, UCL (1st Class Honours)<br /><br />
                                        <b>2021 - 2022:</b> Computing Science Masters, Imperial College London (Current Study)
                                    </p>}


                                </div>


                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 'first' }} sm={{ span: 'auto', order: 'last' }} md={{ span: 6, order: 'first' }} data-sal="slide-right" data-sal-duration="1000">
                            <div className={aboutStyles.cardContainer}>
                                <div className={`${aboutStyles.otherCard} ${state.selected === 0 ? aboutStyles.selected : ''} card`} onClick={() => handleClick(0)}>
                                    <IoLogoYoutube className={`${aboutStyles.cardIcon} ${aboutStyles.youtube}`}></IoLogoYoutube>
                                    <h2 className="d-none d-md-block">YouTube</h2>
                                </div>
                                <div className={`${aboutStyles.otherCard} ${state.selected === 1 ? aboutStyles.selected : ''} card`} onClick={() => handleClick(1)}>
                                    <IoLibrary className={`${aboutStyles.cardIcon}`}></IoLibrary>
                                    <h2 className="d-none d-md-block">Research</h2>
                                </div>
                                <div className={`${aboutStyles.otherCard} ${state.selected === 2 ? aboutStyles.selected : ''} card`} onClick={() => handleClick(2)}>
                                    <IoSchool className={`${aboutStyles.cardIcon}`}></IoSchool>
                                    <h2 className="d-none d-md-block">Education</h2>
                                </div>


                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className={`${aboutStyles.mediaPadding} highlight-bg`}>
                <Container>
                    <Row className="align-center">
                        <Col>
                            <h1 className={aboutStyles.mediaTitle} data-sal="fade-in" data-sal-duration="500">media <span className="fullstop-highlight">.</span></h1>
                        </Col>
                    </Row>
                </Container>
                <Row className="align-center">
                    <Col>
                        <SliderWrap data-sal="fade-in" data-sal-duration="500" data-sal-delay="250">
                            <Slider {...sliderSettings}>
                                <div>
                                    <a href="https://www.instagram.com/tv/CLM3ZBuDfdL/?igshid=tn8bjnld7mpe" target="_blank">

                                        <BackgroundImage className={`${aboutStyles.mediaCard} ${aboutStyles.square} card`} fluid={data.dvtvImage.childImageSharp.fluid}>
                                            <div className={aboutStyles.tag}>
                                                Instagram: the.bearded.medic
                                                </div>
                                        </BackgroundImage>

                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.youtube.com/watch?v=AOyBbqGZW5A" target="_blank">
                                        {/* <div className={`${aboutStyles.mediaCard} ${aboutStyles.jessKatagInterview} ${aboutStyles.landscape} card`}> */}
                                        <BackgroundImage className={`${aboutStyles.mediaCard} ${aboutStyles.landscape} card`} fluid={data.jessKatagInterview.childImageSharp.fluid}>
                                            <div className={aboutStyles.tag}>
                                                YouTube: JessicaKatanga
                                                </div>
                                        </BackgroundImage>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/posts/sgul-medtech-society_healthtech-innovative-medtech-activity-6593442430509428736-CXb7" target="_blank">

                                        <BackgroundImage className={`${aboutStyles.mediaCard} ${aboutStyles.landscape} card`} fluid={data.sgulTalk.childImageSharp.fluid}>
                                            <div className={aboutStyles.tag}>
                                                St Georges MedTech Lecture
                                            </div>
                                        </BackgroundImage>

                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/posts/dr-matthew-stubbs_nightingalehospital-stayhomesaveslives-activity-6662266554404732928-PgGY" target="_blank">
                                        <BackgroundImage className={`${aboutStyles.mediaCard} ${aboutStyles.square} card`} fluid={data.nightingale.childImageSharp.fluid}>
                                            <div className={aboutStyles.tag}>
                                                NHS Nightingale
                                                </div>
                                        </BackgroundImage>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/posts/dr-matthew-stubbs_nightingalehospital-stayhomesaveslives-activity-6662266554404732928-PgGY" target="_blank">
                                    
                                        <BackgroundImage className={`${aboutStyles.mediaCard} ${aboutStyles.square} card`} fluid={data.bleepr1.childImageSharp.fluid}>
                                            <div className={aboutStyles.tag}>
                                                Bleepr.io
                                                </div>
                                        </BackgroundImage>
                                    </a>
                                </div>


                            </Slider>
                        </SliderWrap>
                    </Col>
                </Row>

            </section>

        </Layout >

    )
}


export const query = graphql`
  query {
    aboutHeroImage: file(relativePath: {eq: "about-hero-img.png"})
      {
        childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    nhsImage: file(relativePath: {eq: "nhs-nightingale.jpeg"})
    {
      childImageSharp {
          fluid(maxWidth: 540, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    devImage: file(relativePath: {eq: "dev-image.png"})
    {
      childImageSharp {
          fluid(maxWidth: 700, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    dvtvImage: file(relativePath: {eq: "dvtv-img.jpg"})
    {
      childImageSharp {
          fluid(maxWidth: 336, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    jessKatagInterview: file(relativePath: {eq: "jess-katag-interview.jpg"})
    {
      childImageSharp {
          fluid(maxWidth: 624, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    sgulTalk: file(relativePath: {eq: "sgul-medtech-conf.jpeg"})
    {
      childImageSharp {
          fluid(maxWidth: 624, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    nightingale: file(relativePath: {eq: "nhs-nightingale.jpeg"})
    {
      childImageSharp {
          fluid(maxWidth: 336, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    bleepr1: file(relativePath: {eq: "bleepr-social-img-1.jpeg"})
    {
      childImageSharp {
          fluid(maxWidth: 336, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`


export default AboutPage