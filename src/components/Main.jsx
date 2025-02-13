import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();
  return (
    <>
      <main>
        <h2>Lista film</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <h4>{movie.original_title}</h4>
              <p>
                {movie.original_language} | {movie.vote_average}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
