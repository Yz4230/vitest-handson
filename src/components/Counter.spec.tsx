import { render } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter", () => {
  it("should increment the count", () => {
    const { getByText } = render(<Counter />);
    const button = getByText(/I was clicked 0 times/);
    button.click();
    expect(getByText(/I was clicked 1 times/)).toBeInTheDocument();
    button.click();
    expect(getByText(/I was clicked 2 times/)).toBeInTheDocument();
  });
});
