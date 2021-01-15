import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  checkIfObjectKeyHasValues(obj: any): boolean {
    if (isNullOrUndefined(obj)) return false;

    if (Object.keys(obj).length > 0) {
      return true;
    } else {
      return false;
    }
  }
}