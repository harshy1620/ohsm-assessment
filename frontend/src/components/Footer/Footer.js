import React from 'react'
import './Footer.css'
import {FooterData} from '../../data/data'
import fb from '../../assets/fb.png'
import insta from '../../assets/instagram.png'
import twit from '../../assets/twit.png'
import yt from '../../assets/yt.png'
import linkdin from '../../assets/linkdin.png'
import Store from '../../assets/Store.png'
import Badge from '../../assets/Badge.png'
import arrowRight from '../../assets/arrow-right.png';


const Footer = () => {
  return (
    <div className='footer-wrapper'>

        <div className='footer-part1'>

        {FooterData.map((Data, index) => (
          <div className='Footer-card' key={Data.id} >

          <div className='footertitle-wrapper'>
            <p className='footer-title'>{Data.title}</p>
            </div> 

            <ul className='footer-data'>
              {Data.array.map((element,index) => (
            
               <div className='footeritem-wrapper'>
                <li key={index} className='footer-items'>
                  {element=== "Accessibility" ? 
                    <p className='extra-button'>{element} <img  src={Badge} alt='beta' /></p> 
                    : element === "Request Demo" ? 
                      <p className='extra-button'>{element} <img  src={arrowRight} alt='right-arrow' /></p> 
                      : element
                  }
                </li>
                </div> 

              ))}
            </ul>
       
          </div>
        ))}
        </div>

        <div className='footer-part2'>
          <div className='copyright'>
            OHSM @ 2023
          </div>

          <div className='termsandpolicy'>
            <div className='boxes'><p>Terms of Service</p></div>
            <div className='boxes'><p>Privacy Policy</p></div>
            <div className='boxes'><p>Manange Cookies</p></div>
          </div>

          <div className='social-icons'>
            <div className='icon-div'><img src={yt} alt="youtubeicon" /></div>
            <div className='icon-div'><img src={fb} alt="facebookicon" /></div>
            <div className='icon-div'><img src={twit} alt="twittericon" /></div>
            <div className='icon-div'><img src={insta} alt="instagramicon"/></div>
            <div className='icon-div'><img src={linkdin} alt="linkdinicon" /></div>
          </div>

          <div className='playstorepics'>
              <img src={Store} alt="iconsofstore"/>
          </div>

        </div>
    </div>
  )
}

export default Footer