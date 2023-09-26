import { render, screen } from "@testing-library/react";
import Async from "./Async";


describe("Async component", () => {
    
    test("renders posts if request succeeds", async() => {
        render(<Async />);
        const listItemElements = await screen.findAllByRole("listitem");
        console.log(listItemElements.length);
        expect(listItemElements).not.toHaveLength(0);
    });
})