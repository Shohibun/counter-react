import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

let getElementById;

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  const view = render(<App />);

  getElementById = view.getByTestId;
});

describe("UI Test", () => {
  test("header render with correct text", () => {
    const headerEl = screen.getByTestId("header");
    expect(headerEl.textContent).toBe("Counter App");
  });
});

describe("Functional Test", () => {
  const clicked = 10;
  test(`Test on increment add 1  to the counter ${clicked}`, () => {
    const incButton = screen.getByTestId("increment-test");
    const counterEl = screen.getByTestId("counter");

    for (let i = 1; i <= clicked; i++) {
      fireEvent.click(incButton);
    }
    expect(counterEl.textContent).toBe(`${clicked}`);
  });

  const click = 0
  test(`Test on decrement min 1 to the counter ${click}`, () => {
    const dncButton = screen.getByTestId("decrement-test");
    const counterEl = screen.getByTestId("counter");

    for (let i = 10; i === click; i--) {
      fireEvent.click(dncButton);
    }
    expect(counterEl.textContent).toBe(`${click}`);
  })
});
