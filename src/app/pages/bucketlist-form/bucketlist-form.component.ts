import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BucketlistService } from 'src/app/service/bucketlist/bucketlist.service';

@Component({
  selector: 'app-bucketlist-form',
  templateUrl: './bucketlist-form.component.html',
  styleUrls: ['./bucketlist-form.component.css']
})
export class BucketlistFormComponent implements OnInit {


  public form: FormGroup = new FormGroup({
    title: new FormControl(''),

  })

  constructor(
    private bucketlistService: BucketlistService
  ) {
  }



  ngOnInit(): void {
  }

  public save() {
    if (this.form.valid)
      this.bucketlistService.postBucketlist(this.form.value);
  }

}
