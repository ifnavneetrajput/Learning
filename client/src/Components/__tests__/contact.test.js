import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("test the rendering of my UI page ", () => {
  render(<Contact />)
  
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
})

test("test the button of my UI page ", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});


test("test the button of my UI page ", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  expect(inputName).toBeInTheDocument();
});


test("should test 2 the button of my UI page ", () => {
  render(<Contact />);
// use all when multiple objects are there
  const inputboxes = screen.getAllByRole("textbox");
 // it would return an array
  expect(inputboxes.length).toBe(2)
});