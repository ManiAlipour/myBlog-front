import { FieldHookConfig } from "formik";

interface IInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  required?: boolean;
}

const Input = (props: IInputProps & FieldHookConfig<string>) => {
  return (
    <div className={props.className || ""}>
      {props.label && (
        <label htmlFor={props.name} className="text-brand1">
          {props.label} {props.required && "*"}
        </label>
      )}
      <input
        className="w-full border-b-2 border-brand1 p-2"
        id={props.name}
        {...props}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
