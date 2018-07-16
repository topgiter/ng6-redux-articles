import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; 
 
@Injectable()
export class NewsService {
 
    constructor(private http:HttpClient) {}
 
    getNews() {
        return forkJoin(
            this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2a6fbf5621a94869a7aa2fbda6b584a1'),
        );
    }
}