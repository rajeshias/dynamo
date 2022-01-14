import React from 'react'
import Select from 'react-select';
import Label from "../Label/Label"
import { Error } from "../Error"

import "./Dropdown.css"
const optionsDefault = [
  {
    value: "0",
    label: "2 Months"
  },
  {
    value: "1",
    label: "3 Months"
  },
  {
    value: "2",
    label: "4 Months"
  },
  {
    value: "3",
    label: "5 Months"
  },
  {
    value: "4",
    label: "6 Months"
  },
  {
    value: "5",
    label: "7 Months"
  },
  {
    value: "6",
    label: "8 Months"
  },
  {
    value: "7",
    label: "9 Months"
  },
];

const Dropdown = (props) => {

  const { child, error, name, item, field } = props;
  const errorMsg = error && error[name] && error[name].message || ""

  if (item === undefined) return null;

  const { label, options, placeholder, description } = item || { label: "" };
  const { value, onChange } = field;

  const customOnChange = (e) => {
    onChange(e);
  }

  const customStyles = {
    control: (base, state) => ({
      ...base,
      marginTop: 10,
      '&:hover': { borderColor: '#74e3e4' },
      border: '1px solid lightgray',
      boxShadow: 'none',
      borderRadius: 20,
    })
  }

  return (
    <>
      <Label {...props} />
      <Select
        name={name}
        key={name}
        id={name}
        placeholder={placeholder}
        defaultValue={value}
        styles={customStyles}
        options={options}
        {...field}
        onChange={customOnChange}
      />
      <Error {...props} />
    </>
  );
};

export default Dropdown;