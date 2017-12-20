import React, { Component } from "react";
import Posts from "./Posts";
import { Top, Logo, Input, MainDiv, Menu, Commercial } from "./Style";

class App extends Component {
  state = {
    posts: [],
    searchText: ""
  };

  componentDidMount() {
    this.fetchPages(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.fetchPages(nextProps.location.pathname);
    }
  }

  fetchPages = pathname => {
    const page = pathname === "/" ? "/pages/0" : pathname;
    fetch(`http://localhost:8000${page}`)
      .then(res => res.json())
      .then(res => this.setState({ posts: res.data }));
  };

  onSearch = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const filteredPosts = this.state.posts.filter(post =>
      post.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <div style={{ maxWidth: 1080, margin: "auto" }}>
        <Top>
          <Logo>LOGO</Logo>
          <Input onChange={this.onSearch} value={this.searchText} />
          <div style={{ flex: 3 }} />
          <div />
        </Top>
        <MainDiv>
          <Menu>MENU</Menu>
          <Posts
            pathname={this.props.location.pathname}
            tabPosts={filteredPosts}
          />
          <Commercial>COMMERCIAL</Commercial>
        </MainDiv>
      </div>
    );
  }
}

export default App;
