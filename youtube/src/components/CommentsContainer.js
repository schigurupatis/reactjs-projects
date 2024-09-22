import React from "react";

const commentsData = [
  {
    name: "Username of the commenter",
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
    name: "Username of the commenter",
    avatar: "https://avatar.iran.liara.run/public",
    text: "This is a comment",
    replies: [],
  },
  {
    name: "Username of the commenter",
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

const Comment = ({ data }) => {
  const { name, avatar, text, replies } = data;
  return (
    <div className="flex gap-3">
      <div>
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      </div>
      <div>
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
        <p>{replies}</p>
        {/* {replies.map((reply) => (
          <Comment key={reply.name} {...reply} />
        ))} */}
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, idx) => <Comment key={idx} data={comment} />);
};

const CommentsContainer = () => {
  return (
    <div>
      <Comment data={commentsData[1]} />
      {/* <CommentList comments={commentsData} /> */}
    </div>
  );
};

export default CommentsContainer;
