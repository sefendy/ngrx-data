import { Lesson } from './../model/lesson';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Injectable } from '@angular/core';

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('Lesson', serviceElementFactory);
  }
}

