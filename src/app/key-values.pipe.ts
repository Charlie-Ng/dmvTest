/**
 * Created by kitchiong on 6/25/17.
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keyValues'})
export class KeyValuesPipe implements PipeTransform {
  transform(arrays: any) : any {
    let keyValues = [];
    if(arrays && arrays.length > 0) {
      for(let i = 0, m = arrays.length; i < m; i++) {
        let key = Object.keys(arrays[i])[0];
        keyValues.push({key: key, value: arrays[i][key]});

      }
    }
    return keyValues;
  }
}
