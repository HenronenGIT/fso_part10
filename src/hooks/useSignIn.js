import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, { data }] = useMutation(SIGN_IN);
  console.log("🚀 ~ useSignIn ~ data:", data)

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: {
          password,
          username,
        },
      },
    });
    console.log("%cuseSignIn.js line:16 response", "color: #007acc;", responseƒ);
    // call the mutate function here with the right arguments
  };

  return [signIn, data];
};

export default useSignIn;
