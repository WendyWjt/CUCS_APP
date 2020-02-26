import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MkostersPage } from './mkosters.page';

describe('MkostersPage', () => {
  let component: MkostersPage;
  let fixture: ComponentFixture<MkostersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkostersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MkostersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
