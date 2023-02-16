import { state } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Procuration } from '../procurartion';
import { ProcurartonService } from '../procurarton.service';
import { Route, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { error } from 'jquery';

@Component({ selector: 'app', templateUrl: 'procuration.component.html',styleUrls: ['./procuration.component.css'] })
export class ProcurationComponent implements OnInit {

    displayedColumns: string[] = ['#','اسم الموكل', 'رقم التوكيل', 'السنة', 'مكتب التوثيق', 'رقم التوكيل بالمكتب'];
    procs: Procuration[]=[] ;
    name:String="";
  router: any;

    constructor(private procurartonService: ProcurartonService,private _router:Router) { }

    ngOnInit(): void {
      this.procurartonService.getProcurartion().subscribe((data: Procuration[]) => {
        console.log(data);
        this.procs = data;
        this.procs.sort((a, b) => (a.id > b.id  ? 1 : -1));
      },(error) => {

        this._router.navigate(['error']);

      });
    }
    details(id:number){
      let route = 'procuration2/'+id;
    this._router.navigate([route]);
    }
    getProcurartion() {
      this.procurartonService.getProcurartionByName(this.name)
        .subscribe(

          data=> {
          console.log(data)
          this.procs=data;
          }
          ,(error) => {

            this._router.navigate(['error']);

          }

        )
      }

}


