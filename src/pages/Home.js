import GetInTouch from "../components/GetInTouch"
import "../styles/components/Home.scss"

export default function Home() {
    return (
    <div className="home-container"> 
        <h1>Successful Front-end Development</h1>
        <h3> Hello I'm Chris, a Front-end Developer who is passionate about web development and who is a lifelong learner</h3>
        
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Languages</h5>
                            <ul>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Frameworks</h5>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Other Stuff</h5>
                            <ul>
                                <li>Github</li>
                                <li>VSC</li>
                                <li>VSC integrated terminal</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <h1>Projects</h1>
        <div class="container">
            <div class="row">
                <div class="col-4">
                <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    Column
                </div> 
            </div>
        </div>
        <GetInTouch/>
    </div>
    )
}