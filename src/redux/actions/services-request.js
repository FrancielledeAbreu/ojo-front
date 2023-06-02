import api from "../../services";
import { FILMS, LOADING_START, LOADING_END, PEOPLE } from "./type";

const film = (data) => {
  return { type: FILMS, data };
};

const people = (data) => {
  return { type: PEOPLE, data };
};

const loadingStart = () => {
  return { type: LOADING_START };
};

const loadingEnd = () => {
  return { type: LOADING_END };
};

export const filmRequest = () => async (dispatch) => {
  try {
    dispatch(loadingStart());

    const response = await api.get("/films");
    const movies = response.data.results;

    dispatch(film(movies));
    dispatch(loadingEnd());
  } catch (error) {
    console.log(error);
    dispatch(loadingEnd());
  }
};

// export const peopleRequest = () => async (dispatch) => {
//   try {
//     dispatch(loadingStart());

//     const response = await axios.get("https://swapi.dev/api/people?page=1");
//     const totalCharacters = response.data.count;
//     const totalPages = Math.ceil(totalCharacters / 10); // 10 characters per page

//     const characters = response.data.results;

//     // Fetch data for remaining pages
//     for (let page = 2; page <= totalPages; page++) {
//       const nextPageResponse = await axios.get(
//         `https://swapi.dev/api/people?page=${page}`
//       );
//       characters.push(...nextPageResponse.data.results);
//     }

//     dispatch(people(characters));
//     dispatch(loadingEnd());
//   } catch (error) {
//     console.log(error);
//     dispatch(loadingEnd());
//   }
// };

export const peopleRequest = () => async (dispatch) => {
  try {
    dispatch(loadingStart());

    const characters = [];

    const fetchCharacters = async (page) => {
      const response = await api.get(`/people?page=${page}`);
      characters.push(...response.data.results);

      if (response.data.next) {
        const nextPage = response.data.next.split("=")[1];
        await fetchCharacters(nextPage);
      }
    };

    await fetchCharacters(1);

    dispatch(people(characters));
    dispatch(loadingEnd());
  } catch (error) {
    console.log(error);
    dispatch(loadingEnd());
  }
};
