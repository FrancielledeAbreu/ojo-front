import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// //style

//locals
import api from "../../services";
import Header from "../../components/header/header";
import Typography from "../../components/typography/typography";
import ReviewForm from "../../components/form/form";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/films/${id}/`);
        const data = await response.data;
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  console.log(movieDetails);

  return (
    <>
      <Header />
      {movieDetails && (
        <>
          <Typography text={movieDetails.title} />
          <h4>Descrição</h4>
          <div>{movieDetails.opening_crawl}</div>
        </>
      )}
      <Typography text={"Write a Review"} />
      <ReviewForm />
    </>
  );
};

export default MovieDetails;
