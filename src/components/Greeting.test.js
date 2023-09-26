import { render,screen } from "@testing-library/react";
import Greetings from "./Greeting";

test("renders hellow world", () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
});   // test function is globally available we do not need to import it
