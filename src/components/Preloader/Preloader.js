import React from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './Preloader.scss'

const Preloader = props => {
  return (
    <div className="preloader">
      <Loader type="Triangle" color="#5481FE" height={300} width={300} />
    </div>
  )
}

export { Preloader }
