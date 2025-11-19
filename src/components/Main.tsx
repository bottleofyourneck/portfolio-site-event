import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
//import LinkedInIcon from '../assets/images/vk.svg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="first-container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/profile-pic.png')}/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://t.me/daniildolgopolov" target="_blank" rel="noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24">
<path d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4
	c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8
	C17,6.9,17.4,7.1,17.1,7.4z"/>
</svg>
            </a>
            <a href="https://vk.com/daniildolgopolov" target="_blank" rel="noreferrer">
            <svg width="36" height="36" viewBox="0 0 48 48" id="lol">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.37413 3.37413C0 6.74826 0 12.1788 0 23.04V24.96C0 35.8212 0 41.2517 3.37413 44.6259C6.74826 48 12.1788 48 23.04 48H24.96C35.8212 48 41.2517 48 44.6259 44.6259C48 41.2517 48 35.8212 48 24.96V23.04C48 12.1788 48 6.74826 44.6259 3.37413C41.2517 0 35.8212 0 24.96 0H23.04C12.1788 0 6.74826 0 3.37413 3.37413ZM8.10012 14.6001C8.36012 27.0801 14.6001 34.5801 25.5401 34.5801H26.1602V27.4401C30.1802 27.8401 33.22 30.7801 34.44 34.5801H40.1201C38.5601 28.9001 34.4599 25.7601 31.8999 24.5601C34.4599 23.0801 38.0599 19.4801 38.9199 14.6001H33.7598C32.6398 18.5601 29.3202 22.1601 26.1602 22.5001V14.6001H21V28.4401C17.8 27.6401 13.7601 23.7601 13.5801 14.6001H8.10012Z"/>
</svg>
            </a>
          </div>
          <h1>Даниил Долгополов</h1>
          <p>Руководитель проектов</p>
          <p>Организатор мероприятий</p>

          <div className="mobile_social_icons">
            <a href="https://t.me/daniildolgopolov" target="_blank" rel="noreferrer">
              <svg width="40" height="40" viewBox="0 0 24 24">
<path d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4
	c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8
	C17,6.9,17.4,7.1,17.1,7.4z"/>
</svg>
            </a>
            <a href="https://vk.com/daniildolgopolov" target="_blank" rel="noreferrer">
            <svg width="36" height="36" viewBox="0 0 48 48" id="lol">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.37413 3.37413C0 6.74826 0 12.1788 0 23.04V24.96C0 35.8212 0 41.2517 3.37413 44.6259C6.74826 48 12.1788 48 23.04 48H24.96C35.8212 48 41.2517 48 44.6259 44.6259C48 41.2517 48 35.8212 48 24.96V23.04C48 12.1788 48 6.74826 44.6259 3.37413C41.2517 0 35.8212 0 24.96 0H23.04C12.1788 0 6.74826 0 3.37413 3.37413ZM8.10012 14.6001C8.36012 27.0801 14.6001 34.5801 25.5401 34.5801H26.1602V27.4401C30.1802 27.8401 33.22 30.7801 34.44 34.5801H40.1201C38.5601 28.9001 34.4599 25.7601 31.8999 24.5601C34.4599 23.0801 38.0599 19.4801 38.9199 14.6001H33.7598C32.6398 18.5601 29.3202 22.1601 26.1602 22.5001V14.6001H21V28.4401C17.8 27.6401 13.7601 23.7601 13.5801 14.6001H8.10012Z"/>
</svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;