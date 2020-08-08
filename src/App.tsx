import React from "react";

import { PricePicker, PriceOption } from "components";

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
          count: 500,
        },
      },
    ];
  }
  render() {
    return (
      <div>
        <PricePicker options={this.options} />
      </div>
    );
  }
}

export default App;
