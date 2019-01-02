import { FETCH_LEAGUE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_LEAGUE:
      return action.payload || false;
    default:
      return state;
  }
}
