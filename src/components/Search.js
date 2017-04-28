import React, { Component } from "react"
import "../styles/search.css"
import search from '../../public/search.png'

export default class Search extends Component {
  render() {
    return (
      <div className="searchDiv">
        <input
          onChange={this.props.handleSearch}
          className="search"
          placeholder="search">
        </input>
        <img
          src={search}
          className="searchIcon"
          onClick={this.props.fetchPosts}>
        </img>
      </div>
    )
  }
}
