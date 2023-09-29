import React from 'react'
import qr from '../../assets/qr.png'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
  } from "react-share";
  import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
  } from "react-share";
const Qrshow = () => {
    return (
        <div className='section'>
            <h2 className='text-center my-10 text-4xl'>Here you GO!</h2>
            <div className="items-center justify-center flex img-qr">
                <img className="h-60 w-60 " src={qr} alt="qr" />
            </div>
            <div className="flex mt-4 justify-center items-center share">
            <EmailShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
            <FacebookShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        
    <LinkedinShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
    <TelegramShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
    <TwitterShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
    <WhatsappShareButton className="pr-3"
          url={qr}
          quote={'Vehicle details QR'}
          hashtag={'#qr'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        </div>
        </div>
    )
}

export default Qrshow