import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-photos-page",
  template: `
    <aside class="sidebar">
      <app-photos-sidebar></app-photos-sidebar>
    </aside>
    <section class="details">
      <router-outlet></router-outlet>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
