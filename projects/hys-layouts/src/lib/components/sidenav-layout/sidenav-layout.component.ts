import { ChangeDetectionStrategy, Component, inject, OnInit, viewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { HysBreakpointService } from '../../services';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
  ],
  selector: 'hys-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HysSidenavLayoutComponent {
  readonly bp = inject(HysBreakpointService);
  sideNavComponent = viewChild<MatSidenav>('sidenav');

  isHandset$ = this.bp.observe([
    Breakpoints.Handset,
    Breakpoints.TabletPortrait
  ]).pipe(
    map(result => result.matches),
    shareReplay(),
  );

  open(): void {
    console.log(this.sideNavComponent());

    this.sideNavComponent()?.open();
  }
}
