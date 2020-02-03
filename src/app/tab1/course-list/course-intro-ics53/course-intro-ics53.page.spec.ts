import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs53Page } from './course-intro-ics53.page';

describe('CourseIntroIcs53Page', () => {
  let component: CourseIntroIcs53Page;
  let fixture: ComponentFixture<CourseIntroIcs53Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroIcs53Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroIcs53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
