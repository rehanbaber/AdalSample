import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../../testservice.service';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ts: TestserviceService;
  constructor(ts: TestserviceService) {
    this.ts = ts;
   }

  ngOnInit() {
  }

  onclick()
  {
    this.ts.checkApi()
    .subscribe(result=>console.log(result));
  }

}
