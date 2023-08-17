import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/components/Layout.module.scss'

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div style={{
        userSelect: "none"
      }}
      className={styles.top}
      ontouchstart="">
        <Header />
        {this.props.children}
        <Footer />
      </div>)
  }
}
