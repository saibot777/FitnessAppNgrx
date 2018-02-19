import {Action} from "@ngrx/store";
import {Exercise} from "../training/exercise.model";

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export const SET_AUTH = '[Auth] Set Authentication';
export const UNSET_AUTH = '[UI] UnSet Authentication';

export const SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

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

export class SetAvailableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  constructor(public payload: Exercise) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;
}

export type AppActions =
  StartLoading
  | StopLoading
  | SetAuth
  | UnsetAuth
  | SetAvailableTrainings
  | SetFinishedTrainings
  | StartTraining
  | StopTraining;
