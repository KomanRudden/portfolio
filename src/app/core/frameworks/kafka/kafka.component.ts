import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'portfolio-kafka',
  templateUrl: './kafka.component.html',
  styleUrls: ['./kafka.component.scss']
})
export class KafkaComponent {

  codeUrl = 'https://gist.githubusercontent.com/KomanRudden/7fb4fe05e332a7fdb755922e6c5e3324/raw/9a2ab5f51163f2c3bdff1f2ebd83d41049662718/kafka-topic';
  gistId = '6c6e0576bdcb6bbd626c';
  gist!: HighlightResult;

}
