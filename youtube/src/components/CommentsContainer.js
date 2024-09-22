import React from "react";

const commentsData = [
  {
    name: "1",
    avatar: "https://avatar.iran.liara.run/public",
    text: "This is a comment",
    replies: [
      {
        name: "1.1",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
      {
        name: "1.2",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
    ],
  },
  {
    name: "2",
    avatar: "https://avatar.iran.liara.run/public",
    text: "This is a comment",
    replies: [],
  },
  {
    name: "3",
    avatar: "https://avatar.iran.liara.run/public",
    text: "This is a comment",
    replies: [
      {
        name: "3.1",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
      {
        name: "3.2",
        avatar: "https://avatar.iran.liara.run/public",
        text: "This is a reply",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return <div>CommentsContainer</div>;
};

export default CommentsContainer;
