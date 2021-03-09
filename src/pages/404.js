import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img from 'gatsby-image';

import styles from '../styles/404.module.scss'
import { Link } from 'gatsby';
import { IoHome } from 'react-icons/io5';

const fourOfour = ({ data }) => {


    return (
        <Container className={styles.fourofourContainer}>
            <Row className={`${styles.fourofourRow} align-items-center`}>
                <Col lg={7} className={styles.imageCont}>
                    <Img fluid={data.ripImage.childImageSharp.fluid} className={styles.ripImage}></Img>
                </Col>
                <Col lg={5}>
                    <div className={styles.textContainer}>
                        <h1>404<span className="fullstop-highlight">.</span></h1>
                        <h4>Oh no. It looks like you broke the internet.</h4>
                        <p>We couldn't find that link. There's two possibilities; either we broke something, or you can't type.</p>
                        <p>Press the button to return to the home page.</p>
                        <div className={styles.buttonContainer}>
                            <Link to="/" target="_blank" className={`${styles.socialButton} btn btn-dark`}><IoHome className={styles.socialIcon} />Home</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export const query = graphql`
  query {
    ripImage: file(relativePath: {eq: "404-page-rip.png"})
      {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default fourOfour