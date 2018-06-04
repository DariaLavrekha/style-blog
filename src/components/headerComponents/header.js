import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
				<div className="container">

	      	<div className="logo">
	      		LOGO
	      	</div>

					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/StyleIdeas">Style ideas</Link>
							</li>
							<li className="last">
								<Link to="/Contact">Contact</Link>
							</li>
						</ul>
					</nav>

				</div>

      </header>
    );
  }
}

export default Header;
