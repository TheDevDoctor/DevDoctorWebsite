import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { InputGroup, FormControl, Button, Form, Spinner } from 'react-bootstrap'
// import { Link, graphql, useStaticQuery } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import footerStyles from './footer.module.scss'

import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoGithub } from "react-icons/io5";

class Footer extends React.Component {
    state = {
        email: '',
        sendingSub: false,
        subSuccess: 0,
    }

    handleInputChange = event => {
        console.log(event)
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })

    }

    _handleSubmit = async (e) => {
        this.setState({ sendingSub: true })
        this.setState({ subSuccess: 0 })
        e.preventDefault();
        const result = await addToMailchimp(this.state.email)

        this.setState({ sendingSub: false })

        if (result.result === 'success') {
            this.setState({ subSuccess: 1 })
        } else {
            this.setState({ subSuccess: 2 })
        }
    }


    render() {

        return (

            <footer>
                <div className={footerStyles.newsLetterContainer}>
                    <div className={`${footerStyles.newsletterCard} card`}>
                        <h4>NEWSLETTER</h4>
                        <div className={`title-accent ${footerStyles.accent}`}></div>
                        <p>
                            If you want to get instant updates of all my work, as well as a fortnightly newsletter, then subscribe with your email below.
                    </p>
                        {this.state.subSuccess === 2 && <p className={footerStyles.wentWrong}>Oh no! Something went wrong. Give it another try.</p>}
                        {this.state.subSuccess !== 1 ?
                        <Form onSubmit={this._handleSubmit} className={footerStyles.form}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    aria-describedby="basic-addon2"
                                    className={footerStyles.email}
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                                <InputGroup.Append>
                                    <Button variant="primary" className={footerStyles.subscribe} type="submit">

                                        {!this.state.sendingSub ? 'SUBSCRIBE' : <Spinner
                                            as="span"
                                            animation="grow"
                                            size="md"
                                            role="status"
                                            aria-hidden="true"
                                        />}

                                    </Button>

                                </InputGroup.Append>
                            </InputGroup>
                        </Form> : 
                        <h4 style={{ color: '#7e61f6' }}>
                            Success! Thank you for subscribing.
                        </h4> }
                    </div>
                </div>
                <Navbar expand="md" variant="dark" sticky="bottom" className={footerStyles.footer}>

                    <Container>
                        <Navbar.Collapse>

                            <Navbar.Brand className={footerStyles.createdBy}>Site created by Dr Matthew Stubbs, © 2021</Navbar.Brand>

                        </Navbar.Collapse>

                        <Nav as="ul" className={`${footerStyles.socialButtons}  ml-auto`}>
                            <Nav.Item as="li">
                                <a href="https://www.instagram.com/thedevdoctor/" target="_blank" className={`${footerStyles.socialButton} btn btn-dark`}><IoLogoInstagram className={footerStyles.socialIcon} /></a>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <a href="https://twitter.com/TheDevDoctor" target="_blank" className={`${footerStyles.socialButton} btn btn-dark`}><IoLogoTwitter className={footerStyles.socialIcon} /></a>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <a href="https://www.youtube.com/channel/UCWm6kHjTBaX4clFVXJCoD4A" target="_blank" className={`${footerStyles.socialButton} btn btn-dark`}><IoLogoYoutube className={footerStyles.socialIcon} /></a>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <a href="https://github.com/TheDevDoctor" target="_blank" className={`${footerStyles.socialButton} btn btn-dark`}><IoLogoGithub className={footerStyles.socialIcon} /></a>
                            </Nav.Item>
                        </Nav>
                    </Container>


                </Navbar>
            </footer>

        )
    }
}

export default Footer