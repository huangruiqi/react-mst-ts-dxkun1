import { types, flow } from "mobx-state-tree";
import { delay } from "../utils";

export const Counter = types
  .model("Counter", {
    count: types.optional(types.number, 0)
  })
  .views(self => ({
    get getCount() {
      return self.count;
    }
  }))
  .actions(self => ({
    add() {
      self.count++;
    },
    multiply() {
      self.count *= 2;
    }
  }))
  .actions(self => {
    const asyncMultiply = flow(function*() {
      yield delay(1000);
      self.multiply();
    });

    return {
      asyncMultiply
    };
  });

/**
 * types.string
 * types.number
 *
 * types.model
 * types.map
 *
 * types.optional(types.number, 1)
 * types.union(types.number, types.string)
 * types.enumeration('Gender', ['male', 'female'])
 *
 * types.frozen
 */
