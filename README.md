# Daily coding challenge with Javascript

## Problem 1 - Google [Difficulty: Easy]

Given a list of numbers, return whether any two sums to k. For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

[See Solution](/problems/1-99/problem-1.js)

---

## Problem 2 - Uber [Difficulty: Hard]

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

[See Solution](/problems/1-99/problem-2.js)

---

## Problem 3 - Google [Difficulty: Medium]

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

    class Node:
        def __init__(self, val, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right

The following test should pass:

    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'

[See Solution](/problems/1-99/problem-3.js)

---

## Problem 4 - Stripe [Difficulty: Hard]

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

[See Solution](/problems/1-99/problem-4.js)

---

## Problem 5 - Jane Street [Difficulty: Medium]

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

    def cons(a, b):
        def pair(f):
            return f(a, b)
        return pair

Implement car and cdr.

[See Solution](/problems/1-99/problem-5.js)

---

## Problem 6 - Google [Difficulty: Hard]

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

[See Solution](/problems/1-99/problem-6.js)

---

## Problem 7 - Facebook [Difficulty: Medium]

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

[See Solution](/problems/1-99/problem-7.js)

---

## Problem 8 - Google [Difficulty: Easy]

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

      0
     / \
    1   0
       / \
      1   0
     / \
    1   1

[See Solution](/problems/1-99/problem-8.js)

---

## Problem 9 - Airbnb [Difficulty: Hard]

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

[See Solution](/problems/1-99/problem-9.js)

---

## Problem 10 - Apple [Difficulty: Medium]

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

[See Solution](/problems/1-99/problem-10.js)

---

## Problem 11 - Twitter [Difficulty: Medium]

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

[See Solution](/problems/1-99/problem-11.js)

---

## Problem 12 - Amazon [Difficulty: Hard]

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

* 1, 1, 1, 1
* 2, 1, 1
* 1, 2, 1
* 1, 1, 2
* 2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

[See Solution](/problems/1-99/problem-12.js)

---

## Problem 13 - Amazon [Difficulty: Hard]

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[See Solution](/problems/1-99/problem-13.js)

---

## Problem 14 - Google [Difficulty: Medium]

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x^2 + y^2 = r^2.

[See Solution](/problems/1-99/problem-14.js)

---

## Problem 15 - Facebook [Difficulty: Medium]

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

[See Solution](/problems/1-99/problem-15.js)

---

## Problem 16 - Twitter [Difficulty: Easy]

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

* record(order_id): adds the order_id to the log
* get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.

[See Solution](/problems/1-99/problem-16.js)

---

## Problem 121 - MongoDB

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)). You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

[See Solution](/problems/100-199/problem-121.js)

---

## Problem 122 - Facebook

Given a positive integer n, find the smallest number of squared integers which sum to n.

For example, given n = 13, return 2 since 13 = 32 + 22 = 9 + 4. Given n = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](/problems/100-199/problem-122.js)

---

## Problem 123 - Amazon

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false since there's no rearrangement that can form a palindrome.

[See Solution](/problems/100-199/problem-123.js)

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

[See Solution](/problems/100-199/problem-124.js)

---

## Problem 125 - Google

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](/problems/100-199/problem-125.js)

---

## Problem 126 - Uber

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](/problems/100-199/problem-126.js)

---

## Problem 127 - Facebook

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number 1111 0000 1111 0000 1111 0000 1111 0000, return 0000 1111 0000 1111 0000 1111 0000 1111.

[See Solution](/problems/100-199/problem-127.js)

---

## Problem 128 - Google

You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](/problems/100-199/problem-128.js)

---

## Problem 129 - Google

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

There is 1 smaller element to the right of 3  
There is 1 smaller element to the right of 4  
There are 2 smaller elements to the right of 9  
There is 1 smaller element to the right of 6  
There are no smaller elements to the right of 1  

[See Solution](/problems/100-199/problem-129.js)

---

## Problem 130 - Uber

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

next(): returns the next element in the array of arrays. If there are no more elements, raise an exception  
has_next(): returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](/problems/100-199/problem-130.js)

---

## Problem 131 - Airbnb

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list ["code", "edoc", "da", "d"], return [(0, 1), (1, 0), (2, 3)].

[See Solution](/problems/100-199/problem-131.js)

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

[See Solution](/problems/100-199/problem-132.js)

---

## Problem 133 - Google

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

[See Solution](/problems/100-199/problem-133.js)

---

## Problem 134 - Facebook

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat.

[See Solution](/problems/100-199/problem-134.js)

---

## Problem 135 - Amazon

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](/problems/100-199/problem-135.js)

---

## Problem 136 - Dropbox

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.

[See Solution](/problems/100-199/problem-136.js)

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

[See Solution](/problems/100-199/problem-137.js)

---

## Problem 138 - Microsoft

Describe and give an example of each of the following types of polymorphism:

Ad-hoc polymorphism  
Parametric polymorphism  
Subtype polymorphism  

[See Solution](/problems/100-199/problem-138.js)

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

[See Solution](/problems/100-199/problem-139.js)

---

## Problem 140 - Bloomberg

Determine whether there exists a one-to-one character mapping from one string s1 to another s2.

For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.

Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

[See Solution](/problems/100-199/problem-140.js)

---

## Problem 141 - Airbnb

Given a linked list and a positive integer k, rotate the list to the right by k places.

For example, given the linked list 7 -> 7 -> 3 -> 5 and k = 2, it should become 3 -> 5 -> 7 -> 7.

Given the linked list 1 -> 2 -> 3 -> 4 -> 5 and k = 3, it should become 3 -> 4 -> 5 -> 1 -> 2.

[See Solution](/problems/100-199/problem-141.js)

---

## Problem 142 - Two Sigma

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

[See Solution](/problems/100-199/problem-142.js)

---

## Problem 143 - Google

Given the sequence of keys visited by a post-order traversal of a binary search tree, reconstruct the tree.

[See Solution](/problems/100-199/problem-143.js)

---

## Problem 144 - Google

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

[See Solution](/problems/100-199/problem-144.js)

---

## Problem 145 - Google

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

[See Solution](/problems/100-199/problem-145.js)

---

## Problem 146 - Facebook

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

[See Solution](/problems/100-199/problem-146.js)

---

## Problem 147 - Twitch

Describe what happens when you type a URL into your browser and press Enter.

[See Solution](/problems/100-199/problem-147.js)

---

## Problem 148 - Amazon

Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14.

[See Solution](/problems/100-199/problem-148.js)

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

[See Solution](/problems/100-199/problem-149.js)

---

## Problem 150 - Microsoft

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given [5, 10, 15, 20, 25], return the sets {10, 25} and {5, 15, 20}, which has a difference of 5, which is the smallest possible difference.

[See Solution](/problems/100-199/problem-150.js)

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

[See Solution](/problems/100-199/problem-151.js)

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

[See Solution](/problems/100-199/problem-152.js)

---

## Problem 153 - Google

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].

[See Solution](/problems/100-199/problem-153.js)

---

## Problem 154 - Facebook

Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.

Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

[See Solution](/problems/100-199/problem-154.js)

---

## Problem 155 - Stripe

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

[See Solution](/problems/100-199/problem-155.js)

---

## Problem 156 - Google

You are given an array of non negative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

For example, given the array [1, 3, 1, 2, 0, 1], we can go from indices 0 -> 1 -> 3 -> 5, so return true.

Given the array [1, 2, 1, 0, 0], we can't reach the end, so return false.

[See Solution](/problems/100-199/problem-156.js)

---

## Problem 157 - Affirm

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock. You're also given a number fee that represents a transaction fee for each buy and sell transaction.

You must buy before you can sell the stock, but you can make as many transactions as you like.

For example, given [1, 3, 2, 8, 4, 10] and fee = 2, you should return 9, since you could buy the stock at 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell it at 10 dollars. Since we did two transactions, there is a 4 dollar fee, so we have 7 + 6 = 13 profit minus 4 dollars of fees.

[See Solution](/problems/100-199/problem-157.js)

---

## Problem 158 - Facebook

Suppose you are given two lists of n points, one list p1, p2, ..., pn on the line y = 0 and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of n line segments connecting each point pi to qi. Write an algorithm to determine how many pairs of the line segments intersect.

[See Solution](/problems/100-199/problem-158.js)

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

[See Solution](/problems/100-199/problem-159.js)

---

## Problem 160 - Apple

Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

For example, given the following tree:

      5  
     / \  
    2  -5  

Return 2 as it occurs twice: once as the left leaf, and once as the sum of 2 + 5 - 5.

[See Solution](/problems/100-199/problem-160.js)

---

## Problem 161 - Amazon

Given an array and a number k that's smaller than the length of the array, rotate the array to the right k elements in-place.

