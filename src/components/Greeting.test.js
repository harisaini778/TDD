import { render,screen } from "@testing-library/react";
import Greetings from "./Greeting";

describe("Greeting component", () => {
  test("renders hellow world", () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
});   
})

  // test function & describe is globally available we do not need to import it
