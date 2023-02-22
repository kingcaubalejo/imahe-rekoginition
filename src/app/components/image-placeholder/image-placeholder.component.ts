import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  templateUrl: './image-placeholder.component.html',
  styleUrls: ['./image-placeholder.component.scss'],
})
export class ImagePlaceholderComponent implements OnInit {
  @Input('imgSrc') imageSource: string;

  constructor() {
    this.imageSource = '';
  }

  ngOnInit(): void {}
}
