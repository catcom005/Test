import { atom } from 'jotai';

export const userAtom = atom({ name: 'John Doe', age: 25 });

export const userCustomer = atom({ name: 'John Doe', age: 25 });

export const useLoadingAtom = atom({ loading: false });
