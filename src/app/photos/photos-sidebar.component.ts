import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photo } from "./photo";
import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-photos-sidebar",
  template: `
    <ul
      *ngIf="photos$ | async as photos"
      cdkDropList
      [cdkDropListData]="photos"
      (cdkDropListDropped)="drop($event)"
    >
      <li *ngFor="let photo of photos" class="user" cdkDrag>
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
  drop(event: CdkDragDrop<Photo[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
