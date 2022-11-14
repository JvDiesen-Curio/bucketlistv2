import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string) {
    return lastValueFrom(this.http.get(url));
  }

  public getitem(url: string, id: string) {
    return lastValueFrom(this.http.get(url + "/" + id))
  }

  public post(url: string, data: object) {
    return lastValueFrom(this.http.post(url, data));
  }

  public put(url: string, data: object, id: string) {
    return lastValueFrom(this.http.put(url + "/" + id, data));
  }

  public delete(url: string, id: string) {
    return lastValueFrom(this.http.delete(url + "/" + id))


  }









}
