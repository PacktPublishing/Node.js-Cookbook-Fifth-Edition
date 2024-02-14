const assert = require('assert');
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./index');

// Test fahrenheitToCelsius
assert.strictEqual(fahrenheitToCelsius(32), 0, '32°F should be 0');
assert.strictEqual(fahrenheitToCelsius(212), 100, '212°F should be 100');

// Test celsiusToFahrenheit
assert.strictEqual(celsiusToFahrenheit(0), 32, '0°C should be 32');
assert.strictEqual(celsiusToFahrenheit(100), 212, '100°C should be 212');

console.log('All tests passed!');
