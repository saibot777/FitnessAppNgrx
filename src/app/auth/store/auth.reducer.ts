import {AppActions, SET_AUTH, UNSET_AUTH} from "../../store/app.actions";

export interface State {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case SET_AUTH:
      return {
        isAuthenticated: true
      };

    case UNSET_AUTH:
      return {
        isAuthenticated: false
      };

    default:
      return state;
  }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
