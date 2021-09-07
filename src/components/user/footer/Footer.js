function Footer(){
    return(
        <div className="row row-cols bg-secondary p-3">
            <div className="col col-3">
                <p className="text-decoration-underline">Registered Office Address</p>
                <p>Cadazon Private Limited</p>
                <p>Velletheri, 15/153, Shop No 3, Medical College Road,
                    Mundathicode West, Thrissur, Kerala - 680623, India
                    CIN:U74999KL2017PTC050903</p>
            </div>
            <div className="col d-flex flex-column">
            <a href="#" className="text-dark mb-2"> Privacy Policy</a>
            <a href="#" className="text-dark mb-2"> Orders and Returns</a>
            <a href="#" className="text-dark mb-2"> Contact Us</a>
            <a href="#" className="text-dark mb-2"> Advanced Search</a>
            <a href="#" className="text-dark mb-2"> Sell</a>
            <a href="#" className="text-dark mb-2"> Vendor Login</a>
            </div>
        </div>
    )
}

export default Footer;