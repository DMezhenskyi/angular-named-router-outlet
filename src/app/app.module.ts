import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserSidebarComponent } from "./user/user-sidebar.component";
import { UserDetailsComponent } from "./user/user-details.component";
import { PhotosDetailsComponent } from "./photos/photos-details.component";
import { PhotosSidebarComponent } from "./photos/photos-sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    UserSidebarComponent,
    UserDetailsComponent,
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
