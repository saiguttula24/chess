import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePlayComponent } from './offline-play.component';

describe('OfflinePlayComponent', () => {
  let component: OfflinePlayComponent;
  let fixture: ComponentFixture<OfflinePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinePlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
