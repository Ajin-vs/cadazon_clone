import './category.css'
function Category() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  mt-2 p-1">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-dark text-decoration-none" aria-current="page" href="#">CADAZTEL DUMBBLLES</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Category;