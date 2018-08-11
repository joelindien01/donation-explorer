import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientSimpleViewComponent } from './recipient-simple-view.component';

describe('RecipientSimpleViewComponent', () => {
  let component: RecipientSimpleViewComponent;
  let fixture: ComponentFixture<RecipientSimpleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientSimpleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientSimpleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
