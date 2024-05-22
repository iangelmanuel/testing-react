import { createContext, useReducer, type Dispatch } from 'react'
import { initialState, FormReducer } from '../reducers/form-reducer'
import type { FormState, FormActions } from '../reducers/form-reducer'

export type FormContextType = {
  state: FormState
  dispatch: Dispatch<FormActions>
}

type FormProviderProps = {
  children: React.ReactNode
}

const initalContext: FormContextType = {
  state: initialState,
  dispatch: () => null,
}

export const FormContext = createContext(initalContext)

export default function FormProvider({ children }: FormProviderProps) {
  const [state, dispatch] = useReducer(FormReducer, initialState)

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
