import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { TypeRootState, TypeAppDispatch } from "./store";

export const useAppDispatch: () => TypeAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
