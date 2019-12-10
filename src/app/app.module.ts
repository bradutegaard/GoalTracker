import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmotionalComponent } from "./emotional/emotional.component";
import { PhysicalComponent } from "./physical/physical.component";
import { SpiritualComponent } from "./spiritual/spiritual.component";
import { IntellectualComponent } from "./intellectual/intellectual.component";
import { CalendarHeatmap } from "angular2-calendar-heatmap";

@NgModule({
  declarations: [
    AppComponent,
    EmotionalComponent,
    PhysicalComponent,
    SpiritualComponent,
    IntellectualComponent,
    CalendarHeatmap
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
