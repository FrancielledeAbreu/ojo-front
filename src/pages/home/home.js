import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

// //style

// //locals
import Carousel from "../../components/carousel/carousel";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  filmRequest,
  peopleRequest,
} from "../../redux/actions/services-request";
import Header from "../../components/header/header";
import Typography from "../../components/typography/typography";
import { FlexContainer, Main } from "./home.style";

const Home = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.serviceReducer.films);
  const characters = useSelector((state) => state.serviceReducer.characters);
  const isLoading = useSelector((state) => state.serviceReducer.isLoading);

  useEffect(() => {
    dispatch(filmRequest());
    dispatch(peopleRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Main>
          <FlexContainer>
            <Typography text={"Movies"} />
          </FlexContainer>
          {films.length > 0 && (
            <Carousel
              data={films}
              type={"movie"}
              label1={"Data de Lançamento"}
              label2={"Diretor"}
            />
          )}
          <FlexContainer>
            <Typography text={"Characters"} />
          </FlexContainer>
          {characters.length > 0 && (
            <Carousel
              data={characters}
              label1={"Data de nascimento"}
              label2={"Altura"}
            />
          )}
        </Main>
      )}
    </>
  );
};

export default Home;
