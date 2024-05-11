export interface GithubRepo {
  name:string;
  discription:string,
  topics:string[],
  html_url:string;
}

export interface User {
  name:string;
  bio:string;
  avatar_url:string;
  location:string;
  url:string;
}
