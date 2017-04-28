import React, { Component } from "react"
import "../styles/pageArrows.css"
import rightArrow from '../../public/rightArrow.png'
import leftArrow from '../../public/leftArrow.png'

export default class PageArrows extends Component {
  render() {
    return(
      <div className="pageArrows">
        <img src={leftArrow} className="leftArrow"></img>
        <img src={rightArrow} className="rightArrow"></img>
      </div>
    )
  }
}
