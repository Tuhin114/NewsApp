//Type rce
import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, mode } =
    props;
  let myStyle = {
    color: props.mode === "dark" ? "white" : "rgb(139 133 133)",
    backgroundColor: props.mode === "dark" ? "rgb(139 133 133)" : "white",
  };

  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          border: "1px solid white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.moneycontrol.com/static-mcnews/2023/10/Nifty_sensex_marketup-770x433.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body"
          // style={{
          //   backgroundColor: props.mode === "light" ? "white" : "black",
          //   color: props.mode === "light" ? "black" : "white",
          // }}
          style={myStyle}
        >
          <h5
            className="card-title"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {title}...
          </h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className={`btn btn-sm btn-${mode}`}
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
