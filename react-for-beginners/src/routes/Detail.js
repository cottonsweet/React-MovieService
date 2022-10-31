import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>영화 정보를 불러오고 있습니다...</h2>
      ) : (
        <ShowDetail img={movies.medium_cover_image} title={movies.title} rating={movies.rating} desc={movies.description_intro} />
      )}
    </div>
  );
}

function ShowDetail({ img, title, desc, rating }) {
  return (
    <div>
      <img src={img}></img>
      <h1>{title}</h1>
      <span>별점 : {rating}</span>
      <p>설명 : {desc}</p>
    </div>
  );
}

export default Detail;
