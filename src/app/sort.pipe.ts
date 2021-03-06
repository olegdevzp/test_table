import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(args)
    let data = Object.values(value); 
    if (args.sortedName !== "") {
      data = args.sortingOrder === 'desc' ?
       data.sort((a: any, b: any) => (a[args.sortedName] > b[args.sortedName]) ? 1 : -1) :
       data.sort((a: any, b: any) => (a[args.sortedName] < b[args.sortedName]) ? 1 : -1)
    }
    // console.log('args.sortedName', args.sortedName)
    return data;
  }

}
