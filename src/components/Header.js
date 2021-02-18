import React from "react";

export default function Header({ children, title, styleClass }) {
  return (
    <div className="container-fluid ">
      <div className={`row align-items-center text-center ${styleClass}`}>
        <h1
          style={{
            width: "100",
            margin: "auto",
          }}
          className="text-light text-center text-uppercase display-3 letter-spacing "
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

Header.defaultProps = {
  title: "Default title",
  styleClass: "header-hero",
};
