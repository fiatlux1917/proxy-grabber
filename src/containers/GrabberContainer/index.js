import React, { Fragment } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GrabberBox } from '@/components/GrabberBox'
import { Preloader } from '@/components/Preloader'

import {
  setCountry,
  setInitialState,
  grabProxies,
  setProtocol,
} from '@/actions/grabber'

const GrabberContainer = props => {
  const {
    grabberState: { fetching },
  } = props
  return (
    <Fragment>{fetching ? <Preloader /> : <GrabberBox {...props} />}</Fragment>
  )
}

const mapStateToProps = state => {
  return {
    grabberState: state.grabber,
  }
}

const mapDispatchToProps = dispatch => ({
  clearData: bindActionCreators(setInitialState, dispatch),
  grabProxies: bindActionCreators(grabProxies, dispatch),
  setProtocol: bindActionCreators(setProtocol, dispatch),
  setCountry: bindActionCreators(setCountry, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrabberContainer)
