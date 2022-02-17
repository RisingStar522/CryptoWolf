import React, {useState} from "react"
import HStyles from "../../styles/header.module.css"
import Styles from "../../styles/leftmenu.module.css"
import Image from 'next/image'
import Dashboard from "../pages/dashboard"

const openLeftMenu = () =>{
  document.getElementById("leftMenu").style.display = "block";
}
const closeLeftMenu = () =>{
  document.getElementById("leftMenu").style.display = "none";
}
const openRightMenu = () =>{
  document.getElementById("rightMenu").style.display = "block";
}
const closeRightMenu = () =>{
  document.getElementById("rightMenu").style.display = "none";
}
const handleSentUrl = (param) =>{
    window.open(param, '_blank', 'noopener,noreferrer');
}

export default function Header() {
    const [play, setPlay] = useState(false);
    return (
      <div className="header">
        <div className={HStyles.header_Top}>
          <div className={HStyles.left_div}>
            <button className={`${HStyles.play_btn} tooltip1`}>
              <svg onClick={() => setPlay(true)} xmlns="http://www.w3.org/2000/svg" className={play?"displayNone":"h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
              <svg onClick={() => setPlay(false)} xmlns="http://www.w3.org/2000/svg" className={play?"h-5 w-5":"displayNone"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd"></path></svg>
              {play?<span className="tooltiptext1">Stop videos</span>:<span className="tooltiptext1">Play videos</span>}
            </button>
            <button className={HStyles.create_fleet}>
              <svg className="w-[20px] h-[20px]" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="black" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></svg>
              Create Cave
            </button>
          </div>
          <div className={HStyles.right_div}>
            <div className={ HStyles.etl}>
              <img src="/title.png" alt="img" style={{width:"26px", height:"35px", float:"left", marginTop:"10px", marginRight:"12px"}} />
              <p className={HStyles.etl_txt}>0$ CWOLF<br />...</p>
            </div>
            <button className={`${HStyles.claim} tooltips`} disabled>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd"></path></svg>
              Claim 0 $CRYPTOWOLF
              <span className="tooltiptext">Claim 0 $CRYPTOWOLF<br/>You'll be penalized with 0%(Tax is reduced 2% per day) for early claim</span>
            </button>
            <button className={HStyles.eternal} onClick={()=>handleSentUrl("https://exchange.biswap.org/#/swap?outputCurrency=0xD44FD09d74cd13838F137B590497595d6b3FEeA4")}>
              <svg viewBox="0 0 55 55" fill="none" className="w-5" xmlns="http://www.w3.org/2000/svg"><path d="M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z" fill="white"></path><path d="M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z" fill="url(#paint0_linear)"></path><path d="M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z" fill="url(#paint1_linear)"></path><defs><linearGradient id="paint0_linear" x1="43.3371" y1="17.2788" x2="36.9491" y2="52.4708" gradientUnits="userSpaceOnUse"><stop stopColor="#FF496A"></stop><stop offset="1" stopColor="#E42648"></stop></linearGradient><linearGradient id="paint1_linear" x1="13.0692" y1="39.8859" x2="27.193" y2="-1.0612e-05" gradientUnits="userSpaceOnUse"><stop offset="0.00181229" stopColor="#1158F1"></stop><stop offset="1" stopColor="#119BED"></stop></linearGradient></defs></svg>
              Buy $CRYPTOWOLF
            </button>
          </div>
        </div>
        <div className="mobile_header">
          <div className={HStyles.logoM}>
            <Image
              priority
              src="/images/logo-light.png"
              height={22}
              width={210}
            />
          </div>
          <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}} id="leftMenu">
            <button onClick={closeLeftMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
            <ul className={Styles.welcome_ul}>
                <li className={Styles.welcome}>
                    <span className={Styles.welcome_span}>Welcome</span>
                    <p className={Styles.welcome_p}>to CryptoWolf</p>
                </li>
                <li className={`${Styles.home_li} active_a hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="rgba(107,114,128,1)" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        HOME
                    </span>
                </li>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Main Game</span>
                    <p className={Styles.welcome_p}>Play to Earn</p>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M18 50.8V28h-.1a2.9 2.9 0 0 0-2.9 2.9v12.2a2.9 2.9 0 0 1-2.5 2.9H9.9A2.9 2.9 0 0 0 7 48.9V60h5a10 10 0 0 1 6-9.2zM54.1 46h-2.6a2.9 2.9 0 0 1-2.5-2.9V30.9a2.9 2.9 0 0 0-2.9-2.9H46v22.8a10 10 0 0 1 6 9.2h5V48.9a2.9 2.9 0 0 0-2.9-2.9z"></path><path data-name="layer1" d="M22 50a10 10 0 0 1 10 10 10 10 0 0 1 10-10V21.8C42 10.9 32 4 32 4s-10 6.9-10 17.8V50zm10-30a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        CAVE
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M32 53.2l-24-10V51l24 10 24-10v-7.8l-24 10z"></path><path data-name="layer2" d="M56 38.8v-5.6l-24 10-24-10v5.6l24 10 24-10z"></path><path data-name="layer2" d="M8 23.2v5.6l24 10 24-10v-5.6l-24 10-24-10z"></path><path data-name="layer1" d="M32 28.8l24-10V3H8v15.8l24 10z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WOLF
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        BOX
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        RAIDS
                    </span>
                </li>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Marketplace</span>
                    <p className={Styles.welcome_p}>Buy & Sell your NETs</p>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M47 7a16 16 0 1 0 16 16A16 16 0 0 0 47 7zm8 18h-6v6a2 2 0 1 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 1 1 4 0v6h6a2 2 0 0 1 0 4z"></path><circle data-name="layer2" cx="21" cy="55" r="4"></circle><circle data-name="layer2" cx="47" cy="55" r="4"></circle><path data-name="layer1" d="M47 43a20 20 0 0 1-20-20H16.8L12.9 6.5A2 2 0 0 0 11 5H3a2 2 0 0 0 0 4h6.4l9 38h33l1.6-4.9a20 20 0 0 1-6 .9z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        CAVES
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M47 7a16 16 0 1 0 16 16A16 16 0 0 0 47 7zm8 18h-6v6a2 2 0 1 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 1 1 4 0v6h6a2 2 0 0 1 0 4z"></path><circle data-name="layer2" cx="21" cy="55" r="4"></circle><circle data-name="layer2" cx="47" cy="55" r="4"></circle><path data-name="layer1" d="M47 43a20 20 0 0 1-20-20H16.8L12.9 6.5A2 2 0 0 0 11 5H3a2 2 0 0 0 0 4h6.4l9 38h33l1.6-4.9a20 20 0 0 1-6 .9z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WOLVES
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        BOXES
                    </span>
                </li>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Educate</span>
                    <p className={Styles.welcome_p}>Learn how to play</p>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WHITERPAPER
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    <span className={Styles.home_text}>
                        Whitepaper Español
                    </span>
                </li>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Get $CryptoWOLF</span>
                    <p className={Styles.welcome_p}>With Another Cryptocurrencies</p>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        BISWAP
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        PANCAKESWAP
                    </span>
                </li>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Get Social</span>
                    <p className={Styles.welcome_p}>Talk with us and other players</p>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    <span className={Styles.home_text}>
                        TELEGRAM
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        TWITTER
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        DISCORD
                    </span>
                </li>
                <li className={`${Styles.home_li} hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </span>
                    <span className={Styles.home_text}>
                        INSTAGRAM
                    </span>
                </li>
            </ul>
          </div>
          <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display:"none",right:0}} id="rightMenu">
            <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
            <div className={HStyles.MHeader}>
                <div className={HStyles.left_div} style={{marginLeft:"80px"}}>
                    <button className={HStyles.play_btn}>
                        <svg onClick={() => setPlay(true)} xmlns="http://www.w3.org/2000/svg" className={play?"displayNone":"h-5 w-5"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                        <svg onClick={() => setPlay(false)} xmlns="http://www.w3.org/2000/svg" className={play?"h-5 w-5":"displayNone"} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd"></path></svg>
                        {/* {play?<span className="tooltiptext1">Stop videos</span>:<span className="tooltiptext1">Play videos</span>} */}
                    </button>
                    <button className={HStyles.create_fleet}>
                        <svg className="w-[20px] h-[20px]" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="black" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></svg>
                        Create Cave
                    </button>
                </div>
                <div className={HStyles.right_div}>
                <div className={ HStyles.etl}>
                    <img src="/title.png" alt="img" style={{width:"26px", height:"35px", float:"left", marginTop:"10px", marginRight:"12px"}} />
                    <p className={HStyles.etl_txt}>0$ CWOLF<br />...</p>
                </div>
                <button className={HStyles.claim} disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd"></path></svg>
                    Claim 0 $CRYPTOWOLF
                    {/* <span className="tooltiptext">Claim 0 $CRYPTOWOLF<br/>You'll be penalized with 0%(Tax is reduced 2% per day) for early claim</span> */}
                </button>
                <button className={HStyles.eternal}>
                    Buy $CRYPTOWOLF
                </button>
                </div>
            </div>
          </div>
          <button class="w3-button w3-teals w3-xlarge w3-right" onClick={openRightMenu}>&#9776;</button>
          <div className="w3-teal">
            <button className="w3-button w3-xlarge w3-left" onClick={openLeftMenu}>&#9776;</button>
          </div>
        </div>
      </div>
    )
  }