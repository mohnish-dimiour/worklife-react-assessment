import React from "react";

export function Quote({ quote, author }) {
  return (
    <blockquote>
      <p>{quote}</p>
      <footer>{author}</footer>
    </blockquote>
  );
}
