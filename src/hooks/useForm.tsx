import { ChangeEvent, useState } from 'react'

export interface IData {
  [key: string]: string
}

const useForm = (data: IData) => {
  const [inputs, setInputs] = useState(data)
  const [errors, setErrors] = useState(data)

  const handleValidation = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    // get validation data from attributes
    const isEmptyText = event.target.getAttribute('data-val-required') || ''
    const isNotValidText = event.target.getAttribute('data-val-regex') || ''
    const pattern = event.target.getAttribute('data-val-regex-pattern') || ''
    const maxLength = event.target.getAttribute('data-val-length-max') || 10

    // validation conditions on blur
    const isEmptyField = inputs[name as keyof typeof inputs] === ''

    const isNotValid =
      !inputs[name as keyof typeof inputs].match(pattern) ||
      value.length > Number(maxLength)

    const isValid =
      inputs[name as keyof typeof inputs].match(pattern) &&
      value.length <= Number(maxLength)

    // checking validation
    if (isEmptyField) {
      setErrors((values: IData) => ({
        ...values,
        [name]: isEmptyText
      }))
    } else if (isNotValid) {
      setErrors((values: IData) => ({
        ...values,
        [name]: isNotValidText
      }))
    } else if (isValid) {
      setErrors((values: IData) => ({
        ...values,
        [name]: ''
      }))
    }
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setInputs((values: IData) => ({ ...values, [name]: value }))
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    handleValidation(event)
  }

  function getEmptyFieldOnSubmit(): boolean {
    return Object.keys(inputs).filter((key) => inputs[key] === '').length > 0
  }

  function getErrorOnSubmit(): boolean {
    return Object.keys(errors).filter((key) => errors[key] !== '').length > 0
  }

  const onSubmitCheckValidation = (): boolean => {
    let isFormValidated = false

    if (getEmptyFieldOnSubmit() || getErrorOnSubmit()) {
      Object.keys(inputs).forEach(
        (key) =>
          inputs[key] === '' &&
          setErrors((values: IData) => ({
            ...values,
            [key]: `The ${key} field is required.`
          }))
      )
      isFormValidated = false
    } else {
      isFormValidated = true
    }

    return isFormValidated
  }

  return {
    inputs,
    errors,
    handleOnChange,
    handleOnBlur,
    onSubmitCheckValidation
  }
}

export default useForm
