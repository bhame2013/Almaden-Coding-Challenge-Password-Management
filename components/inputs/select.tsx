import { useState, useEffect, useRef, useCallback } from "react";

import { useField } from "@unform/core";

import * as S from "./styles";

interface Props {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
}

type SelectProps = JSX.IntrinsicElements["input"] & Props;

export function Select({ name, label, options, ...rest }: SelectProps) {
  const [value, setValue] = useState("");
  const [selectOptions, setSelectOptions] = useState(options);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const SelectChange = useCallback((e) => {
    setValue(e.target.value);

    setSelectOptions(
      options.filter(
        ({ label, value }) =>
          label
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase()) ||
          value.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      ) || options
    );
  }, []);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return (
          options.find((option) => option.label === ref.current.value)?.value ||
          inputRef.current?.value
        );
      },
      setValue: (ref) => {
        options.find(
          (option) =>
            option.label === ref.current.value ||
            option.value === ref.current.value
        )?.label || inputRef.current?.value;
      },
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      {label && <label htmlFor={name + "input"}>{label}</label>}

      <div className="input-content">
        <input
          id={name + "input"}
          list={name}
          type="text"
          name={name}
          ref={inputRef}
          defaultValue={value}
          onChange={SelectChange}
          {...rest}
        />

        {selectOptions.length > 0 && (
          <div className="options">
            {selectOptions.map(({ label, value }) => {
              if (label !== "none") {
                return (
                  <button
                    type="button"
                    key={value + label}
                    data-value={value}
                    onClick={() => {
                      if (inputRef.current) inputRef.current.value = label;
                    }}
                  >
                    {label}
                  </button>
                );
              }

              return;
            })}
          </div>
        )}
      </div>

      {error && <span className="error-message">{error}</span>}
    </S.Input>
  );
}
