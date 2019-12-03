import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(<Button />);
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByText("Click me"));
    expect(onClick).toBeCalledTimes(1);
  });

  it("doesn't fire onClick for disabled button", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>,
    );

    fireEvent.click(getByText("Click me"));
    expect(onClick).toBeCalledTimes(0);
  });
});
