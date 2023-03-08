import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchAll } from 'rxjs';
import { Procuration } from '../procurartion';
import { ProcurartonService } from '../procurarton.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GlobalComponent } from '../global-component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-procuration1',
  templateUrl: './procuration1.component.html',
  styleUrls: ['./procuration1.component.css']
})
export class Procuration1Component implements OnInit {
  procuration = new Procuration();
  exform!: FormGroup;
  fileToUpload!: File | null;
  file: any;
  files: any[]=[];
  files2: any[]=[];
  documentList: any[] = [];
  hasAttachament?:boolean;

  //downloadUrl = `http://adminkazyonplus.uksouth.cloudapp.azure.com/api/attachment/download/${1}?type=procurations`
  downloadUrl = GlobalComponent.appUrl+`/attachment/download/${1}?type=procurations`;
  constructor(private service: ProcurartonService, private _navigate: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'client_name' : new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required]),
      'office' : new FormControl(null, [Validators.required]),
      'procuration_number':new FormControl(null, [Validators.required]),
      'office_procuration_number':new FormControl(null, [Validators.required])
    });
    }

  addProcurartion() {
    console.log("Hello 1");

    this.service.addProcurartion(this.procuration)
        .subscribe(
      suc => {
        console.log("Hello 2");
        Swal.fire({title:"تم الحفظ",color:'green',confirmButtonColor:'green'}).then(() => {
          this._navigate.navigate(['procuration']);
        });
        if (this.files.length>0)
        {
        console.log(suc.hasAttachment);

        if (suc.hasAttachment==false)
        {
          console.log("Hello 3");
          this.service.uploadPdfProc(this.files[0],suc.id).subscribe(data => {
            console.log(data);
          }) ;
        }
        else{
          console.log("Hello 4");
          this.service.uploadPdfProc(this.files[0],suc.id).subscribe(data => {
            console.log(data);
          }) ;
        }
      }
        console.log("success",suc);
      },
      err => {
        Swal.fire({title:"تعذر الحفظ",color:'red',confirmButtonColor:'red'}).then(() => {
        });
      })
  }

  onSave(){
    this.addProcurartion();
  }
  onChange(event: any) {
    console.log("On change 1");
    this.files = event.target.files;
    this.documentList = event.target.files;
   }

  remove(index:number){
   this.files2=[];
   for (let i = 0; i < this.files.length; i++) {
     this.file = this.files[i];
     if (index != i)
     {
       this.files2.push(this.file)
      } // here you exclude the file. thus removing it.
   }
   this.documentList = this.files2;
   this.files=this.files2;
  }
  letterOnly(event: { keyCode: any; })
  {
    var charCode = event.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode==32)

      return true;
    else
      return false;
  }

  isNumberKey(event: { keyCode: any; }){

    var charCode = event.keyCode;
    if ((charCode > 31 && (charCode < 48) || charCode > 57))

      return true;
    else
      return false;
  }

}
