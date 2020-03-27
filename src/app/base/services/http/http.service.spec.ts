import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';


describe('HttpService', () => {
  let service: HttpService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        // HttpService,
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // service = TestBed.inject(HttpService);
    service = new HttpService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#get', () => {
    it('should return an http response when server returns a 200', (done: DoneFn) => {
      const expectedResponse = {
        status: 200,
        statusText: 'OK',
        url: 'http://localhost:3000/v1',
        ok: true,
        type: 4,
        body: {
          environment: 'local',
          apiVersion: 20200318001,
          lastUpdated: '2020-04-17T22:00:00.000Z',
          status: true,
        }
      };
      httpClientSpy.get.and.returnValue(of(expectedResponse));

      service.get('http://localhost:3000/v1', {}, {
        'Content-Type': 'application/json',
      }).subscribe(
        res => { console.log(res); expect(res).toBeTruthy(); done(); },
        fail
      );

      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
    it('should return an http response when server returns an 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        url: 'http://localhost:3000/v1/asdasdasd',
        status: 404, statusText: 'Not Found'
      });
      httpClientSpy.get.and.returnValue(of(errorResponse));

      service.get('http://localhost:3000/v1/asdasdasd', {}, {
        'Content-Type': 'application/json',
      }).subscribe(
        res => { console.log(res); expect(res).toBeTruthy(); done(); },
        err => { console.error(err); expect((err instanceof HttpErrorResponse)).toBeTruthy(); done(); }
      );

      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
  });
});
