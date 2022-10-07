import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { APPLICATION_URL } from "../../../environments/environment";
import { DEFAULT_QUERY_PARAMS, IApiQueryParams } from "./api.service.entity";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(private readonly httpClient: HttpClient) { }

  public getRequest(endpointName: string, queryParams: IApiQueryParams = {}): Observable<T> {
    return this.httpClient.get(`${ APPLICATION_URL }${ endpointName }`, {
      params: this.buildQueryParams({ ...DEFAULT_QUERY_PARAMS, ...queryParams })
    }) as Observable<T>;
  }

  private buildQueryParams(params: IApiQueryParams): HttpParams {
    let queryParams = new HttpParams();
    Object.keys(params).map(key => queryParams = queryParams.append(key, params[key]))
    return queryParams;
  }
}
