import { PhotosSidebarComponent } from "./photos/photos-sidebar.component";
import { UserSidebarComponent } from "./user/user-sidebar.component";
import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "users", pathMatch: "full" },
  {
    path: "users",
    component: UserSidebarComponent,
  },
  { path: "user/:id", component: UserDetailsComponent, outlet: "details" },
  {
    path: "photos",
    component: PhotosSidebarComponent,
  },
  { path: "photo/:id", component: PhotosDetailsComponent, outlet: "details" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
