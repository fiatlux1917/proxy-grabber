import React, { Fragment } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { GrabberBox } from '@/components/GrabberBox'
import { Preloader } from '@/components/Preloader'

import { grabProxies, setProtocol } from '@/actions/grabber'

const GrabberContainer = ({ grabberState, grabProxies, setProtocol }) => {
  const { fetching } = grabberState
  return (
    <Fragment>
      {fetching ? (
        <Preloader />
      ) : (
        <GrabberBox
          grabProxies={grabProxies}
          setProtocol={setProtocol}
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrabberContainer)
