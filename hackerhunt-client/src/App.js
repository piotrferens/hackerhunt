import React, { Component } from "react";
import glamorous from "glamorous";
import { Route } from "react-router-dom";

const Title = glamorous.a({
  fontSize: 20,
  textDecoration: "none",
  color: "black",
  fontWeight: "bold"
});

const Description = glamorous.p({});

const Author = glamorous.p({});

const Votes = glamorous.p({});

const HourDate = glamorous.p({});

const Comments = glamorous.p({});

const Tags = glamorous.p({});

class App extends Component {
  state = {
    posts: [],
    searchText: ""
  };
  componentDidMount() {
    console.log(this.props);
    const fetchPage = this.fetchPages(0);
  }

  fetchPages = page => {
    fetch(`http://localhost:8000/pages/${page}`)
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
    const tabPosts = filteredPosts.map(post => post);
    return (
      <div>
        <input onChange={this.onSearch} value={this.searchText} />
        <Route
          path="/page/:page"
          render={props => <Posts {...props} tabPosts={tabPosts} />}
        />
      </div>
    );
  }
}

class Posts extends Component {
  render() {
    return (
      <div>
        {this.props.tabPosts.map(post => (
          <article key={post.id}>
            <Title href={post.link} target="_blank">
              {post.title}
            </Title>
            <Description>{post.desc}</Description>
            <Author>{post.author}</Author>
            <Votes>{post.votes}</Votes>
            <HourDate>
              {Math.round((Date.now() - post.date * 1000) / 1000 / 60 / 60)}{" "}
              hours ago.
            </HourDate>
            <Comments>{post.comments}</Comments>
            <Tags>{post.tags}</Tags>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
