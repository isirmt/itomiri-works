import * as React from 'react'
import * as styles from '../styles/components/UnderDevelopment.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export default class UnderDevelopment extends React.Component {
  render() {
    return (
      <div className={styles.frame}>
        <p><FontAwesomeIcon icon={faCircleExclamation} className={styles.search_magnify}
          style={{
            color: "black",
            position: "relative"
          }} /></p>
        <p>現在このページは開発中です</p>
        <p>Coming Soon...</p>
      </div>)
  }
}