import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";

@Component({
  selector: 'main-container',
  templateUrl: './main.container.html',
  styleUrls: ['./main.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainContainer {}