[See Solution](/problems/100-199/problem-161.js)

---

## Problem 162 - Google

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

[See Solution](/problems/100-199/problem-162.js)

---

## Problem 163 - Facebook

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

[See Solution](/problems/100-199/problem-163.js)

---

## Problem 200 - Microsoft

Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

For example, given the intervals [(1, 4), (4, 5), (7, 9), (9, 12)], you should return [4, 9].

[See Solution](/problems/200-299/problem-200.js)

---

## Problem 201 - Google

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

      1
     2 3
    1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.

[See Solution](/problems/200-299/problem-201.js)

---

## Problem 202 - Palantir

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

[See Solution](/problems/200-299/problem-202.js)

---

## Problem 203 - Uber

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

For example, given [5, 7, 10, 3, 4], return 3.

[See Solution](/problems/200-299/problem-203.js)

---

## Problem 204 - Amazon

Given a complete binary tree, count the number of nodes in faster than O(n) time. Recall that a complete binary tree has every level filled except the last, and the nodes in the last level are filled starting from the left.

[See Solution](/problems/200-299/problem-204.js)

---

## Problem 205 - IBM

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.

[See Solution](/problems/200-299/problem-205.js)

---

## Problem 206 - Twitter

A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

[See Solution](/problems/200-299/problem-206.js)

---

## Problem 207 - Dropbox

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

[See Solution](/problems/200-299/problem-207.js)

---

## Problem 208 - LinkedIn

Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution could be 1 -> 0 -> 5 -> 8 -> 3.

[See Solution](/problems/200-299/problem-208.js)

---

## Problem 209 - Google

Write a program that computes the length of the longest common subsequence of three given strings. For example, given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious", it should return 5, since the longest common subsequence is "eieio".

[See Solution](/problems/200-299/problem-209.js)

---

## Problem 210 - Apple

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

[See Solution](/problems/200-299/problem-210.js)

---

## Problem 211 - Microsoft

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].

[See Solution](/problems/200-299/problem-211.js)

---

## Problem 212 - Dropbox

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

[See Solution](/problems/200-299/problem-212.js)

---

## Problem 213 - Snapchat

Given a string of digits, generate all possible valid IP address combinations.

IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

For example, given "2542540123", you should return ['254.25.40.123', '254.254.0.123'].

[See Solution](/problems/200-299/problem-213.js)

---

## Problem 214 - Stripe

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.

[See Solution](/problems/200-299/problem-214.js)

---

## Problem 215 - Yelp

The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

More rigorously, we can define it as follows:

* The horizontal distance of the root is `0`.
* The horizontal distance of a left child is `hd(parent) - 1`.
* The horizontal distance of a right child is `hd(parent) + 1`.

For example, for the following tree, `hd(1) = -2`, and `hd(6) = 0`.

            5
         /     \
        3       7 
       / \     / \
      1   4   6   9
     /           /
    0           8  

The bottom view of a tree, then, consists of the lowest node at each horizontal distance. If there are two nodes at the same depth and horizontal distance, either is acceptable.

For this tree, for example, the bottom view could be `[0, 1, 3, 6, 8, 9]`.

Given the root to a binary tree, return its bottom view.

[See Solution](/problems/200-299/problem-215.js)

---

## Problem 216 - Facebook

Given a number in Roman numeral format, convert it to decimal.

The values of Roman numerals are as follows:

    {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }

In addition, note that the Roman numeral system uses subtractive notation for numbers such as IV and XL.

For the input XIV, for instance, you should return 14.

[See Solution](/problems/200-299/problem-216.js)

---

## Problem 217 - Oracle

We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not. For a given input N, find the smallest sparse number greater than or equal to N.

Do this in faster than O(N log N) time.

[See Solution](/problems/200-299/problem-217.js)

---

## Problem 218 - Yahoo

Write an algorithm that computes the reversal of a directed graph. For example, if a graph consists of A -> B -> C, it should become A <- B <- C.

[See Solution](/problems/200-299/problem-218.js)

---

## Problem 219 - Salesforce

Connect 4 is a game where opponents take turns dropping red or black discs into a 7 x 6 vertically suspended grid. The game ends either when one player creates a line of four consecutive discs of their color (horizontally, vertically, or diagonally), or when there are no more spots left in the grid.

Design and implement Connect 4.

[See Solution](/problems/200-299/problem-219.js)

---

## Problem 220 - Square

In front of you is a row of N coins, with values v1, v1, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.

[See Solution](/problems/200-299/problem-220.js)

---

## Problem 221 - Zillow

Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.

[See Solution](/problems/200-299/problem-221.js)

---

## Problem 222 - Quora

Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".

[See Solution](/problems/200-299/problem-222.js)

---

## Problem 223 - Palantir

Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity, where h is the height of the tree. Write a program to compute the in-order traversal of a binary tree using O(1) space.

[See Solution](/problems/200-299/problem-223.js)

---

## Problem 224 - Amazon

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input [1, 2, 3, 10], you should return 7.

Do this in O(N) time.

[See Solution](/problems/200-299/problem-224.js)

---

## Problem 225 - Bloomberg

There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.

Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

Bonus: Find an O(log N) solution if k = 2.

[See Solution](/problems/200-299/problem-225.js)

---

## Problem 226 - Airbnb

You come across a dictionary of sorted words in a language you've never seen before. Write a program that returns the correct order of letters in this language.

For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].

[See Solution](/problems/200-299/problem-226.js)

---

## Problem 227 - Facebook

Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many words as possible that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. Given a game board and a dictionary of valid words, implement a Boggle solver.

[See Solution](/problems/200-299/problem-227.js)

---

## Problem 228 - Twitter

Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.

[See Solution](/problems/200-299/problem-228.js)

---

## Problem 229 - Flipkart

Snakes and Ladders is a game played on a 10 x 10 board, the goal of which is get from square 1 to square 100. On each turn players will roll a six-sided die and move forward a number of spaces equal to the result. If they land on a square that represents a snake or ladder, they will be transported ahead or behind, respectively, to a new square.

Find the smallest number of turns it takes to play snakes and ladders.

For convenience, here are the squares representing snakes and ladders, and their outcomes:

snakes = {16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}  
ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}

[See Solution](/problems/200-299/problem-229.js)

---

## Problem 230 - Goldman Sachs

You are given N identical eggs and access to a building with k floors. Your task is to find the lowest floor that will cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when dropped from the xth floor, you can assume it will also break when dropped from any floor greater than x.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if N = 1 and k = 5, we will need to try dropping the egg at every floor, beginning with the first, until we reach the fifth floor, so our solution will be 5.

[See Solution](/problems/200-299/problem-230.js)

---

## Problem 231 - IBM

Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

For example, given "aaabbc", you could return "ababac". Given "aaab", return None.

[See Solution](/problems/200-299/problem-231.js)

---

## Problem 232 - Google

Implement a PrefixMapSum class with the following methods:

* insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.  
* sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.

For example, you should be able to run the following code:

    mapsum.insert("columnar", 3)  
    assert mapsum.sum("col") == 3  

    mapsum.insert("column", 2)  
    assert mapsum.sum("col") == 5  

[See Solution](/problems/200-299/problem-232.js)

---

## Problem 233 - Apple

Implement the function fib(n), which returns the nth number in the Fibonacci sequence, using only O(1) space.

[See Solution](/problems/200-299/problem-233.js)

---

## Problem 234 - Microsoft

Recall that the minimum spanning tree is the subset of edges of a tree that connect all its vertices with the smallest possible total edge weight. Given an undirected graph with weighted edges, compute the maximum weight spanning tree.

[See Solution](/problems/200-299/problem-234.js)

---

## Problem 235 - Facebook

Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.

[See Solution](/problems/200-299/problem-235.js)

---

## Problem 236 - Nvidia

You are given a list of N points (x1, y1), (x2, y2), ..., (xN, yN) representing a polygon. You can assume these points are given in order; that is, you can construct the polygon by connecting point 1 to point 2, point 2 to point 3, and so on, finally looping around to connect point N to point 1.

Determine if a new point p lies inside this polygon. (If p is on the boundary of the polygon, you should return False).

[See Solution](/problems/200-299/problem-236.js)

---

## Problem 237 - Amazon

A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node. The following tree is an example:

            4
          / | \
        3   5   3
      /           \
     9             9

Given a k-ary tree, determine whether it is symmetric.

[See Solution](/problems/200-299/problem-237.js)

---

## Problem 238 - MIT

Blackjack is a two player card game whose rules are as follows:

The player and then the dealer are each given two cards.  
The player can then "hit", or ask for arbitrarily many additional cards, so long as their total does not exceed 21.  
The dealer must then hit if their total is 16 or lower, otherwise pass.  
Finally, the two compare totals, and the one with the greatest sum not exceeding 21 is the winner.  
For this problem, cards values are counted as follows: each card between 2 and 10 counts as their face value, face cards count as 10, and aces count as 1.  

