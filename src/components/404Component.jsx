import * as React from 'react'
import * as styles from '@/styles/Components/404Component.module.scss'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default class Component404 extends React.Component {
  render() {
    return (
      <div className={styles.frame}>
        <p><FontAwesomeIcon icon={faCircleExclamation} className={styles.search_magnify}
          style={{
            color: "black",
            position: "relative"
          }} /></p>
        <p className={dotGothic16.className}>404 Not Found</p>
        <p className={m_PLUS_Rounded_1c.className}>
          お探しのページは見つかりませんでした<br />
          上のバナーをクリックしてタイトルへ戻ってください!
        </p>
      </div>)
  }
}