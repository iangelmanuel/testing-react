import { useState, useMemo } from 'react'
import useForm from '../hooks/useForm'
import type { ErrorState } from '../types/main'

type FormAppReturn = {
  error: ErrorState
  name: string | undefined
  checkName: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleClick: () => void
}

const INICIAL_ERROR_STATE = {
  error: false,
  message: '',
}

export function FormApp(): FormAppReturn {
  const [error, setError] = useState<ErrorState>(INICIAL_ERROR_STATE)
  const { state, dispatch } = useForm()

  const name = useMemo(() => state.name?.toString(), [state.name])
  const checkName = useMemo(() => (name ? true : false), [name])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const currentForm = e.currentTarget
    const formData = new FormData(currentForm)
    const name = formData.get('name')

    if (!name) {
      setError({
        error: true,
        message: 'Please enter your name',
      })
      return
    }

    dispatch({ type: 'set-name', payload: name })

    currentForm.reset()
    setError(INICIAL_ERROR_STATE)
  }

  const handleClick = () => {
    dispatch({ type: 'clear-name-state' })
    setError(INICIAL_ERROR_STATE)
  }

  return {
    error,
    name,
    checkName,
    handleSubmit,
    handleClick
  }
}
