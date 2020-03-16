import { TestBed } from '@angular/core/testing';

import { ApiService } from '@core/services/api/api.service';
import { CoreModule } from '../../core.module';


describe('ApiService', () => {
  let apiService: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
    apiService = TestBed.get(ApiService)
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should return 200 code', (done: DoneFn) => {
    let pong$ = apiService.ping()
    pong$.subscribe(pong => {
      console.log('pong', pong);
      expect(pong).toEqual({status: true});
      done();
    })
  })
});
