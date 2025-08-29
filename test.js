// Simple test file to verify API functionality
const testCases = [
    {
        name: "Example A",
        input: ["a","1","334","4","R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334","4"],
            alphabets: ["A","R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B", 
        input: ["2","a", "y", "4", "&", "-", "*", "5","92","b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2","4","92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        input: ["A","ABcD","DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A","ABCD","DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "EoDdCbAa"
        }
    }
];

// Function to test the API logic locally
function testAPILogic(data) {
    let oddNumbers = [];
    let evenNumbers = [];
    let alphabets = [];
    let specialCharacters = [];
    let sum = 0;
    let alphabetChars = [];

    data.forEach(item => {
        const str = String(item);
        
        // Check if entire string is a number
        if (!isNaN(str) && str.trim() !== '') {
            const num = parseInt(str);
            sum += num;
            if (num % 2 === 0) {
                evenNumbers.push(str);
            } else {
                oddNumbers.push(str);
            }
        }
        // Check if entire string contains only alphabets
        else if (/^[A-Za-z]+$/.test(str)) {
            alphabets.push(str.toUpperCase());
            // Add each character to alphabetChars for concatenation
            for (let char of str) {
                alphabetChars.push(char);
            }
        }
        // Check if it's a single character
        else if (str.length === 1) {
            if (/^[A-Za-z]$/.test(str)) {
                alphabets.push(str.toUpperCase());
                alphabetChars.push(str);
            } else {
                specialCharacters.push(str);
            }
        }
    });

    // Create concatenation string with alternating caps in reverse order
    const reversedAlphabets = alphabetChars.reverse().join('');
    let concatString = '';
    for (let i = 0; i < reversedAlphabets.length; i++) {
        if (i % 2 === 0) {
            concatString += reversedAlphabets[i].toLowerCase();
        } else {
            concatString += reversedAlphabets[i].toUpperCase();
        }
    }

    return {
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialCharacters,
        sum: sum.toString(),
        concat_string: concatString
    };
}

// Run tests
console.log("Running API Logic Tests...\n");

testCases.forEach((testCase, index) => {
    console.log(`Test ${index + 1}: ${testCase.name}`);
    console.log("Input:", testCase.input);
    
    const result = testAPILogic(testCase.input);
    
    console.log("Expected:", testCase.expected);
    console.log("Got:", result);
    
    // Simple comparison
    const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log("Status:", passed ? "✅ PASSED" : "❌ FAILED");
    console.log("-".repeat(50));
});

// Function to test live API (uncomment when deployed)
/*
async function testLiveAPI(baseUrl) {
    console.log("\nTesting Live API...");
    
    for (let testCase of testCases) {
        try {
            const response = await fetch(`${baseUrl}/bfhl`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: testCase.input })
            });
            
            const result = await response.json();
            console.log(`${testCase.name}:`, result.is_success ? "✅" : "❌");
        } catch (error) {
            console.log(`${testCase.name}: ❌ Error -`, error.message);
        }
    }
}

// Uncomment and replace with your deployed URL to test
// testLiveAPI('https://your-deployed-api-url.com');
*/