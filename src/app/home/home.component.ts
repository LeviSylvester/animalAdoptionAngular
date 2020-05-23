import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animals = [];

  constructor(private apiService: ApiService) {
  }

  refreshPage() {
    this.apiService.get().subscribe((data: any[]) => {
      this.animals = data;
    });
  }

  ngOnInit() {
    this.refreshPage();
  }

  adoptAnimal(id) {
    this.apiService.adoptAnimal(id).subscribe(() => {
      this.refreshPage();
    });
  }

}
