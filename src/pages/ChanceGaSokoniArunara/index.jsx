import * as React from 'react'
import SongFrame from '@/components/SongData'
import Layout from '@/components/Layout'
import meta from './meta'
import SEO from '@/components/SEO'

export default class ChanceMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `手を出しページの一行を詠んでそして叫べ
    先から溢れだすその光を放て！
    
    雲の下でずっと魔法を詠みエフェクトが砕けて消えるの
    もしも僕にもっと力があれば あの人に認めてられてみたいよ
    
    突然暗くなり 光飲み込んで
    誰かの声澄ましてみると想像をして放つと
    炎の中飛び込む姿 拳を握り誰かのために走り詠んだ
    
    信じた心の杖からはきっと魔法でると
    あなたを守るノウハウ僕にないけど
    手を出しページの一行を詠んでそして叫べ
    まだ見ぬ 溢れだすその光を放て！
    
    もし目の前にあるこの想いが届くなら
    どんなに素敵なことなのだろう
    もう一度チャンスがそこにあるなら
    
    野原の上まだ光が崩れ 明日には必ず叶えたいんだ
    
    突然街が消え 灰が積もりだす
    どうしてなの昨日のように魔法がいるの でも僕
    使えないし分からないけど
    あの人のように 誰かのこと助けるために
    
    願った心の杖からはきっと魔法でると
    あなたを守る力が僕にないけど
    手を出しページの一行を詠んでそして叫べ
    まだ見ぬ 溢れだすその希望を放て！
    
    もし目の前にあるこの願いが届くなら
    どんなに嬉しいことなのだろう
    もう一度チャンスがあるとしたなら
    
    自分を信じ 願ったように
    
    信じた心の杖からはきっと魔法でると
    あなたを守りたいその願いを持って
    手を出しページの一行を詠んでそして叫べ
    先から溢れだすその光を放て！
    
    もし目の前にあるこの想いが届くなら
    どんなに素敵なことなのだろう
    信じればチャンスはそこにあるだろう！
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

export const getServerSideProps = async (context) => ({
  props: {
    layout: true
  }
})