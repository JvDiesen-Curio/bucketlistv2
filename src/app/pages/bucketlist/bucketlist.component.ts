import { Component, OnInit } from '@angular/core';
import { BucketlistService } from 'src/app/service/bucketlist/bucketlist.service';
import { NummerService } from 'src/app/service/nummer/nummer.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  public bucketlistData: any;

  constructor(
    private bucketlistService: BucketlistService
  ) { }


  async ngOnInit(): Promise<void> {
    this.bucketlistData = await this.bucketlistService.getBucketlists();
    console.table(this.bucketlistData);

  }


}
