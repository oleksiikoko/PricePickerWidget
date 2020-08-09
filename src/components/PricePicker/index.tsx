import React from "react";
import styled from "styled-components";

import Choice from "./Choice";

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
        <Choice
          checked={false}
          priceOption={{
            price: {
              unit: "UAH",
              amount: 500,
            },
            by: {
              unit: "g",
              amount: 500,
            },
          }}
        />
      </Box>
    );
  }
}

// export default PricePicker;
