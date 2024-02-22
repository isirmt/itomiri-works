import * as React from 'react'
import SongFrame from '@/components/SongData'
import meta from './meta'
import SEO from '@/components/SEO'

export default class HikarietoMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `誰の声も耳にせず ただ空を眺めてた
アオのおくに見えたのは シロに輝く星
部屋に射す光は わたしを照らしていた
何かに誘われて いかせてと戸を出る

小さなわたしには この世界を知らずに
答えを捜したら どこかにあるのかな

嗚呼 わたしの翼が 無いのだとしても今
もう後ろには無いとそう 誰かが手を引き
光へと！

見上げる アオい星のその先へ 掴めよ
両手で 例え届かないとしても
飛び出す 深い未知のその場所へ いかせてよ！
一度 見えなかったヒカリ信じて

これが私が求めていたものか
これは違う
捜して掴め！

目を覚ましてみると いつもの窓の前で
なぜ見つからないの 答えを見つけたい
部屋に射す光は それでも照らすように
誰かに笑われる そんな気がしたんだ

白の輝きを見つけた時には
私も自由に 飛べたりできるか
そう思い できると飛び出したように
今度は飛ぶんだ 明日を夢見て
今 駆け出した

見上げる アオい星のその先へ 掴めよ
両手で 例え届かないとしても
飛び出す 深い未知のその場所へ いかせてよ！
一度 見えなかったヒカリ信じて

トウメイの階段を駆け抜けて そしてアオをへと

まだとどかない
答えを捜しつづけてもいつか 滅びるわたしを
待ってるように輝いていた

これが私が求めていたものか
これも違う
明日も捜せ！
`
  }

  render() {
    return (
      <>
        <SEO 
          pageTitle={meta.title}
          pageDescription={"楽曲「" + meta.title + "」紹介ページ"}
          contentId={3}
        />
        <SongFrame meta={meta} lyrics={this.lyrics}/>
      </>
    )
  }
}
