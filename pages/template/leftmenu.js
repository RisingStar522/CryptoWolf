import React, {useEffect, useState} from "react"
import Styles from "../../styles/leftmenu.module.css"
import Image from 'next/image'
import Link from 'next/link'

const handleURL = (param) =>{
    window.open(param, '_blank', 'noopener,noreferrer');
}
export default function LeftMenu(props) {
    const data = props.active;
    return (
        <div className="left_Bar">
            <a href="/">
                <div className={Styles.logo}>
                    <div className="logo_img">
                            <Image
                                priority
                                src="/images/logo-light.png"
                                height={22}
                                width={210}
                            />
                    </div>
                </div>
            </a>
            <ul className={Styles.welcome_ul}>
                <li className={Styles.welcome}>
                    <span className={Styles.welcome_span}>Welcome</span>
                    <p className={Styles.welcome_p}>to CryptoWolf</p>
                </li>
                <Link href="/">
                    <li className={data=="HOME"?`${Styles.home_li} active_a hover`:`${Styles.home_li} hover`}>
                        <span className={Styles.home_span}>
                            <svg className={Styles.home_svg} data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="rgba(107,114,128,1)" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                        </span>
                        <span className={Styles.home_text}>
                            HOME
                        </span>
                    </li>
                </Link>
                <li className={`${Styles.welcome} ${Styles.welcome_down}`}>
                    <span className={Styles.welcome_span}>Main Game</span>
                    <p className={Styles.welcome_p}>Play to Earn</p>
                </li>
                <Link href="/cave">
                    <li className={data=="CAVE"?`${Styles.home_li} active_a hover`:`${Styles.home_li} hover`}>
                        <span className={Styles.home_span}>
                            <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M18 50.8V28h-.1a2.9 2.9 0 0 0-2.9 2.9v12.2a2.9 2.9 0 0 1-2.5 2.9H9.9A2.9 2.9 0 0 0 7 48.9V60h5a10 10 0 0 1 6-9.2zM54.1 46h-2.6a2.9 2.9 0 0 1-2.5-2.9V30.9a2.9 2.9 0 0 0-2.9-2.9H46v22.8a10 10 0 0 1 6 9.2h5V48.9a2.9 2.9 0 0 0-2.9-2.9z"></path><path data-name="layer1" d="M22 50a10 10 0 0 1 10 10 10 10 0 0 1 10-10V21.8C42 10.9 32 4 32 4s-10 6.9-10 17.8V50zm10-30a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"></path></svg>
                        </span>
                        <span className={Styles.home_text}>
                            CAVE
                        </span>
                    </li>
                </Link>
                <li className={`${Styles.home_li}  hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M32 53.2l-24-10V51l24 10 24-10v-7.8l-24 10z"></path><path data-name="layer2" d="M56 38.8v-5.6l-24 10-24-10v5.6l24 10 24-10z"></path><path data-name="layer2" d="M8 23.2v5.6l24 10 24-10v-5.6l-24 10-24-10z"></path><path data-name="layer1" d="M32 28.8l24-10V3H8v15.8l24 10z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WOLF
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        BOX
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`}>
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
                <li className={`${Styles.home_li}  hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M47 7a16 16 0 1 0 16 16A16 16 0 0 0 47 7zm8 18h-6v6a2 2 0 1 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 1 1 4 0v6h6a2 2 0 0 1 0 4z"></path><circle data-name="layer2" cx="21" cy="55" r="4"></circle><circle data-name="layer2" cx="47" cy="55" r="4"></circle><path data-name="layer1" d="M47 43a20 20 0 0 1-20-20H16.8L12.9 6.5A2 2 0 0 0 11 5H3a2 2 0 0 0 0 4h6.4l9 38h33l1.6-4.9a20 20 0 0 1-6 .9z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        CAVES
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} fill="rgb(107, 114, 128)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img"><path data-name="layer2" d="M47 7a16 16 0 1 0 16 16A16 16 0 0 0 47 7zm8 18h-6v6a2 2 0 1 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 1 1 4 0v6h6a2 2 0 0 1 0 4z"></path><circle data-name="layer2" cx="21" cy="55" r="4"></circle><circle data-name="layer2" cx="47" cy="55" r="4"></circle><path data-name="layer1" d="M47 43a20 20 0 0 1-20-20H16.8L12.9 6.5A2 2 0 0 0 11 5H3a2 2 0 0 0 0 4h6.4l9 38h33l1.6-4.9a20 20 0 0 1-6 .9z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WOLVES
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`}>
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
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://cryptowolf.gitbook.io/info/tokenomics/informacion-del-token")}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    <span className={Styles.home_text}>
                        WHITERPAPER
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://cryptowolf.gitbook.io/info/tokenomics/informacion-del-token")}>
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
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://exchange.biswap.org/#/swap?outputCurrency=0xD44FD09d74cd13838F137B590497595d6b3FEeA4")}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        BISWAP
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xD44FD09d74cd13838F137B590497595d6b3FEeA4")}>
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
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://t.me/cryptowolfapp")}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    <span className={Styles.home_text}>
                        TELEGRAM
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://twitter.com/cryptowolfapp")}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        TWITTER
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </span>
                    <span className={Styles.home_text}>
                        DISCORD
                    </span>
                </li>
                <li className={`${Styles.home_li}  hover`} onClick={()=>handleURL("https://www.instagram.com/cryptowolfapp")}>
                    <span className={Styles.home_span}>
                        <svg className={Styles.home_svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </span>
                    <span className={Styles.home_text}>
                        INSTAGRAM
                    </span>
                </li>
            </ul>
        </div>
    )
}