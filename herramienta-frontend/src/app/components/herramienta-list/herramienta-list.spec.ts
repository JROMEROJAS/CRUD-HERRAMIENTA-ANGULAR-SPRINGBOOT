import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientaListComponent } from './herramienta-list';

describe('HerramientaList', () => {
  let component: HerramientaListComponent;
  let fixture: ComponentFixture<HerramientaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerramientaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerramientaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
