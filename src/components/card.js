import React, { Component } from 'react';
import '../index.css';

import { Link } from "react-router-dom";

export default class Card extends Component {
    
    state = {
        id : 250,
        rating : null,
        title : null,
        genres : null,
        poster : null
    };

    render() {

        const { id, vote_average, title, poster_path } = this.props.data;
        return (
            <div className="col">
                <div className="card">
                    <div className="card-image">
                        <img className="card-img" src = {"https://image.tmdb.org/t/p/w400"+ poster_path} alt = ""/>
                    </div>
                    <div className="card-content">
                        <span className = "title"><Link to = {`/movies/${id}`}>{ title }</Link></span>
                        <p className = "base-line">
                            <i class="material-icons">star_half</i><strong>{ vote_average }/10</strong> 
                        </p>
                        {/* <p className = "small">{ genre_titles.join(" | ") }</p> */}
                    </div>
                </div>
            </div>
        );
    }
}

