import access from '../../../images/Accessories.jpg'
import serv from '../../../images/Services.jpg'
import supp from '../../../images/Supplements.jpg'
import train from '../../../images/Training.jpg'
import home from '../../../images/Home.jpg'

function AllCategories(){
    return(

        <div>
            <h3 className="text-center mt-5 display-5">Our Category</h3>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-3 row-cols-sm-1 text-center">
                
                <div className="col mt-2 ">
                    <img src={access} alt=""/>
                </div>

                <div className="col mt-2">
                    <img src={serv}/>
                </div>

                <div className="col">
                    <img src={supp}/>
                </div>

                <div className="col mt-2">
                    <img src={home}/>
                </div>

                <div className="col mt-2">
                    <img src={train}/>
                </div>

                <div>

                </div>
            </div>

            <div className="text-center mt-5">
                <h2>Hot Sellers</h2>
                <hr/>
                <p>Here is what`s trending on CADAZON right now</p>
            </div>
        </div>

    )
}

export default AllCategories;