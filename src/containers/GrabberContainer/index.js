import React, { Fragment } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GrabberBox } from '@/components/GrabberBox'
import { Preloader } from '@/components/Preloader'

import { setInitialState, grabProxies, setProtocol } from '@/actions/grabber'

const GrabberContainer = props => {
  const { grabberState, clearData, grabProxies, setProtocol } = props
  return (
    <Fragment>
      {grabberState.fetching ? (
        <Preloader />
      ) : (
        <GrabberBox
          grabProxies={grabProxies}
          setProtocol={setProtocol}
          clearData={clearData}
          {...grabberState}
        />
      )}
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    grabberState: state.grabber,
  }
}

const mapDispatchToProps = dispatch => ({
  grabProxies: bindActionCreators(grabProxies, dispatch),
  setProtocol: bindActionCreators(setProtocol, dispatch),
  clearData: bindActionCreators(setInitialState, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrabberContainer)
