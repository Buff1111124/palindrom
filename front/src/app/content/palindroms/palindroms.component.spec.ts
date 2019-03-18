import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromsComponent } from './palindroms.component';

describe('PalindromsComponent', () => {
  let component: PalindromsComponent;
  let fixture: ComponentFixture<PalindromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
