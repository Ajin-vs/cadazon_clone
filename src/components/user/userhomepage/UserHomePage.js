import PanelHeader from '../panelheader/PanelHeader'
import Header from '../header/Header'
import Category from '../category/Category'
import Carousel from '../carousel/Carousel'
import Offers from '../offers/Offers'
import AllCategories from '../allcategories/AllCategories'
import Footer from '../footer/Footer'
import {BrowserRouter, Switch, Route , Redirect} from 'react-router-dom'
import CreateAccount from '../createaccount/CreateAccount'
function UserHomePage(){
    return(
        <BrowserRouter>
            <div>
                <PanelHeader/>
                <Header/>
                <Category/>
                <div className="p-4">
                    <Switch>
                        <Route  path="/home">
                            <Carousel/>
                            <Offers/>
                            <AllCategories/>
                        </Route>
                        <Route path="/createaccount">
                            <CreateAccount/>
                        </Route>
                        <Route path="/">
                            <Redirect to="/home"/>
                        </Route>
                        
                    </Switch>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default UserHomePage