import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Photo {
  id: string;
  thumbnailUrl: string;
}

@Component({
  selector: "app-photos-sidebar",
  template: `
    <ul>
      <li *ngFor="let photo of photos$ | async" class="user">
        <a
          class="link"
          [routerLink]="['', { outlets: { details: ['photo', photo.id] } }]"
        >
          <img [src]="photo.thumbnailUrl" alt="" width="60" />
        </a>
      </li>
    </ul>
  `,
  styles: [
    `
      .link {
        display: inline-flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosSidebarComponent implements OnInit {
  photos$!: Observable<Photo[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.photos$ = this.http.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?_limit=5`
    );
  }
}
