import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as styles from '../styles/components/WorksCard.module.scss'

export default class WorkCard extends React.Component {
  render() {
    return (
      <div href={this.props.link} className={styles.card_link} key={this.props.id}>
        <div className={styles.work_card} key={this.props.id}>
          <div>
            <Link href={this.props.link}>
              <Image
                src={this.props.img}
                alt='works_pic'
                fill
                className={styles.work_card_image}
                key={this.props.id} />
            </Link>
          </div>
          <div>
            <Link href={this.props.link} key={this.props.id}>
              <p key={this.props.id} >{this.props.title}</p>
            </Link>
          </div>
          <div>
            <Link href={this.props.link} key={this.props.id}>
              <p key={this.props.id} >{this.props.description}</p>
            </Link>
          </div>
          <div>
            <ul key={this.props.id} >
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