import React from "react";
import PropTypes from "prop-types";

const Trending = props => {
    return (
            <li className="list-group-item"><a href={props.url}><i class="far fa-newspaper"></i> {props.titleNews}</a></li>
            )
}

Trending.propTypes = {
    titleNews: PropTypes.string.isRequired
  };

export default Trending;