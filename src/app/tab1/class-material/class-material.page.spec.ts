import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassMaterialPage } from './class-material.page';

describe('ClassMaterialPage', () => {
  let component: ClassMaterialPage;
  let fixture: ComponentFixture<ClassMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassMaterialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
