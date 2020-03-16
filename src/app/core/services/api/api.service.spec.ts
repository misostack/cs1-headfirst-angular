import { TestBed } from '@angular/core/testing';

import { ApiService } from '@core/services/api/api.service';
import { CoreModule } from '../../core.module';


describe('ApiService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
    });
  });

  describe('Scenario: Create new instance', () => {
    // Then
    it('The new instance must be created', () => {
      // Get service instance from injection
      let theApiService : ApiService = TestBed.get(ApiService)
      console.log(typeof(theApiService))
      expect(theApiService).toBeTruthy()
    })
  })

  describe('Scenario: Send a GET request to API server', () => {
    // Then
    it('rReturn the full response with status code, body', (done : DoneFn) => {
      let theApiService : ApiService = TestBed.get(ApiService)
      theApiService.get('/samples').subscribe(res => {
        Object.keys(res).map(k => console.log(k, res[k]))
        expect(res).toBeTruthy()
        done();
      })
    })
  })
  // it('should return 200 code', (done: DoneFn) => {
  //   let pong$ = apiService.ping()
  //   pong$.subscribe(pong => {
  //     console.log('pong', pong);
  //     expect(pong).toEqual({status: true});
  //     done();
  //   })
  // })
});
