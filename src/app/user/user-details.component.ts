import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap } from "rxjs/operators";

interface UserDetails {
  id: number;
  email: string;
  name: string;
}

@Component({
  selector: "app-user-details",
  template: `
    <h1>User Details</h1>
    <section *ngIf="user$ | async as user">
      <h4 class="mat-title">{{ user.name }}</h4>
      <p class="mat-caption">{{ user.email }}</p>
      <p class="mat-caption">User Id: {{ user.id }}</p>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: #fafafa;
        padding: 15px;
        margin: 20px;
        box-sizing: border-box;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  @HostBinding("class.mat-elevation-z2") hostCls = true;
  user$!: Observable<UserDetails>;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      pluck("id"),
      switchMap((id) =>
        this.http.get<UserDetails>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
      )
    );
  }
}
