import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface Response { 
    technologies: any;
}

@Injectable()
export class StaticService {
    constructor(private http: HttpClient) { }

    getTechnologies() {
        return this.http.get<Response>('assets/content/technologies.json').pipe(map(response => response.technologies));
    }
}