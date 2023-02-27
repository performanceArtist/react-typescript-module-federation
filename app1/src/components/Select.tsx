import { SelectField } from "@chakra-ui/react";
import React from "react";

const options = ["First", "Second"] as const;

export type SelectOption = typeof options[number];

const Select = (props: { onChange: (option: SelectOption) => void }) => {
  return (
    <SelectField
      onChange={(e) => props.onChange(e.target.value as SelectOption)}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </SelectField>
  );
};

export default Select;
