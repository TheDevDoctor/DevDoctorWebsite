// Frameworks
import React from 'react'
import { IoLogoYoutube } from "react-icons/io5";

import BackgroundImage from 'gatsby-background-image'

// Styles
import youtubeStyles from './youtube-preview-card.module.scss'

// Images
import PlayButton from '../assets/images/play-button.png'

const YoutubePreview = (props) => {
    return (
        <a href={props.link} target="_blank">
            <div className={youtubeStyles.cardContainer}>
                <BackgroundImage className={`card ${youtubeStyles.youtubeCard}`} fluid={props.fluidImage}></BackgroundImage>
                <IoLogoYoutube className={youtubeStyles.logoYoutube}></IoLogoYoutube>

            </div>
        </a>

    )
}

export default YoutubePreview
