import React from 'react'
import "isomorphic-fetch" 
import Link from '../../Link'

export default class Tab extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
		const { navigation } = this.props
		return (
			<ul className="me-nav footer">
				{
					(navigation.items) &&
						navigation.items.map((menu, index) => {
							if(menu.title === 'Kategori'){
								var url = "/categories"
								var icon = 'fa-list-ul'
							}else if (menu.title === 'Tas Belanja') {
								var url = "/cart"
								var icon = 'fa-shopping-cart'								
							}else if (menu.title === 'Promo') {
								var url = "/promo"
								var icon = 'fa-tag'
							}else if (menu.title === 'Profil') {
								var url = "/profil"
								var icon = 'fa-user'								
							}else{
								var url = "/"
								var icon = 'fa-home'
							}
							return(
								<li key={index}>
									<Link href={url} activeClassName="active">
										<a style={{ display:'flex', flexDirection:'column'}}>
											<i className={`fa ${icon}`} style={{ fontSize:'20px' }}></i>
											<span>{menu.title}</span>
										</a>
									</Link>
								</li>
							)})
				}
			</ul>
		)
	}
}