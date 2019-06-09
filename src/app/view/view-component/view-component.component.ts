import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName: string;
  response: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  search() {
    if (this.userName) {
      this.httpClient
        .get('https://api.github.com/users/' + this.userName)
        .subscribe(arg => {
          this.response = arg;
          console.log(this.response);
        });
    } else {
      this.response = null;
    }
  }
}
