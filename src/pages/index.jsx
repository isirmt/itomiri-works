import styles from '../styles/pages/Home.module.scss'
import * as React from 'react'
import works from '../../json/worksList'
import WorkCard from '@/components/WorkCard'
import SEO from '@/components/SEO'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filterTags: [],
      isMenuOpen: false
    }
    this.works = works
    this.filteredWorks = this.works

    this.containerRef = React.createRef()

    this.uniqueTags = Array.from(new Set(works.flatMap(item => item.tags.map(tag => tag.name))))
  }

  resetTags = () => {
    this.setState({ filterTags: [] })
    this.uniqueTags.forEach((tag) => {
      const checkbox = document.getElementById("sortTags:" + tag)
      if (checkbox) {
        checkbox.checked = false
      }
    })
  }

  addTagFromWork = (event) => {
    var { filterTags } = this.state
    const index = filterTags.indexOf(event.target.innerHTML)
    const checkbox = document.getElementById("sortTags:" + event.target.innerHTML)
    if (index === -1) {
      filterTags = [...this.state.filterTags, event.target.innerHTML]
      if (checkbox) {
        checkbox.checked = true
      }
    } else {
      filterTags = filterTags.filter(filterTag => filterTag !== event.target.innerHTML)
      if (checkbox) {
        checkbox.checked = false
      }
    }
    this.setState({ filterTags: filterTags })
  }

  filter = () => {

    this.filteredWorks = this.works.filter(node =>
      this.state.filterTags.length > 0
        ? this.state.filterTags.every(filterTag =>
          node.tags.map(tag => tag.name).includes(filterTag)
        )
        : this.works)
  }

  filterHandler = (event) => {
    if (event.target.checked) {
      this.setState({ filterTags: [...this.state.filterTags, event.target.value] })
    } else {
      this.setState({ filterTags: this.state.filterTags.filter(filterTag => filterTag !== event.target.value) })

    }
  }

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  handleDocumentClick = (event) => {
    const containerElement = this.containerRef.current

    if (containerElement && !containerElement.contains(event.target)) {

      const excludedButtons = document.querySelectorAll('.exclude-click')
      let isExcludedButtonClicked = false

      for (const button of excludedButtons) {
        if (button.contains(event.target)) {
          isExcludedButtonClicked = true
          break
        }
      }

      if (!isExcludedButtonClicked) {
        this.isMenuOpen = false
        this.setState({
          isMenuOpen: false
        })
      }
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick)
  }

  render() {
    this.filter()
    return (
      <>
        <SEO />
        <>
          <button className={`${styles.tags_button} ${this.state.isMenuOpen ? styles.open : ''} exclude-click`} onClick={this.toggleMenu} />
          <div className={`${styles.all_tags_box} ${this.state.isMenuOpen ? styles.open : ''}`} ref={this.containerRef}>
            <div className={styles.all_tags_area}>
              <div className={styles.tag_div}>
                <button
                  onClick={this.resetTags}
                  className={styles.reset_tags}>
                  Tag Reset
                </button>
              </div>
              {
                this.uniqueTags.map((item, index) => (
                  <div key={index} className={styles.tag_div}>
                    <label htmlFor={"sortTags:" + item} key={index}>
                      <input
                        type="checkbox"
                        onChange={this.filterHandler}
                        value={item}
                        id={"sortTags:" + item}
                        className={styles.check}
                      />
                      <span className={styles.check_string}>{item}</span>
                    </label>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.works}>
            {
              this.filteredWorks.length > 0 ?
                this.filteredWorks.map((node, index) => (
                  <WorkCard
                    key={index}
                    id={index}
                    title={node.title}
                    description={node.description}
                    link={node.link}
                    tags={node.tags}
                    img={node.img}
                    className={styles.work}
                    tagFunc={this.addTagFromWork}
                    sortedTags={this.state.filterTags} />
                )) : (
                  <div className={styles.not_found}>
                    <p> <FontAwesomeIcon icon={faCircleExclamation} className={styles.search_magnify}
                      style={{
                        color: "black",
                        position: "relative",
                        top: ".1rem",
                        width: "2rem"
                      }} /></p>
                    <p>Not Found</p>
                    <button onClick={this.resetTags} className={`${styles.reset_button}`}>Reset Tags</button>
                  </div>
                )}
          </div>
        </>
      </>
    )
  }
}
