import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { HomePageComponent } from "./home/containers/home-page/home-page.component";
import { HomeModuleModule } from './home/home-module/home-module.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
