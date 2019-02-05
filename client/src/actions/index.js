import axios from "axios";
import { FETCH_USER, FETCH_LEAGUE } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLeague = () => async dispatch => {
  const res = await axios.get("/api/current_league");

  dispatch({ type: FETCH_LEAGUE, payload: res.data });
};

export const loginUser = (values, history) => async dispatch => {
  const res = await axios.post("/user/login", values);
  dispatch({ type: FETCH_USER, payload: res.data });
  history.push("/profile");
};

export const registerUser = (values, history) => async dispatch => {
  const res = await axios.post("/user/register", values);
  dispatch({ type: FETCH_USER, payload: res.data });
  history.push("/profile");
};

// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);
//
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
//
// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post('/api/surveys', values);
//
//   history.push('/surveys');
//   dispatch({ type: FETCH_USER, payload: res.data });
// };
//
// export const fetchSurveys = () => async dispatch => {
//   const res = await axios.get('/api/surveys');
//
//   dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };
