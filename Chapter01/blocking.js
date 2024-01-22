// Blocking function
function blockingOperation () {
  console.log('Start blocking operation');
  // Simulate a time-consuming synchronous operation (e.g., reading a large file)
  for (let i = 0; i < 1000000000; i++) {
    // This loop will keep the CPU busy for a while, blocking other operations
  }
  console.log('End blocking operation');
}

console.log('Before blocking operation');

// Call the blocking function
blockingOperation();

console.log('After blocking operation');
