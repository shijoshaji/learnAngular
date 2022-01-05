// this is customised PIPE where we transform given string
// 'abc-123' into 'abc 123'

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }


}