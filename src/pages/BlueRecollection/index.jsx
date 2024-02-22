import * as React from 'react'
import SongFrame from '@/components/SongData'
import meta from './meta'
import SEO from '@/components/SEO'

export default class BluRecoMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `街のなか彷徨う　一人歩く午前9時
    日差しが眩しいようだ　ただ歩きたいだけなのに
    どの道が正しいだろう　遠回りもしたい
    迷惑もかけただろう　もうもとにはもどれない
    
    見上げた青い空　風を切ってどこまでも行こう
    会ったもの　遭ったこと　すべてが　僕を作る記憶（メモリー）
    
    思い出の青い空　果てしなくどこまでも続く
    悲しみに　バイバイを　駆けだす　僕に続け！　メロディー
    
    踏み出した　道の先　旅路の途中　そっと目を閉じて　あくびした
    
    
    夢の中彷徨う　一人旅　三叉路で
    小石を蹴り転がす　行き先もない　ただ進むだけ
    Ah…
    
    僕らは旅に出た　後ろには振り向かず　
    水平線の先の先まで　進め！　立ち止まらずに
    
    どの道に進んでも　きっと今は変わらない
    
    見上げた青い空　風を切ってどこまでも行こう
    会ったもの　遭ったこと　すべてが　僕を作る記憶（メモリー）
    
    思い出の青い空　変わらないあの日々に続く
    さよならを　飲み込んで　駆けてた　僕を変えたメロディー
    
    
    踏み出した　道の先　家路に向かって　そっと手を振って　さよならを`
  }

  render() {
    return (
      <>
        <SEO 
          pageTitle={meta.title}
          pageDescription={"楽曲「" + meta.title + "」紹介ページ"}
          contentId={10}
        />
        <SongFrame meta={meta} lyrics={this.lyrics}/>
      </>
    )
  }
}
