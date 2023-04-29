const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const baseUrl = "https://api.themoviedb.org/3";
export const imageUrl = "https://image.tmdb.org/t/p/original";

const requests = {
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `${baseUrl}/discover/movie?api_key=${apiKey}&with_networks=213`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99`,
};

export default requests;
