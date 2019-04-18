# Daily coding challenge with Javascript

## Problem 33 - Square

Given a list of words, return the shortest unique prefix of each word. For example, given the list:

dog  
cat  
apple  
apricot  
fish

Return the list:  

d  
c  
app  
apr  
f  

[See Solution](./21-40/problem-33.js)

---

## Problem 34 - Jane Street

Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) \* 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

[See Solution](./21-40/problem-34.js)

---

## Problem 121 - MongoDB

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)). You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

[See Solution](./121-140/problem-121.js)

---

## Problem 122 - Facebook

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4. Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](./121-140/problem-122.js)

---

## Problem 123 - Amazon

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false since there's no rearrangement that can form a palindrome.

[See Solution](./121-140/problem-123.js)

---

## Problem 124 - Slack

You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

For example, given the following matrix:

[[0, 0, 1]  
[0, 0, 1]  
[1, 0, 0]]

Return two, as there are only two ways to get to the bottom right  

Right, down, down, right  
Down, right, down, right  

The top left corner and bottom right corner will always be 0.

[See Solution](./121-140/problem-124.js)

---

## Problem 125 - Google

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](./121-140/problem-125.js)

---

## Problem 126 - Uber

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](./121-140/problem-126.js)

---

## Problem 127 - Facebook

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.

[See Solution](./121-140/problem-127.js)

---

## Problem 128 - Google

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](./121-140/problem-128.js)

---

## Problem 129 - Google

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

There is 1 smaller element to the right of 3  
There is 1 smaller element to the right of 4  
There are 2 smaller elements to the right of 9  
There is 1 smaller element to the right of 6  
There are no smaller elements to the right of 1  

[See Solution](./121-140/problem-129.js)

---

## Problem 130 - Uber

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

next(): returns the next element in the array of arrays. If there are no more elements, raise an exception  
has_next(): returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](./121-140/problem-130.js)

---

## Problem 131 - Airbnb

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].

[See Solution](./121-140/problem-131.js)

---

## Problem 132 - Facebook

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

[[1, 2, 3]  
[4, 5, 6]  
[7, 8, 9]]  

you should return:

[[7, 4, 1]  
[8, 5, 2]  
[9, 6, 3]]  

Follow-up: What if you couldn't use any extra space?

[See Solution](./121-140/problem-132.js)

---

## Problem 133 - Google

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

[See Solution](./121-140/problem-133.js)

---

## Problem 134 - Facebook

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

[See Solution](./121-140/problem-134.js)

---

## Problem 135 - Amazon

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](./121-140/problem-135.js)

---

## Problem 136 - Dropbox

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.

[See Solution](./121-140/problem-136.js)

---

## Problem 137 - Stripe

Write a function to flatten a nested dictionary. Namespace the keys with a period.

For example, given the following dictionary:

{
  "key": 3,
  "foo": {
      "a": 5,
      "bar": {
          "baz": 8
      }
  }
}

it should become:

{
  "key": 3,
  "foo.a": 5,
  "foo.bar.baz": 8
}

You can assume keys do not contain dots in them, i.e. no clobbering will occur.

[See Solution](./121-140/problem-137.js)

---

## Problem 138 - Microsoft

Describe and give an example of each of the following types of polymorphism:

Ad-hoc polymorphism  
Parametric polymorphism  
Subtype polymorphism  

[See Solution](./121-140/problem-138.js)

---

## Problem 139 - Google

You are given a starting state start, a list of transition probabilities for a Markov chain, and a number of steps num_steps. Run the Markov chain starting from start for num_steps and compute the number of times we visited each state.

For example, given the starting state a, number of steps 5000, and the following transition probabilities:

[('a', 'a', 0.9),  
('a', 'b', 0.075),  
('a', 'c', 0.025),  
('b', 'a', 0.15),  
('b', 'b', 0.8),  
('b', 'c', 0.05),  
('c', 'a', 0.25),  
('c', 'b', 0.25),  
('c', 'c', 0.5)]

One instance of running this Markov chain might produce { 'a': 3012, 'b': 1656, 'c': 332 }.

[See Solution](./121-140/problem-139.js)

---

## Problem 140 - Bloomberg

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

[See Solution](./121-140/problem-140.js)

---

## Problem 141 - Airbnb

Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.

Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.

[See Solution](./141-160/problem-141.js)

---