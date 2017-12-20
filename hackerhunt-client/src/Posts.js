import React, { Component } from "react";
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
  DateAuthorTags,
  HourDate,
  Activity,
  Comments,
  Tags,
  ShowMore,
  DivBottomButton,
  PreviousDay
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
                  <DateAuthorTags>
                    <HourDate>
                      {Math.round(
                        (Date.now() - post.date * 1000) / 1000 / 60 / 60
                      )}{" "}
                      hours ago{" "}
                    </HourDate>
                    <Author>{post.author + " "}</Author>
                    <Tags>{post.tags}</Tags>
                  </DateAuthorTags>
                </div>
              </Post>
            ))}
          {tabPosts.length > 10 && !this.state.showingAll ? (
            <ShowMore onClick={this.showMore}>
              Show more({tabPosts.length - 10})
            </ShowMore>
          ) : null}
          <DivBottomButton>
            <PreviousDay
              onClick={() => this.setState({ showingAll: false })}
              to={`/pages/${nextPage}`}
            >
              PREVIOUS DAY{" "}
            </PreviousDay>
          </DivBottomButton>
        </AllPosts>
      </PostsWrapper>
    );
  }
}

export default Posts;
