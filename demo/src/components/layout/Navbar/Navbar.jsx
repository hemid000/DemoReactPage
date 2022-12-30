import React from 'react'
import nav from '.././../layout/Navbar/Navbar.module.css'
import { FaChevronDown } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { RxMoon } from 'react-icons/rx'

const Navbar = () => {
  return (
    <header>
      <nav id={nav.navbar}>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-3'>
              <div className={nav.img}>
                <img
                  src='https://qurno-nextjs.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75'
                  alt=''
                />
              </div>
            </div>
            <div className='col-6'>
              <div className={nav.middleside}>
                <ul>
                  <li id={nav.home}>
                    <a href='#'>
                      {' '}
                      Home <FaChevronDown />
                    </a>

                    <div className={nav.home_hover}>
                      <ul>
                        <li>
                          <a href='#'>Home1</a>
                        </li>
                        <li>
                          <a href='#'>Home2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Archive</a>
                  </li>
                  <li id={nav.pages}>
                    <a href='#'>
                      Pages <FaChevronDown />
                    </a>
                    <div className={nav.home_hover}>
                      <ul>
                        <li>
                          <a href='#'>Pages1</a>
                        </li>
                        <li>
                          <a href='#'>Pages2</a>
                        </li>
                        <li>
                          <a href='#'>Pages3</a>
                        </li>
                        <li>
                          <a href='#'>Pages4</a>
                        </li>
                        <li>
                          <a href='#'>Pages5</a>
                        </li>
                        <li>
                          <a href='#'>Pages6</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-3'>
              <div className={nav.rightside}>
                <ul>
                  <li>
                    <a href='#'>
                      Search
                      <FaSearch />
                    </a>
                  </li>
                </ul>

                <div className={nav.moon}>
                  <RxMoon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
