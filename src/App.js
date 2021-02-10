import React, {useEffect,useState} from "react";
import Movie from "./Components/Movie"
import './App.css';


const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
 const[movies, setMovies] = useState([]);
 const[searchIt, setsearchIt] = useState("");


  useEffect(() => {
    fetch(APIURL)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setMovies(data.results);
    });
    
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchIt) {
      fetch(SEARCHAPI + searchIt)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setMovies(data.results);
    });
    setsearchIt("");
    }
    
  };
  const handleOnChange = (e) => {
    setsearchIt(e.target.value);
  }
  return (
    <>
    <header className="header">
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="search" value={searchIt} onChange={handleOnChange} placeholder="search..."></input>
      </form>
      

    </header>
    <div className="App">
      {movies.map((movie) =>
        <Movie key={movie.id} {...movie} />
        )}
    </div>
    </>
  );
}

export default App;
