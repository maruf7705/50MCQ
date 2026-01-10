const fs = require('fs');
const path = require('path');

// Usage: node merge_questions.js <file1> <file2> <output>
// Example: node merge_questions.js public/Physics-P1.json public/Physics-P2.json public/Physics-Combined.json

const args = process.argv.slice(2);
if (args.length < 3) {
    console.log('Usage: node merge_questions.js <input_file1> <input_file2> <output_file>');
    process.exit(1);
}

const file1Path = args[0];
const file2Path = args[1];
const outputPath = args[2];

try {
    const data1 = JSON.parse(fs.readFileSync(file1Path, 'utf8'));
    const data2 = JSON.parse(fs.readFileSync(file2Path, 'utf8'));

    if (!Array.isArray(data1) || !Array.isArray(data2)) {
        throw new Error('Input files must contain arrays of questions');
    }

    // Combine arrays
    const combined = [...data1, ...data2];

    // Re-index IDs
    const reindexed = combined.map((q, index) => ({
        ...q,
        id: index + 1
    }));

    fs.writeFileSync(outputPath, JSON.stringify(reindexed, null, 2), 'utf8');

    console.log(`Successfully merged ${data1.length} + ${data2.length} questions.`);
    console.log(`Created ${outputPath} with ${reindexed.length} questions.`);
} catch (err) {
    console.error('Error merging files:', err.message);
}
