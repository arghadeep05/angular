import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoatsComponent } from './boats/boats.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { DaysPipe } from './days.pipe';
import { BoatService } from './boat.service';
import { LoginComponent } from './login/login.component';
import { BoatUpdateComponent } from './boat-update/boat-update.component';
import { BoatAddComponent } from './boat-add/boat-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatsComponent,
    BoatDetailsComponent,
    DaysPipe,
    LoginComponent,
    BoatUpdateComponent,
    BoatAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BoatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
