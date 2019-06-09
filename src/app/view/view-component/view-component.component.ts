import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private testService: TestService) { 
    testService.printToConsole("Print from Inner view component");
  }

  ngOnInit() {
  }

}
