import React, { useRef } from 'react'
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import works from '../../json/worksList'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      searchResults: [],
      isInputSelected: false,
      isHeaderClicked: false,
      isResultHovering: false
    }
    this.inputRef = React.createRef()
    this.headerRef = React.createRef()
  }

  handleButtonClick = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus()
      this.setState({ isInputSelected: true })
    }
  }

  handleResultEnter = () => {
    this.setState({ isResultHovering: true })
  }

  handleResultLeave = () => {
    this.setState({ isResultHovering: false })
  }

  clearInput = () => {
    this.setState({ searchTerm: "" })
    this.setState({ searchResults: [] })
    this.setState({ isInputSelected: false })
  }

  handleResultClick = () => {
    this.setState({ searchResults: [] })
    this.setState({ isHeaderClicked: false })
  }

  deselectInput = () => {
    this.inputRef.current.blur()
    this.setState({ isInputSelected: false })
  }

  handleBlur = () => {
    if (this.state.searchTerm == '') {
      this.setState({ searchResults: [] })
    }
    this.setState({ isInputSelected: false })
  }

  handleKeyDown = (event) => {
    if (event.key === '/') {
      event.preventDefault()
      this.handleButtonClick()
    }

    if (event.key === 'Escape') {
      this.deselectInput()
      this.setState({ searchResults: [] })
      this.setState({ isHeaderClicked: false })
    }
  }

  handleDocumentClick = (event) => {
    if (this.headerRef.current && !this.headerRef.current.contains(event.target)) {
      // ヘッダー外のクリック
      this.setState({ searchResults: [] })
      this.setState({ isHeaderClicked: false })
    } else {
      this.setState({ isHeaderClicked: true })
    }
  }

  handleSearch = (event) => {
    const searchTerm = event.target.value
    this.setState({ searchTerm })

    this.setState({ isInputSelected: true })

    if (searchTerm == "") {
      this.setState({ searchResults: [] })
      return
    }

    const results = works.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    this.setState({ searchResults: results })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
    document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    document.removeEventListener('click', this.handleDocumentClick)
  }

  render() {
    const { searchTerm, searchResults } = this.state

    return (
      <header className={styles.header_whole} ref={this.headerRef}>
        <nav className={styles.header_nav}>
          <div className={`${this.state.isInputSelected || this.state.searchTerm != '' ? styles.hide : ''}`}>
            <span>
              <Link href="/" className={styles.header_home_link}>ミリワークス</Link>
            </span>
            <span>
              in <span className={styles.header_external_link}>
                itomiri.<Link href="https://itomiri.com" target="_blank" rel="noopener noreferrer" className={styles.line}>com</Link>
              </span>
            </span>
          </div>
          <div>
            <input
              placeholder={"Press \"/\" to Search"}
              type={"text"}
              value={searchTerm}
              onChange={this.handleSearch}
              onFocus={this.handleSearch}
              onBlur={this.handleBlur}
              ref={this.inputRef}
              className={`${styles.search_input}
                ${this.state.isInputSelected || this.state.searchTerm != '' ? styles.inputting : ''}`}
            />
            <button id="header-search-click"
              className={`
                ${styles.search_button} 
                ${this.state.isInputSelected || this.state.searchTerm != '' ? styles.in : ''}
              `}
              onClick={searchTerm == '' ? this.handleButtonClick : this.clearInput}>
              {searchTerm == '' ? (
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search_magnify} />) : (
                <FontAwesomeIcon icon={faXmark} className={styles.search_magnify} />
              )}
            </button>
          </div>
        </nav>
        {searchResults.length != 0 ? (
          <div className={styles.result_frame}>
            {/* ヒット数1以上 */
              searchResults.map((item, index) => (
                <Link href={item.link} key={index} className={styles.result_link}>
                  <div className={`${styles.result_box}`}
                    onClick={this.handleResultClick}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <ul>
                      {item.tags.map((node, i) => (
                        <li key={i}>{node.name}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))
            }
          </div>
        ) : this.state.searchTerm == '' || !this.state.isHeaderClicked ?
          /* 入力がない || ヘッダー領域がクリックされていない */ <></> :
          !this.state.isInputSelected ?
            /* Inputが選択されていない */ !this.state.isResultHovering ? <></> :
              <div className={styles.result_frame} onMouseEnter={this.handleResultEnter} onMouseLeave={this.handleResultLeave}>
                <div className={styles.result_link}>
                  <div className={`${styles.result_box}`}
                    onClick={this.clearInput}>
                    <p>Not Found</p>
                    <p>検索欄より入力し直すか、<br />「X」ボタンを押してクリアしてください</p>
                    <ul>
                      <li>Search</li>
                      <li>検索</li>
                      <li>ヒットなし</li>
                    </ul>
                  </div>
                </div>
              </div>
            : (
              /* Inputが選択された */
              <div className={styles.result_frame} onMouseEnter={this.handleResultEnter} onMouseLeave={this.handleResultLeave}>
                <div className={styles.result_link}>
                  <div className={`${styles.result_box}`}
                    onClick={this.clearInput}>
                    <p>Not Found</p>
                    <p>検索欄より入力し直すか、<br />「X」ボタンを押してクリアしてください</p>
                    <ul>
                      <li>Search</li>
                      <li>検索</li>
                      <li>ヒットなし</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
        }
      </header>)
  }
}
