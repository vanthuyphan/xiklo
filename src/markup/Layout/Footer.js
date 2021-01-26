import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
	render(){
		return(
			<footer className="site-footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
								<div className="widget">
									<img src={require("./../../images/logo-white.png")} width="180" className="m-b15" alt=""/>
									<p className="text-capitalize m-b20">Follow us to get the latest update on jobs</p>
									<div className="subscribe-form m-b20">
										<form className="dzSubscribe" action="script/mailchamp.php" method="post">
											<div className="dzSubscribeMsg"></div>
											<div className="input-group">
												<input name="dzEmail" required="required"  className="form-control" placeholder="Your Email Address" type="email" />
												<span className="input-group-btn">
													<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
												</span> 
											</div>
										</form>
									</div>
									<ul className="list-inline m-a0">
										<li><Link to={''} className="site-button white facebook circle "><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={''} className="site-button white google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={''} className="site-button white linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={''} className="site-button white instagram circle "><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={''} className="site-button white twitter circle "><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span> © Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>
								<Link to={''}>Moso Jobs </Link> All rights reserved.</span> 
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;