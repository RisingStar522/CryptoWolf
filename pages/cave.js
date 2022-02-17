import Head from 'next/head'
import LeftMenu from './template/leftmenu.js'
import RightDiv from './rightdiv.js'
// import Header from './template/header.js'
// import Dashboard from './pages/dashboard.js'
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {
  const data = "CAVE";
  return (
    <div>
      <Head>
        <link rel="icon" href="/title.png" />
        <title>CAVE | CryptoWolf</title>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
        <script src="/script.js"></script>
      </Head>
      <LeftMenu active={data} />
      <RightDiv main={data} />
    </div>
  )
}
