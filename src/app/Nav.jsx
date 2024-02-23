import React, { useEffect, useState } from 'react'


const Nav = () => {

  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    }
    else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNav)

    return () => {
      window.removeEventListener("scroll", transitionNav)
    }

  }, [])


  return (
    <div className={'nav ${show && "nav_black"}'} >
      <div className='nav-content' />
      <img src='Images/Netflix-Logo.png' className='logo' />
      <img src='https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5549/1665549-i-67812177cf3d' className='nav-avatar' />
    </div >


  )
}

export default Nav