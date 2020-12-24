import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'portfolio-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {

  codeUrl = 'https://gist.githubusercontent.com/KomanRudden/6c6e0576bdcb6bbd626c/raw/8756d296e93fdc22da00f2df4f4c3fe5d7cc28df/Read%2520file%2520from%2520resources';
  gistId = '6c6e0576bdcb6bbd626c';
  gist!: HighlightResult;

}