Given perfect knowledge of the sequence of cards in the deck, implement a blackjack solver that maximizes the player's score (that is, wins minus losses).

[See Solution](/problems/200-299/problem-238.js)

---

## Problem 239 - Uber

One way to unlock an Android phone is through a pattern of swipes across a 1-9 keypad.

For a pattern to be valid, it must satisfy the following:

All of its keys must be distinct.  
It must not connect two keys by jumping over a third key, unless that key has already been used.  
For example, 4 - 2 - 1 - 7 is a valid pattern, whereas 2 - 1 - 7 is not.  

Find the total number of valid unlock patterns of length N, where 1 <= N <= 9.

[See Solution](/problems/200-299/problem-239.js)

---

## Problem 240 - Spotify

There are N couples sitting in a row of length 2 * N. They are currently ordered randomly, but would like to rearrange themselves so that each couple's partners can sit side by side.

What is the minimum number of swaps necessary for this to happen?

[See Solution](/problems/200-299/problem-240.js)

---

## Problem 241 - Palantir

In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.

For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

Given a list of paper citations of a researcher, calculate their h-index.

[See Solution](/problems/200-299/problem-241.js)

---

## Problem 242 - Twitter

You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour. Implement a data structure that efficiently supports the following:

* update(hour: int, value: int): Increment the element at index hour by value.
* query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive).

You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.

[See Solution](/problems/200-299/problem-242.js)

---

## Problem 243 - Etsy

Given an array of numbers N and an integer k, your task is to split N into k partitions such that the maximum sum of any partition is minimized. Return this sum.

For example, given N = [5, 1, 2, 7, 3, 4] and k = 3, you should return 8, since the optimal partition is [5, 1, 2], [7], [3, 4].

[See Solution](/problems/200-299/problem-243.js)

---

## Problem 244 - Square

The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. The method is to take increasingly larger prime numbers, and mark their multiples as composite.

For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on. Once we have done this for all primes less than N, the unmarked numbers that remain will be prime.

Implement this algorithm.

Bonus: Create a generator that produces primes indefinitely (that is, without taking N as an input).

[See Solution](/problems/200-299/problem-244.js)

---

## Problem 245 - Yelp

You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.

[See Solution](/problems/200-299/problem-245.js)

---

## Problem 246 - Dropbox

Given a list of words, determine whether the words can be chained to form a circle. A word X can be placed in front of another word Y in a circle if the last character of X is same as the first character of Y.

For example, the words ['chair', 'height', 'racket', 'touch', 'tunic'] can form the following circle: chair --> racket --> touch --> height --> tunic --> chair.

[See Solution](/problems/200-299/problem-246.js)

---

## Problem 247 - PayPal

Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.

[See Solution](/problems/200-299/problem-247.js)

---

## Problem 248 - Nvidia

Find the maximum of two numbers without using any if-else statements, branching, or direct comparisons.

[See Solution](/problems/200-299/problem-248.js)

---

## Problem 249 - Salesforce

Given an array of integers, find the maximum XOR of any two elements.

[See Solution](/problems/200-299/problem-249.js)

---

## Problem 250 - Google

A cryptarithmetic puzzle is a mathematical game where the digits of some numbers are represented by letters. Each letter represents a unique digit.

For example, a puzzle of the form: Send + More = MONEY may have the solution:

{'S': 9, 'E': 5, 'N': 6, 'D': 7, 'M': 1, 'O', 0, 'R': 8, 'Y': 2}

Given a three-word puzzle like the one above, create an algorithm that finds a solution.

[See Solution](/problems/200-299/problem-250.js)

---

## Problem 251 -  Amazon

Given an array of a million integers between zero and a billion, out of order, how can you efficiently sort it? Assume that you cannot store an array of a billion elements in memory.

[See Solution](/problems/200-299/problem-251.js)

---

## Problem 252 - Palantir

The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one. For example, 4 / 13 can be represented as 1 / 4 + 1 / 18 + 1 / 468.

Create an algorithm to turn an ordinary fraction a / b, where a < b, into an Egyptian fraction.

[See Solution](/problems/200-299/problem-252.js)

---

## Problem 253 - PayPal

Given a string and a number of lines k, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the kth line, then back up to top right, and so on.

For example, given the sentence "thisisazigzag" and k = 4, you should print:

    t     a     g
     h   s z   a
      i i   i z
       s     g

[See Solution](/problems/200-299/problem-253.js)

---

## Problem 254 - Yahoo

Recall that a full binary tree is one in which each node is either a leaf node, or has two children. Given a binary tree, convert it to a full one by removing nodes with only one child.

For example, given the following tree:

            0
       /         \
      1           2
     /             \
    3               4
     \            /   \
      5          6     7
You should convert it to:

        0
     /     \
    5       4
          /   \
         6     7

[See Solution](/problems/200-299/problem-254.js)

---

## Problem 255 - Microsoft

The transitive closure of a graph is a measure of which vertices are reachable from other vertices. It can be represented as a matrix M, where M[i][j] == 1 if there is a path between vertices i and j, and otherwise 0.

For example, suppose we are given the following graph in adjacency list form:

    graph = [
        [0, 1, 3],
        [1, 2],
        [2],
        [3]
    ]

The transitive closure of this graph would be:

    [1, 1, 1, 1]
    [0, 1, 1, 0]
    [0, 0, 1, 0]
    [0, 0, 0, 1]

Given a graph, find its transitive closure.

[See Solution](/problems/200-299/problem-255.js)

---

## Problem 256 - Fitbit

Given a linked list, rearrange the node values such that they appear in alternating low -> high -> low -> high ... form. For example, given 1 -> 2 -> 3 -> 4 -> 5, you should return 1 -> 3 -> 2 -> 5 -> 4.

[See Solution](/problems/200-299/problem-256.js)

---

## Problem 257 - WhatsApp

Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given [3, 7, 5, 6, 9], you should return (1, 3).

[See Solution](/problems/200-299/problem-257.js)

---

## Problem 258 - Morgan Stanley

In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

           1
        /     \
      2         3
     / \       / \
    4   5     6   7

You should return [1, 3, 2, 4, 5, 6, 7].

[See Solution](/problems/200-299/problem-258.js)

---

## Problem 259 - Two Sigma

Ghost is a two-person word game where players alternate appending letters to a word. The first person who spells out a word, or creates a prefix for which there is no possible continuation, loses. Here is a sample game:

Player 1: g
Player 2: h
Player 1: o
Player 2: s
Player 1: t [loses]
Given a dictionary of words, determine the letters the first player should start with, such that with optimal play they cannot lose.

For example, if the dictionary is ["cat", "calf", "dog", "bear"], the only winning start letter would be b.

[See Solution](/problems/200-299/problem-259.js)

---

## Problem 260 - Pinterest

The sequence [0, 1, ..., N] has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given [None, +, +, -, +], you could return [1, 2, 3, 0, 4].

[See Solution](/problems/200-299/problem-260.js)

---

## Problem 261 - Amazon

Huffman coding is a method of encoding characters based on their frequency. Each letter is assigned a variable-length binary string, such as 0101 or 111110, where shorter lengths correspond to more common letters. To accomplish this, a binary tree is built such that the path from the root to any leaf uniquely maps to a character. When traversing the path, descending to a left child corresponds to a 0 in the prefix, while descending right corresponds to 1.

Here is an example tree (note that only the leaf nodes have letters):

            *
          /   \
        *       *
       / \     / \
      *   a   t   *
     /             \
    c               s

With this encoding, cats would be represented as 0000110111.

Given a dictionary of character frequencies, build a Huffman tree, and use it to determine a mapping between characters and their encoded binary strings.

[See Solution](/problems/200-299/problem-261.js)

---

## Problem 262 - Mozilla

A bridge in a connected (undirected) graph is an edge that, if removed, causes the graph to become disconnected. Find all the bridges in a graph.

[See Solution](/problems/200-299/problem-262.js)

---

## Problem 263 - Nest

Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.

We can consider a sentence valid if it conforms to the following rules:

1. The sentence must start with a capital letter, followed by a lowercase letter or a space.
2. All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
3. There must be a single space between each word.
4. The sentence must end with a terminal mark immediately following a word.

[See Solution](/problems/200-299/problem-263.js)

---

## Problem 264 - LinkedIn

Given a set of characters C and an integer k, a De Bruijn sequence is a cyclic sequence in which every possible k-length string of characters in C occurs exactly once.

For example, suppose C = {0, 1} and k = 3. Then our sequence should contain the substrings {'000', '001', '010', '011', '100', '101', '110', '111'}, and one possible solution would be 00010111.

