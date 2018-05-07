import { Action } from '@ngrx/store';
import { MenuItem } from '../models/menuItem.model';

export enum PagesActionTypes {
    ExpandSidebar = '[Pages] Expand Sidebar',
    CollapseSidebar = '[Pages] Collapse Sidebar',
    FillMenuItems = '[Pages] Fill Menu Items',
    ApplyMenuDefinition = '[Pages] Apply Menu Definition'
}

export class ExpandSidebar implements Action {
    readonly type = PagesActionTypes.ExpandSidebar;
}

export class CollapseSidebar implements Action {
    readonly type = PagesActionTypes.CollapseSidebar;
}

export class FillMenuItems implements Action {
    readonly type = PagesActionTypes.FillMenuItems;

    constructor(public payload: MenuItem[]) {
    }
}

export class ApplyMenuDefinition implements Action {
    readonly type = PagesActionTypes.ApplyMenuDefinition;
    constructor(public payload: any) {
    }
}

export type PagesActions =
    ExpandSidebar
    | CollapseSidebar
    | FillMenuItems
    | ApplyMenuDefinition;
