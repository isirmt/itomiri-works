import * as React from 'react'
import SongFrame from '@/components/SongData'
import meta from './meta'
import SEO from '@/components/SEO'

export default class FluteINGMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `(No Lyrics)
`
  }

  render() {
    return (
      <>
        <SEO 
          pageTitle={meta.title}
          pageDescription={"楽曲「" + meta.title + "」紹介ページ"}
          contentId={7}
        />
        <SongFrame meta={meta} lyrics={this.lyrics}/>
      </>
    )
  }
}
