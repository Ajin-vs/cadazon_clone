 import './panelheader.css'
 const PanelHeader=()=>{
    return(
        <div className=" bg-secondary p-2 panelheader">
            <div className="text-end text-white">
                <span className="ms-2">Welcome to Cadazone.com!</span>
                <a href="#" className="ms-2 list-style-none"> Sell</a>
                <a href="#" className="ms-2"> Vendor Dashboard</a>
                <a href="#" className="ms-2">Sign In</a>
                <span className="ms-2">or</span>
                <a href="#" className="ms-2">Create an Account</a>
            </div>
        </div>
    )
}

export default PanelHeader;