Create an algorithm that finds a De Bruijn sequence.

[See Solution](/problems/200-299/problem-264.js)

---

## Problem 265 - Atlassian

MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written. They would like to give the smallest positive amount to each worker consistent with the constraint that if a developer has written more lines of code than their neighbor, they should receive more money.

Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

For example, given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].

[See Solution](/problems/200-299/problem-265.js)

---

## Problem 266 - Pivotal

A step word is formed by taking a given word, adding a letter, and anagramming the result. For example, starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".

Given a dictionary of words and an input word, create a function that returns all valid step words.

[See Solution](/problems/200-299/problem-266.js)

---

## Problem 267 - Oracle

You are presented with an 8 by 8 matrix representing the positions of pieces on a chess board. The only pieces on the board are the black king and various white pieces. Given this matrix, determine whether the king is in check.

For details on how each piece moves, see [here](https://en.wikipedia.org/wiki/Chess_piece#Moves_of_the_pieces).

For example, given the following matrix:

...K....  
........  
.B......  
......P.  
.......R  
..N.....  
........  
.....Q..  

You should return True, since the bishop is attacking the king diagonally.

[See Solution](/problems/200-299/problem-267.js)

---

## Problem 268 - Indeed

Given a 32-bit positive integer N, determine whether it is a power of four in faster than O(log N) time.

[See Solution](/problems/200-299/problem-268.js)

---

## Problem 269 - Microsoft

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

* L, meaning the domino has just been pushed to the left,
* R, meaning the domino has just been pushed to the right, or
* ., meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R....L, you should return LL.RRRLLL.

Given the string ..R...L.L, you should return ..RR.LLLL.

[See Solution](/problems/200-299/problem-269.js)

---

## Problem 270 - Twitter

A network consists of nodes labeled 0 to N. You are given a list of edges (a, b, t), describing the time t it takes for a message to be sent from node a to node b. Whenever a node receives a message, it immediately passes the message on to a neighboring node, if possible.

Assuming all nodes are connected, determine how long it will take for every node to receive a message that begins at node 0.

For example, given N = 5, and the following edges:

    edges = [  
        (0, 1, 5),  
        (0, 2, 3),  
        (0, 5, 4),  
        (1, 3, 8),  
        (2, 3, 1),  
        (3, 5, 10),  
        (3, 4, 5)  
    ]  

You should return 9, because propagating the message from 0 -> 2 -> 3 -> 4 will take that much time.

[See Solution](/problems/200-299/problem-270.js)

---

## Problem 271 -  Netflix

Given a sorted list of integers of length N, determine if an element x is in the list without performing any multiplication, division, or bit-shift operations.

Do this in O(log N) time.

[See Solution](/problems/200-299/problem-271.js)

---

## Problem 272 - Spotify

Write a function, throw_dice(N, faces, total), that determines how many ways it is possible to throw N dice with some number of faces each to get a specific total.

For example, throw_dice(3, 6, 7) should equal 15.

[See Solution](/problems/200-299/problem-272.js)

---

## Problem 273 - Apple

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.

For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.

[See Solution](/problems/200-299/problem-273.js)

---

## Problem 274 - Facebook

Given a string consisting of parentheses, single digits, and positive and negative signs, convert the string into a mathematical expression to obtain the answer.

Don't use eval or a similar built-in parser.

For example, given '-1 + (2 + 3)', you should return 4.

[See Solution](/problems/200-299/problem-274.js)

---

## Problem 275 - Epic

The "look and say" sequence is defined as follows: beginning with the term 1, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:

1  
11  
21  
1211  
111221  

As an example, the fourth term is 1211, since the third term consists of one 2 and one 1.

Given an integer N, print the Nth term of this sequence.

[See Solution](/problems/200-299/problem-275.js)

---

## Problem 276 - Dropbox

Implement an efficient string matching algorithm.

That is, given a string of length N and a pattern of length k, write a program that searches for the pattern in the string with less than O(N * k) worst-case time complexity.

If the pattern is found, return the start index of its location. If not, return False.

[See Solution](/problems/200-299/problem-276.js)

---

## Problem 277 - Google

UTF-8 is a character encoding that maps each symbol to one, two, three, or four bytes.

For example, the Euro sign, €, corresponds to the three bytes 11100010 10000010 10101100. The rules for mapping characters are as follows:

For a single-byte character, the first bit must be zero.
For an n-byte character, the first byte starts with n ones and a zero. The other n - 1 bytes all start with 10.
Visually, this can be represented as follows.

    Bytes |           Byte format
    ----------------------------------------------
    1     | 0xxxxxxx
    2     | 110xxxxx 10xxxxxx
    3     | 1110xxxx 10xxxxxx 10xxxxxx
    4     | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

Write a program that takes in an array of integers representing byte values, and returns whether it is a valid UTF-8 encoding.

[See Solution](/problems/200-299/problem-277.js)

---

## Problem 278 - Amazon

Given an integer N, construct all possible binary search trees with N nodes.

[See Solution](/problems/200-299/problem-278.js)

---

## Problem 279 - Twitter

A classroom consists of N students, whose friendships can be represented in an adjacency list. For example, the following describes a situation where 0 is friends with 1 and 2, 3 is friends with 6, and so on.

    {
        0: [1, 2],
        1: [0, 5],
        2: [0],
        3: [6],
        4: [],
        5: [1],
        6: [3]
    }

Each student can be placed in a friend group, which can be defined as the transitive closure of that student's friendship relations. In other words, this is the smallest set such that no student in the group has any friends outside this group. For the example above, the friend groups would be {0, 1, 2, 5}, {3, 6}, {4}.

Given a friendship list such as the one above, determine the number of friend groups in the class.

[See Solution](/problems/200-299/problem-279.js)

---

## Problem 280 - Pandora

Given an undirected graph, determine if it contains a cycle.

[See Solution](/problems/200-299/problem-280.js)

---

## Problem 281 - LinkedIn

A wall consists of several rows of bricks of various integer lengths and uniform height. Your goal is to find a vertical line going from the top to the bottom of the wall that cuts through the fewest number of bricks. If the line goes through the edge between two bricks, this does not count as a cut.

For example, suppose the input is as follows, where values in each row represent the lengths of bricks in that row:

    [
        [3, 5, 1, 1],
        [2, 3, 3, 2],
        [5, 5],
        [4, 4, 2],
        [1, 3, 3, 3],
        [1, 1, 6, 1, 1]
    ]

The best we can we do here is to draw a line after the eighth brick, which will only require cutting through the bricks in the third and fifth row.

Given an input consisting of brick lengths for each row such as the one above, return the fewest number of bricks that must be cut to create a vertical line.

[See Solution](/problems/200-299/problem-281.js)

---

## Problem 282 - Netflix

Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a2+ b2= c2.

[See Solution](/problems/200-299/problem-282.js)

---

## Problem 283 - Google

A regular number in mathematics is defined as one which evenly divides some power of 60. Equivalently, we can say that a regular number is one whose only prime divisors are 2, 3, and 5.

These numbers have had many applications, from helping ancient Babylonians keep time to tuning instruments according to the diatonic scale.

Given an integer N, write a program that returns, in order, the first N regular numbers.

[See Solution](/problems/200-299/problem-283.js)

---

## Problem 284 - Yext

Two nodes in a binary tree can be called cousins if they are on the same level of the tree but have different parents. For example, in the following diagram 4 and 6 are cousins.

        1
       / \
      2   3
     / \   \
    4   5   6

Given a binary tree and a particular node, find all cousins of that node.

[See Solution](/problems/200-299/problem-284.js)

---

## Problem 285 - Mailchimp

You are given an array representing the heights of neighboring buildings on a city street, from east to west. The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.

For example, given the array [3, 7, 8, 3, 6, 1], you should return 3, since the top floors of the buildings with heights 8, 6, and 1 all have an unobstructed view to the west.

Can you do this using just one forward pass through the array?

[See Solution](/problems/200-299/problem-285.js)

---

## Problem 286 - VMware

The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one another when viewed from a distance. We can represent the buildings using an array of (left, right, height) tuples, which tell us where on an imaginary x-axis a building begins and ends, and how tall it is. The skyline itself can be described by a list of (x, height) tuples, giving the locations at which the height visible to a distant observer changes, and each new height.

Given an array of buildings as described above, create a function that returns the skyline.

For example, suppose the input consists of the buildings [(0, 15, 3), (4, 11, 5), (19, 23, 4)]. In aggregate, these buildings would create a skyline that looks like the one below.

         ______  
        |      |        ___
     ___|      |___    |   | 
    |   |   B  |   |   | C |
    | A |      | A |   |   |
    |   |      |   |   |   |
    ------------------------

As a result, your function should return [(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)].

[See Solution](/problems/200-299/problem-286.js)

---

## Problem 287 - Quora

You are given a list of (website, user) pairs that represent users visiting websites. Come up with a program that identifies the top k pairs of websites with the greatest similarity.

For example, suppose k = 1, and the list of tuples is:

[('a', 1), ('a', 3), ('a', 5),  
 ('b', 2), ('b', 6),  
 ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5),  
 ('d', 4), ('d', 5), ('d', 6), ('d', 7),  
 ('e', 1), ('e', 3), ('e': 5), ('e', 6)]

