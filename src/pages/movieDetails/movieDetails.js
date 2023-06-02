import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//style
import {
  Container,
  Description,
  TypographyContainer,
} from "./movieDetails.style";

//locals
import api from "../../services";
import Header from "../../components/header/header";
import Typography from "../../components/typography/typography";
import ReviewForm from "../../components/form/form";
import { imageMapping } from "../../utils/images";
import { Image } from "../../components/card/card.style";

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

  return (
    <>
      <Header />
      {movieDetails && (
        <>
          <TypographyContainer>
            <Typography text={movieDetails.title} />
          </TypographyContainer>
          <Container>
            <Description>
              <h4>Descrição</h4>
              <div>{movieDetails.opening_crawl}</div>
            </Description>
            <Image src={imageMapping[movieDetails.episode_id]} />
          </Container>
        </>
      )}
      <TypographyContainer>
        <Typography text={"Write a Review"} />
      </TypographyContainer>

      <ReviewForm />
    </>
  );
};

export default MovieDetails;
