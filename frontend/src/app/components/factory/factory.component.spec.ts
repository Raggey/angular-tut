import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryComponent } from './factory.component';

describe('FactoryComponent', () => {
  let component: FactoryComponent;
  let fixture: ComponentFixture<FactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Skip ng2Chart tests
  // @todo: fix this test
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
