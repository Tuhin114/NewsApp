//Type rce
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types"; //impt
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const updateNews = async () => {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      try {
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Handle error state or show an error message to the user
      } finally {
        setLoading(false);
        props.setProgress(100);
      }
    };

    document.title = `News@365 - ${props.category}`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Include all dependencies of updateNews

  const fetchMoreData = async () => {
    const nextPage = page + 1; // Calculate the next page

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();

      // Update the state using the callback form to get the latest state value
      setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      setTotalResults(parsedData.totalResults);
      setPage(nextPage); // Update the page state
    } catch (error) {
      // Handle errors here
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          color: props.mode === "black" ? "dark" : "grey",
          backgroundColor: props.mode === "light" ? "white" : "black",
          transition: "background-color 0.3s ease",
        }}
      >
        News@365 - Tops {props.category} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={articles.length || 0} // Use a fallback value of 0 if articles is undefined or empty
        next={fetchMoreData} // Pass the function without calling it directly
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="conatiner">
          <div className="row">
            {/* Infinite Scroll Proccess */}
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    mode={mode}
                    toggleMode={toggleMode}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
