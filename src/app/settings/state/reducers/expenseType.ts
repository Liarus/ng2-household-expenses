import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { ExpenseType } from '../../models/expenseType.model';
import { ExpenseTypeActions, ExpenseTypeActionTypes } from './../actions/expenseType';

export interface State extends EntityState<ExpenseType> {
    selectedExpenseTypeId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<ExpenseType> = createEntityAdapter<ExpenseType>({
    selectId: (expenseType: ExpenseType) => expenseType.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedExpenseTypeId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: ExpenseTypeActions
): State {
    switch (action.type) {

        case ExpenseTypeActionTypes.AddExpenseType:
        case ExpenseTypeActionTypes.UpdateExpenseType:
        case ExpenseTypeActionTypes.RemoveExpenseType:
        case ExpenseTypeActionTypes.LoadExpenseTypes:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case ExpenseTypeActionTypes.AddExpenseTypeFail:
        case ExpenseTypeActionTypes.LoadExpenseTypesFail:
        case ExpenseTypeActionTypes.RemoveExpenseTypeFail:
        case ExpenseTypeActionTypes.UpdateExpenseTypeFail:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false
            };

        case ExpenseTypeActionTypes.AddExpenseTypeSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case ExpenseTypeActionTypes.UpdateExpenseTypeSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case ExpenseTypeActionTypes.RemoveExpenseTypeSuccess:
            return adapter.removeOne(action.payload, {
                ...state,
                loading: false
            });

        case ExpenseTypeActionTypes.LoadExpenseTypesSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case ExpenseTypeActionTypes.SelectExpenseType:
            return {
                ...state,
                errorMessage: '',
                selectedExpenseTypeId: action.payload
            };

        default: {
            return state;
        }

    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedExpenseTypeId;
