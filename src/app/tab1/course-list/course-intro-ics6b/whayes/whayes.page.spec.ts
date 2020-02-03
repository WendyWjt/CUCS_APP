import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhayesPage } from './whayes.page';

describe('WhayesPage', () => {
  let component: WhayesPage;
  let fixture: ComponentFixture<WhayesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhayesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhayesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
