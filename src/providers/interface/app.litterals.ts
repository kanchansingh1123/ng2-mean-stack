import { ITable } from './table.interface';

export interface AppLitterals {
    ELEMENT_DATA: Array<ITable>;
}

export const AppLitterals: AppLitterals = {
    ELEMENT_DATA: [
        { id: 1, name: 'Hydrogen', weight: 1.0079 },
        { id: 2, name: 'Helium', weight: 4.0026}
    ]
}