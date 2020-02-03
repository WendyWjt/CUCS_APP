import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbozorgzadehPage } from './ebozorgzadeh.page';

describe('EbozorgzadehPage', () => {
  let component: EbozorgzadehPage;
  let fixture: ComponentFixture<EbozorgzadehPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbozorgzadehPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbozorgzadehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
