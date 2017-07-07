import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private dataService: DataService) { }
}
