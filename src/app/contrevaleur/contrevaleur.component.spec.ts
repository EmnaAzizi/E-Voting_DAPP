import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrevaleurComponent } from './contrevaleur.component';

describe('ContrevaleurComponent', () => {
  let component: ContrevaleurComponent;
  let fixture: ComponentFixture<ContrevaleurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrevaleurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrevaleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
