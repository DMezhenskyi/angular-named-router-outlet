import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { PhotosPageComponent } from "./photos/photos-page.component";
import { UserPageComponent } from "./user/user-page.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  {
    path: "users",
    component: UserPageComponent,
    children: [{ path: ":id", component: UserDetailsComponent }],
  },
  {
    path: "photos",
    component: PhotosPageComponent,
    children: [{ path: ":id", component: PhotosDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
