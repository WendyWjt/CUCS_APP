import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseIntroIcs32Page } from './course-intro-ics32.page';

describe('CourseIntroIcs32Page', () => {
  let component: CourseIntroIcs32Page;
  let fixture: ComponentFixture<CourseIntroIcs32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroIcs32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseIntroIcs32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
