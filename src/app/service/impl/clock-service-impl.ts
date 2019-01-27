import {Injectable} from '@angular/core';
import {ClockService} from '../clock-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Clock} from '../../model/clock';

@Injectable({
  providedIn: 'root'
})
export class ClockServiceImpl implements ClockService {

  private baseUrl: any = 'http://localhost:8080';
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {}

  getTime(): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/`, this.httpOptions)
      .toPromise()
      .then(response => {
        return Promise.resolve(Clock.from(response));
      });
  }

}
