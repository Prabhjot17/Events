import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../Shared/eventservice.service';
import { ToastrService } from 'ngx-toastr';
import {Router, ActivatedRouteSnapshot, ActivatedRoute} from'@angular/router';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events :any;
  constructor(private eventsList : EventserviceService , private toaster:ToastrService ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
 /* this.eventsList.getEvents().subscribe(
    (events)=> this.events = events
  );*/

this.events = this.route.snapshot.data['events'];
  }
  
  handleEventClicked(data)
  {
    alert(data);
  }

  handleClick (eventName:any,eventId:any)
  {
   // this.toaster.success(eventName); 
    this.router.navigate(['/events', eventId]);
  }
}
