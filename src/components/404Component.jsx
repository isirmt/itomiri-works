import * as React from 'react'
import * as styles from '../styles/components/404Component.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export default class Component404 extends React.Component {
  render() {
    return (
      <div className={styles.frame}>
        <p><FontAwesomeIcon icon={faCircleExclamation} className={styles.search_magnify}
          style={{
            color: "black",
            position: "relative"
          }} /></p>
        <p>404 Not Found</p>
        <p>
          お探しのページは見つかりませんでした<br />
          上のバナーをクリックしてタイトルへ戻ってください!
        </p>
      </div>)
  }
}