Then a reasonable similarity metric would most likely conclude that a and e are the most similar, so your program should return [('a', 'e')].

[See Solution](/problems/200-299/problem-287.js)

---

## Problem 288 - Salesforce

The number 6174 is known as Kaprekar's contant, after the mathematician who discovered an associated property: for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

For a given input x, create two new numbers that consist of the digits in x in ascending and descending order.
Subtract the smaller number from the larger number.
For example, this algorithm terminates in three steps when starting from 1234:

4321 - 1234 = 3087  
8730 - 0378 = 8352  
8532 - 2358 = 6174  

Write a function that returns how many steps this will take for a given input N.

[See Solution](/problems/200-299/problem-288.js)

---

## Problem 289 - Google

The game of Nim is played as follows. Starting with three heaps, each containing a variable number of items, two players take turns removing one or more items from a single pile. The player who eventually is forced to take the last stone loses. For example, if the initial heap sizes are 3, 4, and 5, a game could be played as shown below:

      A  |  B  |  C
    -----------------
      3  |  4  |  5
      3  |  1  |  3
      3  |  1  |  3
      0  |  1  |  3
      0  |  1  |  0
      0  |  0  |  0

In other words, to start, the first player takes three items from pile B. The second player responds by removing two stones from pile C. The game continues in this way until player one takes last stone and loses.

Given a list of non-zero starting values [a, b, c], and assuming optimal play, determine whether the first player has a forced win.

[See Solution](/problems/200-299/problem-289.js)

---

## Problem 290 - Facebook

On a mysterious island there are creatures known as Quxes which come in three colors: red, green, and blue. One power of the Qux is that if two of them are standing next to each other, they can transform into a single creature of the third color.

Given N Quxes standing in a line, determine the smallest number of them remaining after any possible sequence of such transformations.

For example, given the input ['R', 'G', 'B', 'G', 'B'], it is possible to end up with a single Qux through the following steps:

            Arrangement       |   Change
    ----------------------------------------
    ['R', 'G', 'B', 'G', 'B'] | (R, G) -> B
    ['B', 'B', 'G', 'B']      | (B, G) -> R
    ['B', 'R', 'B']           | (R, B) -> G
    ['B', 'G']                | (B, G) -> R
    ['R']                     |

[See Solution](/problems/200-299/problem-290.js)

---

## Problem 291 - Glassdoor

An imminent hurricane threatens the coastal town of Codeville. If at most two people can fit in a rescue boat, and the maximum weight limit for a given boat is k, determine how many boats will be needed to save everyone.

For example, given a population with weights [100, 200, 150, 80] and a boat limit of 200, the smallest number of boats required will be three.

[See Solution](/problems/200-299/problem-291.js)

---

## Problem 292 - Twitter

A teacher must divide a class of students into two teams to play dodgeball. Unfortunately, not all the kids get along, and several refuse to be put on the same team as that of their enemies.

Given an adjacency list of students and their enemies, write an algorithm that finds a satisfactory pair of teams, or returns False if none exists.

For example, given the following enemy graph you should return the teams {0, 1, 4, 5} and {2, 3}.

students = {  
    0: [3],  
    1: [2],  
    2: [1, 4],  
    3: [0, 4, 5],  
    4: [2, 3],  
    5: [3]  
}  

On the other hand, given the input below, you should return False.

students = {  
    0: [3],  
    1: [2],  
    2: [1, 3, 4],  
    3: [0, 2, 4, 5],  
    4: [2, 3],  
    5: [3]  
}  

[See Solution](/problems/200-299/problem-292.js)

---

## Problem 293 - Uber

You have N stones in a row, and would like to create from them a pyramid. This pyramid should be constructed such that the height of each stone increases by one until reaching the tallest stone, after which the heights decrease by one. In addition, the start and end stones of the pyramid should each be one stone high.

You can change the height of any stone by paying a cost of 1 unit to lower its height by 1, as many times as necessary. Given this information, determine the lowest cost method to produce this pyramid.

For example, given the stones [1, 1, 3, 3, 2, 1], the optimal solution is to pay 2 to create [0, 1, 2, 3, 2, 1].

[See Solution](/problems/200-299/problem-293.js)

---

## Problem 294 - Square

A competitive runner would like to create a route that starts and ends at his house, with the condition that the route goes entirely uphill at first, and then entirely downhill.

Given a dictionary of places of the form {location: elevation}, and a dictionary mapping paths between some of these locations to their corresponding distances, find the length of the shortest route satisfying the condition above. Assume the runner's home is location 0.

For example, suppose you are given the following input:

elevations = {0: 5, 1: 25, 2: 15, 3: 20, 4: 10}  
paths = {  
    (0, 1): 10,  
    (0, 2): 8,  
    (0, 3): 15,  
    (1, 3): 12,  
    (2, 4): 10,  
    (3, 4): 5,  
    (3, 0): 17,  
    (4, 0): 10  
}  

In this case, the shortest valid path would be 0 -> 2 -> 4 -> 0, with a distance of 28.

[See Solution](/problems/200-299/problem-294.js)

---

## Problem 295 - Stitch Fix

Pascal's triangle is a triangular array of integers constructed with the following formula:

The first row consists of the number 1.
For each subsequent row, each element is the sum of the numbers directly above it, on either side.

For example, here are the first few rows:

        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

Given an input k, return the kth row of Pascal's triangle.

Bonus: Can you do this using only O(k) space?

[See Solution](/problems/200-299/problem-295.js)

---

## Problem 296 - Etsy

Given a sorted array, convert it into a height-balanced binary search tree.

[See Solution](/problems/200-299/problem-296.js)

---

## Problem 297 - Amazon

At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. For example, in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

preferences = {  
    0: [0, 1, 3, 6],  
    1: [1, 4, 7],  
    2: [2, 4, 7, 5],  
    3: [3, 2, 5],  
    4: [5, 8]  
}  

A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.

[See Solution](/problems/200-299/problem-297.js)

---

## Problem 298 - Google

A girl is walking along an apple orchard with a bag in each hand. She likes to pick apples from each tree as she goes along, but is meticulous about not putting different kinds of apples in the same bag.

Given an input describing the types of apples she will pass on her path, in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

For example, given the input [2, 1, 2, 3, 3, 1, 3, 5], the longest portion will involve types 1 and 3, with a length of four.

[See Solution](/problems/200-299/problem-298.js)

---

## Problem 299 - Samsung

A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where A, B, and C are houses, and arrows represent pipes:

A <--> B <--> C <--> plant
Each pipe has an associated cost, which the utility company would like to minimize. Given an undirected graph of pipe connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from plant to A, plant to B, and B to C, for a total cost of 16.

pipes = {
    'plant': {'A': 1, 'B': 5, 'C': 20},
    'A': {'C': 15},
    'B': {'C': 10},
    'C': {}
}

[See Solution](/problems/200-299/problem-299.js)

---

## Problem 300 -  Uber

On election day, a voting machine writes data in the form (voter_id, candidate_id) to a text file. Write a program that reads this file as a stream and returns the top 3 candidates at any given time. If you find a voter voting more than once, report this as fraud.

[See Solution](/problems/300-399/problem-300.js)

---

## Problem 301 - Triplebyte

Implement a data structure which carries out the following operations without resizing the underlying array:

add(value): Add a value to the set of values.  
check(value): Check whether a value is in the set.

The check method may return occasional false positives (in other words, incorrectly identifying an element as part of the set), but should always correctly identify a true element.

[See Solution](/problems/300-399/problem-301.js)

---

## Problem 302 - Uber

You are given a 2-d matrix where each cell consists of either /, \, or an empty space. Write an algorithm that determines into how many regions the slashes divide the space.

For example, suppose the input for a three-by-six grid is the following:

    \    /  
     \  /  
      \/  

Considering the edges of the matrix as boundaries, this divides the grid into three triangles, so you should return 3.

[See Solution](/problems/300-399/problem-302.js)

---

## Problem 303 - Microsoft

Given a clock time in hh:mm format, determine, to the nearest degree, the angle between the hour and the minute hands.

Bonus: When, during the course of a day, will the angle be zero?

[See Solution](/problems/300-399/problem-303.js)

