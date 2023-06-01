import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

// //style

// //locals
import Carousel from "../../components/carousel/carousel";
import { filmRequest } from "../../redux/actions/services-request";

const Home = () => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.serviceReducer.films);

  useEffect(() => {
    dispatch(filmRequest());
  }, []);

  console.log("ssasaSASasaS", film);
  return (
    <>
      olá
      {film.length > 0 && <Carousel data={film} />}
    </>
  );
};

export default Home;
