import * as fromFiltro from './filter.actions';

const InitState: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = InitState, action: fromFiltro.acciones): fromFiltro.filtrosValidos {
    switch (action.type) {
        case fromFiltro.SET_FILTER:
            return action.filtro;

        default: return state;
    }
}
