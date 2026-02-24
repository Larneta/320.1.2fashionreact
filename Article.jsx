import React from "react";
import "./Article.css";

function Article({ date, title, image, content }) {
  return (
    <article className="blog-post">
      <p className="date">{date}</p>

      <h3>{title}</h3>

      <img src={image} alt="Street Fashion" />

      <p className="content">
        {content}
      </p>

      <p className="continue">Continues ...</p>
    </article>
  );
}

export default Article;