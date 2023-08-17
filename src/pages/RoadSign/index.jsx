import * as React from 'react'
import SongFrame from '@/components/SongData'
import meta from './meta'
import SEO from '@/components/SEO'

export default class RoadSignMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `(3 2 1 Go)

    白線で立ち止まる　目の前の赤信号
    引き返すことができない
    進めない　進めない　早く青になれと
    一向に変わる気配がない
    
    見えない
    回りを見て何ができるかを
    見つけ
    回り道は　何処かにないかを
    もっとよく探すんだ！
    
    Shining road
    私にはずっと遠い存在のようで
    過去の軌跡を辿ったこの足を踏みしめて
    道を間違えてもきっと
    やり直せるならいっそ
    ロードサインに従い
    ただ駆け抜ければいい
    (La La La La)
    一方通行　進入禁止　繰り返す
    
    雨の中雪の中 足元ぬかるむ
    路面凍結滑らずに
    走れない止まれない
    険しい道へと
    目的地はそこにない
    
    「こちらは一方通行です」
    「あちらは追い越し禁止です」
    飛び出し注意
    急がば回れ
    気をつけろ！
    
    Shining road
    私にはずっと遠い存在のようで
    過去の軌跡を辿ったこの足を踏みしめて
    道を間違えてもきっと
    やり直せるならいっそ
    ロードサインに従い
    ただ駆け抜ければいい
    (La La La La)
    一方通行　進入禁止　繰り返す
    
    道の先には誰かが
    待っているような気がして
    走り出す
    
    Shining road
    私にはずっと遠い存在のようで
    過去の軌跡を辿ったこの足を踏みしめて
    道を間違えてもきっと
    やり直せるならいっそ
    ロードサインに従い
    ただ駆け抜ければいい
    
    何度ミスをしようと
    人生は七転八起
    (La La)
    もう後悔なんてしない
    
    (La La La La)
    一方通行　進入禁止　繰り返す
    
    (La La La La)
    日進月歩　局面打開　恐れずに
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
        <SongFrame meta={meta} lyrics={this.lyrics}/>
      </>
    )
  }
}
