import React from 'react'

import heroStyles from './main-hero-section.module.scss'

import { Link } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'

import devFace from '../assets/images/dev-face.png'
import docFace from '../assets/images/doc-face.png'

const HeroComponent = () => {

    // const designerStyle = {
    //     left: '135px',
    //     opacity: 1,
    //     width: '420px'
    // }
    // const coderStyle = {
    //     right: '135px',
    //     opacity: 1,
    //     width: '420px'
    // }

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
                            <img src={devFace} data-sal="slide-right" data-sal-duration="1000" />

                            <Link to="/about">
                                <div id="designer" className={heroStyles.designerText} style={designerTextStyle}>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.left}`} data-sal="fade" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease">
                                        <h1 className={`${heroStyles.jobTitle} ${heroStyles.dev}`} >{`<`}<span style={{fontWeight: 'bolder'}}>dev</span>{`>`}</h1>
                                        <p className={heroStyles.jobDescription}>Developer focussing on creating efficient and beautiful health technology platforms</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className={heroStyles.docContainer}>
                            <img src={docFace} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="250"/>

                            <Link to="/portfolio">
                                <div id="designer" className={ heroStyles.devText }>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.right}`} data-sal="fade" data-sal-duration="1000" data-sal-delay="500" data-sal-easing="ease">
                                        <h1 className={`${heroStyles.jobTitle}`}>doctor</h1>
                                        <p className={ heroStyles.jobDescription }>Emergency department doctor working in London for the UK's National Health Service</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
                {/* <div className="row">
                    <div className="col-12">
                        <div id="face" className={heroStyles.face}>


                            <Link to="/about">
                                <div id="designer" className={ heroStyles.designerText } style={ designerTextStyle }>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.left}`}>
                                        <h1 className={ `${heroStyles.jobTitle} ${heroStyles.dev}`} >{ `<` }<span>dev</span>{ `>` }</h1>
                                        <p className={ heroStyles.jobDescription }>Developer focussing on creating efficient and beautiful health technology platforms</p>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link to="/portfolio">
                                <div id="designer" className={ heroStyles.devText } style={ designerTextStyle }>
                                    <div id="designer-desc" className={`${heroStyles.description} ${heroStyles.right}`}>
                                        <h1 className={`${heroStyles.jobTitle}`}>doctor</h1>
                                        <p className={ heroStyles.jobDescription }>Emergency department doctor working in London for the UK's National Health Service</p>
                                    </div>
                                </div>
                            </Link>

                            <div id="designer-img" className={`${heroStyles.faceImg} ${heroStyles.designerImg}`}></div>
                            <div id="coder-img" className={`${heroStyles.faceImg} ${heroStyles.coderImg}`}></div>

                            {/* style="left: 100px; opacity: 1; width: 420px;" </div></div></div> */}
            </Container>
        </section>
    )
}

export default HeroComponent