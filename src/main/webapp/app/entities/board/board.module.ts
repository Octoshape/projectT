import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectTSharedModule } from 'app/shared';
import {
    BoardComponent,
    BoardDetailComponent,
    BoardUpdateComponent,
    BoardDeletePopupComponent,
    BoardDeleteDialogComponent,
    boardRoute,
    boardPopupRoute
} from './';

const ENTITY_STATES = [...boardRoute, ...boardPopupRoute];

@NgModule({
    imports: [ProjectTSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BoardComponent, BoardDetailComponent, BoardUpdateComponent, BoardDeleteDialogComponent, BoardDeletePopupComponent],
    entryComponents: [BoardComponent, BoardUpdateComponent, BoardDeleteDialogComponent, BoardDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectTBoardModule {}
