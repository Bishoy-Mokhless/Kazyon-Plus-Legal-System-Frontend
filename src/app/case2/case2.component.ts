import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Case } from '../case';
import { ProcurartonService } from '../procurarton.service';

@Component({
  selector: 'app-case2',
  templateUrl: './case2.component.html',
  styleUrls: ['./case2.component.css']
})
export class Case2Component implements OnInit {
  [x: string]: any;

  case=new Case ;
  exform!: FormGroup;
  constructor(private service: ProcurartonService, private _build:FormBuilder, private _navigate: Router) { }

  ngOnInit(): void {
    this.exform = this._build.group({
      'client' :  new FormControl("", Validators.required),
      'against' : new FormControl("", Validators.required),
      'category' : new FormControl("", Validators.required),
      'caseyear': new FormControl("", [Validators.required]),
      'numbercase':new FormControl(null, [Validators.required]),
      'area':new FormControl(null),
      'filenumber':new FormControl(null),
      'clientstat':new FormControl(null),
      'againststat':new FormControl(null),
    });
  }
  onSave(){
    this.addCase();
    Swal.fire({title:"تم الحفظ"}).then(() => {
      console.log('sad');
      this._navigate.navigate(['case']);
    });
  }
  addCase() {
    //let obj= <Case> Object.assign ({},this.exform);
    this.case.sessionRequests=[];
    this.service.addCase(this.case)
      .subscribe(data  => {
        console.log(data)
      })
  }


}