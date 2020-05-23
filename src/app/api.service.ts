import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:8080/findAllAnimals';
  private SERVER_POST_URL = 'http://localhost:8080/adoption/createAdoption/';
  private SERVER_POST_ANIMAL_URL = 'http://localhost:8080/saveAnimal/';

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }

  adoptAnimal(id) {
    return this.httpClient.post(this.SERVER_POST_URL + '?idUser=1' + '&idAnimal=' + id, null);
  }

  createAnimal(animal) {
    return this.httpClient.post(this.SERVER_POST_ANIMAL_URL, animal);
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class DisplayPersonsService {
//   constructor(private http: HttpClient) {}
//
//   // personsUrl = 'http://localhost:3000/persons';
//
//   personsUrl = 'http://localhost:8080/api/school'
//
//   getPeople() {
//     return this.http.get(this.personsUrl + '/');
//   }
//
//   getPerson(id) {
//     return this.http.get(this.personsUrl + '/' + id);
//   }
//
//   deletePerson(id) {
//     return this.http.delete(this.personsUrl + '/' + id);
//   }
//
//   updatePerson(person) {
//     return this.http.put(this.personsUrl + '/' + person.id, person);
//   }
//
//   createPerson(person) {
//     return this.http.post(this.personsUrl, person);
//   }
// }
