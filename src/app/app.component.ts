import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HysSidenavLayoutComponent } from '@projects/hys-layouts';

@Component({
  selector: 'app-root',
  imports: [
    HysSidenavLayoutComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

}
