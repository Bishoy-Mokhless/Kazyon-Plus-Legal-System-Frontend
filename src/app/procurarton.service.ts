import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procuration } from 'src/app/procurartion';
import { Case } from './case';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class ProcurartonService {
  //private base1Url="http://adminkazyonplus.uksouth.cloudapp.azure.com/api/";
  //private baseUrl = "http://adminkazyonplus.uksouth.cloudapp.azure.com/api/procuration";
  private baseUrl = "https://legalbackend-production.up.railway.app/procuration";
  private base1Url="https://legalbackend-production.up.railway.app/";
  //private caseUrl= "http://adminkazyonplus.uksouth.cloudapp.azure.com/api/case";
  private caseUrl= "https://legalbackend-production.up.railway.app/case";
  //private sessionUrl= "http://adminkazyonplus.uksouth.cloudapp.azure.com/api/session";
  private sessionUrl= "https://legalbackend-production.up.railway.app/session";
  token = JSON.parse(localStorage.getItem('token')!);
  temp = this.token['Token'];
  tempToken = JSON.stringify(this.temp);
  finalToken= this.tempToken.substring(2,this.tempToken.length-2)

  constructor(private http: HttpClient) { }

  getProcurartion(): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(this.baseUrl+"/getall",{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  getProcurartionByName(name:String): Observable<Procuration[]>{
    return this.http.get<Procuration[]>(`${this.baseUrl+"/search?name="+name}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  getProcurartionByID(ID:number): Observable<Procuration>{
    return this.http.get<Procuration>(`${this.baseUrl+"/view/"+ID}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  addProcurartion(proc:Procuration): Observable<any>{
    const headers = { 'content-type': 'application/json',
                      'Authorization':this.finalToken}

    const body=JSON.stringify(proc);
    console.log(body)
    return this.http.post(this.baseUrl + '/add', body,{'headers':headers})
  }
  updateProcurartion(proc:Procuration): Observable<any>{
    const headers = { 'content-type': 'application/json','Authorization':this.finalToken}
    const body=JSON.stringify(proc);
    return this.http.put(this.baseUrl + '/update/'+proc.id, body,{'headers':headers})
  }
  getCases(): Observable<Case[]>{
    return this.http.get<Case[]>(`${this.caseUrl}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  getCaseByID(ID:number): Observable<Case>{
    return this.http.get<Case>(`${this.caseUrl+"/"+ID}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  addCase(cases:Case): Observable<any>{
    const headers = { 'content-type': 'application/json','Authorization':this.finalToken,}
    const body=JSON.stringify(cases);
    console.log(body)
    return this.http.post(this.caseUrl , body,{'headers':headers})
  }
  updateCase(cases:Case): Observable<any>{
    const headers = { 'content-type': 'application/json','Authorization':this.finalToken,}
    const body=JSON.stringify(cases);
    console.log("this");
    console.log(cases.idCase);
    return this.http.put(this.caseUrl + '/'+cases.idCase, body,{'headers':headers})
  }
  getSessionByCaseID(ID:number): Observable<Session[]>{
    console.log("sss");
    return this.http.get<Session[]>(`${this.sessionUrl+"/"+ID}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  getCasesByName(name:String): Observable<Case[]>{
    return this.http.get<Case[]>(`${this.caseUrl+"/get-name?name="+name}`,{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }
  uploadPdfProc(type:string,files: any[], id?: number | null){
    var fd = new FormData();
    console.log("hi");
    for (let i=0;i<files.length;i++)
    {
      fd.append("files", files[i], files[i].name);
    }
    fd.append("type",type);
    return this.http.post(this.base1Url + "attachment/upload?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data",
        'Authorization':this.finalToken,
      }
    });
  }
  appendPdfProc(type:string,files: any[], id?: number | null){
    var fd = new FormData();
    console.log("hi");
    for (let i=0;i<files.length;i++)
    {
      fd.append("files", files[i], files[i].name);
    }
    fd.append("type",type);
    return this.http.post(this.base1Url + "attachment/append?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data",
        'Authorization':this.finalToken,
      }
    });
  }
 addSession(id:Number,session:Session): Observable<any> {
    const headers = { 'content-type': 'application/json','Authorization':this.finalToken,}
    const body=JSON.stringify(session);
    console.log(body)
    return this.http.post(this.sessionUrl+"/add/"+id , body,{'headers':headers})
  }


}
