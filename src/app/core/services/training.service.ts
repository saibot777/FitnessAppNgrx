import {Injectable} from "@angular/core";
import { Subject } from "rxjs/Subject";
import {Exersize} from "../models/exersize.model";

@Injectable()
export class TrainingService {
  exersizeChanged = new Subject<Exersize>();
  private availableExersizes: Exersize[] = [
    { id: 'pull-ups', name: 'Pull-ups', duration: 30, calories: 56 },
    { id: 'push-ups', name: 'Push-ups', duration: 80, calories: 89 },
    { id: 'planks', name: 'Planks', duration: 120, calories: 88 },
    { id: 'jogging', name: 'Jogging', duration: 1200, calories: 356 },
  ];
  private runningExersize: Exersize;

  getAvailableExersizes() {
    return this.availableExersizes.slice();
  }

  startExersize(selectedId: string) {
    this.runningExersize = this.availableExersizes.find(x => x.id === selectedId);
    this.exersizeChanged.next({...this.runningExersize});
  }
}
