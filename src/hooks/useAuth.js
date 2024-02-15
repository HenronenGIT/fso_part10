import { useMutation } from "@apollo/client";
import { SIGN_IN, SIGN_UP } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useAuth = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [signinMutate, { data }] = useMutation(SIGN_IN);
  // const [signupMutate, { data: createUser }] = useMutation(SIGN_UP);
  const [signupMutate, { data: createUser }] = useMutation(SIGN_UP);

  const signIn = async ({ username, password }) => {
    const response = await signinMutate({
      variables: {
        credentials: {
          password,
          username,
        },
      },
    });

    await authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();
    return response;
  };

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  /**
   * Signs up a new user with the provided user details.
   *
   * @param {Object} newUser - The user object containing the necessary details for signing up.
   * @param {string} newUser.username - The username of the new user.
   * @param {string} newUser.password - The password of the new user.
   * @returns {Promise<Object>} A promise that resolves to the newly created user object upon successful sign up.
   * @throws {Error} If the sign up process fails due to an error.
   */
  const signUp = async (newUser) => {
    try {
      await signupMutate({
        variables: {
          user: {
            ...newUser,
          },
        },
      });
      return createUser;
    } catch (e) {
      console.error(e);
    }
  };

  return { signIn, data, signOut, signUp };
};

export default useAuth;
