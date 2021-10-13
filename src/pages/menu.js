import React from 'react'
import Content from '../components/Content'
import ImageThree from '../images/egg-3.jpg'
import ImageFour from '../images/egg-4.jpg'
import ImageFive from '../images/egg-5.jpg'
// import Hero  from '../components/Hero'

const menu = () => {
  return (
    <>
    <div className="h-10 flex justify-center rounded items-center bg-gray-300">
      <h1 className="text-3xl uppercase font-green">
        Menu
      </h1>
    </div>
    <Content />
      <div className='menu-card'>
          <img src={ImageThree} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="center-content">
            <h2 className='text-2xl mb-2'>Egg Lats</h2>
            <p className="mb-2">Cripsy, delicious, and nutritious</p>
            <span>$15</span>
          </div>
      </div>
      <div className='menu-card'>
          <img src={ImageFour} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="center-content">
            <h2 className='text-2xl mb-2'>Egg Scurb</h2>
            <p className="mb-2">Cripsy, delicious, and nutritious</p>
            <span>$30</span>
          </div>
      </div>
      <div className='menu-card'>
          <img src={ImageFive} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="center-content">
            <h2 className='text-2xl mb-2'>Egg Sups</h2>
            <p className="mb-2">Cripsy, delicious, and nutritious</p>
            <span>$28</span>
          </div>
      </div>
    </>
  )
}

export default menu
