import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { PagesActionTypes, FillMenuItems } from './../actions/pages';
import { MenuItem } from '../../models/menuItem.model';
import { MenuService } from '../../services/menu.service';

@Injectable()
export class PagesEffects {

    @Effect()
    menuItems = this.actions.pipe(
        ofType(PagesActionTypes.ApplyMenuDefinition),
        map((action: any) => action.payload),
        switchMap(definition => {
            return this.menuService
                .transformMenuDefinition(definition)
                .pipe(
                    map((items: MenuItem[]) => new FillMenuItems(items))
                );
        })
    );

    constructor(private actions: Actions,
                private menuService: MenuService) {
    }
}
