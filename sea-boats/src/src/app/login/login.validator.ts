import { AbstractControl } from "@angular/forms";

export class loginValidator{
  static userNameValidator(abc: AbstractControl){

    let input = abc.value;
    if(input!=null){
    if(!input.match("[A-Za-z]+")){
        return {'userName':true};
    }
    else{
      return null;
    }
  }
  }
}
