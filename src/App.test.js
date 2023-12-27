import { fireEvent, render, screen ,waitFor} from "@testing-library/react";
import { BookingForm } from "./components/BookingForm";
import "@testing-library/jest-dom/extend-expect";
afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('test Booking component', () => {
  test('form will we not called when in put is null', async() => { 
    const handleSubmit = jest.fn();

    render(<BookingForm submit={handleSubmit} />);
    
    
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);


    await waitFor(()=>{
    expect(submitButton).toHaveBeenCalled()
    //  console.log(submitButton)
    })

   })
});
