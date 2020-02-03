import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiraniPage } from './sirani.page';

describe('SiraniPage', () => {
  let component: SiraniPage;
  let fixture: ComponentFixture<SiraniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiraniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiraniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
