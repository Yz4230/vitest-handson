import { fireEvent, render } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter", () => {
  it("should increment the count", () => {
    const { getByText } = render(<Counter />);
    const button = getByText(/I was clicked 0 times/);
    fireEvent.click(button);
    expect(getByText(/I was clicked 1 times/)).toBeInTheDocument();
    fireEvent.click(button);
    expect(getByText(/I was clicked 2 times/)).toBeInTheDocument();
  });
  it("snapshot", () => {
    const { container } = render(<Counter />);
    expect(container).toMatchSnapshot();
  });
});
