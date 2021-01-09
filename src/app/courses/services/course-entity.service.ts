import { Course } from './../model/course';
import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course>{
  constructor (serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Course', serviceElementFactory);
  }
}
