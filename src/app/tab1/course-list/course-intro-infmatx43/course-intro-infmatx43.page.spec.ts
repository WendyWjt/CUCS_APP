import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroInfmatx43Page } from './course-intro-infmatx43.page';

describe('CourseIntroInfmatx43Page', () => {
  let component: CourseIntroInfmatx43Page;
  let fixture: ComponentFixture<CourseIntroInfmatx43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroInfmatx43Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroInfmatx43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