---

## Problem 304 - Two Sigma

A knight is placed on a given square on an 8 x 8 chessboard. It is then moved randomly several times, where each move is a standard knight move. If the knight jumps off the board at any point, however, it is not allowed to jump back on.

After k moves, what is the probability that the knight remains on the board?

[See Solution](/problems/300-399/problem-304.js)

---

## Problem 305 - Amazon

Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.

For example, suppose you are given the input 3 -> 4 -> -7 -> 5 -> -6 -> 6. In this case, you should first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.

[See Solution](/problems/300-399/problem-305.js)

---

## Problem 306 - Palantir

You are given a list of N numbers, in which each number is located at most k places away from its sorted position. For example, if k = 1, a given element at index 4 might end up at indices 3, 4, or 5.

Come up with an algorithm that sorts this list in O(N log k) time.

[See Solution](/problems/300-399/problem-306.js)

---

## Problem 307 - Oracle

Given a binary search tree, find the floor and ceiling of a given integer. The floor is the highest element in the tree less than or equal to an integer, while the ceiling is the lowest element in the tree greater than or equal to an integer.

If either value does not exist, return None.

[See Solution](/problems/300-399/problem-307.js)

---

## Problem 308 - Quantcast

You are presented with an array representing a Boolean expression. The elements are of two kinds:

T and F, representing the values True and False.
&, |, and ^, representing the bitwise operators for AND, OR, and XOR.
Determine the number of ways to group the array elements using parentheses so that the entire expression evaluates to True.

For example, suppose the input is ['F', '|', 'T', '&', 'T']. In this case, there are two acceptable groupings: (F | T) & T and F | (T & T).

[See Solution](/problems/300-399/problem-308.js)

---

## Problem 309 - Walmart Labs

There are M people sitting in a row of N seats, where M < N. Your task is to redistribute people such that there are no gaps between any of them, while keeping overall movement to a minimum.

For example, suppose you are faced with an input of [0, 1, 1, 0, 1, 0, 0, 0, 1], where 0 represents an empty seat and 1 represents a person. In this case, one solution would be to place the person on the right in the fourth seat. We can consider the cost of a solution to be the sum of the absolute distance each person must move, so that the cost here would be five.

Given an input such as the one above, return the lowest possible cost of moving people to remove all gaps.

[See Solution](/problems/300-399/problem-309.js)

---

## Problem 310 - Pivotal

Write an algorithm that finds the total number of set bits in all integers between 1 and N.

[See Solution](/problems/300-399/problem-310.js)

---

## Problem 311 - Sumo Logic

Given an unsorted array, in which all elements are distinct, find a "peak" element in O(log N) time.

An element is considered a peak if it is greater than both its left and right neighbors. It is guaranteed that the first and last elements are lower than all others.

[See Solution](/problems/300-399/problem-311.js)

---

## Problem 312 - Wayfair

You are given a 2 x N board, and instructed to completely cover the board with the following shapes:

Dominoes, or 2 x 1 rectangles.  
Trominoes, or L-shapes.  

For example, if N = 4, here is one possible configuration, where A is a domino, and B and C are trominoes.

A B B C  
A B C C

Given an integer N, determine in how many ways this task is possible.

[See Solution](/problems/300-399/problem-312.js)

---

## Problem 313 - Citrix

You are given a circular lock with three wheels, each of which display the numbers 0 through 9 in order. Each of these wheels rotate clockwise and counterclockwise.

In addition, the lock has a certain number of "dead ends", meaning that if you turn the wheels to one of these combinations, the lock becomes stuck in that state and cannot be opened.

Let us consider a "move" to be a rotation of a single wheel by one digit, in either direction. Given a lock initially set to 000, a target combination, and a list of dead ends, write a function that returns the minimum number of moves required to reach the target state, or None if this is impossible.

[See Solution](/problems/300-399/problem-313.js)

---

## Problem 314 - Spotify

You are the technical director of WSPT radio, serving listeners nationwide. For simplicity's sake we can consider each listener to live along a horizontal line stretching from 0 (west) to 1000 (east).

Given a list of N listeners, and a list of M radio towers, each placed at various locations along this line, determine what the minimum broadcast range would have to be in order for each listener's home to be covered.

For example, suppose listeners = [1, 5, 11, 20], and towers = [4, 8, 15]. In this case the minimum range would be 5, since that would be required for the tower at position 15 to reach the listener at position 20.

[See Solution](/problems/300-399/problem-314.js)

---

## Problem 315 - Google

In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.

Here is an example:

1 2 3 4 8  
5 1 2 3 4  
4 5 1 2 3  
7 4 5 1 2

Write a program to determine whether a given input is a Toeplitz matrix.

[See Solution](/problems/300-399/problem-315.js)

---

## Problem 316 - Snapchat

You are given an array of length N, where each element i represents the number of ways we can produce i units of change. For example, [1, 0, 1, 1, 2] would indicate that there is only one way to make 0, 2, or 3 units, and two ways of making 4 units.

Given such an array, determine the denominations that must be in use. In the case above, for example, there must be coins with value 2, 3, and 4.

[See Solution](/problems/300-399/problem-316.js)

---

## Problem 317 - Yahoo

Write a function that returns the bitwise AND of all integers between M and N, inclusive.

[See Solution](/problems/300-399/problem-317.js)

---

## Problem 318 - Apple

You are going on a road trip, and would like to create a suitable music playlist. The trip will require N songs, though you only have M songs downloaded, where M < N. A valid playlist should select each song at least once, and guarantee a buffer of B songs between repeats.

Given N, M, and B, determine the number of valid playlists.

[See Solution](/problems/300-399/problem-318.js)

---

## Problem 319 - Airbnb

An 8-puzzle is a game played on a 3 x 3 board of tiles, with the ninth tile missing. The remaining tiles are labeled 1 through 8 but shuffled randomly. Tiles may slide horizontally or vertically into an empty space, but may not be removed from the board.

Design a class to represent the board, and find a series of steps to bring the board to the state [[1, 2, 3], [4, 5, 6], [7, 8, None]].

[See Solution](/problems/300-399/problem-319.js)

---

## Problem 320 - Amazon

Given a string, find the length of the smallest window that contains every distinct character. Characters may appear more than once in the window.

For example, given "jiujitsu", you should return 5, corresponding to the final five letters.

[See Solution](/problems/300-399/problem-320.js)

---

## Problem 321 - PagerDuty

Given a positive integer N, find the smallest number of steps it will take to reach 1.

There are two kinds of permitted steps:

You may decrement N to N - 1.  
If a * b = N, you may decrement N to the larger of a and b.  

For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.

[See Solution](/problems/300-399/problem-321.js)

---

## Problem 322 - Flipkart

Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.

On the ith jump, you may move exactly i places to the left or right.

Find a path with the fewest number of jumps required to get from 0 to N.

[See Solution](/problems/300-399/problem-322.js)

---

## Problem 323 - Dropbox

Create an algorithm to efficiently compute the approximate median of a list of numbers.

More precisely, given an unordered list of N numbers, find an element whose rank is between N / 4 and 3 * N / 4, with a high level of certainty, in less than O(N) time.

[See Solution](/problems/300-399/problem-323.js)

---

## Problem 324 - Amazon

Consider the following scenario: there are N mice and N holes placed at integer points along a line. Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.

Each move consists of moving one mouse one unit to the left or right, and only one mouse can fit inside each hole.

For example, suppose the mice are positioned at [1, 4, 9, 15], and the holes are located at [10, -5, 0, 16]. In this case, the best pairing would require us to send the mouse at 1 to the hole at -5, so our function should return 6.

[See Solution](/problems/300-399/problem-324.js)

---

## Problem 325 - Jane Street

The United States uses the imperial system of weights and measures, which means that there are many different, seemingly arbitrary units to measure distance. There are 12 inches in a foot, 3 feet in a yard, 22 yards in a chain, and so on.

Create a data structure that can efficiently convert a certain quantity of one unit to the correct amount of any other unit. You should also allow for additional units to be added to the system.

[See Solution](/problems/300-399/problem-325.js)

---

## Problem 326 - Netflix

A Cartesian tree with sequence S is a binary tree defined by the following two properties:

* It is heap-ordered, so that each parent value is strictly less than that of its children.
* An in-order traversal of the tree produces nodes with values that correspond exactly to S.

For example, given the sequence [3, 2, 6, 1, 9], the resulting Cartesian tree would be:

          1
        /   \   
      2       9
     / \
    3   6

Given a sequence S, construct the corresponding Cartesian tree.

[See Solution](/problems/300-399/problem-326.js)

---

## Problem 327 - Salesforce

Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

[See Solution](/problems/300-399/problem-327.js)

---

## Problem 328 - Facebook

