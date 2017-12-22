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

const menuTopics = [
  {
    icon: "🚀",
    name: "Development",
    children: [
      { icon: "⚙️", name: "Devops" },
      { icon: "🗄", name: "Databases" },
      { icon: "🔌", name: "Apis" },
      { icon: "🏛", name: "Libraries" }
    ]
  },
  {
    icon: "🛠",
    name: "System",
    children: [
      { icon: "🛡", name: "Security" },
      { icon: "⛈", name: "Cloud" },
      { icon: "🍏", name: "Aple" }
    ]
  },
  {
    icon: "🎛",
    name: "Tools",
    children: [{ icon: "📋", name: "Productivity" }]
  },
  { icon: "🎓", name: "Data science", children: [] },
  { icon: "🔗", name: "Blockchain", children: [] },
  { icon: "📱", name: "Mobile", children: [] },
  { icon: "✨", name: "Awesone lists", children: [] },
  { icon: "🤙", name: "Social", children: [] },
  { icon: "🔰", name: "Visual", children: [] },
  {
    icon: "🍺",
    name: "Open source",
    children: [
      { icon: "©️", name: "C" },
      { icon: "💰", name: "Javascrpit" },
      { icon: "⌨️", name: "Go" },
      { icon: "♦️", name: "Ruby" },
      { icon: "🧥", name: "Python" }
    ]
  },
  { icon: "🗂", name: "All topics", children: [] }
];

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
                  <Topics key={topic.name}>
                    <Topic onClick={() => this.onClickTopic(topic.name)}>
                      <Icon>{topic.icon}</Icon>
                      <NameTopic>{topic.name}</NameTopic>
                    </Topic>
                    {this.state.selectedTopic === topic.name &&
                      topic.children.map(subtopic => (
                        <Topics key={subtopic.name} isChildren={true}>
                          <Topic>
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
