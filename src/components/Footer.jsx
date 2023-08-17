import * as React from 'react'
import * as styles from '@/styles/Components/Footer.module.scss'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'

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

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={m_PLUS_Rounded_1c.className}>
        <div className={styles.footer_whole}>
          <p className={dotGothic16.className}>ミリワークス</p>
          <p className={dotGothic16.className}>in itomiri.com</p>
          <p>&copy;2023 井筒 ミリ</p>
        </div>
      </footer>)
  }
}