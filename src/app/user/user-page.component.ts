import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-user-page",
  template: `
    <aside class="sidebar">
      <app-user-sidebar></app-user-sidebar>
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
      .sidebar {
        max-width: 250px;
      }
      .details {
        flex-grow: 1;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  ngOnInit(): void {}
}
