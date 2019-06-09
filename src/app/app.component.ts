import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'second-project';
  constructor(private testService: TestService, private http: HttpClient) {
    testService.printToConsole('Print from root component');
  }
  ngOnInit(): void {
    this.http
      .get('https://api.github.com/users/priyal85')
      .subscribe((response) => console.log(response));
  }
}
