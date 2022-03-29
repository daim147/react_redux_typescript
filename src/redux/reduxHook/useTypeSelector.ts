import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { reducersTypes } from '..';

export const useTypedSelector: TypedUseSelectorHook<reducersTypes> = useSelector;
