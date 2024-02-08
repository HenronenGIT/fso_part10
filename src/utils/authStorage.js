import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  // Get the access token for the storage
  getAccessToken() {
    const token = AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token;
  }

  // Add the access token to the storage
  setAccessToken(accessToken) {
    AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  removeAccessToken() {
    // Remove the access token from the storage
    AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
