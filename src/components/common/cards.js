'use strict'

import React, { Component } from 'react'
import './styles/Cards.scss'

class Card extends Component {
  render () {
    return (
      <div className='col l9'>
        <div className='col l4 margin-bottom-10'>
          <div className='card small'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='http://materializecss.com/images/office.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Card Title
              <i className='material-icons right'>more_vert</i>
              </span>
              <p><a href='#'>This is a link</a></p>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Card Title
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs'>
              <ul className='tabs tabs-fixed-width'>
                <li className='tab'><a href='#test7'>Test 1</a></li>
                <li className='tab'><a className='active' href='#test8'>Test 2</a></li>
                <li className='tab'><a href='#test9'>Test 3</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4'>
              <div id='test7'>Test 1</div>
              <div id='test8'>Test 2</div>
              <div id='test9'>Test 3</div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card small'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='http://materializecss.com/images/office.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Card Title
              <i className='material-icons right'>more_vert</i>
              </span>
              <p><a href='#'>This is a link</a></p>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Card Title
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs'>
              <ul className='tabs tabs-fixed-width'>
                <li className='tab'><a href='#test4'>Test 1</a></li>
                <li className='tab'><a className='active' href='#test5'>Test 2</a></li>
                <li className='tab'><a href='#test6'>Test 3</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4'>
              <div id='test4'>Test 1</div>
              <div id='test5'>Test 2</div>
              <div id='test6'>Test 3</div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card small'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='http://materializecss.com/images/office.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Card Title
              <i className='material-icons right'>more_vert</i>
              </span>
              <p><a href='#'>This is a link</a></p>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Card Title
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs'>
              <ul className='tabs tabs-fixed-width'>
                <li className='tab'><a href='#test1'>Test 1</a></li>
                <li className='tab'><a className='active' href='#test2'>Test 2</a></li>
                <li className='tab'><a href='#test3'>Test 3</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4'>
              <div id='test1'>Test 1</div>
              <div id='test2'>Test 2</div>
              <div id='test3'>Test 3</div>
            </div>
          </div>
        </div>
        <div className='col l4 margin-bottom-10'>
          <div className='card small'>
            <div className='card-image waves-effect waves-block waves-light'>
              <img className='activator' src='http://materializecss.com/images/office.jpg' />
            </div>
            <div className='card-content'>
              <span className='card-title activator grey-text text-darken-4'>Card Title
              <i className='material-icons right'>more_vert</i>
              </span>
              <p><a href='#'>This is a link</a></p>
            </div>
            <div className='card-reveal'>
              <span className='card-title grey-text text-darken-4'>Card Title
              <i className='material-icons right'>close</i>
              </span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            <div className='card-tabs'>
              <ul className='tabs tabs-fixed-width'>
                <li className='tab'><a href='#test10'>Test 1</a></li>
                <li className='tab'><a className='active' href='#test11'>Test 2</a></li>
                <li className='tab'><a href='#test12'>Test 3</a></li>
              </ul>
            </div>
            <div className='card-content grey lighten-4'>
              <div id='test10'>Test 1</div>
              <div id='test11'>Test 2</div>
              <div id='test12'>Test 3</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export { Card }
