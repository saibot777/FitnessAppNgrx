import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../core/services/training.service";
import {Exersize} from "../../core/models/exersize.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exersizes: Exersize[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exersizes = this.trainingService.getAvailableExersizes();
  }

  public onStartTraining(form: NgForm) {
    this.trainingService.startExersize(form.value.exersize);
  }

}
