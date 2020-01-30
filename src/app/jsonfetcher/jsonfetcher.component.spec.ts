import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfetcherComponent } from './jsonfetcher.component';

describe('JsonfetcherComponent', () => {
  let component: JsonfetcherComponent;
  let fixture: ComponentFixture<JsonfetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonfetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonfetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
