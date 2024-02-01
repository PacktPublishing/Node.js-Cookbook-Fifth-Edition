async function performGetRequest () {
  // Specify the URL for the GET request
  const url = 'https://api.github.com/orgs/nodejs';
  try {
    // Use the fetch function to make the GET request
    const response = await fetch(url);
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    const data = await response.json();

    // Handle the data from the response
    console.log('GET request successful:', data);
  } catch (error) {
    // Handle errors during the request console.error('Error during GET request:', error);
  }
}
// Call the function to perform the GET request
performGetRequest();
