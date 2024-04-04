/* eslint-disable @next/next/no-page-custom-font */
import * as React from "react";
import UnderDevelopment from "@/components/UnderDevelopment";
import SEO from "@/components/SEO";
import styles from "@/styles/pages/woeic_stg.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default class WoeicMain extends React.Component {
  constructor() {
    super();
  }

  detectOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) {
      return "Windows";
    } else if (userAgent.indexOf("Mac") !== -1) {
      return "Mac OS";
    } else if (userAgent.indexOf("Linux") !== -1) {
      return "Linux";
    }
    return "Unknown";
  }

  render() {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&display=swap"
            rel="stylesheet"
          />
        </Head>
        <SEO
          pageTitle="WOEIC STG"
          pageDescription={"「WOEIC STG」紹介ページ"}
          contentId={1}
        />
        <div className={styles.woeic_header_whole}>
          <div className={styles.header}>
            <div>
              <Link href="../" className={styles.back_link}>
                <span className={styles.back_button}>
                  <FontAwesomeIcon
                    icon={faBackward}
                    className={styles.back_icon}
                  />
                </span>
              </Link>
              <div className={styles.header_icon}>
                <Image
                  src="/woeic_stg/woeic_icon.png"
                  fill
                  alt="woeic_icon"
                  className={styles.header_icon_img}
                />
              </div>
              WOEIC STG
            </div>
            <div>Shooting Game</div>
          </div>
        </div>
        <div className={styles.top_banner}>
          <div className={styles.top_banner_caption_1}>Learning</div>
          <div className={styles.top_banner_caption_2}>TOEIC&reg; Words</div>
          <div className={styles.top_banner_caption_3}>with Shooting Game</div>
          <div className={styles.top_banner_icon}>
            <Image
              src="/woeic_stg/woeic_icon.png"
              fill
              alt="woeic_icon"
              className={styles.top_banner_icon_img}
            />
          </div>
        </div>
        <div className={styles.blank} />
        <div className={styles.whatis_banner}>
          <div className={styles.whatis_title}>What is WOEIC STG?</div>
          <div className={styles.whatis_caption}>
            Learning while <span>playing</span>
          </div>
          <div className={styles.whatis_caption}>
            Judging words in <span>shooting games</span>
          </div>
          <div className={styles.whatis_caption}>
            Check the <span>wrong word</span> at the end of the game
          </div>
        </div>
        <div className={styles.download_banner}>
          <Link
            href="#downloads"
            style={{ textDecoration: "none" }}
            className={styles.download_link}
          >
            <div className={styles.download_button}>Download Now</div>
          </Link>
          <p className={styles.title} id="downloads">
            Downloads
          </p>
          <ul className={styles.vlist}>
            <li>
              Version 1.0
              <ul>
                <Link
                  href="https://drive.google.com/file/d/1NGC8WBbxbwwKv-uNrzH-fyZHx5ojJQkS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Windows</li>
                </Link>
                {/* <Link href=""><li>Mac OS</li></Link> */}
                <Link
                  href="https://drive.google.com/file/d/1MFS7JehnIw8tqgUvrjF-Q5Le5_cPWmZM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Linux</li>
                </Link>
              </ul>
            </li>
          </ul>
          <p className={styles.title}>Thanks</p>
          <p className={styles.scaption}>
            The Words in this game are taken from&nbsp;
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://quizlet.com/ja/content/toeic?utm_source=student-product-feature&utm_medium=email&utm_campaign=toeic-test"
            >
              <span>Quizlet</span>.
            </Link>
          </p>
          <p className={styles.scaption}>Thank you so much.</p>
          <p className={styles.title}>Play on PC</p>
          <p className={styles.caption}>
            You may need{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.oracle.com/java/technologies/downloads/"
            >
              <span>JDK</span>
            </Link>{" "}
            to play.
            <br />
            <br />
            (Windows version is bundled with JDK17 by default for running)
          </p>
        </div>
      </>
    );
  }
}
