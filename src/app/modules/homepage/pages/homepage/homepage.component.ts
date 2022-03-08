import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getWeather().subscribe((x) => console.log(x))
  }

}
