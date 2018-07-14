import React from 'react'
import Header from './Header'
import Tab from './Tab'

export class MainLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navigations:{}
		}
	}

	componentWillMount() {
		fetch('https://private-202326-mockapiforcandidatetest.apiary-mock.com/init')
	    .then((response) => response.json())
	    .then((data) => {
	    	this.setState({
	    		navigations: data.data
	    	});
	    })
	    .catch((error) => {
	    	console.error('Error', error);
	    })
	}	

	render() {
		const { navigations } = this.state

		let navUp = []
		let navBottom = []
		if(navigations.bottom_bar)
			navBottom = navigations.bottom_bar

		if(navigations.bottom_bar)
			navUp = navigations.top_bar

		return (
			<div className="work">
				<Header navigation={navUp} />
				<div style={{ margin: '60px 0', border: '1px solid #ddd'}}>
					{this.props.children}
				</div>
				<Tab navigation={navBottom} />
			</div>
		)
	}
}