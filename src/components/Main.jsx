import { useDataContext } from "../contexts/DataContext";
import Flag from "react-world-flags";

export default function Main() {
  const { movies, tvs } = useDataContext();
  const getFlags = (language) => {
    const languagesFlags = {
      en: "GB",
      fr: "FR",
      de: "DE",
      it: "IT",
      es: "ES",
      us: "US",
      kr: "KR",
      jp: "JP",
      be: "BE",
      cn: "CN",
    };
    return languagesFlags[language] || "US";
  };

  return (
    <>
      <main>
        <h2>Lista film</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <h4>{movie.original_title}</h4>
              <div className="img">
                <Flag code={getFlags(movie.original_language)} />
              </div>
              <p>{movie.vote_average}</p>
            </li>
          ))}
        </ul>
        <h2>Lista serie</h2>
        <ul>
          {tvs.map((tv) => (
            <li key={tv.id}>
              <h3>{tv.name}</h3>
              <h4>{tv.original_name}</h4>
              <div className="img">
                <Flag code={getFlags(tv.original_language)} />
              </div>
              <p>{tv.vote_average}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
