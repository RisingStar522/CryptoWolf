import DStyles from "../../styles/dashboard.module.css"
import Image from 'next/image'
import img1 from '../../public/images/4.jpg'

export default function Dashboard(props) {
    const data = props.main;
    return(
        <>
        {data=="HOME"?<div>
            <div className={`${DStyles.text_drop} w3-animate-top`}>
                <button className={DStyles.warning}>
                    <svg className="text-red-500 fill-current" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="rgba(239,68,68,1)" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                </button>
                <span className={DStyles.warning_letter}>
                <b>Please Use MetaMask Or Any Other Web3 Wallet To Use CryptoWOLF</b><br/> <p style={{paddingLeft:"68px"}}>CryptoWOLF is a decentralized play to earn game and therefore we need you to use any Web3 Wallet (MetaMask, OKEx Wallet, etc) to connect your browser to the Blockchain.</p>
                </span>
            </div>
            <div className="row game_div">
                <div className="col-lg-4 col-md-12 position">
                    <img src="/images/4.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" className="w-8 h-8 fill-current text-gray-500"><path data-name="layer2" d="M18 50.8V28h-.1a2.9 2.9 0 0 0-2.9 2.9v12.2a2.9 2.9 0 0 1-2.5 2.9H9.9A2.9 2.9 0 0 0 7 48.9V60h5a10 10 0 0 1 6-9.2zM54.1 46h-2.6a2.9 2.9 0 0 1-2.5-2.9V30.9a2.9 2.9 0 0 0-2.9-2.9H46v22.8a10 10 0 0 1 6 9.2h5V48.9a2.9 2.9 0 0 0-2.9-2.9z"></path><path data-name="layer1" d="M22 50a10 10 0 0 1 10 10 10 10 0 0 1 10-10V21.8C42 10.9 32 4 32 4s-10 6.9-10 17.8V50zm10-30a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"></path></svg>
                    </button>
                </div>
                <div className="col-lg-4 col-md-12 position MG_top">
                    <img src="/images/2.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" className="w-8 h-8 fill-current text-gray-500"><path data-name="layer2" d="M32 53.2l-24-10V51l24 10 24-10v-7.8l-24 10z"></path><path data-name="layer2" d="M56 38.8v-5.6l-24 10-24-10v5.6l24 10 24-10z"></path><path data-name="layer2" d="M8 23.2v5.6l24 10 24-10v-5.6l-24 10-24-10z"></path><path data-name="layer1" d="M32 28.8l24-10V3H8v15.8l24 10z"></path></svg>
                    </button>
                </div>
                <div className="col-lg-4 col-md-12 position MG_top">
                    <img src="/images/3.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 458.758 458.758" className="w-8 h-8 fill-current text-gray-500"><path d="M448.189 10.579c-11.9-11.9-30.2-13.8-54.3-5.5-10.6 3.6-22.6 9.2-36.1 16.8-8.1 4.6-16.8 9.8-25.8 15.8-2.4 1.6-4.8 3.2-7.3 4.9 13.8 7 26.7 15.5 38.6 25.5 2.8-1.7 5.4-3.4 8-4.9 22.8-13.6 37.1-18.8 44.6-20.3-2 10.1-10.7 32.8-37.9 72-2.2 3.1-4.4 6.3-6.7 9.5-5.1-6.9-10.8-13.6-17.1-19.8-68.9-68.9-180.7-68.9-249.6 0s-68.9 180.7 0 249.6c6.3 6.3 12.9 12 19.8 17.1-3.2 2.3-6.4 4.5-9.5 6.7-39.2 27.1-61.9 35.9-72 37.9 1.2-6.1 4.9-17 13.8-33.4 3.1-5.7 6.8-12.1 11.3-19.2-9.9-11.9-18.4-24.8-25.5-38.6-1.7 2.4-3.3 4.9-4.9 7.3-8.3 12.6-15.2 24.3-20.7 35-5.1 9.8-9 18.8-11.8 26.9-8.2 24.1-6.4 42.4 5.5 54.3s30.2 13.8 54.3 5.5c17-5.8 37.8-16.8 61.9-32.6 47.6-31.3 104.4-79 159.8-134.4s103.2-112.2 134.4-159.8c15.8-24.1 26.8-44.9 32.6-61.9 8.3-24.2 6.5-42.4-5.4-54.4zm-344.3 235.6c-9.3 0-16.8-7.5-16.8-16.8 0-38.2 14.9-74.2 41.9-101.2 6.6-6.6 17.2-6.6 23.8 0 6.6 6.6 6.6 17.2 0 23.8-20.7 20.7-32.1 48.2-32.1 77.4.1 9.3-7.5 16.8-16.8 16.8zM310.189 310.179c-35 35-70.6 67-104.3 94.1 52.6 7 107.9-9.7 148.3-50.1 40.5-40.5 57.2-95.7 50.1-148.3-27.1 33.7-59.1 69.3-94.1 104.3z"></path></svg>
                    </button>
                </div>
            </div></div>
            :data=="CAVE"?<h1>CAVE</h1>:""}
        </>
    )
}