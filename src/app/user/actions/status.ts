import { Action } from '@ngrx/store';

export enum StatusActionTypes {
    SelectActiveTabIndex = '[Status] Select Active Tab Index'
}

export class SelectActiveTabIndex implements Action {
    readonly type = StatusActionTypes.SelectActiveTabIndex;

    constructor(public payload: number) {
    }
}

export type StatusActions =
    SelectActiveTabIndex;
