import { Injectable } from "@angular/core";
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  getValue(key: string) : string | null {
    let value = localStorage.getItem(key);
    return isNullOrUndefined(value) ? null : value;
  }

  getValues(keys: string[]) : string[] | null {
    let values = [];

    keys.forEach(key => {
      let value = localStorage.getItem(key);

      if(!isNullOrUndefined(value)) {
        values.push(value);
      }
    })

    return values;
  }

  setValue(key: string, value: string) : void {
    if(!isNullOrUndefined(key) && !isNullOrUndefined(value)) {
      localStorage.setItem(key, value);
    }
  }

  setValueWithTimeStamp(key: string, value: any) : void {
    let storageObject = {};

    if(!isNullOrUndefined(key) && Object.keys(value).length > 0) {
      let expiresAt = new Date();

      storageObject = {
        expiresAt,
        auth_token: value.token
      }

      localStorage.setItem(key, JSON.stringify(storageObject));
    }
  }
 
  deleteValue(key: string) : void {
    let value = this.getValue(key);

    if(!isNullOrUndefined(value)) {
      localStorage.removeItem(key);
    }
  }

  clearAllKeyValues(): void {
    localStorage.clear();
  } 
}