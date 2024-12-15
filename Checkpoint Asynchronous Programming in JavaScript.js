// ==================== Task 01: Iterating with Async/Await ====================

// Iterating with Async/Await
async function iterateWithAsyncAwait(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
  }
  
  // Test the function
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  
  // ==================== Task 02: Awaiting a Call ====================
  
  // Awaiting a Call (Simulating API Call)
  async function awaitCall() {
    try {
      // Simulating an API call with a delay using Promise
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve({ data: "API data fetched successfully" }), 2000); // 2 seconds delay
      });
  
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Test the function
  awaitCall();
  
  // ==================== Task 03: Handling Errors with Async/Await ====================
  
  // Handling Errors with Async/Await
  async function awaitCallWithErrorHandling() {
    try {
      // Simulating a failed API call using Promise.reject
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => reject("Failed to fetch data"), 2000); // 2 seconds delay
      });
  
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error:", error); // User-friendly error message
    }
  }
  
  // Test the function
  awaitCallWithErrorHandling();
  