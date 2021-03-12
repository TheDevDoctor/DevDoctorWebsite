import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'
import Img from 'gatsby-image';

import Footer from '../components/footer'
import Layout from '../components/layout'

import { Row, Container, Col } from 'react-bootstrap'

// Styles
import styles from '../styles/portfolio.module.scss'

// Components
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


const PortfolioPage = ({data}) => {
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
        metaDescription: 'A timeline of all my projects. A chronological list of all my healthcare technology platforms and projects.'
    }

    return (
        <Layout seo={ portfolioSEO }>
            <SliderWrap>
                <Slider {...sliderSettings} className={styles.slider}>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <Img fluid={data.bleeprFeatured.childImageSharp.fluid} className={styles.sliderImg}/>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <Img fluid={data.pixelDrFeatured.childImageSharp.fluid} className={styles.sliderImg}/>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <div className={styles.imgContainer}>
                            <Img fluid={data.dataDocFeatured.childImageSharp.fluid} className={styles.sliderImg}/>
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

export const query = graphql`
  query {
    bleeprFeatured: file(relativePath: {eq: "bleepr-featured-img.png"})
      {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    pixelDrFeatured: file(relativePath: {eq: "pixeldr-game.png"})
    {
      childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    dataDocFeatured: file(relativePath: {eq: "data-docs-featured.png"})
    {
      childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`

export default PortfolioPage