import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greeting";

describe("Greeting component", () => {
    test("renders hellow world", () => {
        render(<Greetings />);
        const helloWorldElement = screen.getByText("Hello World");
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders good to see you if button the buton WAS NOT clicked", () => {
        render(<Greetings />);
        const outputElement = screen.getByText("good to see you",{exact:false});
        expect(outputElement).toBeInTheDocument();
    });


test('renders "Changed!" if the button was Clicked', () => {
    // Step-1 ARRANGE
    render(<Greetings />)
    // Step-2 ACT
    const buttonElement = screen.getByRole("button");
    // Step-3 ASSERT
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed");
    expect(outputElement).toBeInTheDocument();
});

    test("does not render 'good to see you' if the button was clicked", () => {
        render(<Greetings />);
        const outputElement =  screen.queryByText("good to see you",{exact:false})
        expect(outputElement).toBeNull();
    })
});

  // test function & describe is globally available we do not need to import it
