import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";

const ChoiceContainer = styled.div`
  display: flex;
  justify-content: start;
  border: 1px solid black;
`;

const CheckboxStyled = styled(Checkbox)`
  display: inline-block;
  margin-right: 9px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const DataBox = styled.p`
  margin: 0;

  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export interface PriceOption {
  price: {
    unit: String;
    amount: Number;
  };
  by: {
    unit: String;
    amount: Number;
  };
}

interface Props {
  priceOption: PriceOption;
  checked: boolean;
}

const Choice: React.FC<Props> = ({ priceOption, checked }) => (
  <ChoiceContainer>
    <CheckboxStyled checked={checked} />
    <SpaceBetween>
      <DataBox>
        {priceOption.by.amount} {priceOption.by.unit}
      </DataBox>
      <DataBox>
        {priceOption.price.amount} {priceOption.price.unit}
      </DataBox>
    </SpaceBetween>
  </ChoiceContainer>
);

export default Choice;
