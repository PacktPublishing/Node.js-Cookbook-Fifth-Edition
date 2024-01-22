console.log('Before non-blocking operation');

// Non-blocking operation (setTimeout)
setTimeout(() => {
  console.log('Non-blocking operation completed');
}, 3000); // Simulate a non-blocking operation that takes 3 seconds

console.log('After non-blocking operation');
