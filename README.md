# Daily coding challenge with Javascript

## Problem 1 - Twitter

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as prefix.

For example, given the query string de an the set of strings [dog, deer, deal] returns [deer, deal]

Hint: Try preprocessing the dictionary into a more efficient data structures to speed up queries.

[See Solution](/problems/1-20/problem-1.js)

---

## Problem 2 - Amazon

An sorted array of integers was rotated an unknown number of times. Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array,return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8,return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

[See Solution](/problems/1-20/problem-2.js)

---

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

[See Solution](/problems/21-40/problem-33.js)

---

## Problem 34 - Jane Street

Given an arithmetic expression in Reverse Polish Notation, write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: [5, 3, '+'] should return 5 + 3 = 8.

For example, [15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-'] should return 5, since it is equivalent to ((15 / (7 - (1 + 1))) \* 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

[See Solution](/problems/21-40/problem-34.js)

---

## Problem 121 - MongoDB

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)). You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

[See Solution](/problems/121-140/problem-121.js)

---

## Problem 122 - Facebook

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4. Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](/problems/121-140/problem-122.js)

---

## Problem 123 - Amazon

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false since there's no rearrangement that can form a palindrome.

[See Solution](/problems/121-140/problem-123.js)

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

[See Solution](/problems/121-140/problem-124.js)

---

## Problem 125 - Google

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](/problems/121-140/problem-125.js)

---

## Problem 126 - Uber

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](/problems/121-140/problem-126.js)

---

## Problem 127 - Facebook

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.

[See Solution](/problems/121-140/problem-127.js)

---

## Problem 128 - Google

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](/problems/121-140/problem-128.js)

---

## Problem 129 - Google

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

There is 1 smaller element to the right of 3  
There is 1 smaller element to the right of 4  
There are 2 smaller elements to the right of 9  
There is 1 smaller element to the right of 6  
There are no smaller elements to the right of 1  

[See Solution](/problems/121-140/problem-129.js)

---

## Problem 130 - Uber

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

next(): returns the next element in the array of arrays. If there are no more elements, raise an exception  
has_next(): returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](/problems/121-140/problem-130.js)

---

## Problem 131 - Airbnb

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].

[See Solution](/problems/121-140/problem-131.js)

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

[See Solution](/problems/121-140/problem-132.js)

---

## Problem 133 - Google

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

[See Solution](/problems/121-140/problem-133.js)

---

## Problem 134 - Facebook

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

[See Solution](/problems/121-140/problem-134.js)

---

## Problem 135 - Amazon

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](/problems/121-140/problem-135.js)

---

## Problem 136 - Dropbox

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.

[See Solution](/problems/121-140/problem-136.js)

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

[See Solution](/problems/121-140/problem-137.js)

---

## Problem 138 - Microsoft

Describe and give an example of each of the following types of polymorphism:

Ad-hoc polymorphism  
Parametric polymorphism  
Subtype polymorphism  

[See Solution](/problems/121-140/problem-138.js)

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

[See Solution](/problems/121-140/problem-139.js)

---

## Problem 140 - Bloomberg

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

[See Solution](/problems/121-140/problem-140.js)

---

## Problem 141 - Airbnb

Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.

Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.

[See Solution](/problems/141-160/problem-141.js)

---

## Problem 142 - Two Sigma

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

[See Solution](/problems/141-160/problem-142.js)

---

## Problem 143 - Google

Given the sequence of keys visited by a post-order traversal of a binary search tree, reconstruct the tree.

[See Solution](/problems/141-160/problem-143.js)

---

## Problem 144 - Google

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

[See Solution](/problems/141-160/problem-144.js)

---

## Problem 145 - Google

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

[See Solution](/problems/141-160/problem-145.js)

---

## Problem 146 - Facebook

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

[See Solution](/problems/141-160/problem-146.js)

---

## Problem 147 - Twitch

Describe what happens when you type a URL into your browser and press Enter.

[See Solution](/problems/141-160/problem-147.js)

---

## Problem 148 - Amazon

Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14.

[See Solution](/problems/141-160/problem-148.js)

---

## Problem 149 - Google

Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

For example, given the following rectangles:

{  
    "top_left": (1, 4),  
    "dimensions": (3, 3) # width, height  
}  

and

{  
    "top_left": (0, 5),  
    "dimensions": (4, 3) # width, height  
}  

return 6.

[See Solution](/problems/141-160/problem-149.js)

---

## Problem 150 - Microsoft

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

[See Solution](/problems/141-160/problem-150.js)

---

## Problem 151 - Google

You are given given a list of rectangles represented by min and max x- and y-coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.

For example, given the following rectangles:

{  
    "top_left": (1, 4),  
    "dimensions": (3, 3) # width, height  
},  
{  
    "top_left": (-1, 3),  
    "dimensions": (2, 1)  
},  
{  
    "top_left": (0, 5),  
    "dimensions": (4, 3)  
}  

return true as the first and third rectangle overlap each other.

[See Solution](/problems/141-160/problem-151.js)

---

## Problem 152 - Google

What will this code print out?

    def make_functions():
        flist = []  

        for i in [1, 2, 3]:  
            def print_i():  
                print(i)  
            flist.append(print_i)  

    return flist  

    functions = make_functions()  
    for f in functions:  
        f()  

