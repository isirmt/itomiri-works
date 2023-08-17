import * as React from 'react'
import SongFrame from '@/components/SongData'
import Layout from '@/components/Layout'
import meta from './meta'
import SEO from '@/components/SEO'

export default class MegahonMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `「頑張れ」と応援されまして
    その声で私を押し出しました
    
    私にはもう到底できないと言う
    そんな事を言いながら小石を蹴っていく
    
    過ち犯し挫折し自信を無くし
    もう立ち直れなくなると危機感覚えた
    
    弱音を吐きながらずっと歩いていると
    後ろから「君ならできる」と忽然言われ
    
    その声に私は感化され
    ピストルと同時に踏み切った
    
    「頑張れ」と応援されまして
    その声で私を押し出し
    いつもと同じ景色が違って見えた
    
    逃げないと心に決めたのは
    この場から瞼を伏せぬよう
    奇跡を信じるよりはトライしてみた
    
    私にはほらセンスがないのだろうと
    そんな事を言いながら区切りをつけた
    
    どれだけ努力をすれば辿り着けるか
    何も手を動かさないで呆然としていた
    
    弱音を吐きながらずっと歩いていると
    後ろから「君ならできる」と忽然言われ
    
    本当にそうなのか疑いも
    もうこれしかないと踏み切った
    
    「頑張れ」と応援されまして
    その声で私を押し出し
    いつもと同じ景色が違って見えた
    
    逃げないと心に決めたのは
    この場から瞼を伏せぬよう
    奇跡を信じるよりはトライしてみた
    
    その声に私は感化され
    ピストルと同時に踏み切った
    
    「頑張れ」と応援されまして
    その声で私を押し出し
    いつもと同じ景色が違って見えた
    
    逃げないと心に決めたのは
    この場から瞼を伏せぬよう
    奇跡を信じるよりはトライしてみた
`
  }

  render() {
    return (
      <>
        <SEO
          pageTitle={meta.title}
          pageDescription={"楽曲「" + meta.title + "」紹介ページ"}
          contentId={6}
        />
        <SongFrame meta={meta} lyrics={this.lyrics} />
      </>
    )
  }
}

export const getServerSideProps = async (context) => ({
  props: {
    layout: true
  }
})