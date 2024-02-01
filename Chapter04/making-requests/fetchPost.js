async function performPostRequest () {
  // Specify the URL for the POST request
  const url = 'https://postman-echo.com/post';

  // Data to be sent in the POST request
  const postData = { name: 'Laddie', breed: 'Rough Collie' };

  try {
    // Use the fetch function to make the POST request
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Convert the postData object to JSON
      body: JSON.stringify(postData)
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    const data = await response.json();

    console.log('POST request successful:', data);
  } catch (error) {
    // Handle errors during the request
    console.error('Error during POST request:', error);
  }
}
// Call the function to perform the POST request
performPostRequest();
