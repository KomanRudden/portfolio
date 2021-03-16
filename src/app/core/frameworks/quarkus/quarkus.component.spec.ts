import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarkusComponent } from './quarkus.component';

describe('QuarkusComponent', () => {
  let component: QuarkusComponent;
  let fixture: ComponentFixture<QuarkusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarkusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
