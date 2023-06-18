import styled from "styled-components";

import DropDownIcon from "../../Assets/Icons/DropDown_icon.svg";

export const SelectInput = styled.select`
  border-radius: var(--border-login-input);
  background-color: var(--color-bg-forms-input);
  border: none;
  padding: 1rem;
  font-family: var(--inter);
  font-weight: var(--regular);
  font-size: 1rem;
  color: var(--color-text-forms-input);
  width: 100%;
  appearance: none;
  background-image: url(${DropDownIcon});
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.8rem;

  &:focus {
    outline: none;
  }
`;
