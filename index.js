const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function isNumber(char) {
    return !isNaN(char) && !isNaN(parseFloat(char));
}

function isAlphabet(char) {
    return /^[A-Za-z]$/.test(char);
}

function isSpecialChar(char) {
    return !isNumber(char) && !isAlphabet(char);
}

function createAlternatingCaps(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' should be an array"
            });
        }

        let oddNumbers = [];
        let evenNumbers = [];
        let alphabets = [];
        let specialCharacters = [];
        let sum = 0;
        let alphabetChars = [];

        data.forEach(item => {
            const str = String(item);
           
            if (!isNaN(str) && str.trim() !== '') {
                const num = parseInt(str);
                sum += num;
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
            }
            
            else if (/^[A-Za-z]+$/.test(str)) {
                alphabets.push(str.toUpperCase());
                
                for (let char of str) {
                    alphabetChars.push(char);
                }
            }
            
            else if (str.length === 1) {
                if (isAlphabet(str)) {
                    alphabets.push(str.toUpperCase());
                    alphabetChars.push(str);
                } else {
                    specialCharacters.push(str);
                }
            }
        });

        const reversedAlphabets = alphabetChars.reverse().join('');
        const concatString = createAlternatingCaps(reversedAlphabets);

        const response = {
            is_success: true,
            user_id: "tanmay_agrawal_29072004",
            email: "tanmayagrawal2907@gmail.com",
            roll_number: "22BCE2680",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(), // Return sum as string
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running'
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: 'Something went wrong!'
    });
});

app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: 'Route not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;