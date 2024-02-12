import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";

import { SignInContainer } from "../components/SignIn/SignIn.jsx";

const testUser = {
  username: "Henri",
  password: "secret",
};

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      render(<SignInContainer onSubmit={onSubmit} />);

      const usernameInput = screen.getByPlaceholderText("Username");
      const passwordInput = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByText("Sign in");

      fireEvent.changeText(usernameInput, testUser.username);
      fireEvent.changeText(passwordInput, testUser.password);

      fireEvent.press(submitButton);

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "Henri",
          password: "secret",
        });

        // expect the onSubmit function to have been called once and with a correct first argument
      });
    });
  });
});
