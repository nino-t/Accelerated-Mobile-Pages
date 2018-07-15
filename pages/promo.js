import React from 'react';

import HeadHtml from '../components/HeadHtml'
import { MainLayout } from '../components/Layouts'

export default class Promo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: ''
		}
	}

  componentWillMount() {
    fetch('https://private-202326-mockapiforcandidatetest.apiary-mock.com/promo')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          url: data.data.url
        });
      })
      .catch((error) => {
        console.error('Error', error);
      })
  } 	

	render() {
		return (
      <MainLayout>
        <HeadHtml 
          title="Matahari Mall"
          subTitle="Promo" />
          <iframe frameborder="0" height="100%" scrolling="no" src={this.state.url} width="100%"></iframe>
      </MainLayout>
		)
	}
}
