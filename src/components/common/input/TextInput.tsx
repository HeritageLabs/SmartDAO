import { CancelIcon } from "../../../assets/svgs";
import { IInput } from "../../../types";

const defaultProps: IInput = {
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
    handleClickCancel: () => null,
    mb: '6',
    name: '',
    isCompulsory: false,
};

const TextInput = ({ label, placeholder, type, onChange, disabled, defaultValue, value, textTransform, readOnly, hasCancel, handleClickCancel, mb, name, isCompulsory }: IInput) => (
  <div className={`mb-${mb}`}>
    <div className="flex items-center">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-grey"
      >
      {label}
      </label>
      {isCompulsory && (<p className="text-red ml-px">*</p>)}
    </div>
    <div className="flex items-center">
      <input
        type={type}
        id={label}
        name={name}
        className={`block w-full text-gray-900 border border-gray-300 rounded-lg rounded-lg focus:ring-quaternary focus:border-quaternary block w-full p-2.5 focus-within:border-quaternary focus-within:outline-quaternary placeholder:text-sm ${textTransform}`}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        readOnly={readOnly}
      />
      {hasCancel && (
        <div className="border border-grey rounded-full h-10 w-10 ml-4 items-center flex hover:text-red cursor-pointer trans hover:border-red" onClick={handleClickCancel}>{CancelIcon}</div>
      )}
    </div>
  </div>
);

TextInput.defaultProps = defaultProps;

export default TextInput;
