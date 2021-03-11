// Frameworks
import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image';

// Components
import Layout from '../components/layout'
import HeroComponent from '../components/main-hero-section'
import YoutubePreview from '../components/youtube-preview-card'

// Images
import BleeprFeaturedImg from '../assets/images/bleepr-featured-img.png'
import PixelDrGame from '../assets/images/pixeldr-game.png'
import CrisprImage from '../assets/images/investing-in-CRISPR.png'
import Tag from '../assets/images/tag.png'
import { IoChevronDown, IoLogoYoutube } from 'react-icons/io5'

// Styles
import indexStyles from '../styles/index.module.scss'

const HomePage = ({ data }) => {
  const spacerHeightTemporary = {
    height: '100px'
  }

  return (
    <Layout>
      <HeroComponent />


      {/* Features Section */}
      <section id="featured-section">
        <Container fluid="md">
          <div className="row">
            <div className="col-12">
              <h1 className="section-title">Featured</h1>
              <div className="title-accent"></div>
            </div>
          </div>

          {/* Featured 1 */}
          <div className="row featured-container">
            <Col lg={8}>
              <div className="featured-image-container" data-sal="slide-right" data-sal-delay="500" data-sal-duration="1000">
                <Img className="featured-image" fluid={data.bleeprFeatured.childImageSharp.fluid}></Img>
              </div>
            </Col>
            <Col lg={4}>
              <div className="featured-card-container" data-sal="slide-left" data-sal-duration="1000">
                <div className="featured-card card">
                  <div className="project-tag">
                    <img src={Tag}></img>
                    <h3>PROJECT</h3>
                  </div>

                  <div className="featured-card-header">
                    <h3>Bleepr</h3>
                    <p>The Healthcare Social Network</p>
                    <div className="title-accent"></div>
                  </div>
                  <div className="featured-description">
                    <p>
                      Bleepr is a healthcare social network focussed on
                      revolutionising the way healthcare professionals interact
                      online outside of the workplace.
                    <br />
                      <br />
                    Bleepr takes a focus on research, connecting people
                    with similar work goals and interests. Providing them with
                    a platform through which they can connect, collaborate,
                    and grow as a collective hive of medical minds.
                  </p>
                  </div>

                  <div className={indexStyles.learnMore}>
                    <Link to={`/project/bleepr`}>
                      <p>Learn more</p>
                      <IoChevronDown></IoChevronDown>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </div>

          {/* Featured 2 */}
          <div className="row featured-container">
            <Col lg={4}>
              <div className="featured-card-container" data-sal="slide-right" data-sal-duration="1000">
                <div className="card featured-card reverse">
                  <div className="project-tag reverse">
                    <img src={Tag}></img>
                    <h3>YOUTUBE</h3>
                  </div>

                  <div className="featured-card-header">
                    <h3>Investing in CRISPR</h3>
                    <p>Should you invest in CRISPR technology</p>
                    <div className="title-accent"></div>
                  </div>
                  <div className="featured-description">
                    <p>
                      So today I want to talk about investing in CRISPR. CRISPR is a technology that can be used to edit genes and presents a plethora of possibilities in many industries.
                      <br /><br />But a particularly key area of opportunity for CRISPR is in healthcare. CRISPR gives you the ability to edit a person's genes, and so has the potential to cure a huge range of genetic conditions such as sickle cell anaemia, and could also revolutionise the way we treat cancer.
                    </p>
                  </div>
                  <div className={`${indexStyles.learnMore} ${indexStyles.youtube}`}>
                    <a href="https://youtu.be/iurulR5wxis" target="_blank">
                      <p>Watch on YouTube</p>
                      <IoLogoYoutube></IoLogoYoutube>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 'first' }} lg={{ span: 8, order: 'last' }} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="500">
              <div className={`featured-image-container reverse`}>
                <YoutubePreview fluidImage={data.crisprFeatured.childImageSharp.fluid} link="https://youtu.be/iurulR5wxis"></YoutubePreview>
              </div>
            </Col>
          </div>


          {/* Featured 3 */}
          <div className="row featured-container">
            <Col lg={8}>
              <div className="featured-image-container pixel-dr" data-sal="slide-right" data-sal-delay="500" data-sal-duration="1000">
                <Img className="featured-image" fluid={data.pixelDrFeatured.childImageSharp.fluid}></Img>
              </div>
            </Col>
            <Col lg={4}>
              <div className="featured-card-container" data-sal="slide-left" data-sal-duration="1000">
                <div className="featured-card card">
                  <div className="project-tag">
                    <img src={Tag}></img>
                    <h3>PROJECT</h3>
                  </div>

                  <div className="featured-card-header">
                    <h3>PixelDr</h3>
                    <p>Building a Medical Simulation Game</p>
                    <div className="title-accent"></div>
                  </div>
                  <div className="featured-description">
                    <p>
                      PixelDr is a 2D simulation game designed to recreate the experience of being a doctor in an emergency department in a realistic but gamified way.
                      <br /><br />
                      The main goal of the project was to avoid all guidance to an answer, which we often get in our medical training through single best answer exams. The game was developed using only open source technology and designed to run online or on a local device.

                  </p>
                  </div>

                  <div className={indexStyles.learnMore}>
                    <Link to={`/project/pixel-dr`}>
                      <p>Learn more</p>
                      <IoChevronDown></IoChevronDown>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </div>


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
          fluid(maxWidth: 590, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    pixelDrFeatured: file(relativePath: {eq: "pixeldr-game.png"})
    {
      childImageSharp {
          fluid(maxWidth: 590, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    crisprFeatured: file(relativePath: {eq: "investing-in-CRISPR.png"})
    {
      childImageSharp {
          fluid(maxWidth: 560, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`

export default HomePage


