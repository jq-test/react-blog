export function login(username, password) {
    return new Promise(resolve => {
      resolve({
        id: 123,
        username,
        email: "sample@email.com",
      });
    });
  }
  