import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

    animal = {
    age: '',
    gender: '',
    race: '',
    description: '',
    photo: '',
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  createOnSubmit() {
    this.apiService.createAnimal(this.animal).subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { DisplayPersonsService } from '../display-persons.service';
//
// @Component({
//   selector: 'app-create-person',
//   templateUrl: './create-person.component.html',
//   styleUrls: ['./create-person.component.css'],
// })
// export class CreatePersonComponent implements OnInit {
//   person = {
//     id: '',
//     name: '',
//     surname: '',
//     gender: '',
//     address: '',
//   };
//
//   constructor(private service: DisplayPersonsService, private router: Router) {}
//
//   ngOnInit() {
//   }
//
//   createOnSubmit() {
//     this.service.createPerson(this.person).subscribe(() => {
//       this.router.navigateByUrl('/persons');
//     });
//   }
// }
