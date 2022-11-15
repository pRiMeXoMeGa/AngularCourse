

// not used yet

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertToSpaces'
})
export class CovertToSpacesPipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    return value.replace(args,'-abc');
  }

}
