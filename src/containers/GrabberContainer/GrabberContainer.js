import React, { Fragment } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ControlPanel } from '@/components/ControlPanel'
import { Preloader } from '@/components/Preloader'

import { grabProxies } from '@/actions/grabber'

const GrabberContainer = ({ grabberState, grabProxies }) => {
  const { proxies, fetching, protocol } = grabberState
  return (
    <Fragment>
      {fetching ? (
        <Preloader />
      ) : (
        <ControlPanel
          grabProxies={grabProxies}
          proxies={proxies}
          protocol={protocol}
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrabberContainer)
