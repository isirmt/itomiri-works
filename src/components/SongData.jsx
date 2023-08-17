import * as React from 'react'
import styles from '@/styles/components/SongData.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { M_PLUS_Rounded_1c } from 'next/font/google'

const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default class SongFrame extends React.Component {
  constructor(props) {
    super(props)
    this.meta = this.props.meta
    this.lyrics = this.props.lyrics == null ? "" : this.props.lyrics
  }
  render() {
    const personsData = this.meta.persons.map((person, i) => {
      const personKey = Object.keys(person)[0]
      const personValue = person[personKey]

      return (
        <p key={i}>{personKey}: {personValue}</p>
      )
    })

    const lyricsLines = this.lyrics.split('\n')
    const lyricsElements = lyricsLines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  

    return (
      <div className={styles.song_frame}>
        <div className={styles.song_thumbnail}>
          <Image
            src={this.meta.thumbnail}
            alt={this.meta.title + "'s Thumbnail"}
            layout='fill'
            className={styles.work_card_image} />
        </div>
        <div className={styles.song_caption}>
          <p className={`${styles.song_title} ${m_PLUS_Rounded_1c.className}`}>{this.meta.title}</p>
          <div className={`${styles.song_person} ${m_PLUS_Rounded_1c.className}`}>
            {personsData}
          </div>
        </div>
        <div className={`${styles.song_links} ${m_PLUS_Rounded_1c.className}`}>
          {this.meta.YouTube != "" ? (
            <Link href={this.meta.YouTube} className={styles.song_link} target="_blank" rel="noopener">
              <div className={styles.song_YouTube}>YouTube</div>
            </Link>) : (
            <></>
          )
          }
          {this.meta.niconico != "" ? (
            <Link href={this.meta.niconico} className={styles.song_link} target="_blank" rel="noopener">
              <div className={styles.song_niconico}>niconico</div>
            </Link>) : (
            <></>
          )
          }
          {this.meta.SoundCloud != "" ? (
            <Link href={this.meta.SoundCloud} className={styles.song_link} target="_blank" rel="noopener">
              <div className={styles.song_SoundCloud}>SoundCloud</div>
            </Link>) : (
            <></>
          )
          }

        </div>
        <div className={`${styles.song_lyrics} ${m_PLUS_Rounded_1c.className}`}>
          <p>{lyricsElements}</p>
        </div>
      </div>)
  }
}