import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { MapPagePage } from './map-page.page';

describe('MapPagePage', () => {
  let component: MapPagePage;
  let fixture: ComponentFixture<MapPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
