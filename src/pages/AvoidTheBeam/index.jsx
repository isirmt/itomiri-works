import * as React from 'react'
import UnderDevelopment from '@/components/UnderDevelopment'
import SEO from '@/components/SEO'

export default class AvoidTheBeamMain extends React.Component {

  render() {
    return (
      <>
      <SEO
          pageTitle="Avoid The Beam"
          pageDescription={"「Avoid The Beam」紹介ページ"}
          contentId={2}
        />
      <UnderDevelopment />
      </>
    )
  }
}
