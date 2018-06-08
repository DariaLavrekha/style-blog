import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<p><i class="far fa-copyright"></i> 2018 | Daria Lavrekha</p>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
							<a href="https://github.com/DariaLavrekha"><i class="fab fa-github"></i></a>
							<a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
						</div>
					</div>
      	</div>
      </footer>
    );
  }
}

export default Footer;
