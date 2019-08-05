import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080//helloWorldBean')
    console.log("My welcome service working fine")
  }

  executeHelloWorldWelcomeService(name) {
     return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWord/path-variable/${name}`);
     console.log("My helloworld welcome service working fine")
   }
}
