import React from 'react'
import foot from '../../layout/Footer/Footer.module.css'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaSnapchatGhost } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id={foot.foot}>
      <div className={foot.upside}>
        <div className={`container ${foot.border_x}`}>
          <div className='row'>
            <div className='col-lg-6'>
              <h2 id={foot.h2_click}>
                Subscribe to <strong>new posts</strong>
              </h2>
            </div>
            <div className='col-lg-6'>
              <div className={foot.form}>
                <form action=''>
                  <label for='username'></label>
                  <input
                    type='text'
                    id={foot.Sub_text}
                    name='Sub_text'
                    placeholder='Your email address'
                    required
                  />
                  <input type='submit' id={foot.sub_btn} value='Subcribe' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={foot.downside}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className={foot.img}>
                <img
                  src='https://basho.fueko.net/content/images/2022/01/basho.svg'
                  alt=''
                />
              </div>
              <p>
                A minimal, functional theme for running a paid-membership
                publication on Ghost.
              </p>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className={`col-lg-3 col-6 col-sm-6`}>
                  <p>Social</p>
                  <ul>
                    <li>
                      <BsFacebook />
                      <a href='#'>Facebook</a>
                    </li>
                    <li>
                      <BsTwitter />
                      <a href='#'>Twitter</a>
                    </li>
                    <li>
                      <BsYoutube />
                      <a href='#'>Youtube</a>
                    </li>
                    <li>
                      <FaSnapchatGhost />
                      <a href='#'>Snapchat</a>
                    </li>
                  </ul>
                </div>
                <div className={`col-lg-3 col-6 col-sm-6`}>
                  <p>About</p>
                  <ul>
                    <li>
                      <a href='#'>Style Guide</a>
                    </li>
                    <li>
                      <a href='#'>Features </a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                    <li>
                      <a href='#'>404 </a>
                    </li>
                    <li>
                      <a href='#'>Get Theme</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-3 col-6 col-sm-6'>
                  <p>Features</p>
                  <ul>
                    <li>
                      <a href='#'>Demos </a>
                    </li>
                    <li>
                      <a href='#'>Light version</a>
                    </li>
                    <li>
                      <a href='#'>Color version</a>
                    </li>
                    <li>
                      <a href='#'>Partial version</a>
                    </li>
                    <li>
                      <a href='#'>Dark version</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-3 col-6 col-sm-6'>
                  <p>Membership</p>
                  <ul>
                    <li>
                      <a href='#'>Account</a>
                    </li>
                    <li>
                      <a href='#'>Membership</a>
                    </li>
                    <li>
                      <a href='#'>Subscribe</a>
                    </li>
                    <li>
                      <a href='#'>Tags</a>
                    </li>
                    <li>
                      <a href='#'>Tags</a>
                    </li>
                    <li>
                      <a href='#'>Authors</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center'>
        <p id={foot.last_p}>© Basho 2022. Published with Ghost and Basho.</p>
      </div>
    </footer>
  )
}

export default Footer
