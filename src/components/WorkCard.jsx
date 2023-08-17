import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as styles from '@/styles/Components/WorksCard.module.scss'
import { M_PLUS_Rounded_1c } from 'next/font/google'

const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default class WorkCard extends React.Component {
  render() {
    return (
      <div href={this.props.link} className={styles.card_link} key={this.props.id} ontouchstart="">
        <div className={styles.work_card} key={this.props.id}>
          <div>
            <Link href={this.props.link}>
              <Image
                src={this.props.img}
                alt='works_pic'
                layout='fill'
                className={styles.work_card_image}
                key={this.props.id} />
            </Link>
          </div>
          <div>
            <Link href={this.props.link} key={this.props.id}>
              <p className={m_PLUS_Rounded_1c.className} key={this.props.id} >{this.props.title}</p>
            </Link>
          </div>
          <div>
            <Link href={this.props.link} key={this.props.id}>
              <p className={m_PLUS_Rounded_1c.className} key={this.props.id} >{this.props.description}</p>
            </Link>
          </div>
          <div>
            <ul className={m_PLUS_Rounded_1c.className} key={this.props.id} >
              {this.props.tags.map((node) => (
                <li key={node.id} value={node.name} onClick={this.props.tagFunc}
                  className={this.props.sortedTags.includes(node.name) ? styles.cancel : ''} >{node.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>)
  }
}