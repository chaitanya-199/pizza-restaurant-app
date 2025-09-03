import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'> 
    <div className='socialMedia'>
 <InstagramIcon /> <XIcon /> <FacebookIcon /> <WhatsAppIcon />
      <p> &copy; 2023 zomino'spizza.com</p>
    </div>
    </div>
  )
}

export default Footer