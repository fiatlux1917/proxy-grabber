import React from 'react'

import { URL_GITHUB_PROFILE, URL_BHF_TOPIC } from '@/constants/grabber'

const HeaderBox = () => {
  return (
    <h4>
      Proxy grabber | by <a href={URL_GITHUB_PROFILE}>JubasNTC</a>{' '}
      <a href={URL_BHF_TOPIC}>[BHF]</a>
    </h4>
  )
}

export { HeaderBox }
