import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { retry } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  newsArr: any;
  enterTain: any;
  sport: any

  newsResponseData: any;
  newsType: string | undefined;

  getNewsData(newType: string) {
    this.newsType = newType;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${newType}&apiKey=3c5ce41be44545e8b58c6c0d52ba6e1a`;
    this.http.get(url).subscribe((res) => {
      const temp = Object.values(res);
      this.newsResponseData = temp[2];
      console.log(Object.values(res));
    }, err => {
      retry(5);
    })
  }
  ngOnInit(): void {
    this.getNewsData('business');
  }
}
