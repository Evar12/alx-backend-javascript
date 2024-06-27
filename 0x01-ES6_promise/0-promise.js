function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an API call with setTimeout
      setTimeout(() => {
        const success = true; // Simulate whether the API call was successful
        if (success) {
          resolve("Success!"); // Resolve the promise with a success message
        } else {
          reject("Error!"); // Reject the promise with an error message
        }
      }, 1000); // Simulate a delay of 1 second
    });
  }
  
  export default getResponseFromAPI;
