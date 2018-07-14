import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" style={{ display:'block' }}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>

					
					<div className="nav-second">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder={this.props.navigation.placeholder} />
							</div>
						</form>
					</div>
				</div>
			</nav>
		)
	}
}