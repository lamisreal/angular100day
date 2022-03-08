import * as core from '@angular/core';

@core.Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements core.OnInit, core.OnChanges {
  @core.Input() progress = 58;
  @core.Input() backgroundColor = '#ccc';
  @core.Input() progressColor = 'tomato';

  constructor() {}

  ngOnInit(): void {
    console.log('onInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
  ngOnChanges(changes: core.SimpleChanges) {
    console.log('onChange', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
new ProgressBarComponent(); //invoke
