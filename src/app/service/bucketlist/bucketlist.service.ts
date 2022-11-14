import { Injectable } from '@angular/core';
import { BackendApiService } from '../backendApi/backend-api.service';

const url = 'http://bucketlist.test/api/bucketlist'

@Injectable({
  providedIn: 'root'
})

export class BucketlistService {

  constructor(
    private backendApiService: BackendApiService
  ) { }

  public getBucketlists() {
    return this.backendApiService.get(url).then(data => {
      return data;
    })
  }

  public getBucketlist(id: string) {
    return this.backendApiService.getitem(url, id);
  }


  public postBucketlist(data: object) {
    return this.backendApiService.post(url, data);
  }

  public putBucketlist(data: object, id: string) {
    return this.backendApiService.put(url, data, id);
  }

  public deleteBucketlist(id: string) {
    return this.backendApiService.delete(url, id);
  }


}
