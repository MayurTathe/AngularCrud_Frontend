import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee:Employee=new Employee();

  constructor(private service:EmployeeService, private router:Router){

  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
  saveEmployee(user:NgForm){
    this.service.createEmployee(this.employee).subscribe(data => {
      this.gotoEmployeeList();
    })
  }


  onSubmit(user:NgForm) {
    this.saveEmployee(user);
  }

}
