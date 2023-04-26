import { ITextAreaInput } from "../../../types";

const defaultProps: ITextAreaInput = {
    label: '',
    placeholder: '',
    type: 'text',
    onChange: (e) => e,
    disabled: false,
    value: '',
    defaultValue: '',
    textTransform: 'normal-case',
    readOnly: false,
    hasCancel: false,
};

const TextAreaInput = ({ label, placeholder, onChange, disabled, defaultValue, value, textTransform, readOnly }: ITextAreaInput) => (
  <div className="mb-6">
    <div className="flex items-center">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-grey"
      >
      {label}
      </label>
      <p className="text-red ml-2">*</p>
    </div>
    <textarea
      id={label}
      className={`block w-full p-4 text-dark border rounded-lg rounded-lg focus:ring-quaternary focus:border-quaternary block w-full p-2.5 focus-within:border-quaternary focus-within:outline-quaternary placeholder:text-sm text-normal ${textTransform}`}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      readOnly={readOnly}
    />
  </div>
);

TextAreaInput.defaultProps = defaultProps;

export default TextAreaInput;
