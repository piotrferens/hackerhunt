import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";

const PostsWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
  flex: 5
});

const Post = glamorous.article({
  margin: "auto",
  width: 500
});

const MainDiv = glamorous.div({
  display: "flex",
  justifyContent: "center"
});

const Title = glamorous.h2({
  fontSize: 20,
  textDecoration: "none",
  color: "black",
  fontWeight: "bold"
});

const Menu = glamorous.div({
  flex: 2,

  justifyContent: "flex-end",
  textAlign: "left"
});

const Commercial = glamorous.div({
  flex: 3
});

const Top = glamorous.div({
  display: "flex"
});

const Logo = glamorous.div({
  flex: 2
});

const DivBottomButton = glamorous.div({
  margin: "auto"
});

const Description = glamorous.p({});

const Author = glamorous.p({});

const Votes = glamorous.p({});

const HourDate = glamorous.p({});

const Comments = glamorous.p({});

const Tags = glamorous.p({});

const Input = glamorous.input({
  margin: "auto",
  height: "25px",
  flex: 5
});

const ShowMore = glamorous.strong({
  margin: "auto",
  marginBottom: 15,
  textAlign: "center"
});

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
      <div>
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

class Posts extends Component {
  state = {
    showingAll: false
  };

  showMore = () => {
    this.setState({ showingAll: true });
  };

  render() {
    const { tabPosts, pathname } = this.props;
    const array = pathname.split("/");
    const nextPage = Number(array[array.length - 1]) + 1;
    return (
      <PostsWrapper>
        TODAY
        {tabPosts
          .slice(0, this.state.showingAll ? tabPosts.length : 10)
          .map(post => (
            <Post key={post.id}>
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
            </Post>
          ))}
        {tabPosts.length > 10 && !this.state.showingAll ? (
          <ShowMore onClick={this.showMore}>
            Show more({tabPosts.length - 10})
          </ShowMore>
        ) : null}
        <DivBottomButton>
          <Link to={`/pages/${nextPage}`}> PREVIOUS DAY </Link>
        </DivBottomButton>
      </PostsWrapper>
    );
  }
}

export default App;
