# Challenges Rules

* The language must be JavaScript
* The code must be written in a single file
* The code must be written in a single function called `main`
* The files must be inside a folder with your name, and each one with the challenge number. Ex: `./<your-name>/challenge_<challenge-number>.js`

--------------------

# First Challenge

## Convert roman numerals to integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

* I can be placed before V (5) and X (10) to make 4 and 9.
* X can be placed before L (50) and C (100) to make 40 and 90.
* C can be placed before D (500) and M (1000) to make 400 and 900.

Challenge: Given a roman numeral, convert it to an integer. The winner is the one who can do it in the least amount of code and time.

---
Example 1:

* Input: s = "III"
* Output: 3
* Explanation: III = 3.

Example 2:

* Input: s = "LVIII"
* Output: 58
* Explanation: L = 50, V= 5, III = 3.

Example 3:

* Input: s = "MCMXCIV"
* Output: 1994
* Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

--------------------

# Second Challenge

## Check if the number is palindrome or not

Given an integer _x_, return true if x is a **palindrome** , and false otherwise.

Example 1:

* Input: x = 121
* Output: true
* Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

* Input: x = -121
* Output: false
* Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

* Input: x = 10
* Output: false
* Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

.
