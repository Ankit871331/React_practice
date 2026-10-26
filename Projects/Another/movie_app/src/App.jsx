import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieCard from "./MovieCard";
import movies from "./movie";

const App = () => {
  return (
    <div style={styles.page}>
      <Navbar />

      <main style={styles.main}>
        <h1 style={styles.heading}>🎬 All Movies </h1>

        <div style={styles.grid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.name}
              rating={movie.rating}
              releaseDate={movie.releaseDate}
              price={movie.price}
              image={movie.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#111",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: "24px",
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "28px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "22px",
    justifyContent: "center",
  },
};

export default App;