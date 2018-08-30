import { Action } from '@ngrx/store';
import { MenuItem } from '../../models/menuItem.model';

export enum PagesActionTypes {
    ExpandSidebar = '[Pages] Expand Sidebar',
    CollapseSidebar = '[Pages] Collapse Sidebar',
    FillMenuItems = '[Pages API] Fill Menu Items',
    ApplyMenuDefinition = '[Pages API] Apply Menu Definition',
    OpenModal = '[Pages] Open Modal',
    CloseModal = '[Pages] Close Modal',
    ResizeWindow = '[Pages API] Resize window'
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

export class OpenModal implements Action {
    readonly type = PagesActionTypes.OpenModal;

    constructor(public payload: {modalName: string}) {
    }
}

export class CloseModal implements Action {
    readonly type = PagesActionTypes.CloseModal;

    constructor(public payload: {modalName: string}) {
    }
}

export class ResizeWndow implements Action {
    readonly type = PagesActionTypes.ResizeWindow;

    constructor(public payload: {height: number, width: number}) {
    }
}

export type PagesActions =
    ExpandSidebar
    | CollapseSidebar
    | FillMenuItems
    | ApplyMenuDefinition
    | OpenModal
    | CloseModal
    | ResizeWndow;
