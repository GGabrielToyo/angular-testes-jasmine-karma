import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;
    });

    it('Should crate component', () => {

        expect(component).toBeTruthy();
    });

    it('Should auto auto-generate Id during ngOnInit (@Input id) when is not assigned', () => {
        fixture.detectChanges();

        expect(component.id).toBeTruthy();
    });

    it('Should not auto-generate Id during ngOnInit when (@Input id) is assigned', () => {
        component.id = 'someId';
        fixture.detectChanges();

        expect(component.id).toBe('someId');
    });

    it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();

        expect(component.liked.emit).toHaveBeenCalled();
    });

});