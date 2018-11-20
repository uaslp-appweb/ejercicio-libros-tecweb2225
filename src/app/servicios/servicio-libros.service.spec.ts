import { TestBed } from '@angular/core/testing';

import { ServicioLibrosService } from './servicio-libros.service';

describe('ServicioLibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioLibrosService = TestBed.get(ServicioLibrosService);
    expect(service).toBeTruthy();
  });
});
