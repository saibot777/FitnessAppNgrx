import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from "../../core/services/training.service";
import {Exersize} from "../../core/models/exersize.model";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exersizes: Exersize[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exersizes = this.trainingService.getAvailableExersizes();
  }

  public onStartTraining() {
    this.trainingStart.emit();
  }

}
