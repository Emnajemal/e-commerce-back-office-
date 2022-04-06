import { Component, OnInit } from '@angular/core';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { UserListService} from '../user-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user-sidebar',
  templateUrl: './new-user-sidebar.component.html'
})
export class NewUserSidebarComponent implements OnInit {
  errors = {
    name:null,
    email:null,
    password:null,
  }
  public fullname;
  public username;
  public email;

  /**
   * Constructor
   *
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private  UserListService: UserListService) {}

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Submit
   *
   * @param form
   */
 /* submit(form) {
    if (form.valid) {
      this.toggleSidebar('new-user-sidebar');
    }
  }*/
  submit(form:NgForm){
    const name = form.value.username;
    const email = form.value.email;
    const phone = form.value.phone;
    const Address = form.value.address;

    this.UserListService.register(name,email,phone,Address).subscribe((res)=>{
       console.log(res);
      
    }
    )}

  ngOnInit(): void {}
}
