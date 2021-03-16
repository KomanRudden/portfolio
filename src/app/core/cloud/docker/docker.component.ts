import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent {

  codeUrl = 'https://gist.githubusercontent.com/KomanRudden/9cbd0e4baacfde7948ce6e80567a4373/raw/45e46d207f47a9fdc2c7974660cbd54500104264/Docker%2520commands';

  dockerfileUrl = 'https://gist.githubusercontent.com/KomanRudden/afcc45e92ac0c80c42817370b9bdf4ea/raw/7cc75d283bf0748cfefa983a7b8a439ba89c8eba/Dockerfile%2520Commands';
  
}
