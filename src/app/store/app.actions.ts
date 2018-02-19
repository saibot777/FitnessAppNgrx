import {Action} from "@ngrx/store";

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export const SET_AUTH = '[Auth] Set Authentication';
export const UNSET_AUTH = '[UI] UnSet Authentication';

export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

export class SetAuth implements Action {
  readonly type = SET_AUTH;
}

export class UnsetAuth implements Action {
  readonly type = UNSET_AUTH;
}

export type AppActions =
  StartLoading |
  StopLoading |
  SetAuth |
  UnsetAuth;
