import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnicolauPage } from './anicolau.page';

describe('AnicolauPage', () => {
  let component: AnicolauPage;
  let fixture: ComponentFixture<AnicolauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnicolauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnicolauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
