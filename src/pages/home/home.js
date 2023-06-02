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
      olá
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {films.length > 0 && <Carousel data={films} type={"movie"} />}
          {characters.length > 0 && <Carousel data={characters} />}
        </>
      )}
    </>
  );
};

export default Home;
