import { render, screen } from "@testing-library/react";
import Async from "./Async";


describe("Async component", () => {
    
    test("renders posts if request succeeds", async () => {
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{id:1,title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"}],
        })
        render(<Async />);
        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    });
})