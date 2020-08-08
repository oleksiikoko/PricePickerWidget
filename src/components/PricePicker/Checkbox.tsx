import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  /* background: ${(checked) => (checked ? "salmon" : "papayawhip")}; */
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(checked) => (checked ? "#6CA22C" : "#999999")};
  transition: all 150ms;

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  } */

  ${Icon} {
    visibility: ${(checked) => (checked ? "visible" : "hidden")};
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #6ca22c;
  border-radius: 50%;
  transition: all 150ms;
  margin: calc(50% - 8px/2);

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(checked) => (checked ? "visible" : "hidden")};
  } */
`;

interface Props {
  className?: string;
  checked: boolean;
}

const Checkbox: React.FC<Props> = ({ className, checked }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked}>{checked && <Circle />}</StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
