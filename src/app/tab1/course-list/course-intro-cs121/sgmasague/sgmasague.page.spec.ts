import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SgmasaguePage } from './sgmasague.page';

describe('SgmasaguePage', () => {
  let component: SgmasaguePage;
  let fixture: ComponentFixture<SgmasaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgmasaguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SgmasaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
