//Type rce
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =  [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Zainab Abbas: Pakistani cricket commentator leaves India after backlash",
      "description": "ICC said Zainab Abbas left India for personal reasons amid local media claims she was forced to go.",
      "url": "http://www.bbc.co.uk/news/world-asia-india-67062102",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/796F/production/_131378013_gettyimages-1155300123-594x594.jpg",
      "publishedAt": "2023-10-10T10:07:30.2172599Z",
      "content": "A Pakistani presenter covering the Cricket World Cup in India has left the country after a backlash over alleged \"derogatory\" posts on social media.\r\nZainab Abbas was part of the International Cricke… [+2660 chars]"
    },
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "Topley removes Tanzid and Shanto in two balls",
      "description": "Reece Topley gets the wickets of Tanzid Hasan and Najmul Hossain Shanto with back-to-back balls as England pick up their first wickets against Bangladesh at the Cricket World Cup in Dharamsala.",
      "url": "http://www.bbc.co.uk/sport/av/cricket/67065040",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/C1BD/production/_131379594_p0gkkf9x.jpg",
      "publishedAt": "2023-10-10T10:07:22.2172785Z",
      "content": "Reece Topley gets the wickets of Tanzid Hasan and Najmul Hossain Shanto with back-to-back balls as England pick up their first wickets against Bangladesh at the Cricket World Cup in Dharamsala.\r\nFOLL… [+58 chars]"
    },
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "World Cup: Pakistan v Sri Lanka - radio & updates",
      "description": "Listen to BBC Radio 5 Sports Extra commentary and follow text updates as Pakistan play Sri Lanka in the Men's Cricket World Cup 2023.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/66854381",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-10-10T08:52:16.8887417Z",
      "content": "Pakistan: Imam ul-Haq, Abdullah Shafique, Babar Azam (c), Muhammad Rizwan (wk), Saud Shakeel, Iftikhar Ahmed, Shadab Khan, Mohammad Nawaz, Hasan Ali, Shaheen Afridi, Haris Rauf. \r\nSri Lanka: Pathum N… [+201 chars]"
    },
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "World Cup: England v Bangladesh - clips, radio & text",
      "description": "Follow live text, in-play video clips and radio commentary as England play Bangladesh in the Men's Cricket World Cup 2023.",
      "url": "http://www.bbc.co.uk/sport/live/cricket/66854377",
      "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      "publishedAt": "2023-10-10T05:07:21.3728416Z",
      "content": "Bangladesh: Litton Das, Tanzid Hasan, Najmul Hossain Shanto, Mehidy Hasan, Shakib Al Hasan (c), Mushfiqur Rahim (wk), Towhid Hridoy, Mahedi Hasan, Taskin Ahmed, Shoriful Islam, Mustafizur Rahman.\r\nEn… [+165 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    console.log("Hello I am constructor from news component");
    this.state ={
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Tops headlines.</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDesc"
              imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
              newsUrl="TODO"
            />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
