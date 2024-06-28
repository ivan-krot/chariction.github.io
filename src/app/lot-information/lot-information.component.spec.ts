import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotInformationComponent } from './lot-information.component';

describe('LotInformationComponent', () => {
  let component: LotInformationComponent;
  let fixture: ComponentFixture<LotInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LotInformationComponent]
    });
    fixture = TestBed.createComponent(LotInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
