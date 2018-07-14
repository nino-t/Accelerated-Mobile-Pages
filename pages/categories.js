import React from 'react'
import Link from 'next/link'

import HeadHtml from '../components/HeadHtml'
import { MainLayout } from '../components/Layouts'

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      categories: {}
    }
  }
  
  componentWillMount() {
    fetch('https://private-202326-mockapiforcandidatetest.apiary-mock.com/categories')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          categories: data.data
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
            (categories.length > 0) &&
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
          }
        </div>
     </MainLayout>
    )
  }
}