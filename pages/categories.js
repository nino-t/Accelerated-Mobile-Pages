import React from 'react'
import Link from 'next/link'

import HeadHtml from '../components/HeadHtml'
import { MainLayout } from '../components/Layouts'

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      categories: [],
      isLoading: true
    }
  }
  
  componentWillMount() {
    fetch('https://private-202326-mockapiforcandidatetest.apiary-mock.com/categories')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          categories: data.data,
          isLoading: false
        });
      })
      .catch((error) => {
        console.error('Error', error);
      })
  } 

  render() {
    const { categories } = this.state
    return (
      <MainLayout>
        <HeadHtml 
          title="Matahari Mall"
          subTitle="Categories" />

        <div style={{ padding: '8px' }} className="wrap-categories">
          {
            (categories.length > 0)?
              categories.map((category, index) => (
                <Link href="/" key={index}>
                  <a>
                    <div key={index} style={{ backgroundImage: `url(${category.image_url})`, height: '120px', display:'flex', alignItems:'center', justifyContent:'left', marginBottom: '8px', borderRadius: '3px', backgroundSize: 'cover', padding: '8px 12px'}}>
                      <div>
                        <b style={{ fontSize: '18px', color: '#636e72'}}>{category.title}</b>
                      </div>
                    </div>
                  </a>
                </Link>
              ))
              :
              Array.from(Array(6).keys()).map((item, index) => (
                <div style={{ background: '#ecf0f1', height: '120px', display:'flex', alignItems:'center', marginBottom: '8px', borderRadius: '3px', backgroundSize: 'cover', padding: '8px 12px' }}>
                  <div style={{ flex: '70%', display:'flex', alignItems:'left', justifyContent:'center',flexDirection:'column'}}>
                    <div style={{ background: '#bdc3c7',marginBottom:'5px', width: '40%', height: '10px', borderRadius: '4px'}}></div>
                    <div style={{ background: '#bdc3c7',marginBottom:'5px', width: '70%', height: '10px', borderRadius: '4px'}}></div>
                    <div style={{ background: '#bdc3c7',marginBottom:'5px', width: '70%', height: '10px', borderRadius: '4px'}}></div>
                  </div>
                  <div style={{ flex: '30%' }}>
                    <div style={{ background: '#bdc3c7', width: '100%', height: '90px', borderRadius: '4px'}}></div>
                  </div>
                </div>
              ))
          }
        </div>
     </MainLayout>
    )
  }
}