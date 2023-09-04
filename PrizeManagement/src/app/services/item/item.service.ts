import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IITem } from 'src/app/Models/IITem';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  GetAllItems(): Observable<IITem[]> {
    return this.http.get<IITem[]>(`${environment.apiUrl}Item/All`);
  }

  registerItem(req: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}Item/Add`, req);
  }

}
