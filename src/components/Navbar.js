import "../styles/components/Navbar.scss"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" ><img src="/images/portfolio-logo.png" style={{width: "180px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-7 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Get in touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}