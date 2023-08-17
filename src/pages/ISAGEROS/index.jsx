import * as React from 'react'
import UnderDevelopment from '@/components/UnderDevelopment'
import SEO from '@/components/SEO'

export default class ISAGEROSMain extends React.Component {

  render() {
    return (
      <>
      <SEO
          pageTitle="ISAGEROS"
          pageDescription={"「ISAGEROS」紹介ページ"}
          contentId={9}
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