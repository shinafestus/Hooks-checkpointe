import './App.css';
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";


function App() {


  // creating a default movie list 
  const [movies, setMovies] = useState([
    {
      title: `MISSION IMPOSSIBLE.`,
      description: `this mission is very Mission Impossible`,
      imgSrc : 'https://trailers.apple.com/trailers/paramount/mission-impossible-dead-reckoning-part-one/images/poster_2x.jpg',

      rating: 7.5
    },
    {
      title: `WILD CARD`,
      description: `Starring Jason sattham `,
      imgSrc: 'https://upload.wikimedia.org/wikipedia/en/6/6b/WildCard.2015.png',
      rating: 4.0
    },
    {
      title: `CARD COUNTER  `,
      description: `card counter`,
      imgSrc: 'https://quingist.com.ng/wp-content/uploads/2021/10/IMG_20211018_160936_362.jpg',
      rating: 5.5
    },
    {
      title: `HARD CANDY.`,
      description: `HARD CANDY`,
      imgSrc: 'https://talenthouse-res.cloudinary.com/image/upload/c_limit,w_750,h_1111/v1/articles/t43opdxqn1h29pk52vtr',
      rating: 5.0
    },
    {
      title: `THE HERO.`,
      description: `THE HERO`,
      imgSrc: 'https://www.mmppicture.co.in/wp-content/uploads/2020/07/The-Hero-Action-Movie-Poster-810x1080.jpg',
      rating: 3.0
    },

    {
      title: `STALKER.`,
      description: `STALKER`,
      imgSrc: 'https://www.bellanaija.com/wp-content/uploads/2017/01/Stalker-Nollywood-Movie.jpg',
      rating: 3.0
    },

    {
      title: `CITATION.`,
      description: `CITATION`,
      imgSrc: 'https://pbs.twimg.com/media/EhTO-eKXkAE9Htk.jpg',
      rating: 3.0
    },


    {
      title: `THE GRUDGE.`,
      description: `THE GRUDGE`,
      imgSrc: 'https://www.bellanaija.com/wp-content/uploads/2017/01/GRUDGE-OFFICIAL-724x1024.jpg',
      rating: 3.0
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};

  const handleAddMovie = () => {
    const NewMovie = {
      title: 'New Movie',
      description: 'A new movie has been added to this list',
      imgSrc: 'https://via.placeholder.com/150',
      rating: 1.0
    };
    setMovies([...movies, NewMovie])
  }

  return (
    <div className="App">
      <h1> MOVIE MART </h1> 

      <div className="Appp">      
      <button className="addButton"  onClick={handleAddMovie} >Add New Movie</button>
      </div>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
    </div>

  );
}

export default App;