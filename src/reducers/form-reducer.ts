export type FormActions =
  { type: 'set-name', payload: FormDataEntryValue | null } |
  { type: 'clear-name-state' }

export type FormState = {
  name: FormDataEntryValue | null
}

export const initialState: FormState = {
  name: ''
}

export function FormReducer(state: FormState, action: FormActions) {
  switch (action.type) {
    case 'set-name':
      return {
        ...state,
        name: action.payload
      }

    case 'clear-name-state':
      return {
        ...state,
        name: null
      }

    default:
      return state
  }
}
