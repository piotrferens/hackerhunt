import glamorous from "glamorous";

export const PostsWrapper = glamorous.div({
  display: "flex",
  flexDirection: "column",
  flex: 5
});

export const Post = glamorous.article({
  margin: "auto",
  width: 500
});

export const MainDiv = glamorous.div({
  display: "flex",
  justifyContent: "center"
});

export const Title = glamorous.h2({
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
  display: "flex"
});

export const Logo = glamorous.div({
  flex: 2
});

export const DivBottomButton = glamorous.div({
  margin: "auto"
});

export const Description = glamorous.p({});

export const Author = glamorous.p({});

export const Votes = glamorous.p({});

export const HourDate = glamorous.p({});

export const Comments = glamorous.p({});

export const Tags = glamorous.p({});

export const Input = glamorous.input({
  margin: "auto",
  height: "25px",
  flex: 5
});

export const ShowMore = glamorous.strong({
  margin: "auto",
  marginBottom: 15,
  textAlign: "center"
});
