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

  const voteStars = (vote) => {
    const stars = [];
    const maxStars = 5;
    const coloredStars = Math.round(vote / 2);

    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <i
          className={` fa fa-star
            ${i < coloredStars ? "colored" : "empty"}`}
          key={i}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <main>
        <h2>Lista film</h2>
        <div className="container">
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <div className="title">
                  <h3>{movie.title}</h3>
                  <p>{movie.original_title}</p>
                </div>
                <div className="poster">
                  <img
                    src={` https://image.tmdb.org/t/p/w300${movie.poster_path} `}
                    alt="poster"
                  />
                </div>
                <div className="info">
                  <div className="language">
                    <Flag code={getFlags(movie.original_language)} />
                  </div>
                  <div className="vote">{voteStars(movie.vote_average)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h2>Lista serie</h2>
        <div className="container">
          <ul>
            {tvs.map((tv) => (
              <li key={tv.id}>
                <div className="title">
                  <h3>{tv.name}</h3>
                  <p>{tv.original_name}</p>
                </div>
                <div className="poster">
                  <img
                    src={` https://image.tmdb.org/t/p/w300${tv.poster_path} `}
                    alt="poster"
                  />
                </div>
                <div className="info">
                  <div className="language">
                    <Flag code={getFlags(tv.original_language)} />
                  </div>
                  <div className="vote">{voteStars(tv.vote_average)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
