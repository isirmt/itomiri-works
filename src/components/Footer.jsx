import * as React from 'react'
import * as styles from '../styles/components/Footer.module.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={styles.footer_whole}>
          <p>ミリワークス</p>
          <p>in itomiri.com</p>
          <p>&copy;2023 井筒 ミリ</p>
        </div>
      </footer>)
  }
}