import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

// //style

// //locals
import Carousel from "../../components/carousel/carousel";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { filmRequest } from "../../redux/actions/services-request";

const Home = () => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.serviceReducer.films);
  const isLoading = useSelector((state) => state.serviceReducer.isLoading);

  useEffect(() => {
    dispatch(filmRequest());
  }, [dispatch]);

  return (
    <>
      olá
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        film.length > 0 && <Carousel data={film} />
      )}
    </>
  );
};

export default Home;
