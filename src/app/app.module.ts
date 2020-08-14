import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventTemplateComponent } from './events/event-template/event-template.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './Error/error404.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventTemplateComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [EventRouteActivatorService,EventsListResolverService,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent)
{
  if(component.isDirty)
  {
    return window.confirm("There are unsaved changes.Do you still wish to cancel?")
  }
  else
  return true;
}
