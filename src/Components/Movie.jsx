import React, { useEffect,useState } from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title,poster_path,overview,vote_average,}) => {
    return ( 
        <div className="Movie">
<img src={IMGPATH + poster_path} alt="title"/>      
<div className="movie-info">
    <h4>{title}</h4>
    <span style={{textAlign:"center"}}><i style={{padding:"5px",  textAlign:"left", justifyContent:"flex-start"}} className="far fa-star"></i>{vote_average}/10</span>
</div>
<div className="movie-over">
    <h2> <strong>Overview:</strong> </h2>
    <p>{overview}</p>
</div>
  </div>
     );
}
 
export default Movie;
