import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  PostsWrapper,
  Header,
  ActualDay,
  AllPosts,
  Post,
  Title,
  Description,
  Author,
  Votes,
  HourDate,
  Activity,
  Comments,
  Tags,
  ShowMore,
  DivBottomButton
} from "./Style";

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
        <AllPosts>
          <Header>
            <ActualDay>TODAY</ActualDay>
          </Header>
          {tabPosts
            .slice(0, this.state.showingAll ? tabPosts.length : 10)
            .map(post => (
              <Post key={post.id}>
                <Activity
                  href={`https://news.ycombinator.com/item?id=${post.id}`}
                  target="_blank"
                >
                  <Votes>{post.votes}</Votes>
                  <Comments>{post.comments}</Comments>
                </Activity>
                <div>
                  <Title href={post.link} target="_blank">
                    {post.title}
                  </Title>
                  <Description>{post.desc}</Description>
                  <Author>{post.author}</Author>

                  <HourDate>
                    {Math.round(
                      (Date.now() - post.date * 1000) / 1000 / 60 / 60
                    )}{" "}
                    hours ago.
                  </HourDate>
                  <Tags>{post.tags}</Tags>
                </div>
              </Post>
            ))}
          {tabPosts.length > 10 && !this.state.showingAll ? (
            <ShowMore onClick={this.showMore}>
              Show more({tabPosts.length - 10})
            </ShowMore>
          ) : null}
          <DivBottomButton>
            <Link
              style={{
                textDecoration: "none",
                color: "#2F2F2F",
                display: "inline-block",
                border: "1px solid #2F2F2F",
                fontWeight: 500,
                borderRadius: 2,
                padding: "8px 34px",
                textTransform: "uppercase",
                fontSize: 14
              }}
              to={`/pages/${nextPage}`}
            >
              {" "}
              PREVIOUS DAY{" "}
            </Link>
          </DivBottomButton>
        </AllPosts>
      </PostsWrapper>
    );
  }
}

export default Posts;
