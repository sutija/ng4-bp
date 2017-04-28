import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Route
import { routing } from './routes';

// Components
import { AppComponent } from './app.component';
import { InfoComponent } from './common/components/info/info.component';
import { LoadingComponent } from './common/components/loading/loading.component';
import { OnOffComponent } from './common/components/on-off/on-off.component';
import { TableParserComponent } from './common/components/table-parser/table-parser.component';

// Services
import { ApiService } from './common/services/api.service';
import { BaseServiceClass } from './common/services/base.service';
import { EventsService } from './common/services/events.service';
import { MainService } from './common/services/main.service';

import { InfoService } from './common/components/info/info.service';
import { LoadingService } from './common/components/loading/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    LoadingComponent,
    OnOffComponent,
    TableParserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ApiService,
    BaseServiceClass,
    EventsService,
    MainService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
