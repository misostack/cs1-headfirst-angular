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
      let theApiService = TestBed.get(ApiService)
      expect(theApiService).toBeTruthy()
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
