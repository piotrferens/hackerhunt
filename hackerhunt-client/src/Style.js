import glamorous from "glamorous";

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

export const Description = glamorous.p({});

export const Author = glamorous.p({});

export const Votes = glamorous.p({
  marginTop: 0
});

export const HourDate = glamorous.p({});

export const Activity = glamorous.a({
  textDecoration: "none",
  width: 50
});

export const Comments = glamorous.p({});

export const Tags = glamorous.p({});

export const ShowMore = glamorous.strong({
  display: "block",
  marginBottom: 15,
  textAlign: "center"
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
