import React, { Component } from "react";
import glamorous from "glamorous";

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
    this.fetchPages(0);
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
    return (
      <div>
        <header
          style={{
            display: "flex"
          }}
        >
          <form
            style={{
              width: "100%",
              position: "relative"
            }}
          >
            <fieldset
              style={{
                border: "none",
                display: "block",
                margin: "auto",
                width: "50%"
              }}
            >
              <input
                style={{
                  width: "100%",
                  maxWidth: "calc(70% - 80px)"
                }}
                onChange={this.onSearch}
                value={this.searchText}
              />
            </fieldset>
          </form>
        </header>
        <div style={{ margin: "auto", width: "50%" }}>
          {this.state.posts.map(post => (
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
      </div>
    );
  }
}

export default App;
