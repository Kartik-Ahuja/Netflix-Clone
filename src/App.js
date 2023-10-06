import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetctUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetctUrl={requests.fetchTreanding} />
      <Row title="fetchTopRated" fetctUrl={requests.fetchTopRated} />
      <Row title="fetchActionMovies" fetctUrl={requests.fetchActionMovies} />
      <Row title="fetchComadyMovies" fetctUrl={requests.fetchComadyMovies} />
      <Row title=" fetchHorrorMovies" fetctUrl={requests.fetchHorrorMovies} />
      <Row title="fetchRomanceMovies" fetctUrl={requests.fetchRomanceMovies} />
      <Row title="fetchDocumentaries" fetctUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
