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
    title: 'Users'
  },
  { path: "user/:id", component: UserDetailsComponent, outlet: "details", title: 'User Details' },
  {
    path: "photos",
    component: PhotosSidebarComponent,
    title: 'Photos'
  },
  { path: "photo/:id", component: PhotosDetailsComponent, outlet: "details", title: 'Photo Details' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
