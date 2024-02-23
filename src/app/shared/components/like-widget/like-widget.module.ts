import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LikeWidgetComponent } from "./like-widget.component";
import { UniqueIdService } from "../../services/unique-id.service";


@NgModule({
    declarations: [LikeWidgetComponent],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [LikeWidgetComponent],
    providers: [UniqueIdService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LikeWidgetModule { }