import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Contract } from './contract';
import { ContractSummary } from './contract-summary';
import { Observable, ObservedValueOf} from 'rxjs';
import { GlobalComponent } from '../global-component';



@Injectable({
  providedIn: 'root'
})
export class ContractsApiService {



  constructor(private _HttpClient:HttpClient) { }

  api = GlobalComponent.appUrl+'/contract/'
  //api = 'http://localhost:8080/contract/'
  token = JSON.parse(localStorage.getItem('token')!);
  temp = this.token['Token'];
  tempToken = JSON.stringify(this.temp);
  finalToken= this.tempToken.substring(2,this.tempToken.length-2)


  getAllContracts(filter_string?:String):Observable<Contract[]> {

    return this._HttpClient.get<Contract[]>(this.api + "filter?" + filter_string, {
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }

  getContractById(id: Number):Observable<Contract> {

    return this._HttpClient.get<Contract>(this.api + id, {
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }

  getContractStatusCount():Observable<ContractSummary> {


    return this._HttpClient.get(this.api + "status",{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }

   downloadContractAttachment (id:string): any {

    return this._HttpClient.get(this.api +"downloadFile/"+id, {
      headers: {
        'Authorization':this.finalToken,
      },
      responseType: 'blob'
    },
    );
  }

  addContractAttachments(files: any,id:string) {
    const formData: FormData = new FormData();
    formData.append("files",files)
    return this._HttpClient.post<any>(this.api+ "addFile/"+id ,formData,{
      headers: {
        "Content-Type" : "multipart/form-data",
        "mimeType" : "multipart/form-data",
        'Authorization':this.finalToken,
        reportProgress: 'true',
      }
    });
  }


  appendContractAttachments(files: any[], id?: string | null) {
    const fd: FormData = new FormData();


     files.forEach(file => {
      fd.append("files", file, file.name);
    })
    return this._HttpClient.post<Contract[]>(this.api + "attachment/append?" + "id="+  <Number>  <unknown>id, fd, {
      headers: {
        "mimeType" : "multipart/form-data",
        'Authorization':this.finalToken
      }
    });
  }

  addContract(contract:Contract):Observable<Contract> {

    return this._HttpClient.post<Contract>(this.api, contract, {
      headers: {
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization':this.finalToken
      }
    });

  }

  listStoreCodes():Observable<number[]> {
    return this._HttpClient.get<number[]>(this.api + "store-codes",{
      headers: {
        'Authorization':this.finalToken,
      }
    });
  }

  updateContract(contract:Contract, id?:String) {

    return this._HttpClient.post(this.api + id, contract,{
      headers: {
        'Authorization':this.finalToken,
      }
    });

  }



//   getContractsStatistics():Observable<Contract> {
//     return this._HttpClient.get<Contract>(this.api + id);
//   }
}
