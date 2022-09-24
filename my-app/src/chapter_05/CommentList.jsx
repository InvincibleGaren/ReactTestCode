import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다",
  },
  {
    name: "유재석",
    comment: "안ㅁㄴㅇ",
  },
  {
    name: "강민경",
    comment: "안ㅁㄴㅇ",
  },
];

function CommentList(props) {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} Comment={comment.comment}></Comment>
        );
      })}
    </div>
  );
}
export default CommentList;
