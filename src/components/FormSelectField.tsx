/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOption = {
  label: string;
  value: string | boolean;
};
type SelectFieldProps = {
  options: SelectOption[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | boolean | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOption;
};

const FormSelectField = ({
  options,
  name,
  size,
  placeholder,
  label,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            style={{ width: "100%" }}
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
