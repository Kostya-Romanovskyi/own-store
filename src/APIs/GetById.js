import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const MAIN_URL = "https://api.themoviedb.org";
const API_KEY = "f496025f6cb0adfa3f9f05b6edf25d52";

export const getMovieById = createAsyncThunk("movieById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const getCastById = createAsyncThunk("castById", async (id) => {
  try {
    const response = await axios.get(
      `${MAIN_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});