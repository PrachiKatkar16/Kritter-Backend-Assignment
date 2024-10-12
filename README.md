Problem 1: Normalize an Input String

Problem Statement
Write a program that normalizes a given input string. The normalization process includes:

Removing extra spaces from the beginning and end of the string.
Removing any special characters and punctuation, leaving only alphanumeric characters and spaces.
Replacing multiple spaces between words with a single space.
Converting the cleaned string to camel case (i.e., the first letter of each word is capitalized, and all other letters are in lowercase).
Input
A single string that may contain uppercase letters, extra spaces, and special characters.

Output
A single normalized string in camel case.

Example
Input:
" Hello! World@ This is a Test!. "

Output:
"Hello World This Is A Test"


Problem 2: Simple Chatbot

Problem Statement
Create a simple chatbot that answers questions based on a predefined list of question-answer pairs. The chatbot should take in a user's question and find the closest matching question from the predefined list using word similarity.

Input
A list of question-answer pairs.
A user’s input question (string).
Output
Return the answer corresponding to the closest matching question from the list.

Example
Question-Answer Pairs:

"What is your name?" → "My name is Chatbot."
"How can I help you?" → "I can assist you with your queries."
"What is the weather today?" → "The weather is sunny."
Input:
"What's the weather like today?"

Output:
"The weather is sunny."



Problem 3: Advanced College Ranking System

Problem Statement
Develop a program to rank a list of colleges based on user preferences. Each college has attributes like name, location, fees, and ranking. The user provides preferences such as preferred location, maximum fees, and weightage for ranking and fees.

Input
A list of colleges represented as objects with the following attributes:
name (string)
location (string)
fees (integer)
ranking (integer)
User input:
preferred_location (string)
max_fees (integer)
ranking_weight (integer)
fees_weight (integer)
Output
A list of colleges that match the user’s preferences, sorted by their score in non-decreasing order. Lower scores are better.

Example
Colleges:

College A: New York, Fees: 20000, Ranking: 1
College B: California, Fees: 15000, Ranking: 2
College C: New York, Fees: 25000, Ranking: 3
College D: New York, Fees: 10000, Ranking: 4
Input:

preferred_location: "New York"
max_fees: 20000
ranking_weight: 2
fees_weight: 1
Output:

College A: Score: 4.00
College D: Score: 9.00
How to Run the Code
Copy the code into a file named collegeRanking.js.

