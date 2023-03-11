import { Component, OnInit } from '@angular/core';
import { rekog_results } from '../../core/data/results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  constructor() {}

  labels_data: any = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let labels = rekog_results.devMessage.Labels;
    let confidence_level = 80;

    labels.forEach((label) => {
      if (label.Confidence > confidence_level) {
        this.labels_data.push({
          Label: label.Name,
          Confidence: label.Confidence,
        });
      }
    });

    console.log(this.labels_data);
  }
}
