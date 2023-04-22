import { IInput } from "../../../types/inext";

const defaultProps: IInput = {
    label: '',
    placeholder: '',
    type: 'text',
    onChange: (e) => e,
    disabled: false,
    value: '',
    defaultValue: '',
};

const TextInput = ({ label, placeholder, type, onChange, disabled, defaultValue, value }: IInput) => (
  <div className="mb-6">
    <label
      htmlFor={label}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     {label}
    </label>
    <input
      type={type}
      id={label}
      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg rounded-lg focus:ring-quaternary focus:border-quaternary block w-full p-2.5 focus-within:border-quaternary focus-within:outline-quaternary"
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
    />
  </div>
);

TextInput.defaultProps = defaultProps;

export default TextInput;
