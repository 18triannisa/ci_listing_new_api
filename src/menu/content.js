import React from "react";
import PropTypes from "prop-types";


var dateFormat = require('dateformat');

const Content = props => {
    return (
        <div className="card" style={{width: "50rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.sourceNews}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{dateFormat(props.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</h6>
                <img className="card-img-top" src={props.image} alt="img-BeritaKita"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.titleNews}</h5>
                    <p className="card-text">{props.contentNews}</p>
                    <a href="#" className="btn btn-primary">Baca</a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm btn btn-light">
                        <a href="#"><i className="fas fa-heart"></i> Sukai</a>
                        </div>
                        <div className="col-sm btn btn-light">
                        <a href="#"><i className="fas fa-comments"></i> Komentar</a>
                        </div>
                        <div className="col-sm btn btn-light">
                        <a href="#"><i className="fas fa-share-alt"></i> Bagikan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Content.propTypes = {
    publishedAt: PropTypes.string,
    image: PropTypes.string.isRequired,
    titleNews: PropTypes.string.isRequired,
    contentNews: PropTypes.string
  };

export default Content;