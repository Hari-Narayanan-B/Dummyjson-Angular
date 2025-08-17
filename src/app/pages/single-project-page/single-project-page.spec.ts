import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectPage } from './single-project-page';

describe('SingleProjectPage', () => {
  let component: SingleProjectPage;
  let fixture: ComponentFixture<SingleProjectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
