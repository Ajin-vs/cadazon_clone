import Logo from "../logo/Logo";
import Search from "../search/Search";
function Header(){
    return(
        <div className="p-3 d-flex justify-content-between">
           <Logo/>
           <Search/>
        </div>
    )
}

export default Header;