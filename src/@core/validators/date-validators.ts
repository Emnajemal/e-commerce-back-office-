import { FormGroup } from "@angular/forms"

export class DateValidators {
  static MinDate(control, minDate) : any {
    return (form:FormGroup) => {
      let today = this.createDate(minDate);
      if(form.controls[control] && this.createDate(form.controls[control].value) < today) {
        // if(minDate) {
          form.controls[control].setErrors({
            minDate
          })
        // } else {
        //   form.controls[control].setErrors({
        //     minToday: true
        //   })
        // }
      } else form.controls[control].setErrors(form.controls[control].errors)
    }
  }

  static MinDateToday(control) {
    return (form:FormGroup) => {
      let today = this.createDate();
      if(form.controls[control] && this.createDate(form.controls[control].value) < today) {
        form.controls[control].setErrors({
          minToday: true
        })
      } else form.controls[control].setErrors(form.controls[control].errors)
    }
  }

  static MaxDate(control, maxDate) : any {
    return (form:FormGroup) => {
      if(form.controls[control] && this.createDate(form.controls[control].value) > this.createDate(maxDate)) {
        form.controls[control].setErrors({
          maxDate: maxDate
        })
      } else {
        form.controls[control].setErrors(form.controls[control].errors);
      }
    }
    
  }

  static ValidateTwoDates(start, end) : any {
      return (form:FormGroup) => {
        if(
          form.controls[start] &&
          form.controls[end] &&
          this.createDate(form.controls[start].value) > this.createDate(form.controls[end].value)
        ) {
        
          form.controls[end].setErrors({
            lessThanStart: true
          })
        } else {
          let errors = {...form.controls[end].errors};
          delete errors['lessThanStart'];
          form.controls[end].setErrors( Object.assign(errors).length > 0 ? errors : null);
        }
      }
  }

  static createDate(val?) {
    let date = val ? new Date(val) : new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }
}