import { Link } from "react-router-dom"
import { useSection } from "../contexts/SectionContext" 

import "../styles/pages/Projects.scss"

export default function Projects() {
    
	const { projectRef } = useSection()

	return (
		<div ref={projectRef}>
			<h1>Projects</h1>
			<div className="projects-container">
				<div className="container project-container">
					<div className="row justify-content-center">
						<div className="col-4">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">English in Eight Minutes</h5>
									<p className="card-text">So this is how it started. 
                                I was building a English teaching website with the help of some students.
                                I quickly became fascinated with coding and next realized I had found my
                                first real professinal passion.</p><a href="https://github.com/ChrisDietrich405/english-in-eight-react-final">GitHub repo</a>
								</div>
							</div>
						</div>

						<div className="col-8">
							<Link to={{ pathname: "https://english-in-eight-minutes.web.app/" }} target="_blank" >
								<img src="/images/english-in-eight.png" className="english-in-eight-image" />
							</Link>
						</div> 
					</div>
				</div>
				<div className="container project-container container-margin">
					<div className="row">
						<div className="col-8 mt-5 me-4">
							<Link to={{ pathname: "https://dietrich-landcare.web.app/" }} target="_blank" >
								<img src="/images/dietrich-landcare.png" />
							</Link>
						</div>
						<div className="col-3 mt-5 ms-4">
							<div className="card dietrich-text">
								<div className="card-body">
									<h5 className="card-title">Dietrich Landcare</h5>
									<p className="card-text">My son needed a website for his landscaping business, so I built him one.
                                For this project I used object oriented programming instead of functional programming. I know that although 
                                I realize that it's important to be familiar with both. <a href="https://github.com/ChrisDietrich405/dietrich-landcare-react-final">GitHub repo</a>                           
									</p>
								</div>
							</div>
						</div>  
					</div>
				</div>
				<div className="container project-container">
					<div className="row justify-content-center">
						<div className="col-4 mt-5">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">CGShop</h5>
									<p className="card-text">Welcome to CGShop! I learned a lot about async await 
                                working on the loading page of this project. I also finally understood how 
                                to work with state management</p><a href="https://github.com/ChrisDietrich405/GC.Shop">GitHub repo</a>
								</div>
							</div>
						</div>

						<div className="col-8 mt-5">
							<Link to={{ pathname: "https://gcshop-b5488.web.app/" }} target="_blank" >
								<img src="/images/cgshop.png" />
							</Link>
						</div> 
					</div>
				</div>
			</div>
			<hr />
		</div>
	)
}