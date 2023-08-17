import * as React from 'react'
import SongFrame from '@/components/SongData'
import Layout from '@/components/Layout'
import meta from './meta'
import SEO from '@/components/SEO'

export default class MegahonMain extends React.Component {

  constructor(props) {
    super(props)

    this.lyrics = `何気ない放課後　僕は一人
    君は校門で待ち伏せて　後ろに飛び乗った
    
    逸る心　サドルに身を任せ
    大きく踏み込み　駆け下りる坂道が
    
    伸ばした前髪　話を逸らした僕
    緩んだ心に　君に気持ちをさらわれ
    閉ざした価値観　君は手を引いて
    
    「価値を自分で決めるな」とつぶやく
    
    今
    リンリンと　鳴らすベルの音　君の声を背に感じ
    僕は　ペダルを漕いだ　君との時間を大切に
    輪輪と　回る時間と　君の温度を背に感じ
    僕は　空気を吸い込む　弾む鼓動を誤魔化した
    
    ずっと　
    
    このままがいいと　ブレーキをかける　熱に絆されて
    SentimentalLove　変わろうとしてる
    君との距離感　やけに遠くなる
    
    らりる　れるらるられりれ　らったった
    
    身の丈に合わない　恋をした
    葛藤 
    
    逸らす視線　流れる雲の色
    髪を風になびかす　きっかけを僕は見つけれず
    言葉を飲み　空の青に溶けた
    
    それ、無駄だとか
    これ、ダメだとか
    勝手に自分、決めつけては
    僕は僕をまた嫌になる
    やばやだ、そんな自分
    消えろ！
    
    ふとした仕草に　目線を逸らした僕
    窓際の僕と　君との距離をわきまえ
    閉ざした視界に　君が現れて
    「自分で壁を作るな」と怒った
    
    大切だと気付いた
    
    今
    リンリンと　鳴らすベルの音　君の声を背に感じ
    僕は　ペダルを漕いだ　君への思いを募らせて
    吝吝（リンリン）と　過ぎる時間と　君の鼓動を背で感じ
    僕は　呼吸を合わせる　君との時間に溶けるよう
    
    きっと 
    
    このままはダメと　ブレーキをかける　顔が熱くなる
    SentimentalLove　変わりたいほどに
    君に惹かれてく　言葉にできぬまま
    
    らりる　れるらるられりれ　らったった
    
    身の丈に合わない　恋をした
    違うな、、、
    変わろうとしている　僕の歌
    だった
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