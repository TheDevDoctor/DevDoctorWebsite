import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'gatsby'

import DevDocLogo from '../assets/images/dev-doc-logo.png'

import headerStyles from './header.module.scss'

import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoGithub, IoMenu } from "react-icons/io5";



const Header = () => (
    <header>
        <Container>
            <Navbar expand="md" variant="dark">
                {/* <Navbar.Brand href="/">The Dev Doctor</Navbar.Brand> */}
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src={DevDocLogo}
                            height="30px"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" className={headerStyles.navbarToggle}>
                    <IoMenu className={headerStyles.menuIcon}></IoMenu>
                </Navbar.Toggle>
                <Navbar.Collapse className={headerStyles.navbarResponsive} id="navbarResponsive">
                    <Nav as="ul" className="ml-auto">
                        <Nav.Item as="li">
                            <Link to="/about" className={headerStyles.navCustom} activeClassName={headerStyles.active}>about</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/portfolio" className={headerStyles.navCustom} activeClassName={headerStyles.active}>portfolio</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/blog" className={headerStyles.navCustom} activeClassName={headerStyles.active}>blog</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/youtube" className={headerStyles.navCustom} activeClassName={headerStyles.active}>youtube</Link>
                        </Nav.Item>

                        <ul className={headerStyles.socialIcons + ' d-none d-lg-flex'}>
                            <li>
                                <a href="https://www.instagram.com/thedevdoctor/" target="_blank"><IoLogoInstagram className={headerStyles.socialIcon} /></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/TheDevDoctor" target="_blank"><IoLogoTwitter className={headerStyles.socialIcon} /></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCWm6kHjTBaX4clFVXJCoD4A" target="_blank"><IoLogoYoutube className={headerStyles.socialIcon} /></a>
                            </li>
                            <li>
                                <a href="https://github.com/TheDevDoctor" target="_blank"><IoLogoGithub className={headerStyles.socialIcon} /></a>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
)


export default Header