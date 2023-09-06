import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CommonValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
            return{
                cannotContainSpace: true,
            }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if((control.value as string) === 'cuong@email.com')
                    resolve({shouldBeUnique : true});
                else 
                    resolve(null)
                    //or reject('error...')
            }, 2000);
        })
    }

}