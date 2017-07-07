import { Component } from '@angular/core';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'github-root',
  providers: [GithubService],
  templateUrl: './github.component.html'
})

export class GithubComponent {

    data = {};

    constructor(private githubService:GithubService) { }

    loadData(): void {
      var prom = this.githubService.myData().then(data => {
        this.data = data;
      });
    }

}
