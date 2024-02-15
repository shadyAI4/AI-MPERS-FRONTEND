import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { registerUsersMutation } from 'src/app/store/entities/usermanagement/system-user.actions';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {

  first_name: string | any;
  last_name: string | any;
  emp_id: string | any;
  profile_type: string | any;
  profile_title: string | any;


  title = "Add Doctor"
  constructor(
    private store: Store,
    private dialog: MatDialogRef<AddDoctorComponent>,
  ){}

  registerUser(){
    const formData = {
          userLastName: this.last_name,
          userFirstName: this.first_name,
          userNickname: this.emp_id,
          profileTitle: this.profile_title,
          profileType: this.profile_type,
    }
    console.log(formData)
      this.store.dispatch(registerUsersMutation({
        input:formData
      }))
      this.dialog.close()
    }

}
