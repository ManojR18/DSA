🧩 Problem Statement

Given two strings — a pattern and a string (str), the task is to sort the characters of str based on the custom order defined by pattern.

Example 1
Input:
pattern = "bxyzca"
str = "abcabcabc"

Output:
"bbbcccaaa"

Example 2
Input:
pattern = "wcyuogmlrdfphitxjakqvzbnes"
str = "jcdokai"

Output:
"codijak"

💡 Approach

Map pattern characters to ranks
Create an object storeRank to assign each character in the pattern a unique order (rank).

Example:

pattern = "bxyzca"
storeRank = {
  b: 0, x: 1, y: 2, z: 3, c: 4, a: 5
}


Split the string
Convert str into an array using split('') so that it can be sorted easily.

Custom sort
Sort the array using the custom comparison function:

arr.sort((a, b) => storeRank[a] - storeRank[b]);


If storeRank[a] < storeRank[b], then a appears before b.

Join the sorted array
Finally, join the array back into a string using join('').


⏱️ Time Complexity

Building the rank map: O(m) — where m is the length of the pattern.

Sorting the string: O(n log n) — where n is the length of the string.

Total Time Complexity:
👉 O(n log n + m)

💾 Space Complexity

The extra space used is for:

The rank map (storeRank): O(m)

The array split from str: O(n)

Total Space Complexity:
👉 O(n + m)
