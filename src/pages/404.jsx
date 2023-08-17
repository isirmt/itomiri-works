import * as React from 'react'
import Component404 from '@/components/404Component'
import SEO from '@/components/SEO'

export default class Return404 extends React.Component {

  render() {
    return (
      <>
        <SEO />
        <Component404 />
      </>
    )
  }
}