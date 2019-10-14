import React from 'react'
import T from 'prop-types'

const InfoBox = ({ countProxies }) => <h5>Grabbed {countProxies} proxies...</h5>

InfoBox.propTypes = {
  countProxies: T.number,
}

T.defaultProps = {
  countProxies: 0,
}

export { InfoBox }
