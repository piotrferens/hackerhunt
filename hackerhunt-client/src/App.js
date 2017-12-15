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
        <div
          style={{
            display: "block",
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto",
            boxSizing: "border-box"
          }}
        >
          <header
            style={{
              display: "flex",
              padding: "36px 32px"
            }}
          >
            <form
              style={{
                display: "block",
                width: "100%",
                position: "relative",
                margin: 0,
                padding: 0,
                border: 0,
                fontSize: "100%",
                font: "inherit",
                verticalAlign: "baseline"
              }}
            >
              <fieldset
                style={{
                  border: "none",
                  display: "block",
                  margin: "auto",
                  width: "53%"
                }}
              >
                <input
                  style={{
                    width: "100%",
                    maxWidth: "calc(70% - 80px)",
                    height: "32px",
                    lineHeight: "32px"
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
      </div>
    );
  }
}

export default App;
