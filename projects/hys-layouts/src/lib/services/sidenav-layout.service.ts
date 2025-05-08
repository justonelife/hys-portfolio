import { inject, Injectable } from '@angular/core';
import { HysSidenavLayoutComponent } from '../components/sidenav-layout/sidenav-layout.component';

@Injectable()
export class HysSidenavLayoutService {
  readonly sidenavLayoutComponent = inject(HysSidenavLayoutComponent);

  open(): void {
    this.sidenavLayoutComponent.sideNavComponent()?.open();
  }
}
