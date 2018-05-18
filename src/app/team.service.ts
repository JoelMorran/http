import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


import { Team } from './team';


@Injectable()
export class TeamService {


private teamsUrl = 'api/teams.json';

  constructor(private http: HttpClient) { }


/** GET teams from the server */
getTeams (): Observable<Team[]> {
  return this.http.get<Team[]>(this.teamsUrl);
}

}