In chess, the Elo rating system is used to calculate player strengths based on game results.

A simplified description of the Elo system is as follows. Every player begins at the same score. For each subsequent game, the loser transfers some points to the winner, where the amount of points transferred depends on how unlikely the win is. For example, a 1200-ranked player should gain much more points for beating a 2000-ranked player than for beating a 1300-ranked player.

Implement this system.

[See Solution](/problems/300-399/problem-328.js)

---

## Problem 329 - Amazon

The [stable marriage problem](https://en.wikipedia.org/wiki/Stable_marriage_problem) is defined as follows:

Suppose you have N men and N women, and each person has ranked their prospective opposite-sex partners in order of preference.

For example, if N = 3, the input could be something like this:

guy_preferences = {  
    'andrew': ['caroline', 'abigail', 'betty'],  
    'bill': ['caroline', 'betty', 'abigail'],  
    'chester': ['betty', 'caroline', 'abigail'],  
}

gal_preferences = {  
    'abigail': ['andrew', 'bill', 'chester'],  
    'betty': ['bill', 'andrew', 'chester'],  
    'caroline': ['bill', 'chester', 'andrew']  
}

Write an algorithm that pairs the men and women together in such a way that no two people of opposite sex would both rather be with each other than with their current partners.

[See Solution](/problems/300-399/problem-329.js)

---

## Problem 330 - Dropbox

A Boolean formula can be said to be satisfiable if there is a way to assign truth values to each variable such that the entire formula evaluates to true.

For example, suppose we have the following formula, where the symbol ¬ is used to denote negation:

(¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)

One way to satisfy this formula would be to let a = False, b = True, and c = True.

This type of formula, with AND statements joining tuples containing exactly one OR, is known as 2-CNF.

Given a 2-CNF formula, find a way to assign truth values to satisfy it, or return False if this is impossible.

[See Solution](/problems/300-399/problem-330.js)

---

## Problem 331 - LinkedIn

You are given a string consisting of the letters x and y, such as xyxxxyxyy. In addition, you have an operation called flip, which changes a single x to y or vice versa.

Determine how many times you would need to apply this operation to ensure that all x's come before all y's. In the preceding example, it suffices to flip the second and sixth characters, so you should return 2.

[See Solution](/problems/300-399/problem-331.js)

---

## Problem 332 - Jane Street

Given integers M and N, write a program that counts how many positive integer pairs (a, b) satisfy the following conditions:

* a + b = M
* a XOR b = N

[See Solution](/problems/300-399/problem-332.js)

---

## Problem 333 - Pinterest

At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). To help figure out who this is, you have access to an O(1) method called knows(a, b), which returns True if person a knows person b, else False.

Given a list of N people and the above operation, find a way to identify the celebrity in O(N) time.

[See Solution](/problems/300-399/problem-333.js)

---

## Problem 334 - Twitter

The 24 game is played as follows. You are given a list of four integers, each between 1 and 9, in a fixed order. By placing the operators +, -, *, and / between the numbers, and grouping them with parentheses, determine whether it is possible to reach the value 24.

For example, given the input [5, 2, 7, 8], you should return True, since (5*2-7)*8 = 24.

Write a function that plays the 24 game.

[See Solution](/problems/300-399/problem-334.js)

---

## Problem 335 - Google

PageRank is an algorithm used by Google to rank the importance of different websites. While there have been changes over the years, the central idea is to assign each site a score based on the importance of other pages that link to that page.

More mathematically, suppose there are N sites, and each site i has a certain count Ci of outgoing links. Then the score for a particular site Sj is defined as :

score(Sj) = (1 - d) / N + d * (score(Sx) / Cx+ score(Sy) / Cy+ ... + score(Sz) / Cz))

Here, Sx, Sy, ..., Sz denote the scores of all the other sites that have outgoing links to Sj, and d is a damping factor, usually set to around 0.85, used to model the probability that a user will stop searching.

Given a directed graph of links between various websites, write a program that calculates each site's page rank.

[See Solution](/problems/300-399/problem-335.js)

---

## Problem 336 - Microsoft

Write a program to determine how many distinct ways there are to create a max heap from a list of N given integers.

For example, if N = 3, and our integers are [1, 2, 3], there are two ways, shown below.

        3      3
       / \    / \
      1   2  2   1

[See Solution](/problems/300-399/problem-336.js)

---

## Problem 337 - Apple

Given a linked list, uniformly shuffle the nodes. What if we want to prioritize space over time?

[See Solution](/problems/300-399/problem-337.js)

---

## Problem 338 - Facebook

Given an integer n, find the next biggest integer with the same number of 1-bits on. For example, given the number 6 (0110 in binary), return 9 (1001).

[See Solution](/problems/300-399/problem-338.js)

---

## Problem 339 - Microsoft

Given an array of numbers and a number k, determine if there are three entries in the array which add up to the specified number k. For example, given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49.

[See Solution](/problems/300-399/problem-339.js)

---

## Problem 340 - Google

Given a set of points (x, y) on a 2D cartesian plane, find the two closest points. For example, given the points [(1, 1), (-1, -1), (3, 4), (6, 1), (-1, -6), (-4, -3)], return [(-1, -1), (1, 1)].

[See Solution](/problems/300-399/problem-340.js)

---

## Problem 341 - Google

You are given an N by N matrix of random letters and a dictionary of words. Find the maximum number of words that can be packed on the board from the given dictionary.

A word is considered to be able to be packed on the board if:

It can be found in the dictionary  
It can be constructed from untaken letters by other words found so far on the board  
The letters are adjacent to each other (vertically and horizontally, not diagonally).  
Each tile can be visited only once by any word.  

For example, given the following dictionary:

{ 'eat', 'rain', 'in', 'rat' }

and matrix:

[['e', 'a', 'n'],  
 ['t', 't', 'i'],  
 ['a', 'r', 'a']]  

Your function should return 3, since we can make the words 'eat', 'in', and 'rat' without them touching each other. We could have alternatively made 'eat' and 'rain', but that would be incorrect since that's only 2 words.

[See Solution](/problems/300-399/problem-341.js)

---

## Problem 342 - Stripe

reduce (also known as fold) is a function that takes in an array, a combining function, and an initial value and builds up a result by calling the combining function on each element of the array, left to right. For example, we can write sum() in terms of reduce:

    def add(a, b):
        return a + b

    def sum(lst):
        return reduce(lst, add, 0)

This should call add on the initial value with the first element of the array, and then the result of that with the second element of the array, and so on until we reach the end, when we return the sum of the array.

Implement your own version of reduce.

[See Solution](/problems/300-399/problem-342.js)

---

## Problem 343 - Google

Given a binary search tree and a range [a, b] (inclusive), return the sum of the elements of the binary search tree within the range.

For example, given the following tree:

        5
       / \
      3   8
     / \ / \
    2  4 6  10

and the range [4, 9], return 23 (5 + 4 + 6 + 8).

[See Solution](/problems/300-399/problem-343.js)

---

## Problem 344 - Adobe

You are given a tree with an even number of nodes. Consider each connection between a parent and child node to be an "edge". You would like to remove some of these edges, such that the disconnected subtrees that remain each have an even number of nodes.

For example, suppose your input was the following tree:

       1
      / \ 
     2   3
        / \ 
       4   5
     / | \
    6  7  8

In this case, removing the edge (3, 4) satisfies our requirement.

Write a function that returns the maximum number of edges you can remove while still satisfying this requirement.

[See Solution](/problems/300-399/problem-344.js)

---

## Problem 345 - Google

You are given a set of synonyms, such as (big, large) and (eat, consume). Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

* "He wants to eat food."  
* "He wants to consume food."

Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): consider the case of (coach, bus) and (coach, teacher).

Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?

[See Solution](/problems/300-399/problem-345.js)

---

## Problem 346 - Airbnb

You are given a huge list of airline ticket prices between different cities around the world on a given day. These are all direct flights. Each element in the list has the format (source_city, destination, price).

Consider a user who is willing to take up to k connections from their origin city A to their destination B. Find the cheapest fare possible for this journey and print the itinerary for that journey.

For example, our traveler wants to go from JFK to LAX with up to 3 connections, and our input flights are as follows:

[  
    ('JFK', 'ATL', 150),  
    ('ATL', 'SFO', 400),  
    ('ORD', 'LAX', 200),  
    ('LAX', 'DFW', 80),  
    ('JFK', 'HKG', 800),  
    ('ATL', 'ORD', 90),  
    ('JFK', 'LAX', 500),  
]  

Due to some improbably low flight prices, the cheapest itinerary would be JFK -> ATL -> ORD -> LAX, costing $440.

[See Solution](/problems/300-399/problem-346.js)

---

## Problem 347 - Yahoo

