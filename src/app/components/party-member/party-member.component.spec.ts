import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMemberComponent } from './party-member.component';

describe('PartyMemberComponent', () => {
  let component: PartyMemberComponent;
  let fixture: ComponentFixture<PartyMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PartyMemberComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PartyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
