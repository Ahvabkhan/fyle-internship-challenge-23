import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { combineLatest } from 'rxjs';
import { GithubRepo, User } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User | undefined;
  githubRepos: GithubRepo[] | undefined;
  currentPageGithubRepos: GithubRepo[] | undefined;
  inputValue: string | undefined;
  isLoading = false;

  constructor(private apiService: ApiService) {}

  onSearch(username: string | undefined) {
    this.isLoading = true;
    combineLatest([
      this.apiService.getUser(username),
      this.apiService.getRepos(username),
    ]).subscribe(
      ([user, githubRepos]) => {
        this.user = user;
        this.githubRepos = githubRepos;
        console.log(githubRepos);

        this.currentPageGithubRepos = this.githubRepos.slice(0, 6);
        this.isLoading = false;
      },
      () => (this.isLoading = false)
    );
  }

  onPageChange(index: number) {
    const startIndex = 6 * index;
    this.currentPageGithubRepos = this.githubRepos?.slice(
      startIndex,
      6 + startIndex
    );
  }
}
