import React, { Component } from "react";
import Posts from "./Posts";
import menuTopics from "./Data";
import {
  Top,
  Logo,
  Input,
  MainDiv,
  Menu,
  Commercial,
  MenuDiv,
  TopicName,
  Navigation,
  Topics,
  Topic,
  Icon,
  NameTopic
} from "./Style";

class App extends Component {
  state = {
    posts: [],
    searchText: "",
    selectedTopic: ""
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

  onClickTopic = name => {
    this.setState({
      selectedTopic: this.state.selectedTopic === name ? "" : name
    });
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
          <Menu>
            <MenuDiv>
              <TopicName>TOPICS</TopicName>
              <Navigation>
                {menuTopics.map(topic => (
                  <Topics
                    key={topic.name}
                    hasChildren={topic.children.length !== 0}
                  >
                    <Topic
                      onClick={() => this.onClickTopic(topic.name)}
                      to={`/topic/${topic.name.toLowerCase()}/trending`}
                    >
                      <Icon>{topic.icon}</Icon>
                      <NameTopic>{topic.name}</NameTopic>
                    </Topic>
                    {this.state.selectedTopic === topic.name &&
                      topic.children.map(subtopic => (
                        <Topics key={subtopic.name} isChildren={true}>
                          <Topic
                            to={`/topic/${subtopic.name.toLowerCase()}/trending`}
                          >
                            <Icon> {subtopic.icon} </Icon>
                            <NameTopic>{subtopic.name}</NameTopic>
                          </Topic>
                        </Topics>
                      ))}
                  </Topics>
                ))}
              </Navigation>
            </MenuDiv>
          </Menu>
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
