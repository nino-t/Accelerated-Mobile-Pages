import React from 'react'
import Link from 'next/link'

import HeadHtml from '../components/HeadHtml'
import { MainLayout } from '../components/Layouts'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      products: {}
    }
  }
  
  componentWillMount() {
    fetch('https://private-202326-mockapiforcandidatetest.apiary-mock.com/home')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data.data
        });
      })
      .catch((error) => {
        console.error('Error', error);
      })
  } 

  render() {
    const { products } = this.state
    return (
      <MainLayout>
        <HeadHtml 
          title="Matahari Mall"
          subTitle="Beranda" />
        <div>
          {
            (products.row_1) &&
              <div style={{ backgroundColor: products.row_1.text.background_color, display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', height: '80px', padding: '15px'}}>
                <h4 style={{ margin: '0px', color: '#34495e'}}>{products.row_1.text.text1}</h4>
                <b style={{ color: '#2c3e50' }}>{products.row_1.text.text2}</b>
                <i className="fa fa-close" style={{ position:'absolute', right: 10, color: '#2d3436'}}></i>
              </div>
          }
        </div>

        <div>
          {
            (products.row_2) &&
              <a href={products.row_2.link.target}>
                <div style={{ background: 'url("/static/img/banner.png")', height: '600px', backgroundSize:'cover'}}>
                </div>
              </a>
          }
        </div>        

        <div>
          {
            (products.row_3) &&
              <div style={{ margin: '10px' }}>
                <b className="pull-left" style={{ fontSize:'16px', color: '#2d3436'}}>{products.row_3.title}</b>
                <a className="pull-right"><b>{products.row_3.link.title} <span className="glyphicon glyphicon-menu-right"></span></b></a>
                <div className="clearfix"></div>
              </div>            
          }
          <div className="row">
          {
            (products.row_3) &&
              products.row_3.items.map((product, index) => (
                <Link href="/" key={index}>
                  <a>
                    <div className="col-xs-4 col-md-4">
                      <div>
                        <img src={product.images.thumbnail} className="img-responsive" />
                      </div>
                    </div>                
                  </a>
                </Link>
              ))
          }
          </div>                
        </div>                
      </MainLayout>
    )
  }
}