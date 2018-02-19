import { AppActions, START_LOADING, STOP_LOADING } from "./app.actions";

export interface State {
  isLoading: boolean;
}

const initialState = {
  isLoading: false
};

export function appReducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };

    case STOP_LOADING:
      return {
        isLoading: false
      };

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
