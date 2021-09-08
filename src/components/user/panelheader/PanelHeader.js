 import './panelheader.css'
 import {Link} from 'react-router-dom'
 const PanelHeader=()=>{
    return(
        <div className=" bg-secondary p-2 panelheader">
            <div className="text-end text-white">
                <span className="ms-2">Welcome to Cadazone.com!</span>
                <a href="#" className="ms-2 list-style-none"> Sell</a>
                <a href="#" className="ms-2"> Vendor Dashboard</a>
                <a href="#" className="ms-2">Sign In</a>
                <span className="ms-2">or</span>
                <Link to="/createaccount" className="ms-2">Create an Account</Link>
            </div>
        </div>
    )
}

export default PanelHeader;