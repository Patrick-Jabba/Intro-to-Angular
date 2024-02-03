import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 3;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }
}
