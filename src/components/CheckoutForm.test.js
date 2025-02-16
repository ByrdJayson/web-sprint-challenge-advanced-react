import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {});
  render(<CheckoutForm/>);
  const header = screen.queryByText('Checkout Form');
  const fName = screen.queryByLabelText('First Name:');
  const lName = screen.queryByLabelText('Last Name:');
  const address = screen.queryByLabelText('Address:');
  const city = screen.queryByLabelText('City:');
  const state = screen.queryByLabelText('State:');
  const zip = screen.queryByLabelText('Zip:');
  const submit = screen.queryByText(/^checkout$/i);
  expect(header).toBeInTheDocument();
  expect(fName).toBeInTheDocument();
  expect(lName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

test("shows success message on submit with form details", () => {
  render(<CheckoutForm/>);
  const fName = screen.queryByLabelText('First Name:');
  const lName = screen.queryByLabelText('Last Name:');
  const address = screen.queryByLabelText('Address:');
  const city = screen.queryByLabelText('City:');
  const state = screen.queryByLabelText('State:');
  const zip = screen.queryByLabelText('Zip:');
  const submit = screen.queryByText(/^checkout$/i);

  userEvent.type(fName,'Jayson');
  userEvent.type(lName,'Byrd');
  userEvent.type(address,'302 Some Street');
  userEvent.type(city,'Anna');
  userEvent.type(state,'Ohio');
  userEvent.type(zip,'45302');
  userEvent.click(submit);

  const succ = screen.getByTestId('successMessage');

  expect(succ).toBeInTheDocument();
});
