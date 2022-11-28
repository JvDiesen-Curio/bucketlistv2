import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BucketlistService } from 'src/app/service/bucketlist/bucketlist.service';

@Component({
  selector: 'app-bucketlist-form',
  templateUrl: './bucketlist-form.component.html',
  styleUrls: ['./bucketlist-form.component.css']
})
export class BucketlistFormComponent implements OnInit {


  public form?: FormGroup;

  public bucketlist: any;

  constructor(
    private bucketlistService: BucketlistService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async querys => {
      if (!querys['id']) return this.startform();
      this.bucketlist = await this.bucketlistService.getBucketlist(querys['id'])
      this.startform();
    })

  }

  public save() {
    if (this.form?.valid) {
      if (this.bucketlist) this.bucketlistService.putBucketlist(this.form.value, this.bucketlist.id);
      else this.bucketlistService.postBucketlist(this.form?.value);
    }
  }

  private startform() {
    if (!this.bucketlist) {
      this.form = new FormGroup({
        title: new FormControl(''),
      })
      return
    }
    this.form = new FormGroup({
      title: new FormControl(this.bucketlist.title),
    })


  }

}
