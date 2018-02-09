import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {TrainingService} from "../core/services/training.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  exersizeSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exersizeSubscription = this.trainingService.exersizeChanged.subscribe(exersize => {
      exersize
        ? this.onGoingTraining = true
        : this.onGoingTraining = false;
    });
  }

  ngOnDestroy() {
    this.exersizeSubscription.unsubscribe();
  }

}
