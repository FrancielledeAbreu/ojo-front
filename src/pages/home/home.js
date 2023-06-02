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
        <>
          {films.length > 0 && (
            <Carousel
              data={films}
              type={"movie"}
              label1={"Data de Lançamento"}
              label2={"Diretor"}
            />
          )}
          {characters.length > 0 && (
            <Carousel
              data={characters}
              label1={"Data de nascimento"}
              label2={"Altura"}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
