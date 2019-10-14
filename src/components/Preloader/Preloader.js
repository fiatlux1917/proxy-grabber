import React from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './Preloader.scss'

const Preloader = () => {
  return (
    <div className="preloader">
      <Loader type="Oval" color="#8a8c99" height={300} width={300} />
    </div>
  )
}

export { Preloader }
