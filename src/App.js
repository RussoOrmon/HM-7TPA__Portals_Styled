import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { MainContent } from "./components/mainContent/MainContent";
import { movies } from "./data";

function App() {
  let [newMovie, setNewMovie] = useState(movies);

  const addNewMovies = (title, image, rating) => {
    setNewMovie((prevState) => {
      return [
        ...prevState,
        {
          title: title,
          img: image,
          rating: rating,
        },
      ];
    });
  };
  newMovie.forEach((item, index) => {
    item.id = index + 1;
  });

  return (
    <div className="App">
      <Header onAddNewMovies={addNewMovies} />
      {newMovie.map((movie) => (
        <MainContent
          key={movie.title}
          movies={newMovie}
          setNewMovie={setNewMovie}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default App;