How can we make it print out what we apparently want?

[See Solution](/problems/141-160/problem-152.js)

---

## Problem 153 - Google

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

[See Solution](/problems/141-160/problem-153.js)

---

## Problem 154 - Facebook

Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

[See Solution](/problems/141-160/problem-154.js)

---

## Problem 155 - Stripe

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

[See Solution](/problems/141-160/problem-155.js)

---

## Problem 156 - Google

You are given an array of non negative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.

Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.

[See Solution](/problems/141-160/problem-156.js)

---

## Problem 157 - Affirm

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock. You're also given a number fee that represents a transaction fee for each buy and sell transaction.

You must buy before you can sell the stock, but you can make as many transactions as you like.

For example, given [1, 3, 2, 8, 4, 10] and fee = 2, you should return 9, since you could buy the stock at 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell it at 10 dollars. Since we did two transactions, there is a 4 dollar fee, so we have 7 + 6 = 13 profit minus 4 dollars of fees.

[See Solution](/problems/141-160/problem-157.js)

---

## Problem 158 - Facebook

Suppose you are given two lists of n points, one list p1, p2, ..., pn on the line y = 0 and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of n line segments connecting each point pi to qi. Write an algorithm to determine how many pairs of the line segments intersect.

[See Solution](/problems/141-160/problem-158.js)

---

## Problem 159 - Google

Let A be an N by M matrix in which every row and every column is sorted.

Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

For example, given the following matrix:

[[1, 3, 7, 10, 15, 20],  
 [2, 6, 9, 14, 22, 25],  
 [3, 8, 10, 15, 25, 30],  
 [10, 11, 12, 23, 30, 35],  
 [20, 25, 30, 35, 40, 45]]  

And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.

[See Solution](/problems/141-160/problem-159.js)

---

## Problem 160 - Apple

Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

For example, given the following tree:

      5  
     / \  
    2  -5  

Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.

[See Solution](/problems/141-160/problem-160.js)

---

## Problem 161 - Amazon

Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

[See Solution](/problems/161-180/problem-161.js)

---

## Problem 162 - Google

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

[See Solution](/problems/161-180/problem-162.js)

---

## Problem 163 - Facebook

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

[See Solution](/problems/161-180/problem-163.js)

---

## Problem 164 - Microsoft

Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

For example, given the intervals [(1, 4), (4, 5), (7, 9), (9, 12)], you should return [4, 9].

[See Solution](/problems/161-180/problem-164.js)

---

## Problem 165 - Google

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

      1
     2 3
    1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.

[See Solution](/problems/161-180/problem-165.js)

---

## Problem 166 - Palantir

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

[See Solution](/problems/161-180/problem-166.js)

---

## Problem 167 - Uber

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

For example, given [5, 7, 10, 3, 4], return 3.

[See Solution](/problems/161-180/problem-167.js)

---

## Problem 168 - Amazon

Given a complete binary tree, count the number of nodes in faster than O(n) time. Recall that a complete binary tree has every level filled except the last, and the nodes in the last level are filled starting from the left.

[See Solution](/problems/161-180/problem-168.js)

---

## Problem 169 - IBM

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.

[See Solution](/problems/161-180/problem-169.js)

---

## Problem 170 - Twitter

A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

[See Solution](/problems/161-180/problem-170.js)

---

## Problem 171 - Dropbox

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

[See Solution](/problems/161-180/problem-171.js)

---

## Problem 172 - LinkedIn

Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution could be 1 -> 0 -> 5 -> 8 -> 3.

[See Solution](/problems/161-180/problem-172.js)

---

## Problem 173 - Google

Write a program that computes the length of the longest common subsequence of three given strings. For example, given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious", it should return 5, since the longest common subsequence is "eieio".

[See Solution](/problems/161-180/problem-173.js)

---

## Problem 174 - Apple

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

[See Solution](/problems/161-180/problem-174.js)

---

## Problem 175 - Microsoft

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].

[See Solution](/problems/161-180/problem-175.js)

---

## Problem 176 - Dropbox

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

[See Solution](/problems/161-180/problem-176.js)

---

## Problem 177 - Snapchat

Given a string of digits, generate all possible valid IP address combinations.

IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

For example, given "2542540123", you should return ['254.25.40.123', '254.254.0.123'].

[See Solution](/problems/161-180/problem-177.js)

---

## Problem 178 - Stripe

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.

[See Solution](/problems/161-180/problem-178.js)

---

## Problem 179 - Yelp

The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

More rigorously, we can define it as follows:

* The horizontal distance of the root is `0`.
* The horizontal distance of a left child is `hd(parent) - 1`.
* The horizontal distance of a right child is `hd(parent) + 1`.

For example, for the following tree, `hd(1) = -2`, and `hd(6) = 0`.

```bash
             5
          /     \
        3         7
      /  \      /   \
    1     4    6     9
   /                /
  0                8
```
  
The bottom view of a tree, then, consists of the lowest node at each horizontal distance. If there are two nodes at the same depth and horizontal distance, either is acceptable.

For this tree, for example, the bottom view could be `[0, 1, 3, 6, 8, 9]`.

Given the root to a binary tree, return its bottom view.

[See Solution](/problems/161-180/problem-179.js)

---