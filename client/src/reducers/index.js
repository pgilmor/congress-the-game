import { combineReducers } from "redux";

import userReducer from "./userReducer";
import leagueReducer from "./leagueReducer";

export default combineReducers({
  user: userReducer,
  league: leagueReducer
});
