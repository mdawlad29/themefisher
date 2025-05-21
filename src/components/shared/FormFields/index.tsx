import { Form, Input } from "antd";
import { FC } from "react";

interface FormInputField {
  className?: string;
  inputClass?: string;
  labelProps?: {
    name?: string;
    label?: string;
    rules?: object[];
    className?: string;
  };
  inputProps?: {
    value?: any;
    type?: string;
    iconRender?: any;
    className?: string;
    readOnly?: boolean;
    disabled?: boolean;
    allowClear?: boolean;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    defaultValue?: any | string;
    variant?: "outlined" | "borderless" | "filled" | undefined;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };
}

export const InputField: FC<FormInputField> = ({
  labelProps = {},
  inputProps = {},
}) => {
  return (
    <Form.Item
      {...labelProps}
      className={`sof-form-field-wrapper w-full ${
        labelProps?.className ?? "mb-8"
      }`}
    >
      <Input
        min={0}
        type="text"
        step={0.001}
        {...inputProps}
        autoComplete="off"
        className={`${inputProps?.className ?? ""}`}
      />
    </Form.Item>
  );
};
