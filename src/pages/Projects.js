import { Link } from "react-router-dom"

export default function Projects() {
    return (
    <div>
        <h1>Projects</h1>
        <div className="projects-container">
            <div class="container project-container">
                <div class="row justify-content-center">
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">English in Eight Minutes</h5>
                                <p className="card-text">So this is how it started. 
                                I was building a English teaching website with the help of some students.
                                I quickly became fascinated with coding and next realized I had found my
                                first real professinal passion.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <Link to={{ pathname: "https://english-in-eight-minutes.web.app/" }} target="_blank" >
                            <img src="../../images/english-in-eight.png" className="english-in-eight-image" />
                        </Link>
                    </div> 
                </div>
            </div>
            <div class="container project-container container-margin">
                <div class="row">
                    <div class="col-8">
                    <Link to={{ pathname: "https://dietrich-landcare.web.app/" }} target="_blank" >
                            <img src="../../images/dietrich-landcare.png" />
                    </Link>
                    </div>
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Dietrich Landcare</h5>
                                <p className="card-text">My son needed a website for his business, so I built him one
                                For this project I decided to use object oriented programming instead of functional programming
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="container project-container">
                <div class="row justify-content-center">
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CGShop</h5>
                                <p className="card-text">Welcome to CGShop! I learned a lot about async await 
                                working on the loading page of this project. I also finally understood how 
                                to work with state management</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <Link to={{ pathname: "https://gcshop-b5488.web.app/" }} target="_blank" >
                                <img src="../../images/cgshop.png" />
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    )
}