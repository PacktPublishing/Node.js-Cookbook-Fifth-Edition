const { Readable } = require('node:stream');

async function* generate() {
    yield 'Java';
    yield 'JavaScript';
    yield 'Rust';
}

// Filter the stream for words with 5 or more characters
Readable.from(generate()).filter((word) => word.length >= 5).pipe(process.stdout);
