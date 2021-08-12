import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserPageComponent } from "./user/user-page.component";
import { UserSidebarComponent } from "./user/user-sidebar.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { PhotosPageComponent } from "./photos/photos-page.component";
import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { PhotosSidebarComponent } from "./photos/photos-sidebar.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserSidebarComponent,
    UserDetailsComponent,
    PhotosPageComponent,
    PhotosDetailsComponent,
    PhotosSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
