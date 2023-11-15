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

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `News@365 - ${props.category}`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  // const  componentDidMount = async()=> {
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=461d1ef454ad4675a25279810fdcfad4&page=1&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading: false,
  // });
  //   updateNews();
  // }

  // const handlePrevClick = async () => {
  // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   props.country
  // }&category=${
  //   props.category
  // }&apiKey=461d1ef454ad4675a25279810fdcfad4&page=${
  //   page - 1
  // }&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({ articles: parsedData.articles });
  // this.setState({
  //   page: page - 1,
  //   articles: parsedData.articles,
  //   loading: false,
  // });
  // this.setState({ page: page - 1 });
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  // if (
  //   !(
  //     page + 1 >
  //     Math.ceil(pagetotalResults / props.pageSize)
  //   )
  // ) {
  // }
  // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   props.country
  // }&category=${
  //   props.category
  // }&apiKey=461d1ef454ad4675a25279810fdcfad4&page=${
  //   page + 1
  // }&pageSize=${props.pageSize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({ articles: parsedData.articles });
  // this.setState({
  //   page: page + 1,
  //   articles: parsedData.articles,
  //   loading: false,
  // });
  // this.setState({ page: page + 1 });
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{
          margin: "35px 0px",
          marginTop: "90px",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        News@365 - Tops {props.category} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="conatiner">
          <div className="row">
            {/* Normal Process */}
            {/* {!pageloading &&
            pagearticles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
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
            })} */}

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
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(pagetotalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
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
