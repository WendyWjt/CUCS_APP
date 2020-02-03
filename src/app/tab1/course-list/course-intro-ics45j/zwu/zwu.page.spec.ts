import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZwuPage } from './zwu.page';

describe('ZwuPage', () => {
  let component: ZwuPage;
  let fixture: ComponentFixture<ZwuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZwuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
