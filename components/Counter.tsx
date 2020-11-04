import React from "react";
import { Instance } from "mobx-state-tree";
import { observer, inject } from "mobx-react";
import { Counter as CounterModel } from "../models/Counter";

export interface IProps {
  root?: Instance<typeof CounterModel>;
}

@inject("root")
@observer
export class Counter extends React.Component<IProps> {
  render() {
    const { root } = this.props;
    return (
      <div>
        <p>Count: {root.count}</p>
        <p>
          <button onClick={root.add}>Add</button>
          <button onClick={root.multiply}>Multiply</button>
          <button onClick={root.asyncMultiply}>Async Multiply</button>
        </p>
      </div>
    );
  }
}
