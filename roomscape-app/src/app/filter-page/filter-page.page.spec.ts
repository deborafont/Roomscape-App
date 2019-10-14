import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { FilterPagePage } from './filter-page.page';

describe('FilterPagePage', () => {
  let component: FilterPagePage;
  let fixture: ComponentFixture<FilterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
