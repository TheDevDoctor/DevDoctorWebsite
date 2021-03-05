import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

import Footer from '../components/footer'
import Layout from '../components/layout'

import { Row, Container, Col } from 'react-bootstrap'

// Styles
import styles from '../styles/portfolio.module.scss'

// Images
import BleeprImg from '../assets/images/bleepr-featured-img.png'
import PixelDrGame from '../assets/images/pixeldr-game.png'
import DataDocsFeatured from '../assets/images/data-docs-featured.png'
import VerticalTimeline from '../components/vertical-timeline/vertical-timeline';


const SliderWrap = styled.div`
    .slick-slider {
        .slick-dots {
            bottom: 36px;

            li  {
                margin: 0 8px;

                button::before {
                    font-size: 42px;
                    content: '_';
                    opacity: 0.35;
                    color: white;
                    font-weight: bolder;
                    top: -22px;
                }

                &.slick-active button::before {
                    opacity: 1
                }
            }
        }
    }

    @media only screen and (max-width: 576px) {
        .slick-slider {
            .slick-dots {
                bottom: 15px;
            }
        }
    }`


const PortfolioPage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false
    }

    const portfolioSEO = {
        metaTitle: 'Portfolio Timeline',
        metaDescription: 'Here you can find a timeline of all my projects, right back to when I first started learning how to code as a medical student'
    }

    return (
        <Layout seo={ portfolioSEO }>
            <SliderWrap>
                <Slider {...sliderSettings} className={styles.slider}>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <img src={BleeprImg}></img>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <img src={PixelDrGame}></img>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <img src={DataDocsFeatured}></img>
                        </div>
                    </div>
                </Slider>
            </SliderWrap>

            <section>
                <Container>
                    <VerticalTimeline>

                    </VerticalTimeline>
                </Container>
            </section>
        </Layout>
    )
}

export default PortfolioPage