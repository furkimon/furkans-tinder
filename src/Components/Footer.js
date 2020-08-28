import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton";

import '../Assets/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <IconButton className="footer__replay">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="footer__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="footer__super">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="footer__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="footer__boost">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Footer
