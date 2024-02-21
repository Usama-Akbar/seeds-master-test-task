import React from "react";
import "../style/Post.css";
import InstaPostList from "../components/InstaPostList";

function Post() {
  return (
    <>
      <section className="insta-post">
        <ul className="insta-post-list">
          <li className="insta-post-item">
            <InstaPostList imgNo={"1"} />
          </li>
          <li className="insta-post-item">
            <InstaPostList imgNo={"2"} />
          </li>
          <li className="insta-post-item">
            <InstaPostList imgNo={"3"} />
          </li>
          <li className="insta-post-item">
            <InstaPostList imgNo={"4"} />
          </li>
          <li className="insta-post-item">
            <InstaPostList imgNo={"5"} />
          </li>
        </ul>
      </section>
    </>
  );
}

export default Post;
