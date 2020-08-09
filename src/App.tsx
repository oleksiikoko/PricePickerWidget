import React from "react";
import styled from "styled-components";

import { PricePicker, PriceOption } from "components";

const Body = styled.div`
  font-family: "Roboto", sans-serif;
`;

class App extends React.PureComponent {
  options: Array<PriceOption>;
  constructor(props: any) {
    super(props);
    this.options = [
      {
        price: {
          unit: "uah",
          amount: 500,
        },
        by: {
          unit: "g",
          amount: 500,
        },
      },
    ];
  }
  render() {
    return (
      <Body>
        <PricePicker options={this.options} />
      </Body>
    );
  }
}

export default App;
