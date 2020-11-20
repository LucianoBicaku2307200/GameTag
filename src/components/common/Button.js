import React from "react";

function Button({ link_url, content }) {
  return (
    <a
      href={link_url}
      className="text-5 font-medium px-5 py-3 text-center bg-yellow-theme"
    >
      {content}
    </a>
  );
}

export default Button;
