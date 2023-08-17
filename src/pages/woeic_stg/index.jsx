import * as React from 'react'
import UnderDevelopment from '@/components/UnderDevelopment'
import SEO from '@/components/SEO'

export default class WoeicMain extends React.Component {

  render() {
    return (
      <>
      <SEO
          pageTitle="WOEIC STG"
          pageDescription={"「WOEIC STG」紹介ページ"}
          contentId={1}
        />
      <UnderDevelopment />
      </>
    )
  }
}

export const getServerSideProps = async (context) => ({
  props: {
    layout: true
  }
})