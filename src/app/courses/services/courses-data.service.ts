import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from './../model/course';
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Course', http, httpUrlGenerator);
  }
  getAll(): Observable<Course[]> {
    return this.http.get('/api/courses').pipe(
      map(res => res['payload'])
    );
  }
}
