import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HyS } from '../Model/hy-s';

@Injectable({
  providedIn: 'root'
})
export class SHySService {
  HySURL= 'https://backendagustin-9qkv.onrender.com/HyS/'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<HyS[]>{
    return this.httpClient.get<HyS[]>(this.HySURL + 'lista');
  }

  public detail(id:number):Observable<HyS>{
    return this.httpClient.get<HyS>(this.HySURL+`detail/${id}`);
  }

  public save(hys:HyS):Observable<any>{
    return this.httpClient.post<any>(this.HySURL+'create',hys);
  }

  public update(id:number,hys:HyS):Observable<any>{
    return this.httpClient.put<any>(this.HySURL+`update/${id}`,hys);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.HySURL+`delete/${id}`);
  }
}
