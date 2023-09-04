import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';
import { IGroup } from 'src/app/Models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }


  getAllGroups(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(`${environment.apiUrl}Group/All`);
  }

  registerGroup(req: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}Group/Add`, req);
  }
}
