<h1>Daily coding challenge with Javascript</h1>

<h3>Problem 33 - Square</h3>

Given a list of words, return the shortest unique prefix of each word. For example, given the list:

dog <br />
cat <br />
apple <br />
apricot <br />
fish

Return the list: <br />

d <br />
c <br />
app <br />
apr <br />
f <br />

[See Solution](./21-40/problem-33.js)

<hr>

<h3>Problem 34 - Jane Street</h3>

Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) \* 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

[See Solution](./21-40/problem-34.js)

<hr>

<h3>Problem 121 - MongoDB</h3>

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)). You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

[See Solution](./121-140/problem-121.js)

<hr>

<h3>Problem 122 - Facebook</h3>

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4. Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](./121-140/problem-122.js)

<hr>

<h3>Problem 123 - Amazon</h3>

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false since there's no rearrangement that can form a palindrome.

[See Solution](./121-140/problem-123.js)

<hr>

<h3>Problem 124 - Slack</h3>

You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

For example, given the following matrix:

[[0, 0, 1],<br/>
[0, 0, 1],<br/>
[1, 0, 0]]

Return two, as there are only two ways to get to the bottom right:<br/>
Right, down, down, right<br/>
Down, right, down, right<br/>

The top left corner and bottom right corner will always be 0.

[See Solution](./121-140/problem-124.js)

<hr>

<h3>Problem 125 - Google</h3>

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](./121-140/problem-125.js)

<hr>

<h3>Problem 126 - Uber</h3>

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](./121-140/problem-126.js)

<hr>

<h3>Problem 127 - Facebook</h3>

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.

[See Solution](./121-140/problem-127.js)

<hr>

<h3>Problem 128 - Google</h3>

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](./121-140/problem-128.js)

<hr>

<h3>Problem 129 - Google</h3>

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

There is 1 smaller element to the right of 3 <br />
There is 1 smaller element to the right of 4 <br />
There are 2 smaller elements to the right of 9 <br />
There is 1 smaller element to the right of 6 <br />
There are no smaller elements to the right of 1 <br />

[See Solution](./121-140/problem-129.js)

<hr>

<h3>Problem 130 - Uber</h3>

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.<br />
has_next(): returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](./121-140/problem-130.js)

<hr>

<h3>Problem 131 - Airbnb</h3>

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].

[See Solution](./121-140/problem-131.js)

<hr>

<h3>Problem 132 - Facebook</h3>

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

[[1, 2, 3],<br />
[4, 5, 6],<br />
[7, 8, 9]]<br />

you should return:

[[7, 4, 1],<br />
[8, 5, 2],<br />
[9, 6, 3]]<br />

Follow-up: What if you couldn't use any extra space?

[See Solution](./121-140/problem-132.js)

<hr>

<h3>Problem 133 - Google</h3>

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

[See Solution](./121-140/problem-133.js)

<hr>

<h3>Problem 134 - Facebook</h3>

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

[See Solution](./121-140/problem-134.js)

<hr>

<h3>Problem 135 - Amazon</h3>

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](./121-140/problem-135.js)

<hr>

<h3>Problem 136 - Dropbox</h3>

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.

[See Solution](./121-140/problem-136.js)

<hr>

<h3>Problem 137 - Stripe</h3>

Write a function to flatten a nested dictionary. Namespace the keys with a period.

For example, given the following dictionary:

{<br/>
  "key": 3,<br/>
  "foo": {<br/>
    "a": 5,<br/>
    "bar": {<br/>
      "baz": 8<br/>
    }<br/>
  }<br/>
}

it should become:

{<br/>
  "key": 3,<br/>
  "foo.a": 5,<br/>
  "foo.bar.baz": 8<br/>
}

You can assume keys do not contain dots in them, i.e. no clobbering will occur.

[See Solution](./121-140/problem-137.js)

<hr>


