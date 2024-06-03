import {render, screen} from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../Navigation/Navbar';

test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Choose Date:");
    expect(headingElement).toBeInTheDocument();
});

test('renders select options based on availableTimes prop', () => {
    // Mock availableTimes
    const availableTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

    // Render the BookingForm with the mock props
    const { getByTestId, getByText } = render(
      <BookingForm
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        guests=""
        setGuests={() => {}}
        occasion=""
        setOccasion={() => {}}
        availableTimes={availableTimes}
        dispatch={() => {}}
        onSubmit={() => {}}
      />
    );
  
    // Get the select element
    const selectElement = getByTestId('select-time');
  
    // Assert that each option in availableTimes is rendered in the select element
    availableTimes.forEach(time => {
      expect(getByText(time)).toBeInTheDocument();
    });
  });

  test('initializeTimes returns an array of initial time values', () => {
    // Call the initializeTimes function
    const initialTimes = initializeTimes();
  
    // Define the expected initial time values
    const expectedTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];
  
    // Assert that the length of the returned array is equal to the length of the expected times array
    expect(initialTimes.length).toBe(expectedTimes.length);
  
    // Assert that each expected time value exists in the returned array
    expectedTimes.forEach(time => {
      expect(initialTimes).toContain(time);
    });
  });

  describe('updateTimes function', () => {
    test('returns available times for Monday', () => {
      // Mock selected date as a Monday
      const mockMondayDate = new Date('2024-06-10');
      jest.spyOn(global, 'Date').mockImplementation(() => mockMondayDate);
  
      // Define the action payload
      const action = { type: 'UPDATE_TIMES', payload: mockMondayDate };
  
      // Call the updateTimes function with the action
      const result = updateTimes([], action);
  
      // Assert that the available times for Monday are returned
      expect(result).toEqual([
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
      ]);
  
      // Restore the Date mock
      global.Date.mockRestore();
    });
  });