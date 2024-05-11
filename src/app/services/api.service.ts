import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { GithubRepo, User } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string | undefined):Observable<User> {
    return this.httpClient.get<User>(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  getRepos(githubUsername: string | undefined):Observable<GithubRepo[]> {
    return this.httpClient.get<GithubRepo[]>(`https://api.github.com/users/${githubUsername}/repos`);
  }
}
