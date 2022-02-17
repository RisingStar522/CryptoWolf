import Header from './template/header'
import Dashboard from './pages/dashboard'

export default function RightDiv(props) {
    const data = props.main;
    return(
        <div className="right_content">
            <div className="header"><Header /></div>
            <div className="main"><Dashboard main={data}/></div>
        </div>
    )
}