You are given a string of length N and a parameter k. The string can be manipulated by taking one of the first k letters and moving it to the end.

Write a program to determine the lexicographically smallest string that can be created after an unlimited number of moves.

For example, suppose we are given the string daily and k = 1. The best we can create in this case is ailyd.

[See Solution](/problems/300-399/problem-347.js)

---

## Problem 348 - Zillow

A ternary search tree is a trie-like data structure where each node may have up to three children. Here is an example which represents the words code, cob, be, ax, war, and we.

          c
       /  |  \
      b   o   w
    / |   |   |
    a  e   d   a
    |    / |   | \ 
    x   b  e   r  e  

The tree is structured according to the following rules:

* left child nodes link to words lexicographically earlier than the parent prefix
* right child nodes link to words lexicographically later than the parent prefix
* middle child nodes continue the current word

For instance, since code is the first word inserted in the tree, and cob lexicographically precedes cod, cob is represented as a left child extending from cod.

Implement insertion and search functions for a ternary search tree.

[See Solution](/problems/300-399/problem-348.js)

---

## Problem 349 - Grammarly

Soundex is an algorithm used to categorize phonetically, such that two names that sound alike but are spelled differently have the same representation.

Soundex maps every name to a string consisting of one letter and three numbers, like M460.

One version of the algorithm is as follows:

1. Remove consecutive consonants with the same sound (for example, change ck -> c).
2. Keep the first letter. The remaining steps only apply to the rest of the string.
3. Remove all vowels, including y, w, and h.
4. Replace all consonants with the following digits:
    * b, f, p, v → 1
    * c, g, j, k, q, s, x, z → 2
    * d, t → 3
    * l → 4
    * m, n → 5
    * r → 6

5. If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.

Using this scheme, Jackson and Jaxen both map to J250.

Implement Soundex.

[See Solution](/problems/300-399/problem-349.js)

---

## Problem 350 - Uber

Write a program that determines the smallest number of perfect squares that sum up to N.

Here are a few examples:

* Given N = 4, return 1 (4)
* Given N = 17, return 2 (16 + 1)
* Given N = 18, return 2 (9 + 9)

[See Solution](/problems/300-399/problem-350.js)

---

## Problem 351 - Quora

Word sense disambiguation is the problem of determining which sense a word takes on in a particular setting, if that word has multiple meanings. For example, in the sentence "I went to get money from the bank", bank probably means the place where people deposit money, not the land beside a river or lake.

Suppose you are given a list of meanings for several words, formatted like so:

    {
      "word_1": ["meaning one", "meaning two", ...],
      ...
      "word_n": ["meaning one", "meaning two", ...]
    }

Given a sentence, most of whose words are contained in the meaning list above, create an algorithm that determines the likely sense of each possibly ambiguous word.

[See Solution](/problems/300-399/problem-351.js)

---

## Problem 352 - Palantir

A typical American-style crossword puzzle grid is an N x N matrix with black and white squares, which obeys the following rules:

* Every white square must be part of an "across" word and a "down" word.
* No word can be fewer than three letters long.
* Every white square must be reachable from every other white square.
* The grid is rotationally symmetric (for example, the colors of the top left and bottom right squares must match).

Write a program to determine whether a given matrix qualifies as a crossword grid.

[See Solution](/problems/300-399/problem-352.js)

---

## Problem 353 - Square

You are given a histogram consisting of rectangles of different heights. These heights are represented in an input list, such that [1, 3, 2, 5] corresponds to the following diagram:

          x
          x  
      x   x
      x x x
    x x x x

Determine the area of the largest rectangle that can be formed only from the bars of the histogram. For the diagram above, for example, this would be six, representing the 2 x 3 area at the bottom right.

[See Solution](/problems/300-399/problem-353.js)

---

## Problem 354 - Google

Design a system to crawl and copy all of Wikipedia using a distributed network of machines.

More specifically, suppose your server has access to a set of client machines. Your client machines can execute code you have written to access Wikipedia pages, download and parse their data, and write the results to a database.

Some questions you may want to consider as part of your solution are:

* How will you reach as many pages as possible?
* How can you keep track of pages that have already been visited?
* How will you deal with your client machines being blacklisted?
* How can you update your database when Wikipedia pages are added or updated?

[See Solution](/problems/300-399/problem-354.js)

---

## Problem 355 - Airbnb

You are given an array X of floating-point numbers x1, x2, ... xn. These can be rounded up or down to create a corresponding array Y of integers y1, y2, ... yn.

Write an algorithm that finds an appropriate Y array with the following properties:

* The rounded sums of both arrays should be equal.
* The absolute pairwise difference between elements is minimized. In other words, |x1- y1| + |x2- y2| + ... + |xn- yn| should be as small as possible.

For example, suppose your input is [1.3, 2.3, 4.4]. In this case you cannot do better than [1, 2, 5], which has an absolute difference of |1.3 - 1| + |2.3 - 2| + |4.4 - 5| = 1.

[See Solution](/problems/300-399/problem-355.js)

---

## Problem 356 - Netflix

Implement a queue using a set of fixed-length arrays.

The queue should support enqueue, dequeue, and get_size operations.

[See Solution](/problems/300-399/problem-356.js)

---

## Problem 357 - LinkedIn

You are given a binary tree in a peculiar string representation. Each node is written in the form (lr), where l corresponds to the left child and r corresponds to the right child.

If either l or r is null, it will be represented as a zero. Otherwise, it will be represented by a new (lr) pair.

Here are a few examples:

* A root node with no children: (00)
* A root node with two children: ((00)(00))
* An unbalanced tree with three consecutive left children: ((((00)0)0)0)

Given this representation, determine the depth of the tree.

[See Solution](/problems/300-399/problem-357.js)

---

## Problem 358 - Dropbox

Create a data structure that performs all the following operations in O(1) time:

* plus: Add a key with value 1. If the key already exists, increment its value by one.
* minus: Decrement the value of a key. If the key's value is currently 1, remove it.
* get_max: Return a key with the highest value.
* get_min: Return a key with the lowest value.

[See Solution](/problems/300-399/problem-358.js)

---

## Problem 359 - Slack

You are given a string formed by concatenating several words corresponding to the integers zero through nine and then anagramming.

For example, the input could be 'niesevehrtfeev', which is an anagram of 'threefiveseven'. Note that there can be multiple instances of each integer.

Given this string, return the original integers in sorted order. In the example above, this would be 357.

[See Solution](/problems/300-399/problem-359.js)

---

## Problem 360 - Spotify

You have access to ranked lists of songs for various users. Each song is represented as an integer, and more preferred songs appear earlier in each list. For example, the list [4, 1, 7] indicates that a user likes song 4 the best, followed by songs 1 and 7.

Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

For example, suppose your input is {[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}. In this case a satisfactory playlist could be [2, 1, 6, 7, 3, 9, 5].

[See Solution](/problems/300-399/problem-360.js)

---

## Problem 361 - Facebook

Mastermind is a two-player game in which the first player attempts to guess the secret code of the second. In this version, the code may be any six-digit number with all distinct digits.

Each turn the first player guesses some number, and the second player responds by saying how many digits in this number correctly matched their location in the secret code. For example, if the secret code were 123456, then a guess of 175286 would score two, since 1 and 6 were correctly placed.

Write an algorithm which, given a sequence of guesses and their scores, determines whether there exists some secret code that could have produced them.

For example, for the following scores you should return True, since they correspond to the secret code 123456:

{175286: 2, 293416: 3, 654321: 0}

However, it is impossible for any key to result in the following scores, so in this case you should return False:

{123456: 4, 345678: 4, 567890: 4}

[See Solution](/problems/300-399/problem-361.js)

---

## Problem 362 - Twitter

A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, 16891 is strobogrammatic.

Create a program that finds all strobogrammatic numbers with N digits.

[See Solution](/problems/300-399/problem-362.js)

---

## Problem 363 - Squarespace

Write a function, add_subtract, which alternately adds and subtracts curried arguments. Here are some sample operations:

add_subtract(7) -> 7

add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11

[See Solution](/problems/300-399/problem-363.js)

---

## Problem 364 - Facebook

Describe an algorithm to compute the longest increasing subsequence of an array of numbers in O(n log n) time.

[See Solution](/problems/300-399/problem-364.js)

---

## Problem 365 - Google

A quack is a data structure combining properties of both stacks and queues. It can be viewed as a list of elements written left to right such that three operations are possible:

* push(x): add a new item x to the left end of the list
* pop(): remove and return the item on the left end of the list
* pull(): remove the item on the right end of the list.

Implement a quack using three stacks and O(1) additional memory, so that the amortized time for any push, pop, or pull operation is O(1).

[See Solution](/problems/300-399/problem-365.js)

---
