import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthStorage {
  namespace: string;
  getAccessToken(): Promise<string | null>;
  setAccessToken(accessToken: string): void;
  removeAccessToken(): void;
}

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  getAccessToken() {
    const token = AsyncStorage.getItem(`${this.namespace}:token`);
    return token;
  }

  // Add the access token to the storage
  setAccessToken(accessToken) {
    AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  removeAccessToken() {
    // Remove the access token from the storage
    AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
