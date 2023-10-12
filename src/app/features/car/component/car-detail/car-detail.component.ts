import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarDetailComponent {

}
