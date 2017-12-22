import glamorous from "glamorous";
import { Link } from "react-router-dom";

export const Input = glamorous.input({
  margin: "auto",
  height: "25px",
  flex: 5
});

export const PostsWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
  flex: 5
});

export const Post = glamorous.article({
  display: "flex",
  paddingBottom: 10,
  marginBottom: 10,
  width: 500,
  borderBottom: "1px solid #b1a3a3"
});

export const MainDiv = glamorous.div({
  display: "flex",
  justifyContent: "center"
});

export const Title = glamorous.a({
  fontSize: 20,
  textDecoration: "none",
  color: "black",
  fontWeight: "bold"
});

export const Menu = glamorous.div({
  flex: 2,
  justifyContent: "flex-end",
  textAlign: "left"
});

export const Commercial = glamorous.div({
  flex: 3
});

export const Top = glamorous.div({
  display: "flex",
  marginBottom: 50
});

export const Logo = glamorous.div({
  flex: 2
});

export const DivBottomButton = glamorous.footer({
  textAlign: "center",
  margin: "40px 0 60px"
});

export const Description = glamorous.p({
  fontSize: 14
});

export const Author = glamorous.a({});

export const Votes = glamorous.p({
  marginTop: 0
});

export const HourDate = glamorous.time({});

export const Activity = glamorous.a({
  textDecoration: "none",
  color: "grey",
  width: 50
});

export const Comments = glamorous.p({});

export const Tags = glamorous.a({});

export const ShowMore = glamorous.strong({
  display: "block",
  textAlign: "center",
  cursor: "pointer"
});

export const Header = glamorous.header({
  display: "flex"
});

export const ActualDay = glamorous.h3({
  marginBottom: 25
});

export const AllPosts = glamorous.div({
  margin: 0
});

export const DateAuthorTags = glamorous.summary({});

export const PreviousDay = glamorous(Link)({
  textDecoration: "none",
  color: "#2F2F2F",
  display: "inline-block",
  border: "1px solid #2F2F2F",
  fontWeight: 500,
  borderRadius: 2,
  padding: "8px 34px",
  textTransform: "uppercase",
  fontSize: 14,
  ":hover": {
    color: "red",
    border: "1px solid red"
  }
});

export const MenuDiv = glamorous.div({});

export const TopicName = glamorous.h3({
  textTransform: "uppercase",
  fontSize: 12,
  color: "#797979",
  marginBottom: 24
});

export const Navigation = glamorous.nav({});

export const Topics = glamorous.div(props => ({
  marginLeft: props.isChildren ? 20 : 0
}));

export const Topic = glamorous.a({
  display: "block",
  cursor: "pointer",
  padding: "5px 0",
  whiteSpace: "nowrap"
});

export const Icon = glamorous.span({});

export const NameTopic = glamorous.strong({
  fontSize: 14,
  color: "#797979",
  font: "inherit"
});
