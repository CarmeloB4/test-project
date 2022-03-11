import { TestBed } from '@angular/core/testing';

import {DashboardService, Sports} from './dashboard.service';

describe('FilmService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSports', () => {
    const sports: Sports[] = [
      { outdoor: true, sport:"tennis" },
      { outdoor: true, sport: "running" },
      { outdoor: false, sport: "padel" },
      { outdoor: false, sport: "crossfit" },
      { outdoor: true, sport: "cycling" },
      { outdoor: true, sport: "football" },
      { outdoor: false, sport: "yoga" },
      { outdoor: false, sport: "gym" }
    ];

    it('should return a defined value', () => {
      expect(service.getSports(0)).toBeDefined();
    });

    it('should return an outdoor sports', () => {
      const outdoorSports = sports.filter((s) => s.outdoor)
      expect(service.getSports(12)).toEqual(outdoorSports);
    });

    it('should return an indoor sports', () => {
      const indoorSports = sports.filter((s) => !s.outdoor)
      expect(service.getSports(7)).toEqual(indoorSports);
    });

    it('should return an indoor sports if temperature is 8 degrees', () => {
      const indoorSports = sports.filter((s) => !s.outdoor)
      expect(service.getSports(8)).toEqual(indoorSports);
    });

  });
});
