import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-photos-page",
  template: `
    <aside class="sidebar">
      <app-photos-sidebar></app-photos-sidebar>
    </aside>
    <section class="details mat-elevation-z2">
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
      .sidebar {
        max-width: 250px;
      }
      .details {
        flex-grow: 1;
        margin: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
