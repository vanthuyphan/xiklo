import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const postBlog=[
	{
		image:require("./../../images/logo/icon1.png"),
	},
	{
		image:require("./../../images/logo/icon1.png"),
	},
	{
		image:require("./../../images/logo/icon1.png"),
	},
	{
		image:require("./../../images/logo/icon1.png"),
	},
	{
		image:require("./../../images/logo/icon1.png"),
	},
	{
		image:require("./../../images/logo/icon1.png"),
	},
]

class Jobsection extends Component{
	render(){
		return(
			<div className="section-full bg-white content-inner-2">
				<div className="container">
					<div className="d-flex job-title-bx section-head">
						<div className="mr-auto">
							<h2 className="m-b5">Recent Jobs</h2>
							<h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
						</div>
						<div className="align-self-end">
							<Link to={"/browse-job"} className="site-button button-sm">Browse All Jobs <i className="fa fa-long-arrow-right"></i></Link>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul className="post-job-bx browse-job">
								{postBlog.map((item,index)=>(
									<li key={index}>
										<div className="post-bx" >
											<div className="d-flex m-b30">
												<div className="job-post-company">
													<span><img alt="" src={item.image} /></span>
												</div>
												<div className="job-post-info">
													<h4><Link to={"/job-detail"}>Digital Marketing Executive</Link></h4>
													<ul>
														<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
														<li><i className="fa fa-bookmark-o"></i> Full Time</li>
														<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
													</ul>
												</div>
											</div>
											<div className="d-flex">
												<div className="job-time mr-auto">
													<Link to={""}><span>Full Time</span></Link>
												</div>
												<div className="salary-bx">
													<span>$1200 - $ 2500</span>
												</div>
											</div>
											<label className="like-btn">
												<input type="checkbox" />
												<span className="checkmark"></span>
											</label>
										</div>
									</li>
								))}	
								
							</ul>
							<div className="m-t30">
								<div className="d-flex">
									<Link className="site-button button-sm mr-auto" to={""}><i className="ti-arrow-left"></i> Prev</Link>
									<Link className="site-button button-sm" to={""}>Next <i className="ti-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Jobsection;