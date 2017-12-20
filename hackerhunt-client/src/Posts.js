import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  PostsWrapper,
  Post,
  Title,
  Description,
  Author,
  Votes,
  HourDate,
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

export default Posts;
