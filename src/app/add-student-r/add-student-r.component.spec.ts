import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentRComponent } from './add-student-r.component';

describe('AddStudentRComponent', () => {
  let component: AddStudentRComponent;
  let fixture: ComponentFixture<AddStudentRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
