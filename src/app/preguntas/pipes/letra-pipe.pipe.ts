import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letra'
})
export class LetraPipePipe implements PipeTransform {

  transform(value: number,): string {
    if(value===1)return 'A';
    if(value===2)return 'B';
    if(value===3)return 'C';
    if(value===4)return 'D';
  }

}
