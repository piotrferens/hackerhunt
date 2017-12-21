import React, { Component } from "react";
import Posts from "./Posts";
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

    const menuTopics = [
      {
        icon: "🚀",
        topic: "Development",
        children: [
          { icon: "⚙️", topic: "Devops" },
          { icon: "🗄", topic: "Databases" },
          { icon: "🔌", topic: "Apis" },
          { icon: "🏛", topic: "Libraries" }
        ]
      },
      {
        icon: "🛠",
        topic: "System",
        children: [
          { icon: "🛡", topic: "Security" },
          { icon: "⛈", topic: "Cloud" },
          { icon: "🍏", topic: "Aple" }
        ]
      },
      {
        icon: "🎛",
        topic: "Tools",
        children: [{ icon: "📋", topic: "Productivity" }]
      },
      { icon: "🎓", topic: "Data science", children: [] },
      { icon: "🔗", topic: "Blockchain", children: [] },
      { icon: "📱", topic: "Mobile", children: [] },
      { icon: "✨", topic: "Awesone lists", children: [] },
      { icon: "🤙", topic: "Social", children: [] },
      { icon: "🔰", topic: "Visual", children: [] },
      {
        icon: "🍺",
        topic: "Open source",
        children: [
          { icon: "©️", topic: "C" },
          { icon: "💰", topic: "Javascrpit" },
          { icon: "⌨️", topic: "Go" },
          { icon: "♦️", topic: "Ruby" },
          { icon: "🧥", topic: "Python" }
        ]
      },
      { icon: "🗂", topic: "All topics", children: [] }
    ];

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
                  <Topics>
                    <Topic>
                      <Icon>{topic.icon}</Icon>
                      <NameTopic>{topic.topic}</NameTopic>
                    </Topic>
                    <div key={topic.topic}>
                      {topic.children.map(abc => (
                        <Topics>
                          <Topic>
                            <Icon> {abc.icon} </Icon>
                            <NameTopic>{abc.topic}</NameTopic>
                          </Topic>
                        </Topics>
                      ))}
                    </div>
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
