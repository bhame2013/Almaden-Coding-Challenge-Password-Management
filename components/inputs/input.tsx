import { useEffect, useRef } from "react"

import { useField } from "@unform/core"

import * as S from "./styles"

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function Input({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField])

  return (
    <S.Input>
      {label && <label htmlFor={name}>{label}</label>}

      <div className="input-content">
        <input
          id={name}
          type="text"
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>

      {error && <span className="error-message">{error}</span>}
    </S.Input>
  )
}
