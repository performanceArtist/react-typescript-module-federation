declare const options: readonly ["First", "Second"];
export declare type SelectOption = typeof options[number];
declare const Select: (props: {
    onChange: (option: SelectOption) => void;
}) => JSX.Element;
export default Select;
