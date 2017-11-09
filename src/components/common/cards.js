'use strict'

import React, { Component } from 'react'
import { Chip, Button } from './index'
import './styles/Cards.scss'

class Card extends Component {
  render () {
    return (
      <div className='col l9'>
        <div className='col l4 margin-bottom-10'>
          <div className='card '>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1670214/2016/12/5/11480923985371-FabAlley-Women-Black-Solid-A-line-Dress-6691480923985044-1.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Fab Ally
              <i className='material-icons right tooltipped' data-position="bottom" data-delay="50" data-tooltip="Quick Details">more_vert</i>
              </span>

            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Product Details
              <i className='material-icons right'>close</i>
              </span>
              <p>

                Black solid knit A-line dress, has a round neck with layered detail,
                short sleeves with cold shoulder detail, cut-out detail and button-and-loop closure on the back, flared hem
              </p>

              <span className='card-title grey-text text-darken-4'>Material & Care

              </span>
              <p>Cotton</p>
              <p>Machine-wash</p>

            </div>
            <div className='card-tabs card-shadow'>
              <ul className='tabs tabs-fixed-width teal  '>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test1'>Size</a></li>
                <li className='tab yellow-text text-darken-2'><a className='active white-text text-darken-2' href='#test2'>Buy</a></li>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test3'>Availabe</a></li>
              </ul>
            </div>
            <div className='card-content  card-shadow absolute-padding white'>
              <div id='test1' className='center-align'>
                <Chip ChipLabel='S' />
                <Chip ChipLabel='M' />
                <Chip ChipLabel='L' />
                <Chip ChipLabel='Xl' />
              </div>
              <div id='test2'>
                <div className='row'>
                  <div className='col l6'>
                  <Button ButtonPadding='buy-button' ButtonLabel='Buy Now' />
                  </div>
                  <div className='col l6'>
                  <Button ButtonPadding='cart-button' ButtonLabel='Add To Cart' />
                  </div>
                </div>
              </div>
              <div id='test3'>
              <div className='valign-wrapper display-inline'>
                <p className='center-align grey-text text-darken-1'>
              This product is Availabe
              <i className='material-icons'>check</i>
              </p>
              </div>


              </div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card '>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2127401/2017/9/14/11505364906411-RARE-Women-Dresses-7161505364906123-1.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Rare
              <i className='material-icons right tooltipped' data-position="bottom" data-delay="50" data-tooltip="Quick Details">more_vert</i>
              </span>

            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Rare
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs card-shadow'>
              <ul className='tabs tabs-fixed-width teal  '>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test4'>Size</a></li>
                <li className='tab yellow-text text-darken-2'><a className='active white-text text-darken-2' href='#test5'>Buy</a></li>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test6'>Availabe</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4 card-shadow absolute-padding'>
              <div id='test4'>Size</div>
              <div id='test5'>Buy</div>
              <div id='test6'>Availabe</div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card '>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1644910/2016/12/1/11480590911168-RARE-Women-Black-Solid-Maxi-Dress-3971480590910905-1.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Athena
              <i className='material-icons right tooltipped' data-position="bottom" data-delay="50" data-tooltip="Quick Details">more_vert</i>
              </span>

            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Athena
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs card-shadow'>
              <ul className='tabs tabs-fixed-width teal  '>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test7'>Size</a></li>
                <li className='tab yellow-text text-darken-2'><a className='active white-text text-darken-2' href='#test8'>Buy</a></li>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test9'>Availabe</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4 card-shadow absolute-padding'>
              <div id='test7'>Size</div>
              <div id='test8'>Buy</div>
              <div id='test9'>Availabe</div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card '>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='https://assets.myntassets.com/h_1440,q_100,w_1080/v1/image/style/properties/744341/Belle-Fille-White-Printed-Sheath-Dress_1_56f887d3cdb47b7f8af4f24b65ac1e86.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Latin Quarters
              <i className='material-icons right tooltipped' data-position="bottom" data-delay="50" data-tooltip="Quick Details">more_vert</i>
              </span>

            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Card Title
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs card-shadow'>
              <ul className='tabs tabs-fixed-width teal  '>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test10'>Size</a></li>
                <li className='tab yellow-text text-darken-2'><a className='active white-text text-darken-2' href='#test11'>Buy</a></li>
                <li className='tab yellow-text text-darken-2'><a className='white-text text-darken-2' href='#test12'>Availabe</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4 card-shadow absolute-padding'>
              <div id='test10'>Size</div>
              <div id='test11'>Buy</div>
              <div id='test12'>Availabe</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export { Card }
