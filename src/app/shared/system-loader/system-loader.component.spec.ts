import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLoaderComponent } from './system-loader.component';

describe('SystemLoaderComponent', () => {
  let component: SystemLoaderComponent;
  let fixture: ComponentFixture<SystemLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemLoaderComponent]
    });
    fixture = TestBed.createComponent(SystemLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
