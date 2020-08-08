import React from "react";
import styled from "styled-components";

import Checkbox from "./Checkbox";

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
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

type Props = {
  options: Array<PriceOption>;
};

export class PricePicker extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Box>
        <Checkbox checked={false} />
      </Box>
    );
  }
}

// export default PricePicker;
