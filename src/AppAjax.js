import React, { Component } from "react";
import axios from "axios";
// App styles
import "./App.css";
// Custom components
import Navbar from './menu/navbar.js';
import Content from './menu/content.js';
import Trending from './menu/trending.js';
import Footer from './menu/footer.js';


// News API
const apiKey = "5497115884844fb7a3b647f3ac5a2333";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?" + "country=us&" + "apiKey=" + apiKey;

class AppAjax extends Component {
    state = {
        trendingNews: []
    };
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response) {
                // handle success
                self.setState( {trendingNews: response.data.articles});
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    render () {
        const {trendingNews} = this.state;
        return (
            <div>
                <header>
                <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="container trending">
                                    <div className="row">
                                        <div className="col-9">
                                        <h4><b>TRENDING STORIES</b></h4>
                                        </div>
                                        <div className="col-3">
                                        <a href="#">view all</a>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="list-group">
                                        {trendingNews.map((item, key) => {
                                            const url = item.url;
                                            const titleNews = item.title;
                                            return <Trending key={key} url={url} titleNews={titleNews}/>
                                        })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8">
                            {trendingNews.filter((elem) => {return elem.content !== null}).map((item, key) => {
                                const sourceNews = item.source.name;
                                const publishedAt = item.publishedAt;
                                const image = item.urlToImage !== null ? item.urlToImage : "https://s3.amazonaws.com/skinner-production/stories/featured_images/000/025/760/large/news-1.jpg?1522295632" ;
                                const titleNews = item.title;
                                // const content = item.content;
                                // var contentNews = content.filter(function(content) {return content !== null});
                                const contentNews = item.content.slice(0,250)+"...";
                                return <Content key={key} sourceNews={sourceNews} publishedAt={publishedAt} image={image} titleNews={titleNews} contentNews={contentNews}/>
                            })}
                            </div>
                        </div>
                    </div>
                </header>
                <div className='footer2'>
                <Footer/>
                </div> 
            </div>
        )
    }
}

export default AppAjax;