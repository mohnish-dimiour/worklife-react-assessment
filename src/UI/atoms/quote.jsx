import React from "react";

export function Quote({ quote, author }) {
  return (
    <>
      <blockquote>{quote}</blockquote>
      <cite>{author}</cite>
    </>
  );
}
