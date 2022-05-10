import {Injectable} from "@angular/core";
import {Concert} from "../models/concert.model";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ConcertService {
  private baseUrl: string = "http://css-appli20.com:3000"

  constructor(private http: HttpClient) {
  }

  public fetchAllConcerts(): Promise<Concert[]> {
    return new Promise<Concert[]>(resolve => {
      this.http.get(`${this.baseUrl}/concerts/all`).subscribe(response => {
        resolve(response as Concert[]);
      })
    })
  }
}
