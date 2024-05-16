import { AbstractControl, ValidationErrors } from "@angular/forms";

export function datePresentOrFuture(control: AbstractControl) {
    const controlValue = control.value;
    const currentDate = new Date();
    if (new Date(controlValue) >= currentDate) {
        return null;
    }
    return {datePresentOrFuture: true} as ValidationErrors;
}
