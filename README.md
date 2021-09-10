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

## Problem 17 - Google [Difficulty: Hard]

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

    dir
        subdir1
        subdir2
            file.ext

The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

    dir
        subdir1
            file1.ext
            subsubdir1
        subdir2
            subsubdir2
                file2.ext

The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.

[See Solution](/problems/1-99/problem-17.js)

---

## Problem 18 - Google [Difficulty: Hard]

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

* 10 = max(10, 5, 2)
* 7 = max(5, 2, 7)
* 8 = max(2, 7, 8)
* 8 = max(7, 8, 7)

Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

[See Solution](/problems/1-99/problem-18.js)

---

## Problem 19 - Facebook [Difficulty: Medium]

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

[See Solution](/problems/1-99/problem-19.js)

---

## Problem 20 - Google [Difficulty: Easy]

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

[See Solution](/problems/1-99/problem-20.js)

---

## Problem 21 - Snapchat [Difficulty: Easy]

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

[See Solution](/problems/1-99/problem-21.js)

---

## Problem 22 - Microsoft [Difficulty: Medium]

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

[See Solution](/problems/1-99/problem-22.js)

---

## Problem 23 - Google [Difficulty: Easy]

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

    [[f, f, f, f],
    [t, t, f, t],
    [f, f, f, f],
    [f, f, f, f]]

and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

[See Solution](/problems/1-99/problem-23.js)

---

## Problem 24 - Google [Difficulty: Medium]

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

* is_locked, which returns whether the node is locked
* lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
* unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

[See Solution](/problems/1-99/problem-24.js)

---

## Problem 25 - Facebook [Difficulty: Hard]

Implement regular expression matching with the following special characters:

* (.) (period) which matches any single character
* (*) (asterisk) which matches zero or more of the preceding element

That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.

[See Solution](/problems/1-99/problem-25.js)

---

## Problem 26 - Google [Difficulty: Medium]

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

[See Solution](/problems/1-99/problem-26.js)

---

## Problem 27 - Facebook [Difficulty: Easy]

Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

[See Solution](/problems/1-99/problem-27.js)

---

## Problem 28 - Palantir [Difficulty: Medium]

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

    ["the  quick brown", # 1 extra space on the left
    "fox  jumps  over", # 2 extra spaces distributed evenly
    "the   lazy   dog"] # 4 extra spaces distributed evenly

[See Solution](/problems/1-99/problem-28.js)

---

## Problem 29 - Amazon [Difficulty: Easy]

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

[See Solution](/problems/1-99/problem-29.js)

---

## Problem 30 - Facebook [Difficulty: Medium]

You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

[See Solution](/problems/1-99/problem-30.js)

---

## Problem 31 - Google [Difficulty: Easy]

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

[See Solution](/problems/1-99/problem-31.js)

---

## Problem 32 - Jane Street [Difficulty: Hard]

Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities.

[See Solution](/problems/1-99/problem-32.js)

---

## Problem 33 - Microsoft [Difficulty: Easy]

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

    2
    1.5
    2
    3.5
    2
    2
    2

[See Solution](/problems/1-99/problem-33.js)

---

## Problem 34 - Quora [Difficulty: Medium]

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".

[See Solution](/problems/1-99/problem-34.js)

---

## Problem 35 - Google [Difficulty: Hard]

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

[See Solution](/problems/1-99/problem-35.js)

---

## Problem 36 - Dropbox [Difficulty: Medium]

Given the root to a binary search tree, find the second largest node in the tree.

[See Solution](/problems/1-99/problem-36.js)

---

## Problem 37 - Google [Difficulty: Easy]

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

[See Solution](/problems/1-99/problem-37.js)

---

## Problem 38 - Microsoft [Difficulty: Hard]

You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.

[See Solution](/problems/1-99/problem-38.js)

---

## Problem 39 - Dropbox [Difficulty: Medium]

Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

* Any live cell with less than two live neighbours dies.
* Any live cell with two or three live neighbours remains living.
* Any live cell with more than three live neighbours dies.
* Any dead cell with exactly three live neighbours becomes a live cell.

A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).

[See Solution](/problems/1-99/problem-39.js)

---

## Problem 40 - Google [Difficulty: Hard]

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.

[See Solution](/problems/1-99/problem-40.js)

---

## Problem 41 - Facebook [Difficulty: Medium]

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.

[See Solution](/problems/1-99/problem-41.js)

---

## Problem 42 - Google [Difficulty: Hard]

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

[See Solution](/problems/1-99/problem-42.js)

---

## Problem 43 - Amazon [Difficulty: Easy]

Implement a stack that has the following methods:

* push(val), which pushes an element onto the stack
* pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
* max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

Each method should run in constant time.

[See Solution](/problems/1-99/problem-43.js)

---

## Problem 44 - Google [Difficulty: Medium]

We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.

Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

[See Solution](/problems/1-99/problem-44.js)

---

## Problem 45 - Two Sigma [Difficulty: Easy]

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

[See Solution](/problems/1-99/problem-45.js)

---

## Problem 46 - Amazon [Difficulty: Hard]

Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".

[See Solution](/problems/1-99/problem-46.js)

---

## Problem 47 - Facebook [Difficulty: Easy]

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

[See Solution](/problems/1-99/problem-47.js)

---

## Problem 48 - Google [Difficulty: Medium]

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

For example, given the following preorder traversal:

[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

        a
       / \
      b   c
     / \ / \
    d  e f  g

[See Solution](/problems/1-99/problem-47.js)

---

## Problem 49 - Amazon [Difficulty: Medium]

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.

[See Solution](/problems/1-99/problem-49.js)

---

## Problem 50 - Microsoft [Difficulty: Easy]

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

        *
       / \
      +    +
     / \  / \
    3  2  4  5

You should return 45, as it is (3 + 2) * (4 + 5).

[See Solution](/problems/1-99/problem-50.js)

---

## Problem 51 - Facebook [Difficulty: Medium]

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.

[See Solution](/problems/1-99/problem-51.js)

---

## Problem 52 - Google [Difficulty: Hard]

Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

* set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
* get(key): gets the value at key. If no such key exists, return null.

Each operation should run in O(1) time.

[See Solution](/problems/1-99/problem-52.js)

---

## Problem 53 - Apple [Difficulty: Medium]

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: `enqueue`, which inserts an element into the queue, and `dequeue`, which removes it.

[See Solution](/problems/1-99/problem-53.js)

---

## Problem 54 - Dropbox [Difficulty: Hard]

Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits. The objective is to fill the grid with the constraint that every row, column, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.

Implement an efficient sudoku solver.

[See Solution](/problems/1-99/problem-54.js)

---

## Problem 55 - Microsoft [Difficulty: Easy]

Implement a URL shortener with the following methods:

* shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
* restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?

[See Solution](/problems/1-99/problem-55.js)

---

## Problem 56 - Google [Difficulty: Medium]

Given an undirected graph represented as an adjacency matrix and an integer k, write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.

[See Solution](/problems/1-99/problem-56.js)

---

## Problem 57 - Amazon [Difficulty: Medium]

Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less. You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words. If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.

[See Solution](/problems/1-99/problem-57.js)

---

## Problem 58 - Amazon [Difficulty: Medium]

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

[See Solution](/problems/1-99/problem-58.js)

---

## Problem 59 - Google [Difficulty: Hard]

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

[See Solution](/problems/1-99/problem-59.js)

---

## Problem 60 - Facebook [Difficulty: Medium]

Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.

[See Solution](/problems/1-99/problem-60.js)

---

## Problem 61 - Google [Difficulty: Medium]

Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.

[See Solution](/problems/1-99/problem-61.js)

---

## Problem 62 - Facebook [Difficulty: Medium]

There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

* Right, then down
* Down, then right

Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

[See Solution](/problems/1-99/problem-62.js)

---

## Problem 63 - Microsoft [Difficulty: Easy]

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

    [['F', 'A', 'C', 'I'],
     ['O', 'B', 'Q', 'P'],
     ['A', 'N', 'O', 'B'],
     ['M', 'A', 'S', 'S']]

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

[See Solution](/problems/1-99/problem-63.js)

---

## Problem 64 - Google [Difficulty: Hard]

A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.

[See Solution](/problems/1-99/problem-64.js)

---

## Problem 65 - Amazon [Difficulty: Easy]

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

For example, given the following matrix:

    [[1,  2,  3,  4,  5],
     [6,  7,  8,  9,  10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20]]

You should print out the following:

    1
    2
    3
    4
    5
    10
    15
    20
    19
    18
    17
    16
    11
    6
    7
    8
    9
    14
    13
    12

[See Solution](/problems/1-99/problem-65.js)

---

## Problem 66 - Square [Difficulty: Medium]

Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.

[See Solution](/problems/1-99/problem-66.js)

---

## Problem 67 - Google [Difficulty: Hard]

Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size `n`, and contain the following methods:

* `set(key, value)`: sets `key` to `value`. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
* `get(key)`: gets the value at `key`. If no such key exists, return null.

Each operation should run in O(1) time.

[See Solution](/problems/1-99/problem-67.js)

---

## Problem 68 - Google [Difficulty: Medium]

On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:

    (0, 0)
    (1, 2)
    (2, 2)
    (4, 0)

The board would look like this:

    [b 0 0 0 0]
    [0 0 b 0 0]
    [0 0 b 0 0]
    [0 0 0 0 0]
    [b 0 0 0 0]

You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.

[See Solution](/problems/1-99/problem-68.js)

---

## Problem 69 - Facebook [Difficulty: Easy]

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is `[-10, -10, 5, 2]`, we should return `500`, since that's `-10 * -10 * 5`.

You can assume the list has at least three integers.

[See Solution](/problems/1-99/problem-69.js)

---

## Problem 70 - Microsoft [Difficulty: Easy]

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.

[See Solution](/problems/1-99/problem-70.js)

---

## Problem 71 - Two Sigma [Difficulty: Easy]

Using a function `rand7()` that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function `rand5()` that returns an integer from 1 to 5 (inclusive).

[See Solution](/problems/1-99/problem-71.js)

---

## Problem 72 - Google [Difficulty: Hard]

In a directed graph, each node is assigned an uppercase letter. We define a path's value as the number of most frequently-occurring letter along that path. For example, if a path in the graph goes through "ABACA", the value of the path is 3, since there are 3 occurrences of 'A' on the path.

Given a graph with `n` nodes and `m` directed edges, return the largest value path of the graph. If the largest value is infinite, then return null.

The graph is represented with a string and an edge list. The `i`-th character represents the uppercase letter of the `i`-th node. Each tuple in the edge list `(i, j)` means there is a directed edge from the `i`-th node to the `j`-th node. Self-edges are possible, as well as multi-edges.

For example, the following input graph:

    ABACA

    [(0, 1),
     (0, 2),
     (2, 3),
     (3, 4)]

Would have maximum value 3 using the path of vertices `[0, 2, 3, 4]`, `(A, A, C, A)`.

The following input graph:

    A
    
    [(0, 0)]

Should return null, since we have an infinite loop.

[See Solution](/problems/1-99/problem-72.js)

---

## Problem 73 - Google [Difficulty: Easy]

Given the head of a singly linked list, reverse it in-place.

[See Solution](/problems/1-99/problem-73.js)

---

## Problem 74 - Apple [Difficulty: Medium]

Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the `i`-th row and `j`-th column is `(i + 1) * (j + 1) (if 0-indexed)` or `i * j` (if 1-indexed).

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.

For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

    | 1 | 2 | 3 | 4 | 5 | 6 |

    | 2 | 4 | 6 | 8 | 10 | 12 |

    | 3 | 6 | 9 | 12 | 15 | 18 |

    | 4 | 8 | 12 | 16 | 20 | 24 |

    | 5 | 10 | 15 | 20 | 25 | 30 |

    | 6 | 12 | 18 | 24 | 30 | 36 |

And there are 4 12's in the table.

[See Solution](/problems/1-99/problem-74.js)

---

## Problem 75 - Microsoft [Difficulty: Hard]

Given an array of numbers, find the length of the longest increasing subsequence in the array. The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

[See Solution](/problems/1-99/problem-75.js)

---

## Problem 76 - Google [Difficulty: Medium]

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

    cba
    daf
    ghi

This is not ordered because of the a in the center. We can remove the second column to make it ordered:

    ca
    df
    gi

So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

    abcdef

Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

    zyx
    wvu
    tsr

Your function should return 3, since we would need to remove all the columns to order it.

[See Solution](/problems/1-99/problem-76.js)

---

## Problem 77 - Snapchat [Difficulty: Easy]

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

[See Solution](/problems/1-99/problem-77.js)

---

## Problem 78 - Google [Difficulty: Medium]

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

[See Solution](/problems/1-99/problem-78.js)

---

## Problem 79 - Facebook [Difficulty: Medium]

Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.

[See Solution](/problems/1-99/problem-79.js)

---

## Problem 80 - Google [Difficulty: Easy]

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

        a
       / \
      b   c
     /
    d

[See Solution](/problems/1-99/problem-80.js)

---

## Problem 81 - Yelp [Difficulty: Easy]

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

[See Solution](/problems/1-99/problem-81.js)

---

## Problem 82 - Microsoft [Difficulty: Easy]

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

[See Solution](/problems/1-99/problem-82.js)

---

## Problem 83 - Google [Difficulty: Medium]

Invert a binary tree.

For example, given the following tree:

        a
       / \
      b   c
     / \  /
    d   e f

should become:

      a
     / \
    c   b
    \  / \
     f e  d

[See Solution](/problems/1-99/problem-83.js)

---

## Problem 84 - Amazon [Difficulty: Medium]

Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

For example, this matrix has 4 islands.

    1 0 0 0 0
    0 0 1 1 0
    0 1 1 0 0
    0 0 0 0 0
    1 1 0 0 1
    1 1 0 0 1

[See Solution](/problems/1-99/problem-84.js)

---

## Problem 85 - Facebook [Difficulty: Medium]

Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.

[See Solution](/problems/1-99/problem-85.js)

---

## Problem 86 - Google [Difficulty: Medium]

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

[See Solution](/problems/1-99/problem-86.js)

---

## Problem 87 - Uber [Difficulty: Hard]

A rule looks like this:

    A NE B

This means this means point `A` is located northeast of point `B`.

    A SW C

means that point `A` is southwest of `C`.

Given a list of rules, check if the sum of the rules validate. For example:

    A N B
    B NE C
    C N A

does not validate, since `A` cannot be both north and south of `C`.

    A NW B
    A N B

is considered valid.

[See Solution](/problems/1-99/problem-87.js)

---

## Problem 88 - ContextLogic [Difficulty: Medium]

Implement division of two positive integers without using the division, multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.

[See Solution](/problems/1-99/problem-88.js)

---

## Problem 89 - LinkedIn [Difficulty: Medium]

Determine whether a tree is a valid binary search tree.

A binary search tree is a tree with two children, left and right, and satisfies the constraint that the key in the left child must be less than or equal to the root and the key in the right child must be greater than or equal to the root.

[See Solution](/problems/1-99/problem-89.js)

---

## Problem 90 - Google [Difficulty: Medium]

Given an integer `n` and a list of integers `l`, write a function that randomly generates a number from `0` to `n-1` that isn't in `l` (uniform).

[See Solution](/problems/1-99/problem-90.js)

---

## Problem 91 - Dropbox [Difficulty: Easy]

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

    functions = []
    for i in range(10):
        functions.append(lambda : i)

    for f in functions:
        print(f())

[See Solution](/problems/1-99/problem-91.js)

---

## Problem 92 - Airbnb [Difficulty: Hard]

We're given a hashmap associating each `courseId` key with a list of `courseIds` values, which represents that the prerequisites of `courseId` are `courseIds`. Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].

[See Solution](/problems/1-99/problem-92.js)

---

## Problem 93 - Apple [Difficulty: Hard]

Given a tree, find the largest tree/subtree that is a BST.

Given a tree, return the size of the largest tree/subtree that is a BST.

[See Solution](/problems/1-99/problem-93.js)

---

## Problem 94 - Google [Difficulty: Easy]

Given a binary tree of integers, find the maximum path sum between two nodes. The path must go through at least one node, and does not need to go through the root.

[See Solution](/problems/1-99/problem-94.js)

---

## Problem 95 - Palantir [Difficulty: Hard]

Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering. If there is not greater permutation possible, return the permutation with the lowest value/ordering.

For example, the list `[1,2,3]` should return `[1,3,2]`. The list `[1,3,2]` should return `[2,1,3]`. The list `[3,2,1]` should return `[1,2,3]`.

Can you perform the operation without allocating extra memory (disregarding the input memory)?

[See Solution](/problems/1-99/problem-95.js)

---

## Problem 96 - Microsoft [Difficulty: Easy]

Given a number in the form of a list of digits, return all possible permutations.

For example, given `[1,2,3]`, return `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`.

[See Solution](/problems/1-99/problem-96.js)

---

## Problem 97 - Stripe [Difficulty: Medium]

Write a map implementation with a get function that lets you retrieve the value of a key at a particular time.

It should contain the following methods:

* set(key, value, time): sets key to value for t = time.
* get(key, time): gets the key at t = time.

The map should work like this. If we set a key at a particular time, it will maintain that value forever or until it gets set at a later time. In other words, when we get a key at a time, it should return the value that was set for that key set at the most recent time.

Consider the following examples:

    d.set(1, 1, 0) # set key 1 to value 1 at time 0
    d.set(1, 2, 2) # set key 1 to value 2 at time 2
    d.get(1, 1) # get key 1 at time 1 should be 1
    d.get(1, 3) # get key 1 at time 3 should be 2

    d.set(1, 1, 5) # set key 1 to value 1 at time 5
    d.get(1, 0) # get key 1 at time 0 should be null
    d.get(1, 10) # get key 1 at time 10 should be 1

    d.set(1, 1, 0) # set key 1 to value 1 at time 0
    d.set(1, 2, 0) # set key 1 to value 2 at time 0
    d.get(1, 0) # get key 1 at time 0 should be 2

[See Solution](/problems/1-99/problem-97.js)

---

## Problem 98 - Coursera [Difficulty: Easy]

Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example, given the following board:

    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

`exists(board, "ABCCED")` returns `true`,

`exists(board, "SEE")` returns `true`,

`exists(board, "ABCB")` returns `false`.

[See Solution](/problems/1-99/problem-98.js)

---

## Problem 99 - Microsoft [Difficulty: Medium]

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given `[100, 4, 200, 1, 3, 2]`, the longest consecutive element sequence is `[1, 2, 3, 4]`. Return its length: `4`.

Your algorithm should run in `O(n)` complexity.

[See Solution](/problems/1-99/problem-99.js)

---

## Problem 100 - Google [Difficulty: Easy]

You are in an infinite 2D grid where you can move in any of the 8 directions:

    (x,y) to
        (x+1, y),
        (x - 1, y),
        (x, y+1),
        (x, y-1),
        (x-1, y-1),
        (x+1,y+1),
        (x-1,y+1),
        (x+1,y-1)

You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:

    Input: [(0, 0), (1, 1), (1, 2)]
    Output: 2

It takes 1 step to move from `(0, 0)` to `(1, 1)`. It takes one more step to move from `(1, 1)` to `(1, 2)`.

[See Solution](/problems/100-199/problem-100.js)

---

## Problem 101 - Alibaba [Difficulty: Easy]

Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See [Goldbach’s conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture).

Example:

    Input: 4
    Output: 2 + 2 = 4

If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

    [a, b] < [c, d]

If a < c OR a==c AND b < d.

[See Solution](/problems/100-199/problem-101.js)

---

## Problem 102 - Lyft [Difficulty: Medium]

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.

[See Solution](/problems/100-199/problem-102.js)

---

## Problem 103 - Square [Difficulty: Medium]

Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.

[See Solution](/problems/100-199/problem-103.js)

---

## Problem 104 - Google [Difficulty: Easy]

Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

For example, `1 -> 4 -> 3 -> 4 -> 1` returns `True` while `1 -> 4` returns `False`.

[See Solution](/problems/100-199/problem-104.js)

---

## Problem 105 - Facebook [Difficulty: Easy]

Given a function `f`, and `N` return a debounced `f` of `N` milliseconds.

That is, as long as the debounced `f` continues to be invoked, `f` itself will not be called for `N` milliseconds.

[See Solution](/problems/100-199/problem-105.js)

---

## Problem 106 - Pinterest [Difficulty: Medium]

Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, `[2, 0, 1, 0]` returns `True` while [`1, 1, 0, 1]` returns `False`.

[See Solution](/problems/100-199/problem-106.js)

---

## Problem 107 - Microsoft [Difficulty: Easy]

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.

      1
     / \
    2   3
       / \
      4   5

[See Solution](/problems/100-199/problem-107.js)

---

## Problem 108 - Google [Difficulty: Easy]

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is `abcde` and B is `cdeab`, return true. If A is `abc` and B is `acb`, return false.

[See Solution](/problems/100-199/problem-108.js)

---

## Problem 109 - Cisco [Difficulty: Medium]

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, `10101010` should be `01010101`. `11100010` should be `11010001`.

Bonus: Can you do this in one line?

[See Solution](/problems/100-199/problem-109.js)

---

## Problem 110 - Facebook [Difficulty: Medium]

Given a binary tree, return all paths from the root to leaves.

For example, given the tree:

      1
     / \
    2   3
       / \
      4   5

Return `[[1, 2], [1, 3, 4], [1, 3, 5]]`.

[See Solution](/problems/100-199/problem-110.js)

---

## Problem 111 - Google [Difficulty: Hard]

Given a word W and a string `S`, find all starting indices in `S` which are anagrams of `W`.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

[See Solution](/problems/100-199/problem-111.js)

---

## Problem 112 - Twitter [Difficulty: Hard]

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. Assume that each node in the tree also has a pointer to its parent.

According to the definition of [LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

[See Solution](/problems/100-199/problem-112.js)

---

## Problem 113 - Google [Difficulty: Medium]

Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

Follow-up: given a mutable string representation, can you perform this operation in-place?

[See Solution](/problems/100-199/problem-113.js)

---

## Problem 114 - Facebook [Difficulty: Hard]

Given a string and a set of delimiters, reverse the words in the string while maintaining the relative order of the delimiters. For example, given "hello/world:here", return "here/world:hello"

Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"

[See Solution](/problems/100-199/problem-114.js)

---

## Problem 115 - Google [Difficulty: Hard]

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

[See Solution](/problems/100-199/problem-115.js)

---

## Problem 116 - Jane Street [Difficulty: Medium]

Generate a finite, but an arbitrarily large binary tree quickly in O(1).

That is, `generate()` should return a tree whose size is unbounded but finite.

[See Solution](/problems/100-199/problem-116.js)

---

## Problem 117 - Facebook [Difficulty: Easy]

Given a binary tree, return the level of the tree with minimum sum.

[See Solution](/problems/100-199/problem-117.js)

---

## Problem 118 - Google [Difficulty: Easy]

Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

[See Solution](/problems/100-199/problem-118.js)

---

## Problem 119 - Google [Difficulty: Medium]

Given a set of closed intervals, find the smallest set of numbers that covers all the intervals. If there are multiple smallest sets, return any of them.

For example, given the intervals `[0, 3], [2, 6], [3, 4], [6, 9]`, one set of numbers that covers all these intervals is `{3, 6}`.

[See Solution](/problems/100-199/problem-119.js)

---

## Problem 120 - Microsoft [Difficulty: Medium]

Implement the singleton pattern with a twist. First, instead of storing one instance, store two instances. And in every even call of `getInstance()`, return the first instance and in every odd call of `getInstance()`, return the second instance.

[See Solution](/problems/100-199/problem-120.js)

---

## Problem 121 - Google [Difficulty: Hard]

Given a string which we can delete at most k, return whether you can make a palindrome.

For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

[See Solution](/problems/100-199/problem-121.js)

---

## Problem 122 - Zillow [Difficulty: Medium]

You are given a 2-d `matrix` where each cell represents number of coins in that cell. Assuming we start at `matrix[0][0]`, and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

For example, in this matrix

    0 3 1 1
    2 0 0 4
    1 5 3 1

The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

[See Solution](/problems/100-199/problem-122.js)

---

## Problem 123 - LinkedIn [Difficulty: Hard]

Given a string, return whether it represents a number. Here are the different kinds of numbers:

* "10", a positive integer
* "-10", a negative integer
* "10.1", a positive real number
* "-10.1", a negative real number
* "1e5", a number in scientific notation

And here are examples of non-numbers:

* "a"
* "x 1"
* "a -2"
* "-"

[See Solution](/problems/100-199/problem-123.js)

---

## Problem 124 - Microsoft [Difficulty: Easy]

You have `n` fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

Write a function that, given `n`, returns the number of rounds you'd expect to play until one coin remains.

[See Solution](/problems/100-199/problem-124.js)

---

## Problem 125 - Google [Difficulty: Easy]

Given the root of a binary search tree, and a target `K`, return two nodes in the tree whose sum equals `K`.

For example, given the following tree and `K` of 20

       10
      /   \
    5      15
          /  \
        11    15

Return the nodes `5` and `15`.

[See Solution](/problems/100-199/problem-125.js)

---

## Problem 126 - Facebook [Difficulty: Medium]

Write a function that rotates a list by k elements. For example, `[1, 2, 3, 4, 5, 6]` rotated by two becomes `[3, 4, 5, 6, 1, 2]`. Try solving this without creating a copy of the list. How many swap or move operations do you need?

[See Solution](/problems/100-199/problem-126.js)

---

## Problem 127 - Microsoft [Difficulty: Easy]

Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

For example, the following linked list:

    1 -> 2 -> 3 -> 4 -> 5

is the number 54321.

Given two linked lists in this format, return their sum in the same linked list format.

For example, given

    9 -> 9

    5 -> 2

return 124 (99 + 25) as:

    4 -> 2 -> 1

[See Solution](/problems/100-199/problem-127.js)

---

## Problem 128 - Unknown [Difficulty: Medium]

The Tower of Hanoi is a puzzle game with three rods and n disks, each a different size.

All the disks start off on the first rod in a stack. They are ordered by size, with the largest disk on the bottom and the smallest one at the top.

The goal of this puzzle is to move all the disks from the first rod to the last rod while following these rules:

* You can only move one disk at a time.
* A move consists of taking the uppermost disk from one of the stacks and placing it on top of another stack.
* You cannot place a larger disk on top of a smaller disk.

Write a function that prints out all the steps necessary to complete the Tower of Hanoi. You should assume that the rods are numbered, with the first rod being 1, the second (auxiliary) rod being 2, and the last (goal) rod being 3.

For example, with n = 3, we can do this in 7 moves:

    Move 1 to 3
    Move 1 to 2
    Move 3 to 2
    Move 1 to 3
    Move 2 to 1
    Move 2 to 3
    Move 1 to 3

[See Solution](/problems/100-199/problem-128.js)

---

## Problem 129 - Unknown [Difficulty: Medium]

Given a real number n, find the square root of n. For example, given n = 9, return 3.

[See Solution](/problems/100-199/problem-129.js)

---

## Problem 130 - Facebook [Difficulty: Medium]

Given an array of numbers representing the stock prices of a company in chronological order and an integer `k`, return the maximum profit you can make from `k` buys and sells. You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.

For example, given `k = 2` and the array `[5, 2, 4, 0, 1]`, you should return 3.

[See Solution](/problems/100-199/problem-130.js)

---

## Problem 131 - Snapchat [Difficulty: Medium]

Given the head to a singly linked list, where each node also has a “random” pointer that points to anywhere in the linked list, deep clone the list.

[See Solution](/problems/100-199/problem-131.js)

---

## Problem 132 - Riot Games [Difficulty: Easy]

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

* `record(timestamp)`: records a hit that happened at timestamp
* `total()`: returns the total number of hits recorded
* `range(lower, upper)`: returns the number of hits that occurred between timestamps `lower` and `upper` (inclusive)

Follow-up: What if our system has limited memory?

[See Solution](/problems/100-199/problem-132.js)

---

## Problem 133 - Amazon [Difficulty: Medium]

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

      10
     /  \
    5    30
        /  \
      22    35

You can assume each node has a `parent` pointer.

[See Solution](/problems/100-199/problem-133.js)

---

## Problem 134 - Facebook [Difficulty: Easy]

You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

* `init(arr, size)`: initialize with the original large array and size.
* `set(i, val)`: updates index at `i` with `val`.
* `get(i)`: gets the value at index `i`.

[See Solution](/problems/100-199/problem-134.js)

---

## Problem 135 - Apple [Difficulty: Easy]

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

      10
     /  \
    5    5
     \     \
      2     1
           /
         -1

[See Solution](/problems/100-199/problem-135.js)

---

## Problem 136 - Google [Difficulty: Medium]

Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

    [[1, 0, 0, 0],
     [1, 0, 1, 1],
     [1, 0, 1, 1],
     [0, 1, 0, 0]]

Return 4.

[See Solution](/problems/100-199/problem-136.js)

---

## Problem 137 - Amazon [Difficulty: Medium]

Implement a bit array.

A bit array is a space efficient array that holds a value of `1` or `0` at each index.

* `init(size)`: initialize the array with `size`
* `set(i, val)`: updates index at `i` with `val` where `val` is either `1` or `0`.
* `get(i)`: gets the value at index `i`.

[See Solution](/problems/100-199/problem-137.js)

---

## Problem 138 - Google [Difficulty: Hard]

Find the minimum number of coins required to make `n` cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given `n = 16`, return `3` since we can make it with a 10¢, a 5¢, and a 1¢.

[See Solution](/problems/100-199/problem-138.js)

---

## Problem 139 - Google [Difficulty: Medium]

Given an `iterator` with methods `next()` and `hasNext()`, create a wrapper iterator, `PeekableInterface`, which also implements `peek()`. peek shows the next element that would be returned on `next()`.

Here is the interface:

    class PeekableInterface(object):
        def __init__(self, iterator):
            pass

        def peek(self):
            pass

        def next(self):
            pass

        def hasNext(self):
            pass

[See Solution](/problems/100-199/problem-139.js)

---

## Problem 140 - Facebook [Difficulty: Medium]

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array `[2, 4, 6, 8, 10, 2, 6, 10]`, return `4` and `8`. The order does not matter.

Follow-up: Can you do this in linear time and constant space?

[See Solution](/problems/100-199/problem-140.js)

---

## Problem 141 - Microsoft [Difficulty: Hard]

Implement 3 stacks using a single list:

    class Stack:
        def __init__(self):
            self.list = []

        def pop(self, stack_number):
            pass

        def push(self, item, stack_number):
            pass

[See Solution](/problems/400-499/problem-141.js)

---

## Problem 142 - Google [Difficulty: Hard]

You're given a string consisting solely of `(`, `)`, and `*`. `*` can represent either a `(`, `)`, or an empty string. Determine whether the parentheses are balanced.

For example, `(()*` and `(*)` are balanced. `)*(` is not balanced.

[See Solution](/problems/400-499/problem-142.js)

---

## Problem 143 - Amazon [Difficulty: Medium]

Given a pivot `x`, and a list `lst`, partition the list into three parts.

* The first part contains all elements in `lst` that are less than `x`
* The second part contains all elements in `lst` that are equal to `x`
* The third part contains all elements in `lst` that are larger than `x`

Ordering within a part can be arbitrary.

For example, given `x = 10` and `lst = [9, 12, 3, 5, 14, 10, 10]`, one partition may be `[9, 3, 5, 10, 10, 12, 14]`.

[See Solution](/problems/400-499/problem-143.js)

---

## Problem 144 - Google [Difficulty: Medium]

Given an array of numbers and an index `i`, return the index of the nearest larger number of the number at index `i`, where distance is measured in array indices.

For example, given `[4, 1, 3, 5, 6]` and index `0`, you should return `3`.

If two distances to larger numbers are the equal, then return any one of them. If the array at `i` doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?

[See Solution](/problems/400-499/problem-144.js)

---

## Problem 145 - Google [Difficulty: Easy]

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given `1 -> 2 -> 3 -> 4`, return `2 -> 1 -> 4 -> 3`.

[See Solution](/problems/400-499/problem-145.js)

---

## Problem 146 - BufferBox [Difficulty: Medium]

Given a binary tree where all nodes are either `0` or `1`, prune the tree so that subtrees containing all `0s` are removed.

For example, given the following tree:

      0
     / \
    1   0
       / \
      1   0
     / \
    0   0

should be pruned to:

      0
     / \
    1   0
       /
      1

We do not remove the tree at the root or its left child because it still has a `1` as a descendant.

[See Solution](/problems/400-499/problem-146.js)

---

## Problem 147 - Unknown [Difficulty: Hard]

Given a list, sort it using this method: `reverse(lst, i, j)`, which reverses `lst` from `i` to `j`.

[See Solution](/problems/400-499/problem-147.js)

---

## Problem 148 - Apple [Difficulty: Medium]

[Gray code](https://en.wikipedia.org/wiki/Gray_code) is a binary code where each successive value differ in only one bit, as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

Given a number of bits `n`, generate a possible gray code for it.

For example, for n = `2`, one gray code would be `[00, 01, 11, 10]`.

[See Solution](/problems/400-499/problem-148.js)

---

## Problem 149 - Goldman Sachs [Difficulty: Hard]

Given a list of numbers `L`, implement a method `sum(i, j)` which returns the sum from the sublist `L[i:j]` (including `i`, excluding `j`).

For example, given `L = [1, 2, 3, 4, 5]`, `sum(1, 3)` should return `sum([2, 3])`, which is `5`.

You can assume that you can do some pre-processing. `sum()` should be optimized over the pre-processing step.

[See Solution](/problems/400-499/problem-149.js)

---

## Problem 150 - LinkedIn [Difficulty: Hard]

Given a list of points, a central point, and an integer `k`, find the nearest `k` points from the central point.

For example, given the list of points `[(0, 0), (5, 4), (3, 1)]`, the central point `(1, 2)`, and `k` = 2, return `[(0, 0), (3, 1)]`.

[See Solution](/problems/400-499/problem-150.js)

---

## Problem 151 - Unknown [Difficulty: Medium]

Given a 2-D matrix representing an image, a location of a pixel in the screen and a color `C`, replace the color of the given pixel and all adjacent same colored pixels with `C`.

For example, given the following matrix, and location pixel of (2, 2), and 'G' for green:

    B B W
    W W W
    W W W
    B B B

Becomes

    B B G
    G G G
    G G G
    B B B

[See Solution](/problems/400-499/problem-151.js)

---

## Problem 152 - Triplebyte [Difficulty: Medium]

You are given `n` numbers as well as `n` probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding probability.

For example, given the numbers `[1, 2, 3, 4]` and probabilities `[0.1, 0.5, 0.2, 0.2]`, your function should return `1` 10% of the time, `2` 50% of the time, and `3` and `4` 20% of the time.

You can generate random numbers between 0 and 1 uniformly.

[See Solution](/problems/400-499/problem-152.js)

---

## Problem 153 - Unknown [Difficulty: Hard]

Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.

[See Solution](/problems/400-499/problem-153.js)

---

## Problem 154 - Amazon [Difficulty: Easy]

Implement a stack API using only a heap. A stack implements the following methods:

* `push(item)`, which adds an element to the stack
* `pop()`, which removes and returns the most recently added element (or throws an error if there is nothing on the stack)

Recall that a heap has the following operations:

* `push(item)`, which adds a new key to the heap
* `pop()`, which removes and returns the max value of the heap

[See Solution](/problems/400-499/problem-154.js)

---

## Problem 155 - MongoDB [Difficulty: Medium]

Given a list of elements, find the majority element, which appears more than half the time (`> floor(len(lst) / 2.0)`).

You can assume that such element exists.

For example, given `[1, 2, 1, 1, 3, 4, 0]`, return 1.

[See Solution](/problems/400-499/problem-155.js)

---

## Problem 156 - Facebook [Difficulty: Medium]

Given a positive integer `n`, find the smallest number of squared integers which sum to `n`.

For example, given `n` = 13, return 2 since 13 = 32 + 22 = 9 + 4.

Given `n` = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](/problems/400-499/problem-156.js)

---

## Problem 157 - Amazon [Difficulty: Easy]

Given a string, determine whether any permutation of it is a palindrome.

For example, `carrace` should return true, since it can be rearranged to form `racecar`, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.

[See Solution](/problems/400-499/problem-157.js)

---

## Problem 158 - Slack [Difficulty: Medium]

You are given an N by M matrix of `0`s and `1`s. Starting from the top left corner, how many ways are there to reach the bottom right corner?

You can only move right and down. `0` represents an empty space while `1` represents a wall you cannot walk through.

For example, given the following matrix:

    [[0, 0, 1],
     [0, 0, 1],
     [1, 0, 0]]

Return two, as there are only two ways to get to the bottom right:

* Right, down, down, right
* Down, right, down, right

The top left corner and bottom right corner will always be 0.

[See Solution](/problems/400-499/problem-158.js)

---

## Problem 159 - Google [Difficulty: Easy]

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](/problems/400-499/problem-159.js)

---

## Problem 160 - Uber [Difficulty: Hard]

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

For example, given the following tree:

      a
     /|\
    b c d
       / \
      e   f
     / \
    g   h

and the weights: `a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1`, the longest path would be `c -> a -> d -> f`, with a length of 17.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](/problems/400-499/problem-160.js)

---

## Problem 161 - Facebook [Difficulty: Easy]

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number `1111 0000 1111 0000 1111 0000 1111 0000`, return `0000 1111 0000 1111 0000 1111 0000 1111`.

[See Solution](/problems/400-499/problem-161.js)

---

## Problem 162 - Square [Difficulty: Medium]

Given a list of words, return the shortest unique prefix of each word. For example, given the list:

* dog
* cat
* apple
* apricot
* fish

Return the list:

* d
* c
* app
* apr
* f

[See Solution](/problems/400-499/problem-162.js)

---

## Problem 163 - Jane Street [Difficulty: Hard]

Given an arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation), write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: `[5, 3, '+']` should return `5 + 3 = 8`.

For example, `[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']` should return `5`, since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

[See Solution](/problems/400-499/problem-163.js)

---

## Problem 164 - Google [Difficulty: Medium]

You are given an array of length `n + 1` whose elements belong to the set `{1, 2, ..., n}`. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](/problems/400-499/problem-164.js)

---

## Problem 165 - Google [Difficulty: Medium]

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array `[3, 4, 9, 6, 1]`, return `[1, 1, 2, 1, 0]`, since:

* There is 1 smaller element to the right of 3
* There is 1 smaller element to the right of 4
* There are 2 smaller elements to the right of 9
* There is 1 smaller element to the right of 6
* There are no smaller elements to the right of 1

[See Solution](/problems/400-499/problem-165.js)

---

## Problem 166 - Uber [Difficulty: Medium]

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

* `next()`: returns the next element in the array of arrays. If there are no more elements, raise an exception.
* `has_next()`: returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling `next()` repeatedly should output `1, 2, 3, 4, 5, 6`.

Do not use `flatten` or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](/problems/400-499/problem-166.js)

---

## Problem 167 - Airbnb [Difficulty: Hard]

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list `["code", "edoc", "da", "d"]`, return `[(0, 1), (1, 0), (2, 3)]`.

[See Solution](/problems/400-499/problem-167.js)

---

## Problem 168 - Facebook [Difficulty: Medium]

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

you should return:

    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]

Follow-up: What if you couldn't use any extra space?

[See Solution](/problems/400-499/problem-168.js)

---

## Problem 169 - Google [Difficulty: Medium]

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list `4 -> 1 -> -3 -> 99` should become `-3 -> 1 -> 4 -> 99`.

[See Solution](/problems/400-499/problem-169.js)

---

## Problem 170 - Facebook [Difficulty: Medium]

Given a `start` word, an `end` word, and a dictionary of valid words, find the shortest transformation sequence from `start` to `end` such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as `start` and `end` and is lowercase.

For example, given `start = "dog"`, `end = "cat"`, and `dictionary = {"dot", "dop", "dat", "cat"}`, `return ["dog", "dot", "dat", "cat"]`.

Given `start = "dog"`, `end = "cat"`, and `dictionary = {"dot", "tod", "dat", "dar"}`, return null as there is no possible transformation from `dog` to `cat`.

[See Solution](/problems/400-499/problem-170.js)

---

## Problem 171 - Amazon [Difficulty: Easy]

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

`{"timestamp": 1526579928, count: 3, "type": "enter"}`

This means 3 people entered the building. An exit looks like this:

`{"timestamp": 1526580382, count: 2, "type": "exit"}`

This means that 2 people exited the building. `timestamp` is in [Unix time](https://en.wikipedia.org/wiki/Unix_time).

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of `(start, end)` timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](/problems/400-499/problem-171.js)

---

## Problem 172 - Dropbox [Difficulty: Medium]

Given a string `s` and a list of words `words`, where each word is the same length, find all starting indices of substrings in `s` that is a concatenation of every word in `words` exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in `s`.

The order of the indices does not matter.

[See Solution](/problems/400-499/problem-172.js)

---

## Problem 173 - Stripe [Difficulty: Easy]

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

[See Solution](/problems/400-499/problem-173.js)

---

## Problem 174 - Microsoft [Difficulty: Medium]

Describe and give an example of each of the following types of polymorphism:

* Ad-hoc polymorphism
* Parametric polymorphism
* Subtype polymorphism

[See Solution](/problems/400-499/problem-174.js)

---

## Problem 175 - Google [Difficulty: Easy]

You are given a starting state start, a list of transition probabilities for a Markov chain, and a number of steps num_steps. Run the Markov chain starting from start for num_steps and compute the number of times we visited each state.

For example, given the starting state a, number of steps 5000, and the following transition probabilities:

    [
        ('a', 'a', 0.9),
        ('a', 'b', 0.075),
        ('a', 'c', 0.025),
        ('b', 'a', 0.15),
        ('b', 'b', 0.8),
        ('b', 'c', 0.05),
        ('c', 'a', 0.25),
        ('c', 'b', 0.25),
        ('c', 'c', 0.5)
    ]

One instance of running this Markov chain might produce `{ 'a': 3012, 'b': 1656, 'c': 332 }`.

[See Solution](/problems/400-499/problem-175.js)

---

## Problem 176 - Bloomberg [Difficulty: Easy]

Determine whether there exists a one-to-one character mapping from one string `s1` to another `s2`.

For example, given `s1 = abc` and `s2 = bcd`, return `true` since we can map `a` to `b`, `b` to `c`, and `c` to `d`.

Given `s1 = foo` and `s2 = bar`, return `false` since the `o` cannot map to two characters.

[See Solution](/problems/400-499/problem-176.js)

---

## Problem 177 - Airbnb [Difficulty: Easy]

Given a linked list and a positive integer `k`, rotate the list to the right by `k` places.

For example, given the linked list `7 -> 7 -> 3 -> 5` and `k = 2`, it should become `3 -> 5 -> 7 -> 7`.

Given the linked list `1 -> 2 -> 3 -> 4 -> 5` and `k = 3`, it should become `3 -> 4 -> 5 -> 1 -> 2`.

[See Solution](/problems/400-499/problem-177.js)

---

## Problem 178 - Two Sigma [Difficulty: Hard]

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

[See Solution](/problems/400-499/problem-178.js)

---

## Problem 179 - Google [Difficulty: Medium]

Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

For example, given the sequence `2, 4, 3, 8, 7, 5`, you should construct the following tree:

        5
       / \
      3   7
     / \   \
    2   4   8

[See Solution](/problems/400-499/problem-179.js)

---

## Problem 180 - Google [Difficulty: Medium]

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

[See Solution](/problems/400-499/problem-180.js)

---

## Problem 181 - Google [Difficulty: Hard]

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string `racecarannakayak`, return `["racecar", "anna", "kayak"]`.

Given the input string `abc`, return `["a", "b", "c"]`.

[See Solution](/problems/400-499/problem-181.js)

---

## Problem 182 - Facebook [Difficulty: Medium]

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

[See Solution](/problems/400-499/problem-182.js)

---

## Problem 183 - Twitch [Difficulty: Hard]

Describe what happens when you type a URL into your browser and press Enter.

[See Solution](/problems/400-499/problem-183.js)

---

## Problem 184 - Amazon [Difficulty: Hard]

Given `n` numbers, find the greatest common denominator between them.

For example, given the numbers `[42, 56, 14]`, return `14`.

[See Solution](/problems/400-499/problem-184.js)

---

## Problem 185 - Google [Difficulty: Easy]

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

[See Solution](/problems/400-499/problem-185.js)

---

## Problem 186 - Microsoft [Difficulty: Hard]

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given `[5, 10, 15, 20, 25]`, return the sets `{10, 25}` and `{5, 15, 20}`, which has a difference of 5, which is the smallest possible difference.

[See Solution](/problems/400-499/problem-186.js)

---

## Problem 187 - Google [Difficulty: Easy]

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

[See Solution](/problems/400-499/problem-187.js)

---

## Problem 188 - Google [Difficulty: Medium]

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

[See Solution](/problems/400-499/problem-188.js)

---

## Problem 189 - Google [Difficulty: Easy]

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array `[5, 1, 3, 5, 2, 3, 4, 1]`, return 5 as the longest subarray of distinct elements is `[5, 2, 3, 4, 1]`.

[See Solution](/problems/400-499/problem-189.js)

---

## Problem 190 - Facebook [Difficulty: Medium]

Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given `[8, -1, 3, 4]`, return `15` as we choose the numbers `3`, `4`, and `8` where the `8` is obtained from wrapping around.

Given `[-4, 5, 1, 0]`, return `6` as we choose the numbers `5` and `1`.

[See Solution](/problems/400-499/problem-190.js)

---

## Problem 191 - Stripe [Difficulty: Easy]

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as `[0, 1]` and `[1, 2]`, but they won't be considered overlapping.

For example, given the intervals `(7, 9), (2, 4), (5, 8)`, return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

[See Solution](/problems/400-499/problem-191.js)

---

## Problem 192 - Google [Difficulty: Medium]

You are given an array of nonnegative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

For example, given the array `[1, 3, 1, 2, 0, 1]`, we can go from indices `0 -> 1 -> 3 -> 5`, so return `true`.

Given the array `[1, 2, 1, 0, 0]`, we can't reach the end, so return `false`.

[See Solution](/problems/400-499/problem-192.js)

---

## Problem 193 - Affirm [Difficulty: Hard]

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock. You're also given a number `fee` that represents a transaction fee for each buy and sell transaction.

You must buy before you can sell the stock, but you can make as many transactions as you like.

For example, given [1, 3, 2, 8, 4, 10] and `fee = 2`, you should return 9, since you could buy the stock at 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell it at 10 dollars. Since we did two transactions, there is a 4 dollar fee, so we have 7 + 6 = 13 profit minus 4 dollars of fees.

[See Solution](/problems/400-499/problem-193.js)

---

## Problem 194 - Facebook [Difficulty: Easy]

Suppose you are given two lists of `n` points, one list p1, p2, ..., pn on the line y = 0 and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of `n` line segments connecting each point pi to qi. Write an algorithm to determine how many pairs of the line segments intersect.

[See Solution](/problems/400-499/problem-194.js)

---

## Problem 195 - Google [Difficulty: Hard]

Let A be an N by M matrix in which every row and every column is sorted.

Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

For example, given the following matrix:

    [[1, 3, 7, 10, 15, 20],
     [2, 6, 9, 14, 22, 25],
     [3, 8, 10, 15, 25, 30],
     [10, 11, 12, 23, 30, 35],
     [20, 25, 30, 35, 40, 45]]

And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.

[See Solution](/problems/400-499/problem-195.js)

---

## Problem 196 - Apple [Difficulty: Easy]

Given the root of a binary tree, find the most frequent subtree sum. The subtree sum of a node is the sum of all values under a node, including the node itself.

For example, given the following tree:

      5
     / \
    2  -5

Return `2` as it occurs twice: once as the left leaf, and once as the sum of `2 + 5 - 5`.

[See Solution](/problems/400-499/problem-196.js)

---

## Problem 197 - Amazon [Difficulty: Easy]

Given an array and a number `k` that's smaller than the length of the array, rotate the array to the right `k` elements in-place.

[See Solution](/problems/400-499/problem-197.js)

---

## Problem 198 - Google [Difficulty: Medium]

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

[See Solution](/problems/400-499/problem-198.js)

---

## Problem 199 - Facebook [Difficulty: Hard]

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

[See Solution](/problems/400-499/problem-199.js)

---

## Problem 200 - Microsoft [Difficulty: Hard]

Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

For example, given the intervals `[(1, 4), (4, 5), (7, 9), (9, 12)]`, you should return `[4, 9]`.

[See Solution](/problems/200-299/problem-200.js)

---

## Problem 201 - Google [Difficulty: Easy]

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, `[[1], [2, 3], [1, 5, 1]]` represents the triangle:

      1
     2 3
    1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.

[See Solution](/problems/200-299/problem-201.js)

---

## Problem 202 - Palantir [Difficulty: Easy]

Write a program that checks whether an integer is a palindrome. For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. Do not convert the integer into a string.

[See Solution](/problems/200-299/problem-202.js)

---

## Problem 203 - Uber [Difficulty: Medium]

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

For example, given [5, 7, 10, 3, 4], return 3.

[See Solution](/problems/200-299/problem-203.js)

---

## Problem 204 - Amazon [Difficulty: Easy]

Given a complete binary tree, count the number of nodes in faster than O(n) time. Recall that a complete binary tree has every level filled except the last, and the nodes in the last level are filled starting from the left.

[See Solution](/problems/200-299/problem-204.js)

---

## Problem 205 - IBM [Difficulty: Easy]

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.

[See Solution](/problems/200-299/problem-205.js)

---

## Problem 206 - Twitter [Difficulty: Easy]

A permutation can be specified by an array P, where P[i] represents the location of the element at i in the permutation. For example, [2, 1, 0] represents the permutation where elements at the index 0 and 2 are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

[See Solution](/problems/200-299/problem-206.js)

---

## Problem 207 - Dropbox [Difficulty: Medium]

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

[See Solution](/problems/200-299/problem-207.js)

---

## Problem 208 - LinkedIn [Difficulty: Medium]

Given a linked list of numbers and a pivot k, partition the linked list so that all nodes less than k come before nodes greater than or equal to k.

For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3, the solution could be 1 -> 0 -> 5 -> 8 -> 3.

[See Solution](/problems/200-299/problem-208.js)

---

## Problem 209 - Google [Difficulty: Hard]

Write a program that computes the length of the longest common subsequence of three given strings. For example, given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious", it should return 5, since the longest common subsequence is "eieio".

[See Solution](/problems/200-299/problem-209.js)

---

## Problem 210 - Apple [Difficulty: Easy]

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

if n is even, the next number in the sequence is n / 2
if n is odd, the next number in the sequence is 3n + 1
It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

[See Solution](/problems/200-299/problem-210.js)

---

## Problem 211 - Microsoft [Difficulty: Medium]

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].

[See Solution](/problems/200-299/problem-211.js)

---

## Problem 212 - Dropbox [Difficulty: Easy]

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

[See Solution](/problems/200-299/problem-212.js)

---

## Problem 213 - Snapchat [Difficulty: Medium]

Given a string of digits, generate all possible valid IP address combinations.

IP addresses must follow the format A.B.C.D, where A, B, C, and D are numbers between 0 and 255. Zero-prefixed numbers, such as 01 and 065, are not allowed, except for 0 itself.

For example, given "2542540123", you should return ['254.25.40.123', '254.254.0.123'].

[See Solution](/problems/200-299/problem-213.js)

---

## Problem 214 - Stripe [Difficulty: Easy]

Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.

[See Solution](/problems/200-299/problem-214.js)

---

## Problem 215 - Yelp [Difficulty: Medium]

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

## Problem 216 - Facebook [Difficulty: Medium]

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

## Problem 217 - Oracle [Difficulty: Hard]

We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not. For a given input N, find the smallest sparse number greater than or equal to N.

Do this in faster than O(N log N) time.

[See Solution](/problems/200-299/problem-217.js)

---

## Problem 218 - Yahoo [Difficulty: Medium]

Write an algorithm that computes the reversal of a directed graph. For example, if a graph consists of A -> B -> C, it should become A <- B <- C.

[See Solution](/problems/200-299/problem-218.js)

---

## Problem 219 - Salesforce [Difficulty: Hard]

Connect 4 is a game where opponents take turns dropping red or black discs into a 7 x 6 vertically suspended grid. The game ends either when one player creates a line of four consecutive discs of their color (horizontally, vertically, or diagonally), or when there are no more spots left in the grid.

Design and implement Connect 4.

[See Solution](/problems/200-299/problem-219.js)

---

## Problem 220 - Square [Difficulty: Medium]

In front of you is a row of N coins, with values v1, v1, ..., vn.

You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.

[See Solution](/problems/200-299/problem-220.js)

---

## Problem 221 - Zillow [Difficulty: Easy]

Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. The first few sevenish numbers are 1, 7, 8, 49, and so on. Create an algorithm to find the nth sevenish number.

[See Solution](/problems/200-299/problem-221.js)

---

## Problem 222 - Quora [Difficulty: Medium]

Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".

[See Solution](/problems/200-299/problem-222.js)

---

## Problem 223 - Palantir [Difficulty: Hard]

Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity, where h is the height of the tree. Write a program to compute the in-order traversal of a binary tree using O(1) space.

[See Solution](/problems/200-299/problem-223.js)

---

## Problem 224 - Amazon [Difficulty: Easy]

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input [1, 2, 3, 10], you should return 7.

Do this in O(N) time.

[See Solution](/problems/200-299/problem-224.js)

---

## Problem 225 - Bloomberg [Difficulty: Easy]

There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.

Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

Bonus: Find an O(log N) solution if k = 2.

[See Solution](/problems/200-299/problem-225.js)

---

## Problem 226 - Airbnb [Difficulty: Hard]

You come across a dictionary of sorted words in a language you've never seen before. Write a program that returns the correct order of letters in this language.

For example, given ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz'], you should return ['x', 'z', 'w', 'y'].

[See Solution](/problems/200-299/problem-226.js)

---

## Problem 227 - Facebook [Difficulty: Easy]

Boggle is a game played on a 4 x 4 grid of letters. The goal is to find as many words as possible that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. Given a game board and a dictionary of valid words, implement a Boggle solver.

[See Solution](/problems/200-299/problem-227.js)

---

## Problem 228 - Twitter [Difficulty: Medium]

Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.

[See Solution](/problems/200-299/problem-228.js)

---

## Problem 229 - Flipkart [Difficulty: Medium]

[Snakes and Ladders](https://en.wikipedia.org/wiki/Snakes_and_Ladders) is a game played on a 10 x 10 board, the goal of which is get from square 1 to square 100. On each turn players will roll a six-sided die and move forward a number of spaces equal to the result. If they land on a square that represents a snake or ladder, they will be transported ahead or behind, respectively, to a new square.

Find the smallest number of turns it takes to play snakes and ladders.

For convenience, here are the squares representing snakes and ladders, and their outcomes:

snakes = {16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78}  
ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100}

[See Solution](/problems/200-299/problem-229.js)

---

## Problem 230 - Goldman Sachs [Difficulty: Medium]

You are given `N` identical eggs and access to a building with `k` floors. Your task is to find the lowest floor that will cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when dropped from the xth floor, you can assume it will also break when dropped from any floor greater than `x`.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if `N = 1` and `k = 5`, we will need to try dropping the egg at every floor, beginning with the first, until we reach the fifth floor, so our solution will be `5`.

[See Solution](/problems/200-299/problem-230.js)

---

## Problem 231 - IBM [Difficulty: Medium]

Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return `None`.

For example, given "aaabbc", you could return "ababac". Given "aaab", return `None`.

[See Solution](/problems/200-299/problem-231.js)

---

## Problem 232 - Google [Difficulty: Easy]

Implement a `PrefixMapSum` class with the following methods:

* `insert(key: str, value: int)`: Set a given key's value in the map. If the key already exists, overwrite the value.  
* `sum(prefix: str)`: Return the sum of all values of keys that begin with a given prefix.

For example, you should be able to run the following code:

    mapsum.insert("columnar", 3)  
    assert mapsum.sum("col") == 3  

    mapsum.insert("column", 2)  
    assert mapsum.sum("col") == 5  

[See Solution](/problems/200-299/problem-232.js)

---

## Problem 233 - Apple [Difficulty: Easy]

Implement the function `fib(n)`, which returns the nth number in the Fibonacci sequence, using only `O(1)` space.

[See Solution](/problems/200-299/problem-233.js)

---

## Problem 234 - Microsoft [Difficulty: Hard]

Recall that the minimum spanning tree is the subset of edges of a tree that connect all its vertices with the smallest possible total edge weight. Given an undirected graph with weighted edges, compute the maximum weight spanning tree.

[See Solution](/problems/200-299/problem-234.js)

---

## Problem 235 - Facebook [Difficulty: Hard]

Given an array of numbers of length `N`, find both the minimum and maximum using less than `2 * (N - 2)` comparisons.

[See Solution](/problems/200-299/problem-235.js)

---

## Problem 236 - Nvidia [Difficulty: Medium]

You are given a list of N points (x1, y1), (x2, y2), ..., (xN, yN) representing a polygon. You can assume these points are given in order; that is, you can construct the polygon by connecting point 1 to point 2, point 2 to point 3, and so on, finally looping around to connect point N to point 1.

Determine if a new point p lies inside this polygon. (If p is on the boundary of the polygon, you should return False).

[See Solution](/problems/200-299/problem-236.js)

---

## Problem 237 - Amazon [Difficulty: Easy]

A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node. The following tree is an example:

            4
          / | \
        3   5   3
      /           \
     9             9

Given a k-ary tree, determine whether it is symmetric.

[See Solution](/problems/200-299/problem-237.js)

---

## Problem 238 - MIT [Difficulty: Hard]

[Blackjack](https://en.wikipedia.org/wiki/Blackjack) is a two player card game whose rules are as follows:

* The player and then the dealer are each given two cards.  
* The player can then "hit", or ask for arbitrarily many additional cards, so long as their total does not exceed `21`.  
* The dealer must then hit if their total is `16` or lower, otherwise pass.  
* Finally, the two compare totals, and the one with the greatest sum not exceeding `21` is the winner.  

For this problem, cards values are counted as follows: each card between `2` and `10` counts as their face value, face cards count as `10`, and aces count as `1`.  

Given perfect knowledge of the sequence of cards in the deck, implement a blackjack solver that maximizes the player's score (that is, wins minus losses).

[See Solution](/problems/200-299/problem-238.js)

---

## Problem 239 - Uber [Difficulty: Medium]

One way to unlock an Android phone is through a pattern of swipes across a `1-9` keypad.

For a pattern to be valid, it must satisfy the following:

* All of its keys must be distinct.  
* It must not connect two keys by jumping over a third key, unless that key has already been used.  

For example, `4 - 2 - 1 - 7` is a valid pattern, whereas `2 - 1 - 7` is not.  

Find the total number of valid unlock patterns of length `N`, where `1 <= N <= 9`.

[See Solution](/problems/200-299/problem-239.js)

---

## Problem 240 - Spotify [Difficulty: Hard]

There are `N` couples sitting in a row of length `2 * N`. They are currently ordered randomly, but would like to rearrange themselves so that each couple's partners can sit side by side.

What is the minimum number of swaps necessary for this to happen?

[See Solution](/problems/200-299/problem-240.js)

---

## Problem 241 - Palantir [Difficulty: Easy]

In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index `h` if at least `h` of her `N` papers have `h` citations each. If there are multiple `h` satisfying this formula, the maximum is chosen.

For example, suppose `N` = 5, and the respective citations of each paper are `[4, 3, 0, 1, 5]`. Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

Given a list of paper citations of a researcher, calculate their h-index.

[See Solution](/problems/200-299/problem-241.js)

---

## Problem 242 - Twitter [Difficulty: Hard]

You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour. Implement a data structure that efficiently supports the following:

* `update(hour: int, value: int)`: Increment the element at index `hour` by `value`.
* `query(start: int, end: int)`: Retrieve the number of subscribers that have signed up between `start` and `end` (inclusive).

You can assume that all values get cleared at the end of the day, and that you will not be asked for `start` and `end` values that wrap around midnight.

[See Solution](/problems/200-299/problem-242.js)

---

## Problem 243 - Etsy [Difficulty: Medium]

Given an array of numbers `N` and an integer `k`, your task is to split `N` into `k` partitions such that the maximum sum of any partition is minimized. Return this sum.

For example, given `N = [5, 1, 2, 7, 3, 4]` and `k = 3`, you should return `8`, since the optimal partition is `[5, 1, 2], [7], [3, 4]`.

[See Solution](/problems/200-299/problem-243.js)

---

## Problem 244 - Square [Difficulty: Easy]

The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than `N`. The method is to take increasingly larger prime numbers, and mark their multiples as composite.

For example, to find all primes less than `100`, we would first mark `[4, 6, 8, ...]` (multiples of two), then `[6, 9, 12, ...]` (multiples of three), and so on. Once we have done this for all primes less than `N`, the unmarked numbers that remain will be prime.

Implement this algorithm.

Bonus: Create a generator that produces primes indefinitely (that is, without taking `N` as an input).

[See Solution](/problems/200-299/problem-244.js)

---

## Problem 245 - Yelp [Difficulty: Hard]

You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.

[See Solution](/problems/200-299/problem-245.js)

---

## Problem 246 - Dropbox [Difficulty: Medium]

Given a list of words, determine whether the words can be chained to form a circle. A word `X` can be placed in front of another word `Y` in a circle if the last character of `X` is same as the first character of `Y`.

For example, the words `['chair', 'height', 'racket', 'touch', 'tunic']` can form the following circle: `chair --> racket --> touch --> height --> tunic --> chair`.

[See Solution](/problems/200-299/problem-246.js)

---

## Problem 247 - PayPal [Difficulty: Easy]

Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.

[See Solution](/problems/200-299/problem-247.js)

---

## Problem 248 - Nvidia [Difficulty: Hard]

Find the maximum of two numbers without using any if-else statements, branching, or direct comparisons.

[See Solution](/problems/200-299/problem-248.js)

---

## Problem 249 - Salesforce [Difficulty: Hard]

Given an array of integers, find the maximum XOR of any two elements.

[See Solution](/problems/200-299/problem-249.js)

---

## Problem 250 - Google [Difficulty: Medium]

A cryptarithmetic puzzle is a mathematical game where the digits of some numbers are represented by letters. Each letter represents a unique digit.

For example, a puzzle of the form:

      SEND
    + MORE
    --------
     MONEY

may have the solution:

`{'S': 9, 'E': 5, 'N': 6, 'D': 7, 'M': 1, 'O', 0, 'R': 8, 'Y': 2}`

Given a three-word puzzle like the one above, create an algorithm that finds a solution.

[See Solution](/problems/200-299/problem-250.js)

---

## Problem 251 -  Amazon [Difficulty: Medium]

Given an array of a million integers between zero and a billion, out of order, how can you efficiently sort it? Assume that you cannot store an array of a billion elements in memory.

[See Solution](/problems/200-299/problem-251.js)

---

## Problem 252 - Palantir [Difficulty: Easy]

The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one. For example, `4 / 13` can be represented as `1 / 4 + 1 / 18 + 1 / 468`.

Create an algorithm to turn an ordinary fraction `a / b`, where `a < b`, into an Egyptian fraction.

[See Solution](/problems/200-299/problem-252.js)

---

## Problem 253 - PayPal [Difficulty: Medium]

Given a string and a number of lines `k`, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the `kth` line, then back up to top right, and so on.

For example, given the sentence `"thisisazigzag"` and `k = 4`, you should print:

    t     a     g
     h   s z   a
      i i   i z
       s     g

[See Solution](/problems/200-299/problem-253.js)

---

## Problem 254 - Yahoo [Difficulty: Medium]

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

## Problem 255 - Microsoft [Difficulty: Easy]

The transitive closure of a graph is a measure of which vertices are reachable from other vertices. It can be represented as a matrix M, where `M[i][j] == 1` if there is a path between vertices `i` and `j`, and otherwise `0`.

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

## Problem 256 - Fitbit [Difficulty: Medium]

Given a linked list, rearrange the node values such that they appear in alternating `low -> high -> low -> high ...` form. For example, given `1 -> 2 -> 3 -> 4 -> 5`, you should return `1 -> 3 -> 2 -> 5 -> 4`.

[See Solution](/problems/200-299/problem-256.js)

---

## Problem 257 - WhatsApp [Difficulty: Easy]

Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given `[3, 7, 5, 6, 9]`, you should return `(1, 3)`.

[See Solution](/problems/200-299/problem-257.js)

---

## Problem 258 - Morgan Stanley [Difficulty: Easy]

In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

           1
        /     \
      2         3
     / \       / \
    4   5     6   7

You should return `[1, 3, 2, 4, 5, 6, 7]`.

[See Solution](/problems/200-299/problem-258.js)

---

## Problem 259 - Two Sigma [Difficulty: Hard]

Ghost is a two-person word game where players alternate appending letters to a word. The first person who spells out a word, or creates a prefix for which there is no possible continuation, loses. Here is a sample game:

Player 1: g
Player 2: h
Player 1: o
Player 2: s
Player 1: t [loses]
Given a dictionary of words, determine the letters the first player should start with, such that with optimal play they cannot lose.

For example, if the dictionary is `["cat", "calf", "dog", "bear"]`, the only winning start letter would be b.

[See Solution](/problems/200-299/problem-259.js)

---

## Problem 260 - Pinterest [Difficulty: Medium]

The sequence `[0, 1, ..., N]` has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given `[None, +, +, -, +]`, you could return `[1, 2, 3, 0, 4]`.

[See Solution](/problems/200-299/problem-260.js)

---

## Problem 261 - Amazon [Difficulty: Easy]

Huffman coding is a method of encoding characters based on their frequency. Each letter is assigned a variable-length binary string, such as `0101` or `111110`, where shorter lengths correspond to more common letters. To accomplish this, a binary tree is built such that the path from the root to any leaf uniquely maps to a character. When traversing the path, descending to a left child corresponds to a 0 in the prefix, while descending right corresponds to 1.

Here is an example tree (note that only the leaf nodes have letters):

            *
          /   \
        *       *
       / \     / \
      *   a   t   *
     /             \
    c               s

With this encoding, `cats` would be represented as `0000110111`.

Given a dictionary of character frequencies, build a Huffman tree, and use it to determine a mapping between characters and their encoded binary strings.

[See Solution](/problems/200-299/problem-261.js)

---

## Problem 262 - Mozilla [Difficulty: Medium]

A bridge in a connected (undirected) graph is an edge that, if removed, causes the graph to become disconnected. Find all the bridges in a graph.

[See Solution](/problems/200-299/problem-262.js)

---

## Problem 263 - Nest [Difficulty: Medium]

Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.

We can consider a sentence valid if it conforms to the following rules:

1. The sentence must start with a capital letter, followed by a lowercase letter or a space.
2. All other characters must be lowercase letters, separators (`,`,`;`,`:`) or terminal marks (`.`,`?`,`!`,`‽`).
3. There must be a single space between each word.
4. The sentence must end with a terminal mark immediately following a word.

[See Solution](/problems/200-299/problem-263.js)

---

## Problem 264 - LinkedIn [Difficulty: Hard]

Given a set of characters `C` and an integer `k`, a De Bruijn sequence is a cyclic sequence in which every possible k-length string of characters in `C` occurs exactly once.

For example, suppose `C = {0, 1}` and `k = 3`. Then our sequence should contain the substrings `{'000', '001', '010', '011', '100', '101', '110', '111'}`, and one possible solution would be `00010111`.

Create an algorithm that finds a De Bruijn sequence.

[See Solution](/problems/200-299/problem-264.js)

---

## Problem 265 - Atlassian [Difficulty: Easy]

MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written. They would like to give the smallest positive amount to each worker consistent with the constraint that if a developer has written more lines of code than their neighbor, they should receive more money.

Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

For example, given `[10, 40, 200, 1000, 60, 30]`, you should return `[1, 2, 3, 4, 2, 1]`.

[See Solution](/problems/200-299/problem-265.js)

---

## Problem 266 - Pivotal [Difficulty: Easy]

A step word is formed by taking a given word, adding a letter, and anagramming the result. For example, starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".

Given a dictionary of words and an input word, create a function that returns all valid step words.

[See Solution](/problems/200-299/problem-266.js)

---

## Problem 267 - Oracle [Difficulty: Hard]

You are presented with an `8` by `8` matrix representing the positions of pieces on a chess board. The only pieces on the board are the black king and various white pieces. Given this matrix, determine whether the king is in check.

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

You should return `True`, since the bishop is attacking the king diagonally.

[See Solution](/problems/200-299/problem-267.js)

---

## Problem 268 - Indeed [Difficulty: Medium]

Given a `32`-bit positive integer `N`, determine whether it is a power of four in faster than `O(log N)` time.

[See Solution](/problems/200-299/problem-268.js)

---

## Problem 269 - Microsoft [Difficulty: Easy]

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

* `L`, meaning the domino has just been pushed to the left,
* `R`, meaning the domino has just been pushed to the right, or
* `.`, meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string `.L.R....L`, you should return `LL.RRRLLL`.

Given the string `..R...L.L`, you should return `..RR.LLLL`.

[See Solution](/problems/200-299/problem-269.js)

---

## Problem 270 - Twitter [Difficulty: Medium]

A network consists of nodes labeled `0` to `N`. You are given a list of edges `(a, b, t)`, describing the time `t` it takes for a message to be sent from node `a` to node `b`. Whenever a node receives a message, it immediately passes the message on to a neighboring node, if possible.

Assuming all nodes are connected, determine how long it will take for every node to receive a message that begins at node 0.

For example, given `N = 5`, and the following edges:

    edges = [  
        (0, 1, 5),  
        (0, 2, 3),  
        (0, 5, 4),  
        (1, 3, 8),  
        (2, 3, 1),  
        (3, 5, 10),  
        (3, 4, 5)  
    ]  

You should return `9`, because propagating the message from `0 -> 2 -> 3 -> 4` will take that much time.

[See Solution](/problems/200-299/problem-270.js)

---

## Problem 271 -  Netflix [Difficulty: Hard]

Given a sorted list of integers of length `N`, determine if an element `x` is in the list without performing any multiplication, division, or bit-shift operations.

Do this in `O(log N)` time.

[See Solution](/problems/200-299/problem-271.js)

---

## Problem 272 - Spotify [Difficulty: Medium]

Write a function, `throw_dice(N, faces, total)`, that determines how many ways it is possible to throw `N` dice with some number of faces each to get a specific total.

For example, `throw_dice(3, 6, 7)` should equal `15`.

[See Solution](/problems/200-299/problem-272.js)

---

## Problem 273 - Apple [Difficulty: Easy]

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return `False`.

For example, given `[-6, 0, 2, 40]`, you should return `2`. Given `[1, 5, 7, 8]`, you should return `False`.

[See Solution](/problems/200-299/problem-273.js)

---

## Problem 274 - Facebook [Difficulty: Hard]

Given a string consisting of parentheses, single digits, and positive and negative signs, convert the string into a mathematical expression to obtain the answer.

Don't use `eval` or a similar built-in parser.

For example, given '-1 + (2 + 3)', you should return `4`.

[See Solution](/problems/200-299/problem-274.js)

---

## Problem 275 - Epic [Difficulty: Medium]

The "look and say" sequence is defined as follows: beginning with the term `1`, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:

    1 
    11
    21
    1211
    111221

As an example, the fourth term is `1211`, since the third term consists of one `2` and one `1`.

Given an integer `N`, print the `N`th term of this sequence.

[See Solution](/problems/200-299/problem-275.js)

---

## Problem 276 - Dropbox [Difficulty: Hard]

Implement an efficient string matching algorithm.

That is, given a string of length `N` and a pattern of length `k`, write a program that searches for the pattern in the string with less than `O(N * k)` worst-case time complexity.

If the pattern is found, return the start index of its location. If not, return `False`.

[See Solution](/problems/200-299/problem-276.js)

---

## Problem 277 - Google [Difficulty: Easy]

UTF-8 is a character encoding that maps each symbol to one, two, three, or four bytes.

For example, the Euro sign, €, corresponds to the three bytes `11100010 10000010 10101100`. The rules for mapping characters are as follows:

* For a single-byte character, the first bit must be zero.
* For an `n`-byte character, the first byte starts with `n` ones and a zero. The other `n - 1` bytes all start with `10`.

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

## Problem 278 - Amazon [Difficulty: Easy]

Given an integer `N`, construct all possible binary search trees with `N` nodes.

[See Solution](/problems/200-299/problem-278.js)

---

## Problem 279 - Twitter [Difficulty: Easy]

A classroom consists of `N` students, whose friendships can be represented in an adjacency list. For example, the following describes a situation where `0` is friends with `1` and `2`, `3` is friends with `6`, and so on.

    {
        0: [1, 2],
        1: [0, 5],
        2: [0],
        3: [6],
        4: [],
        5: [1],
        6: [3]
    }

Each student can be placed in a friend group, which can be defined as the transitive closure of that student's friendship relations. In other words, this is the smallest set such that no student in the group has any friends outside this group. For the example above, the friend groups would be `{0, 1, 2, 5}, {3, 6}, {4}`.

Given a friendship list such as the one above, determine the number of friend groups in the class.

[See Solution](/problems/200-299/problem-279.js)

---

## Problem 280 - Pandora [Difficulty: Easy]

Given an undirected graph, determine if it contains a cycle.

[See Solution](/problems/200-299/problem-280.js)

---

## Problem 281 - LinkedIn [Difficulty: Medium]

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

## Problem 282 - Netflix [Difficulty: Easy]

Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a2+ b2= c2.

[See Solution](/problems/200-299/problem-282.js)

---

## Problem 283 - Google [Difficulty: Easy]

A regular number in mathematics is defined as one which evenly divides some power of `60`. Equivalently, we can say that a regular number is one whose only prime divisors are `2`, `3`, and `5`.

These numbers have had many applications, from helping ancient Babylonians keep time to tuning instruments according to the diatonic scale.

Given an integer `N`, write a program that returns, in order, the first N regular numbers.

[See Solution](/problems/200-299/problem-283.js)

---

## Problem 284 - Yext [Difficulty: Medium]

Two nodes in a binary tree can be called cousins if they are on the same level of the tree but have different parents. For example, in the following diagram `4` and `6` are cousins.

        1
       / \
      2   3
     / \   \
    4   5   6

Given a binary tree and a particular node, find all cousins of that node.

[See Solution](/problems/200-299/problem-284.js)

---

## Problem 285 - Mailchimp [Difficulty: Medium]

You are given an array representing the heights of neighboring buildings on a city street, from east to west. The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.

For example, given the array `[3, 7, 8, 3, 6, 1]`, you should return `3`, since the top floors of the buildings with heights `8`, `6`, and `1` all have an unobstructed view to the west.

Can you do this using just one forward pass through the array?

[See Solution](/problems/200-299/problem-285.js)

---

## Problem 286 - VMware [Difficulty: Hard]

The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one another when viewed from a distance. We can represent the buildings using an array of `(left, right, height)` tuples, which tell us where on an imaginary x-axis a building begins and ends, and how tall it is. The skyline itself can be described by a list of `(x, height)` tuples, giving the locations at which the height visible to a distant observer changes, and each new height.

Given an array of buildings as described above, create a function that returns the skyline.

For example, suppose the input consists of the buildings `[(0, 15, 3), (4, 11, 5), (19, 23, 4)]`. In aggregate, these buildings would create a skyline that looks like the one below.

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

## Problem 287 - Quora [Difficulty: Medium]

You are given a list of `(website, user)` pairs that represent users visiting websites. Come up with a program that identifies the top `k` pairs of websites with the greatest similarity.

For example, suppose `k = 1`, and the list of tuples is:

    [('a', 1), ('a', 3), ('a', 5)
     ('b', 2), ('b', 6),
     ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5),
     ('d', 4), ('d', 5), ('d', 6), ('d', 7),
     ('e', 1), ('e', 3), ('e': 5), ('e', 6)]

Then a reasonable similarity metric would most likely conclude that `a` and `e` are the most similar, so your program should return `[('a', 'e')]`.

[See Solution](/problems/200-299/problem-287.js)

---

## Problem 288 - Salesforce [Difficulty: Medium]

The number 6174 is known as Kaprekar's contant, after the mathematician who discovered an associated property: for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

* For a given input `x`, create two new numbers that consist of the digits in `x` in ascending and descending order.
* Subtract the smaller number from the larger number.

For example, this algorithm terminates in three steps when starting from `1234`:

* `4321 - 1234 = 3087`
* `8730 - 0378 = 8352`
* `8532 - 2358 = 6174`

Write a function that returns how many steps this will take for a given input `N`.

[See Solution](/problems/200-299/problem-288.js)

---

## Problem 289 - Google [Difficulty: Hard]

The game of Nim is played as follows. Starting with three heaps, each containing a variable number of items, two players take turns removing one or more items from a single pile. The player who eventually is forced to take the last stone loses. For example, if the initial heap sizes are `3`, `4`, and `5`, a game could be played as shown below:

      A  |  B  |  C
    -----------------
      3  |  4  |  5
      3  |  1  |  3
      3  |  1  |  3
      0  |  1  |  3
      0  |  1  |  0
      0  |  0  |  0

In other words, to start, the first player takes three items from pile `B`. The second player responds by removing two stones from pile `C`. The game continues in this way until player one takes last stone and loses.

Given a list of non-zero starting values `[a, b, c]`, and assuming optimal play, determine whether the first player has a forced win.

[See Solution](/problems/200-299/problem-289.js)

---

## Problem 290 - Facebook [Difficulty: Easy]

On a mysterious island there are creatures known as Quxes which come in three colors: red, green, and blue. One power of the Qux is that if two of them are standing next to each other, they can transform into a single creature of the third color.

Given N Quxes standing in a line, determine the smallest number of them remaining after any possible sequence of such transformations.

For example, given the input `['R', 'G', 'B', 'G', 'B']`, it is possible to end up with a single Qux through the following steps:

            Arrangement       |   Change
    ----------------------------------------
    ['R', 'G', 'B', 'G', 'B'] | (R, G) -> B
    ['B', 'B', 'G', 'B']      | (B, G) -> R
    ['B', 'R', 'B']           | (R, B) -> G
    ['B', 'G']                | (B, G) -> R
    ['R']                     |

[See Solution](/problems/200-299/problem-290.js)

---

## Problem 291 - Glassdoor [Difficulty: Medium]

An imminent hurricane threatens the coastal town of Codeville. If at most two people can fit in a rescue boat, and the maximum weight limit for a given boat is `k`, determine how many boats will be needed to save everyone.

For example, given a population with weights `[100, 200, 150, 80]` and a boat limit of `200`, the smallest number of boats required will be three.

[See Solution](/problems/200-299/problem-291.js)

---

## Problem 292 - Twitter [Difficulty: Hard]

A teacher must divide a class of students into two teams to play dodgeball. Unfortunately, not all the kids get along, and several refuse to be put on the same team as that of their enemies.

Given an adjacency list of students and their enemies, write an algorithm that finds a satisfactory pair of teams, or returns `False` if none exists.

For example, given the following enemy graph you should return the teams `{0, 1, 4, 5}` and `{2, 3}`.

    students = {  
        0: [3],
        1: [2],
        2: [1, 4],
        3: [0, 4, 5],
        4: [2, 3],
        5: [3]
    }  

On the other hand, given the input below, you should return `False`.

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

## Problem 293 - Uber [Difficulty: Hard]

You have `N` stones in a row, and would like to create from them a pyramid. This pyramid should be constructed such that the height of each stone increases by one until reaching the tallest stone, after which the heights decrease by one. In addition, the start and end stones of the pyramid should each be one stone high.

You can change the height of any stone by paying a cost of `1` unit to lower its height by `1`, as many times as necessary. Given this information, determine the lowest cost method to produce this pyramid.

For example, given the stones `[1, 1, 3, 3, 2, 1]`, the optimal solution is to pay `2` to create `[0, 1, 2, 3, 2, 1]`.

[See Solution](/problems/200-299/problem-293.js)

---

## Problem 294 - Square [Difficulty: Medium]

A competitive runner would like to create a route that starts and ends at his house, with the condition that the route goes entirely uphill at first, and then entirely downhill.

Given a dictionary of places of the form `{location: elevation}`, and a dictionary mapping paths between some of these locations to their corresponding distances, find the length of the shortest route satisfying the condition above. Assume the runner's home is location `0`.

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

In this case, the shortest valid path would be `0 -> 2 -> 4 -> 0`, with a distance of `28`.

[See Solution](/problems/200-299/problem-294.js)

---

## Problem 295 - Stitch Fix [Difficulty: Medium]

Pascal's triangle is a triangular array of integers constructed with the following formula:

* The first row consists of the number `1`.
* For each subsequent row, each element is the sum of the numbers directly above it, on either side.

For example, here are the first few rows:

        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

Given an input `k`, return the `kth` row of Pascal's triangle.

Bonus: Can you do this using only `O(k)` space?

[See Solution](/problems/200-299/problem-295.js)

---

## Problem 296 - Etsy [Difficulty: Hard]

Given a sorted array, convert it into a height-balanced binary search tree.

[See Solution](/problems/200-299/problem-296.js)

---

## Problem 297 - Amazon [Difficulty: Medium]

At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. For example, in the following situation, customer `0` will be satisfied with drinks `0`, `1`, `3`, or `6`.

    preferences = {  
        0: [0, 1, 3, 6],
        1: [1, 4, 7],
        2: [2, 4, 7, 5],
        3: [3, 2, 5],
        4: [5, 8]
    }

A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be `2`, as drinks `1` and `5` will satisfy everyone.

[See Solution](/problems/200-299/problem-297.js)

---

## Problem 298 - Google [Difficulty: Easy]

A girl is walking along an apple orchard with a bag in each hand. She likes to pick apples from each tree as she goes along, but is meticulous about not putting different kinds of apples in the same bag.

Given an input describing the types of apples she will pass on her path, in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

For example, given the input `[2, 1, 2, 3, 3, 1, 3, 5]`, the longest portion will involve types `1` and `3`, with a length of four.

[See Solution](/problems/200-299/problem-298.js)

---

## Problem 299 - Samsung [Difficulty: Medium]

A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where `A`, `B`, and `C` are houses, and arrows represent pipes:

    A <--> B <--> C <--> plant

Each pipe has an associated cost, which the utility company would like to minimize. Given an undirected graph of pipe connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from `plant` to `A`, `plant` to `B`, and `B` to `C`, for a total cost of `16`.

    pipes = {
        'plant': {'A': 1, 'B': 5, 'C': 20},
        'A': {'C': 15},
        'B': {'C': 10},
        'C': {}
    }

[See Solution](/problems/200-299/problem-299.js)

---

## Problem 300 -  Uber [Difficulty: Easy]

On election day, a voting machine writes data in the form `(voter_id, candidate_id)` to a text file. Write a program that reads this file as a stream and returns the top `3` candidates at any given time. If you find a voter voting more than once, report this as fraud.

[See Solution](/problems/300-399/problem-300.js)

---

## Problem 301 - Triplebyte [Difficulty: Medium]

Implement a data structure which carries out the following operations without resizing the underlying array:

* `add(value)`: Add a value to the set of values.
* `check(value)`: Check whether a value is in the set.

The `check` method may return occasional false positives (in other words, incorrectly identifying an element as part of the set), but should always correctly identify a true element.

[See Solution](/problems/300-399/problem-301.js)

---

## Problem 302 - Uber [Difficulty: Medium]

You are given a 2-d matrix where each cell consists of either `/`, `\`, or an empty space. Write an algorithm that determines into how many regions the slashes divide the space.

For example, suppose the input for a three-by-six grid is the following:

    \    /  
     \  /  
      \/  

Considering the edges of the matrix as boundaries, this divides the grid into three triangles, so you should return `3`.

[See Solution](/problems/300-399/problem-302.js)

---

## Problem 303 - Microsoft [Difficulty: Easy]

Given a clock time in `hh:mm` format, determine, to the nearest degree, the angle between the hour and the minute hands.

Bonus: When, during the course of a day, will the angle be zero?

[See Solution](/problems/300-399/problem-303.js)

---

## Problem 304 - Two Sigma [Difficulty: Hard]

A knight is placed on a given square on an `8 x 8` chessboard. It is then moved randomly several times, where each move is a standard [knight move](https://en.wikipedia.org/wiki/Knight_(chess)#Movement). If the knight jumps off the board at any point, however, it is not allowed to jump back on.

After `k` moves, what is the probability that the knight remains on the board?

[See Solution](/problems/300-399/problem-304.js)

---

## Problem 305 - Amazon [Difficulty: Easy]

Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.

For example, suppose you are given the input `3 -> 4 -> -7 -> 5 -> -6 -> 6`. In this case, you should first remove `3 -> 4 -> -7`, then `-6 -> 6`, leaving only `5`.

[See Solution](/problems/300-399/problem-305.js)

---

## Problem 306 - Palantir [Difficulty: Medium]

You are given a list of `N` numbers, in which each number is located at most `k` places away from its sorted position. For example, if `k = 1`, a given element at index `4` might end up at indices `3`, `4`, or `5`.

Come up with an algorithm that sorts this list in `O(N log k)` time.

[See Solution](/problems/300-399/problem-306.js)

---

## Problem 307 - Oracle [Difficulty: Easy]

Given a binary search tree, find the floor and ceiling of a given integer. The floor is the highest element in the tree less than or equal to an integer, while the ceiling is the lowest element in the tree greater than or equal to an integer.

If either value does not exist, return None.

[See Solution](/problems/300-399/problem-307.js)

---

## Problem 308 - Quantcast [Difficulty: Hard]

You are presented with an array representing a Boolean expression. The elements are of two kinds:

* `T` and `F`, representing the values `True` and `False`.
* `&`, `|`, and `^`, representing the bitwise operators for `AND`, `OR`, and `XOR`.

Determine the number of ways to group the array elements using parentheses so that the entire expression evaluates to `True`.

For example, suppose the input is `['F', '|', 'T', '&', 'T']`. In this case, there are two acceptable groupings: `(F | T) & T` and `F | (T & T)`.

[See Solution](/problems/300-399/problem-308.js)

---

## Problem 309 - Walmart Labs [Difficulty: Medium]

There are `M` people sitting in a row of `N` seats, where `M < N`. Your task is to redistribute people such that there are no gaps between any of them, while keeping overall movement to a minimum.

For example, suppose you are faced with an input of `[0, 1, 1, 0, 1, 0, 0, 0, 1]`, where `0` represents an empty seat and `1` represents a person. In this case, one solution would be to place the person on the right in the fourth seat. We can consider the cost of a solution to be the sum of the absolute distance each person must move, so that the cost here would be five.

Given an input such as the one above, return the lowest possible cost of moving people to remove all gaps.

[See Solution](/problems/300-399/problem-309.js)

---

## Problem 310 - Pivotal [Difficulty: Easy]

Write an algorithm that finds the total number of set bits in all integers between `1` and `N`.

[See Solution](/problems/300-399/problem-310.js)

---

## Problem 311 - Sumo Logic [Difficulty: Easy]

Given an unsorted array, in which all elements are distinct, find a "peak" element in `O(log N)` time.

An element is considered a peak if it is greater than both its left and right neighbors. It is guaranteed that the first and last elements are lower than all others.

[See Solution](/problems/300-399/problem-311.js)

---

## Problem 312 - Wayfair [Difficulty: Easy]

You are given a `2 x N` board, and instructed to completely cover the board with the following shapes:

* Dominoes, or `2 x 1` rectangles.
* Trominoes, or `L`-shapes.

For example, if `N = 4`, here is one possible configuration, where `A` is a domino, and `B` and `C` are trominoes.

    A B B C
    A B C C

Given an integer `N`, determine in how many ways this task is possible.

[See Solution](/problems/300-399/problem-312.js)

---

## Problem 313 - Citrix [Difficulty: Hard]

You are given a circular lock with three wheels, each of which display the numbers `0` through `9` in order. Each of these wheels rotate clockwise and counterclockwise.

In addition, the lock has a certain number of "dead ends", meaning that if you turn the wheels to one of these combinations, the lock becomes stuck in that state and cannot be opened.

Let us consider a "move" to be a rotation of a single wheel by one digit, in either direction. Given a lock initially set to `000`, a target combination, and a list of dead ends, write a function that returns the minimum number of moves required to reach the target state, or None if this is impossible.

[See Solution](/problems/300-399/problem-313.js)

---

## Problem 314 - Spotify [Difficulty: Medium]

You are the technical director of WSPT radio, serving listeners nationwide. For simplicity's sake we can consider each listener to live along a horizontal line stretching from `0` (west) to `1000` (east).

Given a list of `N` listeners, and a list of `M` radio towers, each placed at various locations along this line, determine what the minimum broadcast range would have to be in order for each listener's home to be covered.

For example, suppose `listeners = [1, 5, 11, 20]`, and `towers = [4, 8, 15]`. In this case the minimum range would be `5`, since that would be required for the tower at position `15` to reach the listener at position `20`.

[See Solution](/problems/300-399/problem-314.js)

---

## Problem 315 - Google [Difficulty: Easy]

In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.

Here is an example:

    1 2 3 4 8
    5 1 2 3 4
    4 5 1 2 3
    7 4 5 1 2

Write a program to determine whether a given input is a Toeplitz matrix.

[See Solution](/problems/300-399/problem-315.js)

---

## Problem 316 - Snapchat [Difficulty: Medium]

You are given an array of length `N`, where each element `i` represents the number of ways we can produce i units of change. For example, `[1, 0, 1, 1, 2]` would indicate that there is only one way to make `0`, `2`, or `3` units, and two ways of making `4` units.

Given such an array, determine the denominations that must be in use. In the case above, for example, there must be coins with value `2`, `3`, and `4`.

[See Solution](/problems/300-399/problem-316.js)

---

## Problem 317 - Yahoo [Difficulty: Medium]

Write a function that returns the bitwise AND of all integers between `M` and `N`, inclusive.

[See Solution](/problems/300-399/problem-317.js)

---

## Problem 318 - Apple [Difficulty: Hard]

You are going on a road trip, and would like to create a suitable music playlist. The trip will require `N` songs, though you only have `M` songs downloaded, where `M < N`. A valid playlist should select each song at least once, and guarantee a buffer of `B` songs between repeats.

Given `N`, `M`, and `B`, determine the number of valid playlists.

[See Solution](/problems/300-399/problem-318.js)

---

## Problem 319 - Airbnb [Difficulty: Hard]

An 8-puzzle is a game played on a 3 x 3 board of tiles, with the ninth tile missing. The remaining tiles are labeled 1 through 8 but shuffled randomly. Tiles may slide horizontally or vertically into an empty space, but may not be removed from the board.

Design a class to represent the board, and find a series of steps to bring the board to the state [[1, 2, 3], [4, 5, 6], [7, 8, None]].

[See Solution](/problems/300-399/problem-319.js)

---

## Problem 320 - Amazon [Difficulty: Medium]

Given a string, find the length of the smallest window that contains every distinct character. Characters may appear more than once in the window.

For example, given "jiujitsu", you should return `5`, corresponding to the final five letters.

[See Solution](/problems/300-399/problem-320.js)

---

## Problem 321 - PagerDuty [Difficulty: Easy]

Given a positive integer `N`, find the smallest number of steps it will take to reach `1`.

There are two kinds of permitted steps:

* You may decrement `N` to `N - 1`.
* If `a * b = N`, you may decrement `N` to the larger of `a` and `b`.

For example, given `100`, you can reach `1` in five steps with the following route: `100 -> 10 -> 9 -> 3 -> 2 -> 1`.

[See Solution](/problems/300-399/problem-321.js)

---

## Problem 322 - Flipkart [Difficulty: Medium]

Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.

On the `ith` jump, you may move exactly i places to the left or right.

Find a path with the fewest number of jumps required to get from 0 to N.

[See Solution](/problems/300-399/problem-322.js)

---

## Problem 323 - Dropbox [Difficulty: Medium]

Create an algorithm to efficiently compute the approximate median of a list of numbers.

More precisely, given an unordered list of `N` numbers, find an element whose rank is between `N / 4` and `3 * N / 4`, with a high level of certainty, in less than `O(N)` time.

[See Solution](/problems/300-399/problem-323.js)

---

## Problem 324 - Amazon [Difficulty: Easy]

Consider the following scenario: there are `N` mice and `N` holes placed at integer points along a line. Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.

Each move consists of moving one mouse one unit to the left or right, and only one mouse can fit inside each hole.

For example, suppose the mice are positioned at `[1, 4, 9, 15]`, and the holes are located at `[10, -5, 0, 16]`. In this case, the best pairing would require us to send the mouse at `1` to the hole at `-5`, so our function should return `6`.

[See Solution](/problems/300-399/problem-324.js)

---

## Problem 325 - Jane Street [Difficulty: Easy]

The United States uses the imperial system of weights and measures, which means that there are many different, seemingly arbitrary units to measure distance. There are 12 inches in a foot, 3 feet in a yard, 22 yards in a chain, [and so on](https://en.wikipedia.org/wiki/Imperial_units#Length).

Create a data structure that can efficiently convert a certain quantity of one unit to the correct amount of any other unit. You should also allow for additional units to be added to the system.

[See Solution](/problems/300-399/problem-325.js)

---

## Problem 326 - Netflix [Difficulty: Hard]

A Cartesian tree with sequence `S` is a binary tree defined by the following two properties:

* It is heap-ordered, so that each parent value is strictly less than that of its children.
* An in-order traversal of the tree produces nodes with values that correspond exactly to `S`.

For example, given the sequence `[3, 2, 6, 1, 9]`, the resulting Cartesian tree would be:

          1
        /   \   
      2       9
     / \
    3   6

Given a sequence `S`, construct the corresponding Cartesian tree.

[See Solution](/problems/300-399/problem-326.js)

---

## Problem 327 - Salesforce [Difficulty: Easy]

Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

[See Solution](/problems/300-399/problem-327.js)

---

## Problem 328 - Facebook [Difficulty: Medium]

In chess, the Elo rating system is used to calculate player strengths based on game results.

A simplified description of the Elo system is as follows. Every player begins at the same score. For each subsequent game, the loser transfers some points to the winner, where the amount of points transferred depends on how unlikely the win is. For example, a 1200-ranked player should gain much more points for beating a 2000-ranked player than for beating a 1300-ranked player.

Implement this system.

[See Solution](/problems/300-399/problem-328.js)

---

## Problem 329 - Amazon [Difficulty: Hard]

The [stable marriage problem](https://en.wikipedia.org/wiki/Stable_marriage_problem) is defined as follows:

Suppose you have `N` men and `N` women, and each person has ranked their prospective opposite-sex partners in order of preference.

For example, if `N = 3`, the input could be something like this:

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

## Problem 330 - Dropbox [Difficulty: Hard]

A Boolean formula can be said to be satisfiable if there is a way to assign truth values to each variable such that the entire formula evaluates to true.

For example, suppose we have the following formula, where the symbol `¬` is used to denote negation:

    (¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)

One way to satisfy this formula would be to let `a = False`, `b = True`, and `c = True`.

This type of formula, with `AND` statements joining tuples containing exactly one `OR`, is known as `2-CNF`.

Given a `2-CNF` formula, find a way to assign truth values to satisfy it, or return `False` if this is impossible.

[See Solution](/problems/300-399/problem-330.js)

---

## Problem 331 - LinkedIn [Difficulty: Medium]

You are given a string consisting of the letters `x` and `y`, such as `xyxxxyxyy`. In addition, you have an operation called `flip`, which changes a single `x` to `y` or vice versa.

Determine how many times you would need to apply this operation to ensure that all `x`'s come before all `y`'s. In the preceding example, it suffices to flip the second and sixth characters, so you should return `2`.

[See Solution](/problems/300-399/problem-331.js)

---

## Problem 332 - Jane Street [Difficulty: Easy]

Given integers `M` and `N`, write a program that counts how many positive integer pairs `(a, b)` satisfy the following conditions:

* `a + b = M`
* `a XOR b = N`

[See Solution](/problems/300-399/problem-332.js)

---

## Problem 333 - Pinterest [Difficulty: Medium]

At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). To help figure out who this is, you have access to an `O(1)` method called `knows(a, b)`, which returns `True` if person `a` knows person `b`, else `False`.

Given a list of `N` people and the above operation, find a way to identify the celebrity in `O(N)` time.

[See Solution](/problems/300-399/problem-333.js)

---

## Problem 334 - Twitter [Difficulty: Easy]

The `24` game is played as follows. You are given a list of four integers, each between `1` and `9`, in a fixed order. By placing the operators `+`, `-`, `*`, and `/` between the numbers, and grouping them with parentheses, determine whether it is possible to reach the value `24`.

For example, given the input `[5, 2, 7, 8]`, you should return `True`, since `(5 * 2 - 7) * 8 = 24`.

Write a function that plays the `24` game.

[See Solution](/problems/300-399/problem-334.js)

---

## Problem 335 - Google [Difficulty: Hard]

PageRank is an algorithm used by Google to rank the importance of different websites. While there have been changes over the years, the central idea is to assign each site a score based on the importance of other pages that link to that page.

More mathematically, suppose there are `N` sites, and each site `i` has a certain count `Ci` of outgoing links. Then the score for a particular site `Sj` is defined as :

    score(Sj) = (1 - d) / N + d * (score(Sx) / Cx+ score(Sy) / Cy+ ... + score(Sz) / Cz))

Here, `Sx`, `Sy`, `...`, `Sz` denote the scores of all the other sites that have outgoing links to `Sj`, and `d` is a damping factor, usually set to around `0.85`, used to model the probability that a user will stop searching.

Given a directed graph of links between various websites, write a program that calculates each site's page rank.

[See Solution](/problems/300-399/problem-335.js)

---

## Problem 336 - Microsoft [Difficulty: Medium]

Write a program to determine how many distinct ways there are to create a max heap from a list of N given integers.

For example, if `N = 3`, and our integers are `[1, 2, 3]`, there are two ways, shown below.

        3      3
       / \    / \
      1   2  2   1

[See Solution](/problems/300-399/problem-336.js)

---

## Problem 337 - Apple [Difficulty: Hard]

Given a linked list, uniformly shuffle the nodes. What if we want to prioritize space over time?

[See Solution](/problems/300-399/problem-337.js)

---

## Problem 338 - Facebook [Difficulty: Medium]

Given an integer n, find the next biggest integer with the same number of 1-bits on. For example, given the number 6 (`0110` in binary), return 9 (`1001`).

[See Solution](/problems/300-399/problem-338.js)

---

## Problem 339 - Microsoft [Difficulty: Easy]

Given an array of numbers and a number `k`, determine if there are three entries in the array which add up to the specified number `k`. For example, given `[20, 303, 3, 4, 25]` and `k = 49`, return `true` as `20 + 4 + 25 = 49`.

[See Solution](/problems/300-399/problem-339.js)

---

## Problem 340 - Google [Difficulty: Easy]

Given a set of points (x, y) on a 2D cartesian plane, find the two closest points. For example, given the points `[(1, 1), (-1, -1), (3, 4), (6, 1), (-1, -6), (-4, -3)]`, return `[(-1, -1), (1, 1)]`.

[See Solution](/problems/300-399/problem-340.js)

---

## Problem 341 - Google [Difficulty: Easy]

You are given an N by N matrix of random letters and a dictionary of words. Find the maximum number of words that can be packed on the board from the given dictionary.

A word is considered to be able to be packed on the board if:

* It can be found in the dictionary
* It can be constructed from untaken letters by other words found so far on the board
* The letters are adjacent to each other (vertically and horizontally, not diagonally).

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

## Problem 342 - Stripe [Difficulty: Medium]

`reduce` (also known as `fold`) is a function that takes in an array, a combining function, and an initial value and builds up a result by calling the combining function on each element of the array, left to right. For example, we can write `sum()` in terms of `reduce`:

    def add(a, b):
        return a + b

    def sum(lst):
        return reduce(lst, add, 0)

This should call `add` on the initial value with the first element of the array, and then the result of that with the second element of the array, and so on until we reach the end, when we return the sum of the array.

Implement your own version of `reduce`.

[See Solution](/problems/300-399/problem-342.js)

---

## Problem 343 - Google [Difficulty: Medium]

Given a binary search tree and a range `[a, b]` (inclusive), return the sum of the elements of the binary search tree within the range.

For example, given the following tree:

        5
       / \
      3   8
     / \ / \
    2  4 6  10

and the range `[4, 9]`, return `23` (5 + 4 + 6 + 8).

[See Solution](/problems/300-399/problem-343.js)

---

## Problem 344 - Adobe [Difficulty: Hard]

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

## Problem 345 - Google [Difficulty: Medium]

You are given a set of synonyms, such as `(big, large)` and `(eat, consume)`. Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

* "He wants to eat food."  
* "He wants to consume food."

Note that the synonyms `(a, b)` and `(a, c)` do not necessarily imply `(b, c)`: consider the case of `(coach, bus)` and `(coach, teacher)`.

Follow-up: what if we can assume that `(a, b)` and `(a, c)` do in fact imply `(b, c)`?

[See Solution](/problems/300-399/problem-345.js)

---

## Problem 346 - Airbnb [Difficulty: Medium]

You are given a huge list of airline ticket prices between different cities around the world on a given day. These are all direct flights. Each element in the list has the format `(source_city, destination, price)`.

Consider a user who is willing to take up to `k` connections from their origin city `A` to their destination `B`. Find the cheapest fare possible for this journey and print the itinerary for that journey.

For example, our traveler wants to go from `JFK` to `LAX` with up to `3` connections, and our input flights are as follows:

    [
        ('JFK', 'ATL', 150),
        ('ATL', 'SFO', 400),
        ('ORD', 'LAX', 200),
        ('LAX', 'DFW', 80),
        ('JFK', 'HKG', 800),
        ('ATL', 'ORD', 90),
        ('JFK', 'LAX', 500),
    ]

Due to some improbably low flight prices, the cheapest itinerary would be `JFK -> ATL -> ORD -> LAX`, costing $440.

[See Solution](/problems/300-399/problem-346.js)

---

## Problem 347 - Yahoo [Difficulty: Easy]

You are given a string of length `N` and a parameter `k`. The string can be manipulated by taking one of the first `k` letters and moving it to the end.

Write a program to determine the lexicographically smallest string that can be created after an unlimited number of moves.

For example, suppose we are given the string `daily` and `k = 1`. The best we can create in this case is `ailyd`.

[See Solution](/problems/300-399/problem-347.js)

---

## Problem 348 - Zillow [Difficulty: Easy]

A ternary search tree is a trie-like data structure where each node may have up to three children. Here is an example which represents the words `code`, `cob`, `be`, `ax`, `war`, and `we`.

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

For instance, since `code` is the first word inserted in the tree, and `cob` lexicographically precedes `cod`, `cob` is represented as a left child extending from `cod`.

Implement insertion and search functions for a ternary search tree.

[See Solution](/problems/300-399/problem-348.js)

---

## Problem 349 - Grammarly [Difficulty: Hard]

[Soundex](https://en.wikipedia.org/wiki/Soundex) is an algorithm used to categorize phonetically, such that two names that sound alike but are spelled differently have the same representation.

Soundex maps every name to a string consisting of one letter and three numbers, like M460.

One version of the algorithm is as follows:

1. Remove consecutive consonants with the same sound (for example, change `ck -> c`).
2. Keep the first letter. The remaining steps only apply to the rest of the string.
3. Remove all vowels, including `y`, `w`, and `h`.
4. Replace all consonants with the following digits:
    * b, f, p, v → 1
    * c, g, j, k, q, s, x, z → 2
    * d, t → 3
    * l → 4
    * m, n → 5
    * r → 6

5. If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.

Using this scheme, `Jackson` and `Jaxen` both map to `J250`.

Implement Soundex.

[See Solution](/problems/300-399/problem-349.js)

---

## Problem 350 - Uber [Difficulty: Medium]

Write a program that determines the smallest number of perfect squares that sum up to `N`.

Here are a few examples:

* Given `N = 4`, return `1` (4)
* Given `N = 17`, return `2` (16 + 1)
* Given `N = 18`, return `2` (9 + 9)

[See Solution](/problems/300-399/problem-350.js)

---

## Problem 351 - Quora [Difficulty: Hard]

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

## Problem 352 - Palantir [Difficulty: Easy]

A typical American-style crossword puzzle grid is an `N x N` matrix with black and white squares, which obeys the following rules:

* Every white square must be part of an "across" word and a "down" word.
* No word can be fewer than three letters long.
* Every white square must be reachable from every other white square.
* The grid is rotationally symmetric (for example, the colors of the top left and bottom right squares must match).

Write a program to determine whether a given matrix qualifies as a crossword grid.

[See Solution](/problems/300-399/problem-352.js)

---

## Problem 353 - Square [Difficulty: Medium]

You are given a histogram consisting of rectangles of different heights. These heights are represented in an input list, such that `[1, 3, 2, 5]` corresponds to the following diagram:

          x
          x  
      x   x
      x x x
    x x x x

Determine the area of the largest rectangle that can be formed only from the bars of the histogram. For the diagram above, for example, this would be six, representing the `2 x 3` area at the bottom right.

[See Solution](/problems/300-399/problem-353.js)

---

## Problem 354 - Google [Difficulty: Hard]

Design a system to crawl and copy all of Wikipedia using a distributed network of machines.

More specifically, suppose your server has access to a set of client machines. Your client machines can execute code you have written to access Wikipedia pages, download and parse their data, and write the results to a database.

Some questions you may want to consider as part of your solution are:

* How will you reach as many pages as possible?
* How can you keep track of pages that have already been visited?
* How will you deal with your client machines being blacklisted?
* How can you update your database when Wikipedia pages are added or updated?

[See Solution](/problems/300-399/problem-354.js)

---

## Problem 355 - Airbnb [Difficulty: Hard]

You are given an array `X` of floating-point numbers `x1, x2, ... xn`. These can be rounded up or down to create a corresponding array `Y` of integers `y1, y2, ... yn`.

Write an algorithm that finds an appropriate `Y` array with the following properties:

* The rounded sums of both arrays should be equal.
* The absolute pairwise difference between elements is minimized. In other words, `|x1- y1| + |x2- y2| + ... + |xn- yn|` should be as small as possible.

For example, suppose your input is `[1.3, 2.3, 4.4]`. In this case you cannot do better than `[1, 2, 5]`, which has an absolute difference of `|1.3 - 1| + |2.3 - 2| + |4.4 - 5| = 1`.

[See Solution](/problems/300-399/problem-355.js)

---

## Problem 356 - Netflix [Difficulty: Hard]

Implement a queue using a set of fixed-length arrays.

The queue should support `enqueue`, `dequeue`, and `get_size` operations.

[See Solution](/problems/300-399/problem-356.js)

---

## Problem 357 - LinkedIn [Difficulty: Hard]

You are given a binary tree in a peculiar string representation. Each node is written in the form `(lr)`, where `l` corresponds to the left child and `r` corresponds to the right child.

If either `l` or `r` is null, it will be represented as a zero. Otherwise, it will be represented by a new `(lr)` pair.

Here are a few examples:

* A root node with no children: `(00)`
* A root node with two children: `((00)(00))`
* An unbalanced tree with three consecutive left children: `((((00)0)0)0)`

Given this representation, determine the depth of the tree.

[See Solution](/problems/300-399/problem-357.js)

---

## Problem 358 - Dropbox [Difficulty: Hard]

Create a data structure that performs all the following operations in `O(1)` time:

* `plus`: Add a key with value `1`. If the key already exists, increment its value by one.
* `minus`: Decrement the value of a key. If the key's value is currently `1`, remove it.
* `get_max`: Return a key with the highest value.
* `get_min`: Return a key with the lowest value.

[See Solution](/problems/300-399/problem-358.js)

---

## Problem 359 - Slack [Difficulty: Easy]

You are given a string formed by concatenating several words corresponding to the integers zero through nine and then anagramming.

For example, the input could be 'niesevehrtfeev', which is an anagram of 'threefiveseven'. Note that there can be multiple instances of each integer.

Given this string, return the original integers in sorted order. In the example above, this would be `357`.

[See Solution](/problems/300-399/problem-359.js)

---

## Problem 360 - Spotify [Difficulty: Medium]

You have access to ranked lists of songs for various users. Each song is represented as an integer, and more preferred songs appear earlier in each list. For example, the list `[4, 1, 7]` indicates that a user likes song `4` the best, followed by songs `1` and `7`.

Given a set of these ranked lists, interleave them to create a playlist that satisfies everyone's priorities.

For example, suppose your input is `{[1, 7, 3], [2, 1, 6, 7, 9], [3, 9, 5]}`. In this case a satisfactory playlist could be `[2, 1, 6, 7, 3, 9, 5]`.

[See Solution](/problems/300-399/problem-360.js)

---

## Problem 361 - Facebook [Difficulty: Medium]

Mastermind is a two-player game in which the first player attempts to guess the secret code of the second. In this version, the code may be any six-digit number with all distinct digits.

Each turn the first player guesses some number, and the second player responds by saying how many digits in this number correctly matched their location in the secret code. For example, if the secret code were `123456`, then a guess of `175286` would score two, since `1` and `6` were correctly placed.

Write an algorithm which, given a sequence of guesses and their scores, determines whether there exists some secret code that could have produced them.

For example, for the following scores you should return `True`, since they correspond to the secret code `123456`:

    {175286: 2, 293416: 3, 654321: 0}

However, it is impossible for any key to result in the following scores, so in this case you should return `False`:

    {123456: 4, 345678: 4, 567890: 4}

[See Solution](/problems/300-399/problem-361.js)

---

## Problem 362 - Twitter [Difficulty: Easy]

A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, `16891` is strobogrammatic.

Create a program that finds all strobogrammatic numbers with `N` digits.

[See Solution](/problems/300-399/problem-362.js)

---

## Problem 363 - Squarespace [Difficulty: Medium]

Write a function, `add_subtract`, which alternately adds and subtracts curried arguments. Here are some sample operations:

    add_subtract(7) -> 7

    add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

    add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11

[See Solution](/problems/300-399/problem-363.js)

---

## Problem 364 - Facebook [Difficulty: Medium]

Describe an algorithm to compute the longest increasing subsequence of an array of numbers in `O(n log n)` time.

[See Solution](/problems/300-399/problem-364.js)

---

## Problem 365 - Google [Difficulty: Hard]

A quack is a data structure combining properties of both stacks and queues. It can be viewed as a list of elements written left to right such that three operations are possible:

* `push(x)`: add a new item x to the left end of the list
* `pop()`: remove and return the item on the left end of the list
* `pull()`: remove the item on the right end of the list.

Implement a quack using three stacks and `O(1)` additional memory, so that the amortized time for any push, pop, or pull operation is `O(1)`.

[See Solution](/problems/300-399/problem-365.js)

---

## Problem 366 - Flexport [Difficulty: Medium]

Given a string `s`, rearrange the characters so that any two adjacent characters are not the same. If this is not possible, return null.

For example, if `s = yyz` then return `yzy`. If `s = yyy` then return null.

[See Solution](/problems/300-399/problem-366.js)

---

## Problem 367 - Two Sigma [Difficulty: Medium]

Given two sorted iterators, merge it into one iterator.

For example, given these two iterators:

    foo = iter([5, 10, 15])
    bar = iter([3, 8, 9])

You should be able to do:

    for num in merge_iterators(foo, bar):
        print(num)

    # 3
    # 5
    # 8
    # 9
    # 10
    # 15

Bonus: Make it work without pulling in the contents of the iterators in memory.

[See Solution](/problems/300-399/problem-367.js)

---

## Problem 368 - Google [Difficulty: Hard]

Implement a key value store, where keys and values are integers, with the following methods:

* `update(key, vl)`: updates the value at `key` to `val`, or sets it if doesn't exist
* `get(key)`: returns the value with key, or `None` if no such value exists
* `max_key(val)`: returns the largest key with value `val`, or `None` if no key with that value exists

For example, if we ran the following calls:

    kv.update(1, 1)
    kv.update(2, 1)

And then called `kv.max_key(1)`, it should return `2`, since it's the largest key with value `1`.

[See Solution](/problems/300-399/problem-368.js)

---

## Problem 369 - Two Sigma [Difficulty: Medium]

You’re tracking stock price at a given instance of time. Implement an API with the following functions: add(), update(), remove(), which adds/updates/removes a data point for the stock price you are tracking. The data is given as (timestamp, price), where timestamp is specified in unix epoch time.

Also, provide max(), min(), and average() functions that give the max/min/average of all values seen thus far.

[See Solution](/problems/300-399/problem-369.js)

---

## Problem 370 - Postmates [Difficulty: Easy]

The “active time” of a courier is the time between the pickup and dropoff of a delivery. Given a set of data formatted like the following:

    (delivery id, timestamp, pickup/dropoff)

Calculate the total active time in seconds. A courier can pick up multiple orders before dropping them off. The timestamp is in unix epoch seconds.

For example, if the input is the following:

    (1, 1573280047, 'pickup')
    (1, 1570320725, 'dropoff')
    (2, 1570321092, 'pickup')
    (3, 1570321212, 'pickup')
    (3, 1570322352, 'dropoff')
    (2, 1570323012, 'dropoff')

The total active time would be 1260 seconds.

[See Solution](/problems/300-399/problem-370.js)

---

## Problem 371 - Google [Difficulty: Hard]

You are given a series of arithmetic equations as a string, such as:

    y = x + 1
    5 = x + 3
    10 = z + y + 2

The equations use addition only and are separated by newlines. Return a mapping of all variables to their values. If it's not possible, then return null. In this example, you should return:

    {
        x: 2,
        y: 3,
        z: 5
    }

[See Solution](/problems/300-399/problem-371.js)

---

## Problem 372 - Amazon [Difficulty: Easy]

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops.

[See Solution](/problems/300-399/problem-372.js)

---

## Problem 373 - Facebook [Difficulty: Hard]

Given a list of integers L, find the maximum length of a sequence of consecutive numbers that can be formed using elements from L.

For example, given `L = [5, 2, 99, 3, 4, 1, 100]`, return 5 as we can build a sequence `[1, 2, 3, 4, 5]` which has length 5.

[See Solution](/problems/300-399/problem-373.js)

---

## Problem 374 - Amazon [Difficulty: Hard]

Given a sorted array arr of distinct integers, return the lowest index i for which arr[i] == i. Return null if there is no such index.

For example, given the array [-5, -3, 2, 3], return 2 since arr[2] == 2. Even though arr[3] == 3, we return 2 since it's the lowest index.

[See Solution](/problems/300-399/problem-374.js)

---

## Problem 375 - Google [Difficulty: Medium]

The h-index is a metric used to measure the impact and productivity of a scientist or researcher.

A scientist has index _h_ if _h_ of their _N_ papers have at least _h_ citations each, and the other N - h papers have no more than _h_ citations each. If there are multiple possible values for _h_, the maximum value is used.

Given an array of natural numbers, with each value representing the number of citations of a researcher's paper, return the h-index of that researcher.

For example, if the array was:

    [4, 0, 0, 2, 3]

This means the researcher has 5 papers with 4, 1, 0, 2, and 3 citations respectively. The h-index for this researcher is 2, since they have 2 papers with at least 2 citations and the remaining 3 papers have no more than 2 citations.

[See Solution](/problems/300-399/problem-375.js)

---

## Problem 376 - Google [Difficulty: Easy]

You are writing an AI for a 2D map game. You are somewhere in a 2D grid, and there are coins strewn about over the map.

Given the position of all the coins and your current position, find the closest coin to you in terms of Manhattan distance. That is, you can move around up, down, left, and right, but not diagonally. If there are multiple possible closest coins, return any of them.

For example, given the following map, where you are `x`, coins are `o`, and empty spaces are `.` (top left is 0, 0):

    ---------------------
    | . | . | x | . | o |
    ---------------------
    | o | . | . | . | . |
    ---------------------
    | o | . | . | . | o |
    ---------------------
    | . | . | o | . | . |
    ---------------------

return `(0, 4)`, since that coin is closest. This map would be represented in our question as:

    Our position: (0, 2)
    Coins: [(0, 4), (1, 0), (2, 0), (3, 2)]

[See Solution](/problems/300-399/problem-376.js)

---

## Problem 377 - Microsoft [Difficulty: Hard]

Given an array of numbers `arr` and a window of size `k`, print out the median of each window of size `k` starting from the left and moving right by one position each time.

For example, given the following array and `k = 3`:

    [-1, 5, 13, 8, 2, 3, 3, 1]

Your function should print out the following:

    5 <- median of [-1, 5, 13]
    8 <- median of [5, 13, 8]
    8 <- median of [13, 8, 2]
    3 <- median of [8, 2, 3]
    3 <- median of [2, 3, 3]
    3 <- median of [3, 3, 1]

Recall that the median of an even-sized list is the average of the two middle numbers.

[See Solution](/problems/300-399/problem-377.js)

---

## Problem 378 - Coinbase [Difficulty: Medium]

Write a function that takes in a number, string, list, or dictionary and returns its JSON encoding. It should also handle nulls.

For example, given the following input:

    [None, 123, ["a", "b"], {"c":"d"}]

You should return the following, as a string:

    '[null, 123, ["a", "b"], {"c": "d"}]'

[See Solution](/problems/300-399/problem-378.js)

---

## Problem 379 - Microsoft [Difficulty: Easy]

Given a string, generate all possible subsequences of the string.

For example, given the string `xyz`, return an array or set with the following strings:

    x
    y
    z
    xy
    xz
    yz
    xyz

Note that `zx` is not a valid subsequence since it is not in the order of the given string.

[See Solution](/problems/300-399/problem-379.js)

---

## Problem 380 - Nextdoor [Difficulty: Medium]

Implement integer division without using the division operator. Your function should return a tuple of (dividend, remainder) and it should take two numbers, the product and divisor.

For example, calling `divide(10, 3)` should return `(3, 1)` since the divisor is 3 and the remainder is 1.

Bonus: Can you do it in O(log n) time?

[See Solution](/problems/300-399/problem-380.js)

---

## Problem 381 - Paypal [Difficulty: Easy]

Read [this Wikipedia article on Base64 encoding](https://en.wikipedia.org/wiki/Base64).

Implement a function that converts a hex string to base64.

For example, the string:

    deadbeef

should produce:

    3q2+7w==

[See Solution](/problems/300-399/problem-381.js)

---

## Problem 382 - Google [Difficulty: Easy]

Yesterday you implemented a function that encodes a hexadecimal string into Base64.

Write a function to decode a Base64 string back to a hexadecimal string.

For example, the following string:

    3q2+7w==

should produce:

    deadbeef

[See Solution](/problems/300-399/problem-382.js)

---

## Problem 383 - Gusto [Difficulty: Medium]

Implement the function `embolden(s, lst)` which takes in a string `s` and list of substrings `lst`, and wraps all substrings in `s` with an HTML bold tag `<b>` and `</b>`.

If two bold tags overlap or are contiguous, they should be merged.

For example, given `s = abcdefg` and `lst = ["bc", "ef"]`, return the string `a<b>bc</b>d<b>ef</b>g`.

Given `s = abcdefg` and `lst = ["bcd", "def"]`, return the string `a<b>bcdef</b>g`, since they overlap.

[See Solution](/problems/300-399/problem-383.js)

---

## Problem 384 - WeWork [Difficulty: Hard]

You are given an array of integers representing coin denominations and a total amount of money. Write a function to compute the fewest number of coins needed to make up that amount. If it is not possible to make that amount, return null.

For example, given an array of `[1, 5, 10]` and an amount `56`, return `7` since we can use 5 dimes, 1 nickel, and 1 penny.

Given an array of `[5, 8]` and an amount `15`, return `3` since we can use 5 5-cent coins.

[See Solution](/problems/300-399/problem-384.js)

---

## Problem 385 - Apple [Difficulty: Medium]

You are given a hexadecimal-encoded string that has been XOR'd against a single char.

Decrypt the message. For example, given the string:

    7a575e5e5d12455d405e561254405d5f1276535b5e4b12715d565b5c551262405d505e575f

You should be able to decrypt it and get:

    Hello world from Daily Coding Problem

[See Solution](/problems/300-399/problem-385.js)

---

## Problem 386 - Twitter [Difficulty: Easy]

Given a string, sort it in decreasing order based on the frequency of characters. If there are multiple possible solutions, return any of them.

For example, given the string `tweet`, return `tteew`. `eettw` would also be acceptable.

[See Solution](/problems/300-399/problem-386.js)

---

## Problem 387 - Amazon [Difficulty: Medium]

How would you explain the difference between an API and SDK to a non-technical person?

[See Solution](/problems/300-399/problem-387.js)

---

## Problem 388 - Airtable [Difficulty: Medium]

How would you explain web cookies to someone non-technical?

[See Solution](/problems/300-399/problem-388.js)

---

## Problem 389 - Google [Difficulty: Hard]

Explain the difference between composition and inheritance. In which cases would you use each?

[See Solution](/problems/300-399/problem-389.js)

---

## Problem 390 - Two Sigma [Difficulty: Medium]

You are given an unsorted list of 999,000 unique integers, each from 1 and 1,000,000. Find the missing 1000 numbers. What is the computational and space complexity of your solution?

[See Solution](/problems/300-399/problem-390.js)

---

## Problem 391 - Facebook [Difficulty: Hard]

We have some historical clickstream data gathered from our site anonymously using cookies. The histories contain URLs that users have visited in chronological order.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appear in both.

For example, given the following two users' histories:

    user1 = ['/home', '/register', '/login', '/user', '/one', '/two']
    user2 = ['/home', '/red', '/login', '/user', '/one', '/pink']

You should return the following:

    ['/login', '/user', '/one']

[See Solution](/problems/300-399/problem-391.js)

---

## Problem 392 - Google [Difficulty: Hard]

You are given a 2D matrix of 1s and 0s where 1 represents land and 0 represents water.

Grid cells are connected horizontally orvertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

An island is a group is cells connected horizontally or vertically, but not diagonally. There is guaranteed to be exactly one island in this grid, and the island doesn't have water inside that isn't connected to the water around the island. Each cell has a side length of 1.

Determine the perimeter of this island.

For example, given the following matrix:

    [[0, 1, 1, 0],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0]]

Return `14`.

[See Solution](/problems/300-399/problem-392.js)

---

## Problem 393 - Airbnb [Difficulty: Medium]

Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.

For example, given the array `[9, 6, 1, 3, 8, 10, 12, 11]`, return `(8, 12)` since 8, 9, 10, 11, and 12 are all in the array.

[See Solution](/problems/300-399/problem-393.js)

---

## Problem 394 - Uber [Difficulty: Easy]

Given a binary tree and an integer k, return whether there exists a root-to-leaf path that sums up to `k`.

For example, given `k = 18` and the following binary tree:

        8
       / \
      4   13
     / \   \
    2   6   19

Return `True` since the path `8 -> 4 -> 6` sums to 18.

[See Solution](/problems/300-399/problem-394.js)

---

## Problem 395 - Robinhood [Difficulty: Medium]

Given an array of strings, group anagrams together.

For example, given the following array:

    ['eat', 'ate', 'apt', 'pat', 'tea', 'now']

Return:

    [['eat', 'ate', 'tea'],
    ['apt', 'pat'],
    ['now']]

[See Solution](/problems/300-399/problem-395.js)

---

## Problem 396 - Google [Difficulty: Hard]

Given a string, return the length of the longest palindromic subsequence in the string.

For example, given the following string:

    MAPTPTMTPA

Return 7, since the longest palindromic subsequence in the string is `APTMTPA`. Recall that a subsequence of a string does not have to be contiguous!

Your algorithm should run in O(n^2) time and space.

[See Solution](/problems/300-399/problem-396.js)

---

## Problem 397 - Microsoft [Difficulty: Medium]

You are given a list of jobs to be done, where each job is represented by a start time and end time. Two jobs are compatible if they don't overlap. Find the largest subset of compatible jobs.

For example, given the following jobs (there is no guarantee that jobs will be sorted):

    [(0, 6),
    (1, 4),
    (3, 5),
    (3, 8),
    (4, 7),
    (5, 9),
    (6, 10),
    (8, 11)]

Return:

    [(1, 4),
    (4, 7),
    (8, 11)]

[See Solution](/problems/300-399/problem-397.js)

---

## Problem 398 - Amazon [Difficulty: Medium]

Given a linked list and an integer `k`, remove the k-th node from the end of the list and return the head of the list.

`k` is guaranteed to be smaller than the length of the list.

Do this in one pass.

[See Solution](/problems/300-399/problem-398.js)

---

## Problem 399 - Facebook [Difficulty: Hard]

Given a list of strictly positive integers, partition the list into 3 contiguous partitions which each sum up to the same value. If not possible, return null.

For example, given the following list:

    [3, 5, 8, 0, 8]

Return the following 3 partitions:

    [[3, 5],
     [8, 0],
     [8]]

Which each add up to 8.

[See Solution](/problems/300-399/problem-399.js)

---

## Problem 400 - Goldman Sachs [Difficulty: Hard]

Given a list of numbers `L`, implement a method `sum(i, j)` which returns the sum from the sublist `L[i:j]` (including `i`, excluding `j`).

For example, given `L = [1, 2, 3, 4, 5]`, `sum(1, 3)` should return `sum([2, 3])`, which is `5`.

You can assume that you can do some pre-processing. `sum()` should be optimized over the pre-processing step.

[See Solution](/problems/400-499/problem-400.js)

---

## Problem 401 - Twitter [Difficulty: Easy]

A permutation can be specified by an array `P`, where `P[i]` represents the location of the element at `i` in the permutation. For example, `[2, 1, 0]` represents the permutation where elements at the index `0` and `2` are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array `["a", "b", "c"]` and the permutation `[2, 1, 0]`, return `["c", "b", "a"]`.

[See Solution](/problems/400-499/problem-401.js)

---

## Problem 402 - Twitter [Difficulty: Easy]

A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, `16891` is strobogrammatic.

Create a program that finds all strobogrammatic numbers with `N` digits.

[See Solution](/problems/400-499/problem-402.js)

---

## Problem 403 - Two Sigma [Difficulty: Easy]

Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

[See Solution](/problems/400-499/problem-403.js)

---

## Problem 404 - Snapchat [Difficulty: Easy]

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

[See Solution](/problems/400-499/problem-404.js)

---

## Problem 405 - Apple [Difficulty: Hard]

Given a tree, find the largest tree/subtree that is a BST.

Given a tree, return the size of the largest tree/subtree that is a BST.

[See Solution](/problems/400-499/problem-405.js)

---

## Problem 406 - Quantcast [Difficulty: Hard]

You are presented with an array representing a Boolean expression. The elements are of two kinds:

* `T` and `F`, representing the values `True` and `False`.
* `&`, `|`, and `^`, representing the bitwise operators for `AND`, `OR`, and `XOR`.

Determine the number of ways to group the array elements using parentheses so that the entire expression evaluates to `True`.

For example, suppose the input is `['F', '|', 'T', '&', 'T']`. In this case, there are two acceptable groupings: `(F | T) & T` and `F | (T & T)`.

[See Solution](/problems/400-499/problem-406.js)

---

## Problem 407 - Samsung [Difficulty: Medium]

A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where `A`, `B`, and `C` are houses, and arrows represent pipes:

    A <--> B <--> C <--> plant

Each pipe has an associated cost, which the utility company would like to minimize. Given an undirected graph of pipe connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from `plant` to `A`, `plant` to `B`, and `B` to `C`, for a total cost of `16`.

    pipes = {
        'plant': {'A': 1, 'B': 5, 'C': 20},
        'A': {'C': 15},
        'B': {'C': 10},
        'C': {}
    }

[See Solution](/problems/400-499/problem-407.js)

---

## Problem 408 - Facebook [Difficulty: Medium]

Given an array of numbers representing the stock prices of a company in chronological order and an integer `k`, return the maximum profit you can make from `k` buys and sells. You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.

For example, given `k` = 2 and the array `[5, 2, 4, 0, 1]`, you should return 3.

[See Solution](/problems/400-499/problem-408.js)

---

## Problem 409 - Google [Difficulty: Hard]

PageRank is an algorithm used by Google to rank the importance of different websites. While there have been changes over the years, the central idea is to assign each site a score based on the importance of other pages that link to that page.

More mathematically, suppose there are `N` sites, and each site `i` has a certain count `Ci` of outgoing links. Then the score for a particular site `Sj` is defined as :

    score(Sj) = (1 - d) / N + d * (score(Sx) / Cx+ score(Sy) / Cy+ ... + score(Sz) / Cz))

Here, `Sx`, `Sy`, `...`, `Sz` denote the scores of all the other sites that have outgoing links to `Sj`, and `d` is a damping factor, usually set to around `0.85`, used to model the probability that a user will stop searching.

Given a directed graph of links between various websites, write a program that calculates each site's page rank.

[See Solution](/problems/400-499/problem-409.js)

---

## Problem 410 - Airbnb [Difficulty: Hard]

You are given an array `X` of floating-point numbers `x1`, `x2`, ... `xn`. These can be rounded up or down to create a corresponding array `Y` of integers `y1`, `y2`, ... `yn`.

Write an algorithm that finds an appropriate `Y` array with the following properties:

* The rounded sums of both arrays should be equal.
* The absolute pairwise difference between elements is minimized. In other words, `|x1- y1| + |x2- y2| + ... + |xn- yn|` should be as small as possible.

For example, suppose your input is `[1.3, 2.3, 4.4]`. In this case you cannot do better than `[1, 2, 5]`, which has an absolute difference of `|1.3 - 1| + |2.3 - 2| + |4.4 - 5| = 1`.

[See Solution](/problems/400-499/problem-410.js)

---

## Problem 411 - Google [Difficulty: Hard]

Given a string which we can delete at most k, return whether you can make a palindrome.

For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.

[See Solution](/problems/400-499/problem-411.js)

---

## Problem 412 - Epic [Difficulty: Medium]

The "look and say" sequence is defined as follows: beginning with the term `1`, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:

    1
    11
    21
    1211
    111221

As an example, the fourth term is `1211`, since the third term consists of one `2` and one `1`.

Given an integer `N`, print the `Nth` term of this sequence.

[See Solution](/problems/400-499/problem-412.js)

---

## Problem 413 - Amazon [Difficulty: Hard]

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

* 1, 1, 1, 1
* 2, 1, 1
* 1, 2, 1
* 1, 1, 2
* 2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

[See Solution](/problems/400-499/problem-413.js)

---

## Problem 414 - Microsoft [Difficulty: Hard]

You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.

[See Solution](/problems/400-499/problem-414.js)

---

## Problem 415 - Affirm [Difficulty: Hard]

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock. You're also given a number `fee` that represents a transaction fee for each buy and sell transaction.

You must buy before you can sell the stock, but you can make as many transactions as you like.

For example, given [1, 3, 2, 8, 4, 10] and `fee = 2`, you should return 9, since you could buy the stock at 1 dollar, and sell at 8 dollars, and then buy it at 4 dollars and sell it at 10 dollars. Since we did two transactions, there is a 4 dollar fee, so we have 7 + 6 = 13 profit minus 4 dollars of fees.

[See Solution](/problems/400-499/problem-415.js)

---

## Problem 416 - Google [Difficulty: Easy]

You are in an infinite 2D grid where you can move in any of the 8 directions:

    (x,y) to
        (x+1, y),
        (x - 1, y),
        (x, y+1),
        (x, y-1),
        (x-1, y-1),
        (x+1,y+1),
        (x-1,y+1),
        (x+1,y-1)

You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:

    Input: [(0, 0), (1, 1), (1, 2)]
    Output: 2

It takes 1 step to move from `(0, 0)` to `(1, 1)`. It takes one more step to move from `(1, 1)` to `(1, 2)`.

[See Solution](/problems/400-499/problem-416.js)

---

## Problem 417 - Amazon [Difficulty: Easy]

Given a linked list, remove all consecutive nodes that sum to zero. Print out the remaining nodes.

For example, suppose you are given the input `3 -> 4 -> -7 -> 5 -> -6 -> 6`. In this case, you should first remove `3 -> 4 -> -7`, then `-6 -> 6`, leaving only `5`.

[See Solution](/problems/400-499/problem-417.js)

---

## Problem 418 - Atlassian [Difficulty: Easy]

MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written. They would like to give the smallest positive amount to each worker consistent with the constraint that if a developer has written more lines of code than their neighbor, they should receive more money.

Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

For example, given `[10, 40, 200, 1000, 60, 30]`, you should return `[1, 2, 3, 4, 2, 1]`.

[See Solution](/problems/400-499/problem-418.js)

---

## Problem 419 - PagerDuty [Difficulty: Easy]

Given a positive integer `N`, find the smallest number of steps it will take to reach `1`.

There are two kinds of permitted steps:

* You may decrement `N` to `N - 1`.
* If `a * b = N`, you may decrement N to the larger of `a` and `b`.

For example, given `100`, you can reach `1` in five steps with the following route: `100 -> 10 -> 9 -> 3 -> 2 -> 1`.

[See Solution](/problems/400-499/problem-419.js)

---

## Problem 420 - Microsoft [Difficulty: Easy]

A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer `n`, return the `n-th` perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.

[See Solution](/problems/400-499/problem-420.js)

---

## Problem 421 - Amazon [Difficulty: Medium]

Given an array of a million integers between zero and a billion, out of order, how can you efficiently sort it? Assume that you cannot store an array of a billion elements in memory.

[See Solution](/problems/400-499/problem-421.js)

---

## Problem 422 - Salesforce [Difficulty: Easy]

Write a program to merge two binary trees. Each node in the new tree should hold a value equal to the sum of the values of the corresponding nodes of the input trees.

If only one input tree has a node in a given position, the corresponding node in the new tree should match that input node.

[See Solution](/problems/400-499/problem-422.js)

---

## Problem 423 - Microsoft [Difficulty: Easy]

The transitive closure of a graph is a measure of which vertices are reachable from other vertices. It can be represented as a matrix `M`, where `M[i][j] == 1` if there is a path between vertices `i` and `j`, and otherwise `0`.

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

[See Solution](/problems/400-499/problem-423.js)

---

## Problem 424 - Facebook [Difficulty: Medium]

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array `[2, 4, 6, 8, 10, 2, 6, 10]`, return `4` and `8`. The order does not matter.

Follow-up: Can you do this in linear time and constant space?

[See Solution](/problems/400-499/problem-424.js)

---

## Problem 425 - Oracle [Difficulty: Hard]

You are presented with an `8` by `8` matrix representing the positions of pieces on a chess board. The only pieces on the board are the black king and various white pieces. Given this matrix, determine whether the king is in check.

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

You should return `True`, since the bishop is attacking the king diagonally.

[See Solution](/problems/400-499/problem-425.js)

---

## Problem 426 - Facebook [Difficulty: Easy]

Given a binary tree, return the level of the tree with minimum sum.

[See Solution](/problems/400-499/problem-426.js)

---

## Problem 427 - Square [Difficulty: Medium]

A competitive runner would like to create a route that starts and ends at his house, with the condition that the route goes entirely uphill at first, and then entirely downhill.

Given a dictionary of places of the form `{location: elevation}`, and a dictionary mapping paths between some of these locations to their corresponding distances, find the length of the shortest route satisfying the condition above. Assume the runner's home is location `0`.

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

In this case, the shortest valid path would be `0 -> 2 -> 4 -> 0`, with a distance of `28`.

[See Solution](/problems/400-499/problem-427.js)

---

## Problem 428 - Uber [Difficulty: Hard]

You have `N` stones in a row, and would like to create from them a pyramid. This pyramid should be constructed such that the height of each stone increases by one until reaching the tallest stone, after which the heights decrease by one. In addition, the start and end stones of the pyramid should each be one stone high.

You can change the height of any stone by paying a cost of `1` unit to lower its height by `1`, as many times as necessary. Given this information, determine the lowest cost method to produce this pyramid.

For example, given the stones `[1, 1, 3, 3, 2, 1]`, the optimal solution is to pay `2` to create `[0, 1, 2, 3, 2, 1]`.

[See Solution](/problems/400-499/problem-428.js)

---

## Problem 429 - Stitch Fix [Difficulty: Medium]

Pascal's triangle is a triangular array of integers constructed with the following formula:

* The first row consists of the number `1`.
* For each subsequent row, each element is the sum of the numbers directly above it, on either side.

For example, here are the first few rows:

        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

Given an input `k`, return the `kth` row of Pascal's triangle.

Bonus: Can you do this using only `O(k)` space?

[See Solution](/problems/400-499/problem-429.js)

---

## Problem 430 - Facebook [Difficulty: Hard]

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

[See Solution](/problems/400-499/problem-430.js)

---

## Problem 431 - Nest [Difficulty: Medium]

Create a basic sentence checker that takes in a stream of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.

We can consider a sentence valid if it conforms to the following rules:

1. The sentence must start with a capital letter, followed by a lowercase letter or a space.
2. All other characters must be lowercase letters, separators (`,`,`;`,`:`) or terminal marks (`.`,`?`,`!`,`‽`).
3. There must be a single space between each word.
4. The sentence must end with a terminal mark immediately following a word.

[See Solution](/problems/400-499/problem-431.js)

---

## Problem 432 - Google [Difficulty: Hard]

Design a system to crawl and copy all of Wikipedia using a distributed network of machines.

More specifically, suppose your server has access to a set of client machines. Your client machines can execute code you have written to access Wikipedia pages, download and parse their data, and write the results to a database.

Some questions you may want to consider as part of your solution are:

* How will you reach as many pages as possible?
* How can you keep track of pages that have already been visited?
* How will you deal with your client machines being blacklisted?
* How can you update your database when Wikipedia pages are added or updated?

[See Solution](/problems/400-499/problem-432.js)

---

## Problem 433 - Facebook [Difficulty: Medium]

Given an integer n, find the next biggest integer with the same number of 1-bits on. For example, given the number 6 (`0110` in binary), return 9 (`1001`).

[See Solution](/problems/400-499/problem-433.js)

---

## Problem 434 - Oracle [Difficulty: Easy]

Given a binary search tree, find the floor and ceiling of a given integer. The floor is the highest element in the tree less than or equal to an integer, while the ceiling is the lowest element in the tree greater than or equal to an integer.

If either value does not exist, return None.

[See Solution](/problems/400-499/problem-434.js)

---

## Problem 435 - Google [Difficulty: Medium]

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

For example, given the following preorder traversal:

[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

        a
       / \
      b   c
     / \ / \
    d  e f  g

[See Solution](/problems/400-499/problem-435.js)

---

## Problem 436 - Microsoft [Difficulty: Hard]

Implement 3 stacks using a single list:

    class Stack:
        def __init__(self):
            self.list = []

        def pop(self, stack_number):
            pass

        def push(self, item, stack_number):
            pass

[See Solution](/problems/400-499/problem-436.js)

---

## Problem 437 - Square [Difficulty: Medium]

Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.

[See Solution](/problems/400-499/problem-437.js)

---

## Problem 438 - Amazon [Difficulty: Easy]

Implement a stack API using only a heap. A stack implements the following methods:

* `push(item)`, which adds an element to the stack
* `pop()`, which removes and returns the most recently added element (or throws an error if there is nothing on the stack)

Recall that a heap has the following operations:

* `push(item)`, which adds a new key to the heap
* `pop()`, which removes and returns the max value of the heap

[See Solution](/problems/400-499/problem-438.js)

---

## Problem 439 - Facebook [Difficulty: Medium]

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.

For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.

[See Solution](/problems/400-499/problem-439.js)

---

## Problem 440 - Microsoft [Difficulty: Medium]

Describe and give an example of each of the following types of polymorphism:

* Ad-hoc polymorphism
* Parametric polymorphism
* Subtype polymorphism

[See Solution](/problems/400-499/problem-440.js)

---

## Problem 441 - Amazon [Difficulty: Medium]

Given a pivot `x`, and a list `lst`, partition the list into three parts.

* The first part contains all elements in `lst` that are less than `x`
* The second part contains all elements in `lst` that are equal to `x`
* The third part contains all elements in `lst` that are larger than `x`

Ordering within a part can be arbitrary.

For example, given `x = 10` and `lst = [9, 12, 3, 5, 14, 10, 10]`, one partition may be `[9, 3, 5, 10, 10, 12, 14]`.

[See Solution](/problems/400-499/problem-441.js)

---

## Problem 442 - Netflix [Difficulty: Hard]

A Cartesian tree with sequence `S` is a binary tree defined by the following two properties:

* It is heap-ordered, so that each parent value is strictly less than that of its children.
* An in-order traversal of the tree produces nodes with values that correspond exactly to `S`.

For example, given the sequence `[3, 2, 6, 1, 9]`, the resulting Cartesian tree would be:

          1
        /   \   
      2       9
     / \
    3   6

Given a sequence `S`, construct the corresponding Cartesian tree.

[See Solution](/problems/400-499/problem-442.js)

---

## Problem 443 - Apple [Difficulty: Medium]

Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: `enqueue`, which inserts an element into the queue, and `dequeue`, which removes it.

[See Solution](/problems/400-499/problem-443.js)

---

## Problem 444 - Dropbox [Difficulty: Hard]

Implement an efficient string matching algorithm.

That is, given a string of length `N` and a pattern of length `k`, write a program that searches for the pattern in the string with less than `O(N * k)` worst-case time complexity.

If the pattern is found, return the start index of its location. If not, return `False`.

[See Solution](/problems/400-499/problem-444.js)

---

## Problem 445 - BufferBox [Difficulty: Medium]

Given a binary tree where all nodes are either `0` or `1`, prune the tree so that subtrees containing all `0`s are removed.

For example, given the following tree:

        0
       / \
      1   0
         / \
        1   0
       / \
      0   0

should be pruned to:

      0
     / \
    1   0
       /
      1

We do not remove the tree at the root or its left child because it still has a `1` as a descendant.

[See Solution](/problems/400-499/problem-445.js)

---

## Problem 446 - Indeed [Difficulty: Medium]

Given a `32`-bit positive integer `N`, determine whether it is a power of four in faster than `O(log N)` time.

[See Solution](/problems/400-499/problem-446.js)

---

## Problem 447 - Google [Difficulty: Medium]

Implement integer exponentiation. That is, implement the `pow(x, y)` function, where `x` and `y` are integers and returns `x^y`.

Do this faster than the naive method of repeated multiplication.

For example, `pow(2, 10)` should return 1024.

[See Solution](/problems/400-499/problem-447.js)

---

## Problem 448 - Google [Difficulty: Hard]

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

[See Solution](/problems/400-499/problem-448.js)

---

## Problem 449 - Alibaba [Difficulty: Easy]

Given an even number (greater than 2), return two prime numbers whose sum will be equal to the given number.

A solution will always exist. See [Goldbach’s conjecture](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture).

Example:

    Input: 4
    Output: 2 + 2 = 4

If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

    [a, b] < [c, d]

If a < c OR a==c AND b < d.

[See Solution](/problems/400-499/problem-449.js)

---

## Problem 450 - Google [Difficulty: Hard]

You're given a string consisting solely of `(`, `)`, and `*`. `*` can represent either a `(`, `)`, or an empty string. Determine whether the parentheses are balanced.

For example, `(()*` and `(*)` are balanced. `)*(` is not balanced.

[See Solution](/problems/400-499/problem-450.js)

--

## Problem 451 - Apple [Difficulty: Easy]

Implement the function `fib(n)`, which returns the `nth` number in the Fibonacci sequence, using only `O(1)` space.

[See Solution](/problems/400-499/problem-451.js)

--

## Problem 452 - Microsoft [Difficulty: Easy]

Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

For example, the following linked list:

    1 -> 2 -> 3 -> 4 -> 5

is the number 54321.

Given two linked lists in this format, return their sum in the same linked list format.

For example, given

    9 -> 9
    5 -> 2

return 124 (99 + 25) as:

    4 -> 2 -> 1

[See Solution](/problems/400-499/problem-452.js)

--

## Problem 453 - Google [Difficulty: Easy]

Given the root of a binary search tree, and a target `K`, return two nodes in the tree whose sum equals `K`.

For example, given the following tree and `K` of 20

       10
      /   \
    5      15
          /  \
        11    15

Return the nodes `5` and `15`.

[See Solution](/problems/400-499/problem-453.js)

--

## Problem 454 - Facebook [Difficulty: Medium]

Describe an algorithm to compute the longest increasing subsequence of an array of numbers in O(n log n) time.

[See Solution](/problems/400-499/problem-454.js)

--

## Problem 455 - Dropbox [Difficulty: Medium]

Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

* Any live cell with less than two live neighbours dies.
* Any live cell with two or three live neighbours remains living.
* Any live cell with more than three live neighbours dies.
* Any dead cell with exactly three live neighbours becomes a live cell.

A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

You can represent a live cell with an asterisk (`*`) and a dead cell with a dot (`.`).

[See Solution](/problems/400-499/problem-455.js)

--

## Problem 456 - Amazon [Difficulty: Easy]

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

    {"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

    {"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. `timestamp` is in [Unix time](https://en.wikipedia.org/wiki/Unix_time).

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of `(start, end)` timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

[See Solution](/problems/400-499/problem-456.js)

--

## Problem 457 - Google [Difficulty: Hard]

Given a word W and a string `S`, find all starting indices in `S` which are anagrams of `W`.

For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

[See Solution](/problems/400-499/problem-457.js)

--

## Problem 458 - Uber [Difficulty: Hard]

A rule looks like this:

    A NE B

This means this means point `A` is located northeast of point `B`.

    A SW C

means that point `A` is southwest of `C`.

Given a list of rules, check if the sum of the rules validate. For example:

    A N B
    B NE C
    C N A

does not validate, since A cannot be both north and south of `C`.

    A NW B
    A N B

is considered valid.

[See Solution](/problems/400-499/problem-458.js)

--

## Problem 459 - Uber [Difficulty: Medium]

Write a program that determines the smallest number of perfect squares that sum up to `N`.

Here are a few examples:

* Given `N = 4`, return `1` (4)
* Given `N = 17`, return `2` (16 + 1)
* Given `N = 18`, return `2` (9 + 9)

[See Solution](/problems/400-499/problem-459.js)

--

## Problem 460 - LinkedIn [Difficulty: Medium]

You are given a string consisting of the letters `x` and `y`, such as `xyxxxyxyy`. In addition, you have an operation called `flip`, which changes a single `x` to `y` or vice versa.

Determine how many times you would need to apply this operation to ensure that all `x`'s come before all `y`'s. In the preceding example, it suffices to flip the second and sixth characters, so you should return `2`.

[See Solution](/problems/400-499/problem-460.js)

--

## Problem 461 - Facebook [Difficulty: Medium]

There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

* Right, then down
* Down, then right

Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

[See Solution](/problems/400-499/problem-461.js)

--

## Problem 462 - Oracle [Difficulty: Hard]

We say a number is sparse if there are no adjacent ones in its binary representation. For example, `21` (10101) is sparse, but `22` (10110) is not. For a given input `N`, find the smallest sparse number greater than or equal to `N`.

Do this in faster than `O(N log N)` time.

[See Solution](/problems/400-499/problem-462.js)

--

## Problem 463 - Facebook [Difficulty: Easy]

On a mysterious island there are creatures known as Quxes which come in three colors: red, green, and blue. One power of the Qux is that if two of them are standing next to each other, they can transform into a single creature of the third color.

Given `N` Quxes standing in a line, determine the smallest number of them remaining after any possible sequence of such transformations.

For example, given the input `['R', 'G', 'B', 'G', 'B']`, it is possible to end up with a single Qux through the following steps:

            Arrangement       |   Change
    ----------------------------------------
    ['R', 'G', 'B', 'G', 'B'] | (R, G) -> B
    ['B', 'B', 'G', 'B']      | (B, G) -> R
    ['B', 'R', 'B']           | (R, B) -> G
    ['B', 'G']                | (B, G) -> R
    ['R']                     |

[See Solution](/problems/400-499/problem-463.js)

--

## Problem 464 - Google [Difficulty: Medium]

Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].

[See Solution](/problems/400-499/problem-464.js)

--

## Problem 465 - Google [Difficulty: Easy]

Given the head of a singly linked list, reverse it in-place.

[See Solution](/problems/400-499/problem-465.js)

--

## Problem 466 - Amazon [Difficulty: Easy]

A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node. The following tree is an example:

            4
          / | \
        3   5   3
      /           \
    9              9

Given a `k`-ary tree, determine whether it is symmetric.

[See Solution](/problems/400-499/problem-466.js)

--

## Problem 467 - Unknown [Difficulty: Medium]

Given a real number n, find the square root of n. For example, given n = 9, return 3.

[See Solution](/problems/400-499/problem-467.js)

--

## Problem 468 - Facebook [Difficulty: Medium]

Given an N by N matrix, rotate it by 90 degrees clockwise.

For example, given the following matrix:

    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]

you should return:

    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]

Follow-up: What if you couldn't use any extra space?

[See Solution](/problems/400-499/problem-468.js)

--

## Problem 469 - Facebook [Difficulty: Medium]

Mastermind is a two-player game in which the first player attempts to guess the secret code of the second. In this version, the code may be any six-digit number with all distinct digits.

Each turn the first player guesses some number, and the second player responds by saying how many digits in this number correctly matched their location in the secret code. For example, if the secret code were `123456`, then a guess of `175286` would score two, since `1` and `6` were correctly placed.

Write an algorithm which, given a sequence of guesses and their scores, determines whether there exists some secret code that could have produced them.

For example, for the following scores you should return `True`, since they correspond to the secret code `123456`:

    {175286: 2, 293416: 3, 654321: 0}

However, it is impossible for any key to result in the following scores, so in this case you should return `False`:

    {123456: 4, 345678: 4, 567890: 4}

[See Solution](/problems/400-499/problem-469.js)

--

## Problem 470 - Google [Difficulty: Medium]

Given an array of numbers and an index `i`, return the index of the nearest larger number of the number at index `i`, where distance is measured in array indices.

For example, given `[4, 1, 3, 5, 6]` and index `0`, you should return `3`.

If two distances to larger numbers are the equal, then return any one of them. If the array at `i` doesn't have a nearest larger integer, then return null.

Follow-up: If you can preprocess the array, can you do this in constant time?

[See Solution](/problems/400-499/problem-470.js)

--

## Problem 471 - Amazon [Difficulty: Easy]

Given an integer `N`, construct all possible binary search trees with `N` nodes.

[See Solution](/problems/400-499/problem-471.js)

--

## Problem 472 - Facebook [Difficulty: Medium]

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

[See Solution](/problems/400-499/problem-472.js)

--

## Problem 473 - Yahoo [Difficulty: Medium]

Write an algorithm that computes the reversal of a directed graph. For example, if a graph consists of `A` -> `B` -> `C`, it should become `A <- B <- C`.

[See Solution](/problems/400-499/problem-473.js)

--

## Problem 474 - Google [Difficulty: Hard]

Find the minimum number of coins required to make `n` cents.

You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

For example, given `n = 16`, return `3` since we can make it with a 10¢, a 5¢, and a 1¢.

[See Solution](/problems/400-499/problem-474.js)

--

## Problem 475 - Google [Difficulty: Medium]

Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

* `is_locked`, which returns whether the node is locked
* `lock`, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
* `unlock`, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.

You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

[See Solution](/problems/400-499/problem-475.js)

--

## Problem 476 - Google [Difficulty: Medium]

You are given an array of length `n + 1` whose elements belong to the set `{1, 2, ..., n}`. By the pigeonhole principle, there must be a duplicate. Find it in linear time and space.

[See Solution](/problems/400-499/problem-476.js)

--

## Problem 477 - Dropbox [Difficulty: Easy]

What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

    functions = []
    for i in range(10):
        functions.append(lambda : i)

    for f in functions:
        print(f())

[See Solution](/problems/400-499/problem-477.js)

--

## Problem 478 - Google [Difficulty: Hard]

Implement a file syncing algorithm for two computers over a low-bandwidth network. What if we know the files in the two computers are mostly the same?

[See Solution](/problems/400-499/problem-478.js)

--

## Problem 479 - Microsoft [Difficulty: Easy]

Given a number in the form of a list of digits, return all possible permutations.

For example, given `[1,2,3]`, return `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`.

[See Solution](/problems/400-499/problem-479.js)

--

## Problem 480 - Microsoft [Difficulty: Medium]

Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

[See Solution](/problems/400-499/problem-480.js)

--

## Problem 481 - Jane Street [Difficulty: Hard]

Given an arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation), write a program to evaluate it.

The expression is given as a list of numbers and operands. For example: `[5, 3, '+']` should return `5 + 3 = 8`.

For example, `[15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']` should return `5`, since it is equivalent to ((15 / (7 - (1 + 1))) * 3) - (2 + (1 + 1)) = 5.

You can assume the given expression is always valid.

[See Solution](/problems/400-499/problem-481.js)

--

## Problem 482 - Google [Difficulty: Medium]

Given a binary search tree and a range `[a, b]` (inclusive), return the sum of the elements of the binary search tree within the range.

For example, given the following tree:

        5
       / \
      3   8
     / \ / \
    2  4 6  10

and the range `[4, 9]`, return `23` (5 + 4 + 6 + 8).

[See Solution](/problems/400-499/problem-482.js)

--

## Problem 483 - Bloomberg [Difficulty: Easy]

There are `N` prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the `k`th person, and removing every successive `k`th person going clockwise until there is no one left.

Given `N` and `k`, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if `N = 5` and `k = 2`, the order of executions would be `[2, 4, 1, 5, 3]`, so you should return `3`.

Bonus: Find an `O(log N)` solution if `k = 2`.

[See Solution](/problems/400-499/problem-483.js)

--

## Problem 484 - Dropbox [Difficulty: Medium]

Given the root to a binary search tree, find the second largest node in the tree.

[See Solution](/problems/400-499/problem-484.js)

--

## Problem 485 - Amazon [Difficulty: Hard]

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

[See Solution](/problems/400-499/problem-485.js)

--

## Problem 486 - Pinterest [Difficulty: Medium]

At a party, there is a single person who everyone knows, but who does not know anyone in return (the "celebrity"). To help figure out who this is, you have access to an `O(1)` method called `knows(a, b)`, which returns `True` if person `a` knows person `b`, else `False`.

Given a list of `N` people and the above operation, find a way to identify the celebrity in `O(N)` time.

[See Solution](/problems/400-499/problem-486.js)

--

## Problem 487 - Yext [Difficulty: Medium]

Two nodes in a binary tree can be called cousins if they are on the same level of the tree but have different parents. For example, in the following diagram `4` and `6` are cousins.

        1
       / \
      2   3
     / \   \
    4   5   6

Given a binary tree and a particular node, find all cousins of that node.

[See Solution](/problems/400-499/problem-487.js)

--

## Problem 488 - Netflix [Difficulty: Hard]

Implement a queue using a set of fixed-length arrays.

The queue should support `enqueue`, `dequeue`, and `get_size` operations.

[See Solution](/problems/400-499/problem-488.js)

--

## Problem 489 - Google [Difficulty: Easy]

Given an array of elements, return the length of the longest subarray where all its elements are distinct.

For example, given the array `[5, 1, 3, 5, 2, 3, 4, 1]`, return 5 as the longest subarray of distinct elements is `[5, 2, 3, 4, 1]`.

[See Solution](/problems/400-499/problem-489.js)

--

## Problem 490 - Yelp [Difficulty: Medium]

The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

More rigorously, we can define it as follows:

* The horizontal distance of the root is 0.
* The horizontal distance of a left child is `hd(parent) - 1`.
* The horizontal distance of a right child is `hd(parent) + 1`.

For example, for the following tree, `hd(1) = -2`, and `hd(6) = 0`.

              5
           /     \
         3         7
        /  \      /   \
      1     4    6     9
     /                /
    0                8

The bottom view of a tree, then, consists of the lowest node at each horizontal distance. If there are two nodes at the same depth and horizontal distance, either is acceptable.

For this tree, for example, the bottom view could be `[0, 1, 3, 6, 8, 9]`.

Given the root to a binary tree, return its bottom view.

[See Solution](/problems/400-499/problem-490.js)

--

## Problem 491 - Palantir [Difficulty: Easy]

Write a program that checks whether an integer is a palindrome. For example, `121` is a palindrome, as well as `888`. `678` is not a palindrome. Do not convert the integer into a string.

[See Solution](/problems/400-499/problem-491.js)

--

## Problem 492 - Google [Difficulty: Medium]

Given an undirected graph represented as an adjacency matrix and an integer k, write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.

[See Solution](/problems/400-499/problem-492.js)

--

## Problem 493 - Triplebyte [Difficulty: Medium]

You are given `n` numbers as well as `n` probabilities that sum up to 1. Write a function to generate one of the numbers with its corresponding probability.

For example, given the numbers `[1, 2, 3, 4]` and probabilities `[0.1, 0.5, 0.2, 0.2]`, your function should return `1` 10% of the time, `2` 50% of the time, and 3 and 4 20% of the time.

You can generate random numbers between 0 and 1 uniformly.

[See Solution](/problems/400-499/problem-493.js)

--

## Problem 494 - Facebook [Difficulty: Medium]

Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.

For example, given `[8, -1, 3, 4]`, return `15` as we choose the numbers `3`, `4`, and `8` where the `8` is obtained from wrapping around.

Given `[-4, 5, 1, 0]`, return `6` as we choose the numbers `5` and `1`.

[See Solution](/problems/400-499/problem-494.js)

--

## Problem 495 - Facebook [Difficulty: Medium]

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

[See Solution](/problems/400-499/problem-495.js)

--

## Problem 496 - Pivotal [Difficulty: Easy]

Write an algorithm that finds the total number of set bits in all integers between `1` and `N`.

[See Solution](/problems/400-499/problem-496.js)

--

## Problem 497 - Yahoo [Difficulty: Medium]

Recall that a full binary tree is one in which each node is either a leaf node, or has two children. Given a binary tree, convert it to a full one by removing nodes with only one child.

For example, given the following tree:

             0
          /     \
        1         2
      /            \
    3                 4
      \             /   \
        5          6     7

You should convert it to:

         0
      /     \
    5         4
            /   \
           6     7

[See Solution](/problems/400-499/problem-497.js)

--

## Problem 498 - WhatsApp [Difficulty: Easy]

Given an array of integers out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example, given `[3, 7, 5, 6, 9]`, you should return `(1, 3)`.

[See Solution](/problems/400-499/problem-498.js)

--

## Problem 499 - Palantir [Difficulty: Easy]

A typical American-style crossword puzzle grid is an `N x N` matrix with black and white squares, which obeys the following rules:

* Every white square must be part of an "across" word and a "down" word.
* No word can be fewer than three letters long.
* Every white square must be reachable from every other white square.
* The grid is rotationally symmetric (for example, the colors of the top left and bottom right squares must match).

Write a program to determine whether a given matrix qualifies as a crossword grid.

[See Solution](/problems/400-499/problem-499.js)

--

## Problem 500 - Google [Difficulty: Easy]

You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

    [[f, f, f, f],
     [t, t, f, t],
     [f, f, f, f],
     [f, f, f, f]]

and start = `(3, 0)` (bottom left) and end = `(0, 0)` (top left), the minimum number of steps required to reach the end is 7, since we would need to go through `(1, 2)` because there is a wall everywhere else on the second row.

[See Solution](/problems/500-599/problem-500.js)

--

## Problem 501 - Facebook [Difficulty: Medium]

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.

[See Solution](/problems/500-599/problem-501.js)

--

## Problem 502 - PayPal [Difficulty: Easy]

Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.

[See Solution](/problems/500-599/problem-502.js)

--

## Problem 503 - Google [Difficulty: Medium]

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list `4 -> 1 -> -3 -> 99` should become `-3 -> 1 -> 4 -> 99`.

[See Solution](/problems/500-599/problem-503.js)

--

## Problem 504 - Twitter [Difficulty: Easy]

You run an e-commerce website and want to record the last `N order` ids in a log. Implement a data structure to accomplish this, with the following API:

* record(order_id): adds the order_id to the log
* get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.

[See Solution](/problems/500-599/problem-504.js)

--

## Problem 505 - Amazon [Difficulty: Easy]

Given an array and a number `k` that's smaller than the length of the array, rotate the array to the right `k` elements in-place.

[See Solution](/problems/500-599/problem-505.js)

--

## Problem 506 - Fitbit [Difficulty: Medium]

Given a linked list, rearrange the node values such that they appear in alternating `low -> high -> low -> high ...` form. For example, given `1 -> 2 -> 3 -> 4 -> 5`, you should return `1 -> 3 -> 2 -> 5 -> 4`.

[See Solution](/problems/500-599/problem-506.js)

--

## Problem 507 - Uber [Difficulty: Easy]

On election day, a voting machine writes data in the form `(voter_id, candidate_id)` to a text file. Write a program that reads this file as a stream and returns the top `3` candidates at any given time. If you find a voter voting more than once, report this as fraud.

[See Solution](/problems/500-599/problem-507.js)

--

## Problem 508 - Dropbox [Difficulty: Medium]

Create an algorithm to efficiently compute the approximate median of a list of numbers.

More precisely, given an unordered list of N numbers, find an element whose rank is between `N / 4` and `3 * N / 4`, with a high level of certainty, in less than `O(N)` time.

[See Solution](/problems/500-599/problem-508.js)

--

## Problem 509 - Quora [Difficulty: Medium]

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".

[See Solution](/problems/500-599/problem-509.js)

--

## Problem 510 - Airbnb [Difficulty: Hard]

Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list `["code", "edoc", "da", "d"]`, return `[(0, 1), (1, 0), (2, 3)]`.

[See Solution](/problems/500-599/problem-510.js)

--

## Problem 511 - Yelp [Difficulty: Medium]

You are given an array of integers, where each element represents the maximum number of steps that can be jumped going forward from that element. Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.

For example, given `[6, 2, 4, 0, 5, 1, 1, 4, 2, 9]`, you should return `2`, as the optimal solution involves jumping from `6` to `5`, and then from `5` to `9`.

[See Solution](/problems/500-599/problem-511.js)

--

## Problem 512 - Google [Difficulty: Medium]

You are given an array of nonnegative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

For example, given the array `[1, 3, 1, 2, 0, 1]`, we can go from indices `0 -> 1 -> 3 -> 5`, so return `true`.

Given the array `[1, 2, 1, 0, 0]`, we can't reach the end, so return `false`.

[See Solution](/problems/500-599/problem-512.js)

--

## Problem 513 - Lyft [Difficulty: Medium]

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4], since 2 + 3 + 4 = 9.

[See Solution](/problems/500-599/problem-513.js)

--

## Problem 514 - Microsoft [Difficulty: Medium]

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given `[100, 4, 200, 1, 3, 2]`, the longest consecutive element sequence is `[1, 2, 3, 4]`. Return its length: `4`.

Your algorithm should run in `O(n)` complexity.

[See Solution](/problems/500-599/problem-514.js)

--

## Problem 515 - LinkedIn [Difficulty: Medium]

Given a linked list of numbers and a pivot `k`, partition the linked list so that all nodes less than `k` come before nodes greater than or equal to `k`.

For example, given the linked list `5 -> 1 -> 8 -> 0 -> 3` and `k = 3`, the solution could be `1 -> 0 -> 5 -> 8 -> 3`.

[See Solution](/problems/500-599/problem-515.js)

--

## Problem 516 - Zillow [Difficulty: Easy]

Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of `7`. The first few sevenish numbers are `1`, `7`, `8`, `49`, and so on. Create an algorithm to find the `n`th sevenish number.

[See Solution](/problems/500-599/problem-516.js)

--

## Problem 517 - Google [Difficulty: Easy]

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

[See Solution](/problems/500-599/problem-517.js)

--

## Problem 518 - Microsoft [Difficulty: Easy]

Given an array of numbers and a number `k`, determine if there are three entries in the array which add up to the specified number `k`. For example, given `[20, 303, 3, 4, 25]` and `k = 49`, return `true` as `20 + 4 + 25 = 49`.

[See Solution](/problems/500-599/problem-518.js)

--

## Problem 519 - Facebook [Difficulty: Medium]

Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.

[See Solution](/problems/500-599/problem-519.js)

--

## Problem 520 - LinkedIn [Difficulty: Hard]

You are given a binary tree in a peculiar string representation. Each node is written in the form `(lr)`, where `l` corresponds to the left child and `r` corresponds to the right child.

If either `l` or `r` is null, it will be represented as a zero. Otherwise, it will be represented by a new `(lr)` pair.

Here are a few examples:

* A root node with no children: `(00)`
* A root node with two children: `((00)(00))`
* An unbalanced tree with three consecutive left children: `((((00)0)0)0)`

Given this representation, determine the depth of the tree.

[See Solution](/problems/500-599/problem-520.js)

--

## Problem 521 - PayPal [Difficulty: Medium]

Given a string and a number of lines `k`, print the string in zigzag form. In zigzag, characters are printed out diagonally from top left to bottom right until reaching the `kth` line, then back up to top right, and so on.

For example, given the sentence `"thisisazigzag"` and `k = 4`, you should print:

    t     a     g
     h   s z   a
      i i   i z
       s     g

[See Solution](/problems/500-599/problem-521.js)

--

## Problem 522 - Microsoft [Difficulty: Medium]

Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. For example, given the string "abracadabra" and the pattern "abr", you should return `[0, 7]`.

[See Solution](/problems/500-599/problem-522.js)

--

## Problem 523 - Jane Street [Difficulty: Easy]

Given integers `M` and `N`, write a program that counts how many positive integer pairs `(a, b)` satisfy the following conditions:

* `a + b = M`
* `a XOR b = N`

[See Solution](/problems/500-599/problem-523.js)

--

## Problem 524 - Amazon [Difficulty: Medium]

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.

[See Solution](/problems/500-599/problem-524.js)

--

## Problem 525 - Amazon [Difficulty: Easy]

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

For example, given the following matrix:

    [[1,  2,  3,  4,  5],
     [6,  7,  8,  9,  10],
     [11, 12, 13, 14, 15],
     [16, 17, 18, 19, 20]]

You should print out the following:

    1
    2
    3
    4
    5
    10
    15
    20
    19
    18
    17
    16
    11
    6
    7
    8
    9
    14
    13
    12

[See Solution](/problems/500-599/problem-525.js)

--

## Problem 526 - Yahoo [Difficulty: Easy]

You are given a string of length `N` and a parameter `k`. The string can be manipulated by taking one of the first `k` letters and moving it to the end.

Write a program to determine the lexicographically smallest string that can be created after an unlimited number of moves.

For example, suppose we are given the string `daily` and `k = 1`. The best we can create in this case is `ailyd`.

[See Solution](/problems/500-599/problem-526.js)

--

## Problem 527 - Microsoft [Difficulty: Medium]

Write a program to determine how many distinct ways there are to create a max heap from a list of N given integers.

For example, if `N = 3`, and our integers are `[1, 2, 3]`, there are two ways, shown below.

      3      3
     / \    / \
    1   2  2   1

[See Solution](/problems/500-599/problem-527.js)

--

## Problem 528 - Amazon [Difficulty: Easy]

Huffman coding is a method of encoding characters based on their frequency. Each letter is assigned a variable-length binary string, such as `0101` or `111110`, where shorter lengths correspond to more common letters. To accomplish this, a binary tree is built such that the path from the root to any leaf uniquely maps to a character. When traversing the path, descending to a left child corresponds to a `0` in the prefix, while descending right corresponds to `1`.

Here is an example tree (note that only the leaf nodes have letters):

            *
          /   \
        *       *
       / \     / \
      *   a   t   *
     /             \
    c               s

With this encoding, `cats` would be represented as `0000110111`.

Given a dictionary of character frequencies, build a Huffman tree, and use it to determine a mapping between characters and their encoded binary strings.

[See Solution](/problems/500-599/problem-528.js)

--

## Problem 529 - Google [Difficulty: Hard]

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string `racecarannakayak`, return `["racecar", "anna", "kayak"]`.

Given the input string `abc`, return `["a", "b", "c"]`.

[See Solution](/problems/500-599/problem-529.js)

--

## Problem 530 - Google [Difficulty: Easy]

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

[See Solution](/problems/500-599/problem-530.js)

--

## Problem 531 - Microsoft [Difficulty: Easy]

Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

[See Solution](/problems/500-599/problem-531.js)

--

## Problem 532 - Google [Difficulty: Medium]

On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:

* (0, 0)
* (1, 2)
* (2, 2)
* (4, 0)

The board would look like this:

    [b 0 0 0 0]
    [0 0 b 0 0]
    [0 0 b 0 0]
    [0 0 0 0 0]
    [b 0 0 0 0]

You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.

[See Solution](/problems/500-599/problem-532.js)

--

## Problem 533 - Facebook [Difficulty: Easy]

Boggle is a game played on a `4 x 4` grid of letters. The goal is to find as many words as possible that can be formed by a sequence of adjacent letters in the grid, using each cell at most once. Given a game board and a dictionary of valid words, implement a Boggle solver.

[See Solution](/problems/500-599/problem-533.js)

--

## Problem 534 - Amazon [Difficulty: Easy]

Given a string, determine whether any permutation of it is a palindrome.

For example, `carrace` should return true, since it can be rearranged to form `racecar`, which is a palindrome. `daily` should return false, since there's no rearrangement that can form a palindrome.

[See Solution](/problems/500-599/problem-534.js)

--

## Problem 535 - Goldman Sachs [Difficulty: Medium]

You are given `N` identical eggs and access to a building with `k` floors. Your task is to find the lowest floor that will cause an egg to break, if dropped from that floor. Once an egg breaks, it cannot be dropped again. If an egg breaks when dropped from the `xth` floor, you can assume it will also break when dropped from any floor greater than `x`.

Write an algorithm that finds the minimum number of trial drops it will take, in the worst case, to identify this floor.

For example, if `N = 1` and `k = 5`, we will need to try dropping the egg at every floor, beginning with the first, until we reach the fifth floor, so our solution will be `5`.

[See Solution](/problems/500-599/problem-535.js)

--

## Problem 536 - Google [Difficulty: Medium]

Given the sequence of keys visited by a postorder traversal of a binary search tree, reconstruct the tree.

For example, given the sequence `2, 4, 3, 8, 7, 5`, you should construct the following tree:

        5
       / \
      3   7
     / \   \
    2   4   8

[See Solution](/problems/500-599/problem-536.js)

--

## Problem 537 - Apple [Difficulty: Easy]

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

* if n is even, the next number in the sequence is n / 2
* if n is odd, the next number in the sequence is 3n + 1

It is conjectured that every such sequence eventually reaches the number `1`. Test this conjecture.

Bonus: What input `n <= 1000000` gives the longest sequence?

[See Solution](/problems/500-599/problem-537.js)

--

## Problem 538 - LinkedIn [Difficulty: Hard]

Given a set of characters `C` and an integer `k`, a De Bruijn sequence is a cyclic sequence in which every possible `k-length` string of characters in C occurs exactly once.

For example, suppose `C = {0, 1}` and `k = 3`. Then our sequence should contain the substrings `{'000', '001', '010', '011', '100', '101', '110', '111'}`, and one possible solution would be 00010111.

Create an algorithm that finds a De Bruijn sequence.

[See Solution](/problems/500-599/problem-538.js)

--

## Problem 539 - Pandora [Difficulty: Easy]

Given an undirected graph, determine if it contains a cycle.

[See Solution](/problems/500-599/problem-539.js)

--

## Problem 540 - Morgan Stanley [Difficulty: Easy]

In Ancient Greece, it was common to write text with the first line going left to right, the second line going right to left, and continuing to go back and forth. This style was called "boustrophedon".

Given a binary tree, write an algorithm to print the nodes in boustrophedon order.

For example, given the following tree:

           1
        /     \
      2         3
     / \       / \
    4   5     6   7

You should return `[1, 3, 2, 4, 5, 6, 7]`.

[See Solution](/problems/500-599/problem-540.js)

--

## Problem 541 - Amazon [Difficulty: Easy]

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

[See Solution](/problems/500-599/problem-541.js)

--

## Problem 542 - Dropbox [Difficulty: Medium]

Given an undirected graph G, check whether it is bipartite. Recall that a graph is bipartite if its vertices can be divided into two independent sets, U and V, such that no edge connects vertices of the same set.

[See Solution](/problems/500-599/problem-542.js)

--

## Problem 543 - Google [Difficulty: Medium]

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

[See Solution](/problems/500-599/problem-543.js)

--

## Problem 544 - Google [Difficulty: Hard]

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

[See Solution](/problems/500-599/problem-544.js)

--

## Problem 545 - Twitter [Difficulty: Hard]

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. Assume that each node in the tree also has a pointer to its parent.

According to the definition of [LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

[See Solution](/problems/500-599/problem-545.js)

--

## Problem 546 - Google [Difficulty: Medium]

Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

For example, given the array `[3, 4, 9, 6, 1]`, return `[1, 1, 2, 1, 0]`, since:

* There is 1 smaller element to the right of 3
* There is 1 smaller element to the right of 4
* There are 2 smaller elements to the right of 9
* There is 1 smaller element to the right of 6
* There are no smaller elements to the right of 1

[See Solution](/problems/500-599/problem-546.js)

--

## Problem 547 - Google [Difficulty: Medium]

Given an array of integers, find the maximum XOR of any two elements.

[See Solution](/problems/500-599/problem-547.js)

--

## Problem 548 - Microsoft [Difficulty: Easy]

Given a clock time in `hh:mm` format, determine, to the nearest degree, the angle between the hour and the minute hands.

Bonus: When, during the course of a day, will the angle be zero?

[See Solution](/problems/500-599/problem-548.js)

--

## Problem 549 - Google [Difficulty: Hard]

Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.

[See Solution](/problems/500-599/problem-549.js)

--

## Problem 550 - Jane Street [Difficulty: Hard]

Suppose you are given a table of currency exchange rates, represented as a 2D array. Determine whether there is a possible arbitrage: that is, whether there is some sequence of trades you can make, starting with some amount A of any currency, so that you can end up with some amount greater than A of that currency.

There are no transaction costs and you can trade fractional quantities.

[See Solution](/problems/500-599/problem-550.js)

--

## Problem 551 - Square [Difficulty: Medium]

Assume you have access to a function `toss_biased()` which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.

[See Solution](/problems/500-599/problem-551.js)

--

## Problem 552 - Wayfair [Difficulty: Easy]

You are given a `2 x N` board, and instructed to completely cover the board with the following shapes:

* Dominoes, or `2 x 1` rectangles.
* Trominoes, or `L`-shapes.

For example, if `N = 4`, here is one possible configuration, where `A` is a domino, and `B` and `C` are trominoes.

    A B B C
    A B C C

Given an integer `N`, determine in how many ways this task is possible.

[See Solution](/problems/500-599/problem-552.js)

--

## Problem 553 - Google [Difficulty: Medium]

You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

    cba
    daf
    ghi

This is not ordered because of the a in the center. We can remove the second column to make it ordered:

    ca
    df
    gi

So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

    abcdef

Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

    zyx
    wvu
    tsr

Your function should return 3, since we would need to remove all the columns to order it.

[See Solution](/problems/500-599/problem-553.js)

--

## Problem 554 - Palantir [Difficulty: Easy]

The ancient Egyptians used to express fractions as a sum of several terms where each numerator is one. For example, `4 / 13` can be represented as `1 / 4 + 1 / 18 + 1 / 468`.

Create an algorithm to turn an ordinary fraction `a / b`, where `a < b`, into an Egyptian fraction.

[See Solution](/problems/500-599/problem-554.js)

--

## Problem 555 - Amazon [Difficulty: Medium]

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

[See Solution](/problems/500-599/problem-555.js)

--

## Problem 556 - Facebook [Difficulty: Medium]

Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.

[See Solution](/problems/500-599/problem-556.js)

--

## Problem 557 - Apple [Difficulty: Medium]

Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the `i`-th row and `j`-th column is `(i + 1) * (j + 1)` (if 0-indexed) or `i * j` (if 1-indexed).

Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.

For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

    | 1 | 2 | 3 | 4 | 5 | 6 |

    | 2 | 4 | 6 | 8 | 10 | 12 |

    | 3 | 6 | 9 | 12 | 15 | 18 |

    | 4 | 8 | 12 | 16 | 20 | 24 |

    | 5 | 10 | 15 | 20 | 25 | 30 |

    | 6 | 12 | 18 | 24 | 30 | 36 |

And there are 4 12's in the table.

[See Solution](/problems/500-599/problem-557.js)

--

## Problem 558 - Google [Difficulty: Medium]

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

[See Solution](/problems/500-599/problem-558.js)

--

## Problem 559 - Google [Difficulty: Medium]

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.

[See Solution](/problems/500-599/problem-559.js)

--

## Problem 560 - Etsy [Difficulty: Hard]

Given a sorted array, convert it into a height-balanced binary search tree.

[See Solution](/problems/500-599/problem-560.js)

--

## Problem 561 - Google [Difficulty: Easy]

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return true since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

[See Solution](/problems/500-599/problem-561.js)

--

## Problem 562 - Uber [Difficulty: Hard]

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

[See Solution](/problems/500-599/problem-562.js)

--

## Problem 563 - Nvidia [Difficulty: Hard]

Find the maximum of two numbers without using any if-else statements, branching, or direct comparisons.

[See Solution](/problems/500-599/problem-563.js)

--

## Problem 564 - Airbnb [Difficulty: Hard]

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be `0` or negative.

For example, `[2, 4, 6, 2, 5]` should return `13`, since we pick `2`, `6`, and `5`. `[5, 1, 1, 5]` should return `10`, since we pick `5` and `5`.

Follow-up: Can you do this in O(N) time and constant space?

[See Solution](/problems/500-599/problem-564.js)

--

## Problem 565 - Pinterest [Difficulty: Medium]

Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, `[2, 0, 1, 0]` returns `True` while `[1, 1, 0, 1]` returns `False`.

[See Solution](/problems/500-599/problem-565.js)

--

## Problem 566 - Facebook [Difficulty: Medium]

A graph is minimally-connected if it is connected and there is no edge that can be removed while still leaving the graph connected. For example, any binary tree is minimally-connected.

Given an undirected graph, check if the graph is minimally-connected. You can choose to represent the graph as either an adjacency matrix or adjacency list.

[See Solution](/problems/500-599/problem-566.js)

--

## Problem 567 - Jane Street [Difficulty: Medium]

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:

    def cons(a, b):
        def pair(f):
            return f(a, b)
        return pair

Implement `car` and `cdr`.

[See Solution](/problems/500-599/problem-567.js)

--

## Problem 568 - Google [Difficulty: Easy]

Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

[See Solution](/problems/500-599/problem-568.js)

--

## Problem 569 - Facebook [Difficulty: Hard]

Given an array of numbers of length `N`, find both the minimum and maximum using less than `2 * (N - 2)` comparisons.

[See Solution](/problems/500-599/problem-569.js)

--

## Problem 570 - Google [Difficulty: Hard]

Given two non-empty binary trees `s` and `t`, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. A subtree of `s` is a tree consists of a node in `s` and all of this node's descendants. The tree `s` could also be considered as a subtree of itself.

[See Solution](/problems/500-599/problem-570.js)

--

## Problem 571 - Unknown [Difficulty: Medium]

The Tower of Hanoi is a puzzle game with three rods and n disks, each a different size.

All the disks start off on the first rod in a stack. They are ordered by size, with the largest disk on the bottom and the smallest one at the top.

The goal of this puzzle is to move all the disks from the first rod to the last rod while following these rules:

* You can only move one disk at a time.
* A move consists of taking the uppermost disk from one of the stacks and placing it on top of another stack.
* You cannot place a larger disk on top of a smaller disk.

Write a function that prints out all the steps necessary to complete the Tower of Hanoi. You should assume that the rods are numbered, with the first rod being 1, the second (auxiliary) rod being 2, and the last (goal) rod being 3.

For example, with n = 3, we can do this in 7 moves:

    Move 1 to 3
    Move 1 to 2
    Move 3 to 2
    Move 1 to 3
    Move 2 to 1
    Move 2 to 3
    Move 1 to 3

[See Solution](/problems/500-599/problem-571.js)

--

## Problem 572 - Palantir [Difficulty: Hard]

Given a number represented by a list of digits, find the next greater permutation of a number, in terms of lexicographic ordering. If there is not greater permutation possible, return the permutation with the lowest value/ordering.

For example, the list `[1,2,3]` should return `[1,3,2]`. The list `[1,3,2]` should return `[2,1,3]`. The list `[3,2,1]` should return `[1,2,3]`.

Can you perform the operation without allocating extra memory (disregarding the input memory)?

[See Solution](/problems/500-599/problem-572.js)

--

## Problem 573 - Google [Difficulty: Medium]

Given a stack of N elements, interleave the first half of the stack with the second half reversed using only one other queue. This should be done in-place.

Recall that you can only push or pop from a stack, and enqueue or dequeue from a queue.

For example, if the stack is [1, 2, 3, 4, 5], it should become [1, 5, 2, 4, 3]. If the stack is [1, 2, 3, 4], it should become [1, 4, 2, 3].

Hint: Try working backwards from the end state.

[See Solution](/problems/500-599/problem-573.js)

--

## Problem 574 - Amazon [Difficulty: Medium]

Implement a bit array.

A bit array is a space efficient array that holds a value of `1` or `0` at each index.

* `init(size)`: initialize the array with `size`
* `set(i, val)`: updates index at `i` with `val` where `val` is either `1` or `0`.
* `get(i)`: gets the value at index `i`.

[See Solution](/problems/500-599/problem-574.js)

--

## Problem 575 - Uber [Difficulty: Medium]

Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

* `next()`: returns the next element in the array of arrays. If there are no more elements, raise an exception.
* `has_next()`: returns whether or not the iterator still has elements left.

For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling `next()` repeatedly should output `1, 2, 3, 4, 5, 6`.

Do not use `flatten` or otherwise clone the arrays. Some of the arrays can be empty.

[See Solution](/problems/500-599/problem-575.js)

--

## Problem 576 - Spotify [Difficulty: Medium]

Write a function, `throw_dice(N, faces, total)`, that determines how many ways it is possible to throw `N` dice with some number of faces each to get a specific total.

For example, `throw_dice(3, 6, 7)` should equal `15`.

[See Solution](/problems/500-599/problem-576.js)

--

## Problem 577 - Dropbox [Difficulty: Medium]

Given a list of words, determine whether the words can be chained to form a circle. A word `X` can be placed in front of another word `Y` in a circle if the last character of `X` is same as the first character of `Y`.

For example, the words `['chair', 'height', 'racket', touch', 'tunic']` can form the following circle: `chair --> racket --> touch --> height --> tunic --> chair`.

[See Solution](/problems/500-599/problem-577.js)

--

## Problem 578 - Bloomberg [Difficulty: Easy]

Determine whether there exists a one-to-one character mapping from one string `s1` to another `s2`.

For example, given `s1 = abc` and `s2 = bcd`, return `true` since we can map `a` to `b`, `b` to `c`, and `c` to `d`.

Given `s1 = foo` and `s2 = bar`, return `false` since the `o` cannot map to two characters.

[See Solution](/problems/500-599/problem-578.js)

--

## Problem 579 - Flipkart [Difficulty: Medium]

Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.

On the `ith` jump, you may move exactly i places to the left or right.

Find a path with the fewest number of jumps required to get from 0 to N.

[See Solution](/problems/500-599/problem-579.js)

--

## Problem 580 - Apple [Difficulty: Easy]

Given a binary tree, find a minimum path sum from root to a leaf.

For example, the minimum path in this tree is [10, 5, 1, -1], which has sum 15.

      10
     /  \
    5    5
    \     \
     2    1
         /
       -1

[See Solution](/problems/500-599/problem-580.js)

--

## Problem 581 - Google [Difficulty: Easy]

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

[See Solution](/problems/500-599/problem-581.js)

--

## Problem 582 - Microsoft [Difficulty: Hard]

Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

For example, given the intervals `[(1, 4), (4, 5), (7, 9), (9, 12)]`, you should return `[4, 9]`.

[See Solution](/problems/500-599/problem-582.js)

--

## Problem 583 - Zillow [Difficulty: Medium]

You are given a 2-d `matrix` where each cell represents number of coins in that cell. Assuming we start at `matrix[0][0]`, and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.

For example, in this matrix

    0 3 1 1
    2 0 0 4
    1 5 3 1

The most we can collect is 0 + 2 + 1 + 5 + 3 + 1 = 12 coins.

[See Solution](/problems/500-599/problem-583.js)

--

## Problem 584 - IBM [Difficulty: Easy]

Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

For example, given "aaabbc", you could return "ababac". Given "aaab", return `None`.

[See Solution](/problems/500-599/problem-584.js)

--

## Problem 586 - Quora [Difficulty: Medium]

You are given a list of `(website, user)` pairs that represent users visiting websites. Come up with a program that identifies the top `k` pairs of websites with the greatest similarity.

For example, suppose `k = 1`, and the list of tuples is:

    [('a', 1), ('a', 3), ('a', 5),
     ('b', 2), ('b', 6),
     ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5)
     ('d', 4), ('d', 5), ('d', 6), ('d', 7),
     ('e', 1), ('e', 3), ('e': 5), ('e', 6)]

Then a reasonable similarity metric would most likely conclude that `a` and `e` are the most similar, so your program should return `[('a', 'e')]`.

[See Solution](/problems/500-599/problem-586.js)

--

## Problem 587 - Facebook [Difficulty: Medium]

Given a binary tree, return all paths from the root to leaves.

For example, given the tree:

      1
     / \
    2   3
       / \
      4   5

Return `[[1, 2], [1, 3, 4], [1, 3, 5]]`.

[See Solution](/problems/500-599/problem-587.js)

--

## Problem 588 - Facebook [Difficulty: Easy]

You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

* `init(arr, size)`: initialize with the original large array and size.
* `set(i, val)`: updates index at `i` with `val`.
* `get(i)`: gets the value at index `i`.

[See Solution](/problems/500-599/problem-588.js)

--

## Problem 589 - Two Sigma [Difficulty: Hard]

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

[See Solution](/problems/500-599/problem-589.js)

--

## Problem 590 - Google [Difficulty: Hard]

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding `next` and `prev` fields, it holds a field named `both`, which is an XOR of the next node and the previous node. Implement an XOR linked list; it has an `add(element)` which adds the element to the end, and a `get(index)` which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to `get_pointer` and `dereference_pointer` functions that converts between nodes and memory addresses.

[See Solution](/problems/500-599/problem-590.js)

--

## Problem 591 - Quora [Difficulty: Hard]

Word sense disambiguation is the problem of determining which sense a word takes on in a particular setting, if that word has multiple meanings. For example, in the sentence "I went to get money from the bank", bank probably means the place where people deposit money, not the land beside a river or lake.

Suppose you are given a list of meanings for several words, formatted like so:

    {
        "word_1": ["meaning one", "meaning two", ...],
        ...
        "word_n": ["meaning one", "meaning two", ...]
    }

Given a sentence, most of whose words are contained in the meaning list above, create an algorithm that determines the likely sense of each possibly ambiguous word.

[See Solution](/problems/500-599/problem-591.js)

--

## Problem 592 - Amazon [Difficulty: Medium]

Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

For example, this matrix has 4 islands.

    1 0 0 0 0
    0 0 1 1 0
    0 1 1 0 0
    0 0 0 0 0
    1 1 0 0 1
    1 1 0 0 1

[See Solution](/problems/500-599/problem-592.js)

--

## Problem 593 - Mailchimp [Difficulty: Medium]

You are given an array representing the heights of neighboring buildings on a city street, from east to west. The city assessor would like you to write an algorithm that returns how many of these buildings have a view of the setting sun, in order to properly value the street.

For example, given the array `[3, 7, 8, 3, 6, 1]`, you should return `3`, since the top floors of the buildings with heights `8`, `6`, and `1` all have an unobstructed view to the west.

Can you do this using just one forward pass through the array?

[See Solution](/problems/500-599/problem-593.js)

--

## Problem 594 - Google [Difficulty: Easy]

You are given an N by N matrix of random letters and a dictionary of words. Find the maximum number of words that can be packed on the board from the given dictionary.

A word is considered to be able to be packed on the board if:

* It can be found in the dictionary
* It can be constructed from untaken letters by other words found so far on the board
* The letters are adjacent to each other (vertically and horizontally, not diagonally).

Each tile can be visited only once by any word.

For example, given the following dictionary:

    { 'eat', 'rain', 'in', 'rat' }

and matrix:

    [['e', 'a', 'n'],
     ['t', 't', 'i'],
     ['a', 'r', 'a']]

Your function should return 3, since we can make the words 'eat', 'in', and 'rat' without them touching each other. We could have alternatively made 'eat' and 'rain', but that would be incorrect since that's only 2 words.

[See Solution](/problems/500-599/problem-594.js)

--

## Problem 595 - Google [Difficulty: Medium]

The number 6174 is known as Kaprekar's contant, after the mathematician who discovered an associated property: for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

* For a given input `x`, create two new numbers that consist of the digits in `x` in ascending and descending order.
* Subtract the smaller number from the larger number.

For example, this algorithm terminates in three steps when starting from `1234`:

* `4321 - 1234 = 3087`
* `8730 - 0378 = 8352`
* `8532 - 2358 = 6174`

Write a function that returns how many steps this will take for a given input `N`.

[See Solution](/problems/500-599/problem-595.js)

--

## Problem 596 - Google [Difficulty: Medium]

Invert a binary tree.

For example, given the following tree:

        a
       / \
      b   c
     / \  /
    d   e f

should become:

     a
    / \
    c  b
    \  / \
     f e  d

[See Solution](/problems/500-599/problem-596.js)

--

## Problem 597 - Netflix [Difficulty: Easy]

Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet `(a, b, c)` is defined by the equation `a2+ b2= c2`.

[See Solution](/problems/500-599/problem-597.js)

--

## Problem 598 - Microsoft [Difficulty: Easy]

You have `n` fair coins and you flip them all at the same time. Any that come up tails you set aside. The ones that come up heads you flip again. How many rounds do you expect to play before only one coin remains?

Write a function that, given `n`, returns the number of rounds you'd expect to play until one coin remains.

[See Solution](/problems/500-599/problem-598.js)

--

## Problem 599 - Two Sigma [Difficulty: Hard]

Ghost is a two-person word game where players alternate appending letters to a word. The first person who spells out a word, or creates a prefix for which there is no possible continuation, loses. Here is a sample game:

* Player 1: `g`
* Player 2: `h`
* Player 1: `o`
* Player 2: `s`
* Player 1: `t` [loses]

Given a dictionary of words, determine the letters the first player should start with, such that with optimal play they cannot lose.

For example, if the dictionary is `["cat", "calf", "dog", "bear"]`, the only winning start letter would be `b`.

[See Solution](/problems/500-599/problem-599.js)

--

## Problem 600 - Google [Difficulty: Easy]

Given a set of points (x, y) on a 2D cartesian plane, find the two closest points. For example, given the points `[(1, 1), (-1, -1), (3, 4), (6, 1), (-1, -6), (-4, -3)]`, return [(-1, -1), (1, 1)].

[See Solution](/problems/600-699/problem-600.js)

--

## Problem 601 - Pinterest [Difficulty: Medium]

The sequence `[0, 1, ..., N]` has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last. Given this information, reconstruct an array that is consistent with it. For example, given `[None, +, +, -, +]`, you could return `[1, 2, 3, 0, 4]`.

[See Solution](/problems/600-699/problem-601.js)

--

## Problem 602 - Facebook [Difficulty: Easy]

Suppose you are given two lists of `n` points, one list p1, p2, ..., pn on the line y = 0 and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of n line segments connecting each point pi to qi. Write an algorithm to determine how many pairs of the line segments intersect.

[See Solution](/problems/600-699/problem-602.js)

--

## Problem 603 - Microsoft [Difficulty: Easy]

You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

* `L`, meaning the domino has just been pushed to the left,
* `R`, meaning the domino has just been pushed to the right, or
* `.`, meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string `.L.R....L`, you should return `LL.RRRLLL`.

Given the string `..R...L.L`, you should return `..RR.LLLL`.

[See Solution](/problems/600-699/problem-603.js)

--

## Problem 604 - Grammarly [Difficulty: Hard]

[Soundex](https://en.wikipedia.org/wiki/Soundex) is an algorithm used to categorize phonetically, such that two names that sound alike but are spelled differently have the same representation.

Soundex maps every name to a string consisting of one letter and three numbers, like M460.

One version of the algorithm is as follows:

1. Remove consecutive consonants with the same sound (for example, change `ck -> c`).
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

Using this scheme, `Jackson` and `Jaxen` both map to `J250`.

Implement Soundex.

[See Solution](/problems/600-699/problem-604.js)

--

## Problem 605 - Palantir [Difficulty: Easy]

In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index `h` if at least `h` of her `N` papers have `h` citations each. If there are multiple `h` satisfying this formula, the maximum is chosen.

For example, suppose `N` = 5, and the respective citations of each paper are `[4, 3, 0, 1, 5]`. Then the h-index would be `3`, since the researcher has `3` papers with at least `3` citations.

Given a list of paper citations of a researcher, calculate their h-index.

[See Solution](/problems/600-699/problem-605.js)

--

## Problem 606 - Google [Difficulty: Hard]

A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.

[See Solution](/problems/600-699/problem-606.js)

--

## Problem 607 - Walmart Labs [Difficulty: Medium]

There are `M` people sitting in a row of `N` seats, where `M < N`. Your task is to redistribute people such that there are no gaps between any of them, while keeping overall movement to a minimum.

For example, suppose you are faced with an input of `[0, 1, 1, 0, 1, 0, 0, 0, 1]`, where `0` represents an empty seat and `1` represents a person. In this case, one solution would be to place the person on the right in the fourth seat. We can consider the cost of a solution to be the sum of the absolute distance each person must move, so that the cost here would be five.

Given an input such as the one above, return the lowest possible cost of moving people to remove all gaps.

[See Solution](/problems/600-699/problem-607.js)

--

## Problem 608 - Facebook [Difficulty: Medium]

Given a `start` word, an `end` word, and a dictionary of valid words, find the shortest transformation sequence from `start` to `end` such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as `start` and `end` and is lowercase.

For example, given `start = "dog"`, `end = "cat"`, and `dictionary = {"dot", "dop", "dat", "cat"}`, return `["dog", "dot", "dat", "cat"]`.

Given `start = "dog"`, `end = "cat"`, and `dictionary = {"dot", "tod", "dat", "dar"}`, return null as there is no possible transformation from `dog` to `cat`.

[See Solution](/problems/600-699/problem-608.js)

--

## Problem 609 - Amazon [Difficulty: Medium]

Given a node in a binary search tree, return the next bigger element, also known as the inorder successor.

For example, the inorder successor of 22 is 30.

      10
     /  \
    5    30
        /  \
      22    35

You can assume each node has a `parent` pointer.

[See Solution](/problems/600-699/problem-609.js)

--

## Problem 610 - ContextLogic [Difficulty: Medium]

Implement division of two positive integers without using the division, multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.

[See Solution](/problems/600-699/problem-610.js)

--

## Problem 611 - Dropbox [Difficulty: Hard]

Create a data structure that performs all the following operations in `O(1)` time:

* `plus`: Add a key with value `1`. If the key already exists, increment its value by one.
* `minus`: Decrement the value of a key. If the key's value is currently `1`, remove it.
* `get_max`: Return a key with the highest value.
* `get_min`: Return a key with the lowest value.

[See Solution](/problems/600-699/problem-611.js)

--

## Problem 612 - Stripe [Difficulty: Easy]

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as `[0, 1]` and `[1, 2]`, but they won't be considered overlapping.

For example, given the intervals `(7, 9), (2, 4), (5, 8)`, return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.

[See Solution](/problems/600-699/problem-612.js)

--

## Problem 613 - Google [Difficulty: Easy]

Implement a `PrefixMapSum` class with the following methods:

* `insert(key: str, value: int)`: Set a given key's value in the map. If the key already exists, overwrite the value.
* `sum(prefix: str)`: Return the sum of all values of keys that begin with a given prefix.

For example, you should be able to run the following code:

    mapsum.insert("columnar", 3)
    assert mapsum.sum("col") == 3

    mapsum.insert("column", 2)
    assert mapsum.sum("col") == 5

[See Solution](/problems/600-699/problem-613.js)

--

## Problem 614 - Twitter [Difficulty: Medium]

A network consists of nodes labeled `0` to `N`. You are given a list of edges `(a, b, t)`, describing the time `t` it takes for a message to be sent from node `a` to node `b`. Whenever a node receives a message, it immediately passes the message on to a neighboring node, if possible.

Assuming all nodes are connected, determine how long it will take for every node to receive a message that begins at node `0`.

For example, given `N = 5`, and the following edges:

    edges = [
        (0, 1, 5),
        (0, 2, 3),
        (0, 5, 4),
        (1, 3, 8),
        (2, 3, 1),
        (3, 5, 10),
        (3, 4, 5)
    ]

You should return `9`, because propagating the message from `0 -> 2 -> 3 -> 4` will take that much time.

[See Solution](/problems/600-699/problem-614.js)

--

## Problem 615 - Amazon [Difficulty: Hard]

The [stable marriage problem](https://en.wikipedia.org/wiki/Stable_marriage_problem) is defined as follows:

Suppose you have `N` men and `N` women, and each person has ranked their prospective opposite-sex partners in order of preference.

For example, if `N = 3`, the input could be something like this:

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

[See Solution](/problems/600-699/problem-615.js)

--

## Problem 616 - Google [Difficulty: Medium]

A cryptarithmetic puzzle is a mathematical game where the digits of some numbers are represented by letters. Each letter represents a unique digit.

For example, a puzzle of the form:

      SEND
    + MORE
    --------
     MONEY

may have the solution:

    {'S': 9, 'E': 5, 'N': 6, 'D': 7, 'M': 1, 'O', 0, 'R': 8, 'Y': 2}

Given a three-word puzzle like the one above, create an algorithm that finds a solution.

[See Solution](/problems/600-699/problem-616.js)

--

## Problem 617 - Facebook [Difficulty: Medium]

Given a number in Roman numeral format, convert it to decimal.

The values of [Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals) are as follows:

    {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }

In addition, note that the Roman numeral system uses [subtractive notation](https://en.wikipedia.org/wiki/Roman_numerals) for numbers such as `IV` and `XL`.

For the input `XIV`, for instance, you should return `14`.

[See Solution](/problems/600-699/problem-617.js)

--

## Problem 618 - Unknown [Difficulty: Hard]

Given a list, sort it using this method: `reverse(lst, i, j)`, which reverses `lst` from `i` to `j`.

[See Solution](/problems/600-699/problem-618.js)

--

## Problem 619 - Coursera [Difficulty: Easy]

Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example, given the following board:

    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

`exists(board, "ABCCED")` returns `true`,  
`exists(board, "SEE")` returns `true`,  
`exists(board, "ABCB")` returns `false`.  

[See Solution](/problems/600-699/problem-619.js)

--

## Problem 620 - LinkedIn [Difficulty: Medium]

A wall consists of several rows of bricks of various integer lengths and uniform height. Your goal is to find a vertical line going from the top to the bottom of the wall that cuts through the fewest number of bricks. If the line goes through the edge between two bricks, this does not count as a cut.

For example, suppose the input is as follows, where values in each row represent the lengths of bricks in that row:

    [[3, 5, 1, 1],
     [2, 3, 3, 2],
     [5, 5],
     [4, 4, 2],
     [1, 3, 3, 3],
     [1, 1, 6, 1, 1]]

The best we can we do here is to draw a line after the eighth brick, which will only require cutting through the bricks in the third and fifth row.

Given an input consisting of brick lengths for each row such as the one above, return the fewest number of bricks that must be cut to create a vertical line.

[See Solution](/problems/600-699/problem-620.js)

--

## Problem 621 - Uber [Difficulty: Hard]

Given a tree where each edge has a weight, compute the length of the longest path in the tree.

For example, given the following tree:

      a
     /|\
    b c d
       / \
      e   f
     / \
    g   h

and the weights: `a-b: 3, a-c: 5, a-d: 8, d-e: 2, d-f: 4, e-g: 1, e-h: 1`, the longest path would be `c -> a -> d -> f`, with a length of 17.

The path does not have to pass through the root, and each node can have any amount of children.

[See Solution](/problems/600-699/problem-621.js)

--

## Problem 622 - Google [Difficulty: Easy]

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

        a
       / \
      b   c
     /
    d

[See Solution](/problems/600-699/problem-622.js)

--

## Problem 623 - Palantir [Difficulty: Medium]

Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

    ["the  quick brown", # 1 extra space on the left
     "fox  jumps  over", # 2 extra spaces distributed evenly
     "the   lazy   dog"] # 4 extra spaces distributed evenly

[See Solution](/problems/600-699/problem-623.js)

--

## Problem 624 - Google [Difficulty: Medium]

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

[See Solution](/problems/600-699/problem-624.js)

--

## Problem 625 - Stripe [Difficulty: Easy]

Given an integer `n`, return the length of the longest consecutive run of `1`s in its binary representation.

For example, given `156`, you should return `3`.

[See Solution](/problems/600-699/problem-625.js)

--

## Problem 626 - Facebook [Difficulty: Easy]

Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is `[-10, -10, 5, 2]`, we should return 500, since that's `-10 * -10 * 5`.

You can assume the list has at least three integers.

[See Solution](/problems/600-699/problem-626.js)

--

## Problem 627 - Google [Difficulty: Medium]

Given an `iterator` with methods `next()` and `hasNext()`, create a wrapper iterator, `PeekableInterface`, which also implements `peek()`. `peek` shows the next element that would be returned on `next()`.

Here is the interface:

    class PeekableInterface(object):
        def __init__(self, iterator):
            pass

        def peek(self):
            pass

        def next(self):
            pass

        def hasNext(self):
            pass

[See Solution](/problems/600-699/problem-627.js)

--

## Problem 628 - Citrix [Difficulty: Hard]

You are given a circular lock with three wheels, each of which display the numbers `0` through `9` in order. Each of these wheels rotate clockwise and counterclockwise.

In addition, the lock has a certain number of "dead ends", meaning that if you turn the wheels to one of these combinations, the lock becomes stuck in that state and cannot be opened.

Let us consider a "move" to be a rotation of a single wheel by one digit, in either direction. Given a lock initially set to `000`, a target combination, and a list of dead ends, write a function that returns the minimum number of moves required to reach the target state, or None if this is impossible.

[See Solution](/problems/600-699/problem-628.js)

--

## Problem 629 - Etsy [Difficulty: Medium]

Given an array of numbers `N` and an integer `k`, your task is to split `N` into `k` partitions such that the maximum sum of any partition is minimized. Return this sum.

For example, given `N = [5, 1, 2, 7, 3, 4]` and `k = 3`, you should return `8`, since the optimal partition is [5, 1, 2], [7], [3, 4]`.

[See Solution](/problems/600-699/problem-629.js)

--

## Problem 630 - Apple [Difficulty: Medium]

Implement a job scheduler which takes in a function `f` and an integer `n`, and calls `f` after `n` milliseconds.

[See Solution](/problems/600-699/problem-630.js)

--

## Problem 631 - VMware [Difficulty: Hard]

The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one another when viewed from a distance. We can represent the buildings using an array of `(left, right, height)` tuples, which tell us where on an imaginary x-axis a building begins and ends, and how tall it is. The skyline itself can be described by a list of `(x, height)` tuples, giving the locations at which the height visible to a distant observer changes, and each new height.

Given an array of buildings as described above, create a function that returns the skyline.

For example, suppose the input consists of the buildings `[(0, 15, 3), (4, 11, 5), (19, 23, 4)]`. In aggregate, these buildings would create a skyline that looks like the one below.

        ______  
        |      |        ___
    ___|      |___    |   | 
    |   |   B  |   |   | C |
    | A |      | A |   |   |
    |   |      |   |   |   |
    ------------------------

As a result, your function should return `[(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)]`

[See Solution](/problems/600-699/problem-631.js)

--

## Problem 632 - Snapchat [Difficulty: Medium]

You are given an array of length `N`, where each element `i` represents the number of ways we can produce `i` units of change. For example, `[1, 0, 1, 1, 2]` would indicate that there is only one way to make `0`, `2`, or `3` units, and two ways of making `4` units.

Given such an array, determine the denominations that must be in use. In the case above, for example, there must be coins with value `2`, `3`, and `4`.

[See Solution](/problems/600-699/problem-632.js)

--

## Problem 633 - Palantir [Difficulty: Medium]

You are given a list of `N` numbers, in which each number is located at most `k` places away from its sorted position. For example, if `k = 1`, a given element at index `4` might end up at indices `3`, `4`, or `5`.

Come up with an algorithm that sorts this list in `O(N log k)` time.

[See Solution](/problems/600-699/problem-633.js)

--

## Problem 634 - Square [Difficulty: Medium]

You are given a histogram consisting of rectangles of different heights. These heights are represented in an input list, such that `[1, 3, 2, 5]` corresponds to the following diagram:

          x
          x  
      x   x
      x x x
    x x x x

Determine the area of the largest rectangle that can be formed only from the bars of the histogram. For the diagram above, for example, this would be six, representing the `2 x 3` area at the bottom right.

[See Solution](/problems/600-699/problem-634.js)

--

## Problem 635 - Facebook [Difficulty: Hard]

Implement regular expression matching with the following special characters:

* `.` (period) which matches any single character
* `*` (asterisk) which matches zero or more of the preceding element

That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression on the string "chats" should return false.

[See Solution](/problems/600-699/problem-635.js)

--

## Problem 636 - Uber [Difficulty: Medium]

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

For example, given [5, 7, 10, 3, 4], return 3.

[See Solution](/problems/600-699/problem-636.js)

--

## Problem 637 - Snapchat [Difficulty: Easy]

Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

[See Solution](/problems/600-699/problem-637.js)

--

## Problem 638 - Google [Difficulty: Medium]

Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

Follow-up: given a mutable string representation, can you perform this operation in-place?

[See Solution](/problems/600-699/problem-638.js)

--

## Problem 639 - Yelp [Difficulty: Easy]

Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent. You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].

[See Solution](/problems/600-699/problem-639.js)

--

## Problem 640 - Google [Difficulty: Easy]

You are given a starting state `start`, a list of transition probabilities for a Markov chain, and a number of steps `num_steps`. Run the Markov chain starting from `start` for `num_steps` and compute the number of times we visited each state.

For example, given the starting state `a`, number of steps 5000, and the following transition probabilities:

    [
        ('a', 'a', 0.9),
        ('a', 'b', 0.075),
        ('a', 'c', 0.025),
        ('b', 'a', 0.15),
        ('b', 'b', 0.8),
        ('b', 'c', 0.05),
        ('c', 'a', 0.25),
        ('c', 'b', 0.25),
        ('c', 'c', 0.5)
    ]

One instance of running this Markov chain might produce `{ 'a': 3012, 'b': 1656, 'c': 332 }`.

[See Solution](/problems/600-699/problem-640.js)

--

## Problem 641 - Amazon [Difficulty: Easy]

Given a sorted array, find the smallest positive integer that is not the sum of a subset of the array.

For example, for the input `[1, 2, 3, 10]`, you should return `7`.

Do this in `O(N)` time.

[See Solution](/problems/600-699/problem-641.js)

--

## Problem 642 - Pivotal [Difficulty: Easy]

A step word is formed by taking a given word, adding a letter, and anagramming the result. For example, starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".

Given a dictionary of words and an input word, create a function that returns all valid step words.

[See Solution](/problems/600-699/problem-642.js)

--

## Problem 643 - YouTube [Difficulty: Hard]

Write a program that computes the length of the longest common subsequence of three given strings. For example, given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious", it should return 5, since the longest common subsequence is "eieio".

[See Solution](/problems/600-699/problem-643.js)

--

## Problem 644 - Google [Difficulty: Easy]

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

[See Solution](/problems/600-699/problem-644.js)

--

## Problem 645 - Microsoft [Difficulty: Easy]

Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

    [['F', 'A', 'C', 'I'],
     ['O', 'B', 'Q', 'P'],
     ['A', 'N', 'O', 'B'],
     ['M', 'A', 'S', 'S']]

and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

[See Solution](/problems/600-699/problem-645.js)

--

## Problem 646 - Twitter [Difficulty: Easy]

A classroom consists of `N` students, whose friendships can be represented in an adjacency list. For example, the following describes a situation where `0` is friends with `1` and `2`, `3` is friends with `6`, and so on.

    {0: [1, 2],
     1: [0, 5],
     2: [0],
     3: [6],
     4: [],
     5: [1],
     6: [3]}

Each student can be placed in a friend group, which can be defined as the transitive closure of that student's friendship relations. In other words, this is the smallest set such that no student in the group has any friends outside this group. For the example above, the friend groups would be `{0, 1, 2, 5}`, `{3, 6}`, `{4}`.

Given a friendship list such as the one above, determine the number of friend groups in the class.

[See Solution](/problems/600-699/problem-646.js)

--

## Problem 647 - Facebook [Difficulty: Medium]

Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset `{15, 5, 20, 10, 35, 15, 10}`, it would return true, since we can split it up into `{15, 5, 10, 15, 10}` and `{20, 35}`, which both add up to `55`.

Given the multiset `{15, 5, 20, 10, 35}`, it would return false, since we can't split it up into two subsets that add up to the same sum.

[See Solution](/problems/600-699/problem-647.js)

--

## Problem 648 - Snapchat [Difficulty: Medium]

Given the head to a singly linked list, where each node also has a “random” pointer that points to anywhere in the linked list, deep clone the list.

[See Solution](/problems/600-699/problem-648.js)

--

## Problem 649 - Google [Difficulty: Easy]

Given a string, return the first recurring character in it, or null if there is no recurring character.

For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

[See Solution](/problems/600-699/problem-649.js)

--

## Problem 650 - Google [Difficulty: Hard]

Let A be an N by M matrix in which every row and every column is sorted.

Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

For example, given the following matrix:

    [[1, 3, 7, 10, 15, 20],
     [2, 6, 9, 14, 22, 25],
     [3, 8, 10, 15, 25, 30],
     [10, 11, 12, 23, 30, 35],
     [20, 25, 30, 35, 40, 45]]

And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.

[See Solution](/problems/600-699/problem-650.js)

--

## Problem 651 - LinkedIn [Difficulty: Medium]

Determine whether a tree is a valid binary search tree.

A binary search tree is a tree with two children, `left` and `right`, and satisfies the constraint that the key in the `left` child must be less than or equal to the root and the key in the `right` child must be greater than or equal to the root.

[See Solution](/problems/600-699/problem-651.js)

--

## Problem 652 - Apple [Difficulty: Hard]

You are going on a road trip, and would like to create a suitable music playlist. The trip will require `N` songs, though you only have `M` songs downloaded, where `M < N`. A valid playlist should select each song at least once, and guarantee a buffer of `B` songs between repeats.

Given `N`, `M`, and `B`, determine the number of valid playlists.

[See Solution](/problems/600-699/problem-652.js)

--

## Problem 653 - Google [Difficulty: Easy]

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

return `true` as the first and third rectangle overlap each other.

[See Solution](/problems/600-699/problem-653.js)

--

## Problem 654 - Amazon [Difficulty: Medium]

Given a string, find the length of the smallest window that contains every distinct character. Characters may appear more than once in the window.

For example, given "jiujitsu", you should return `5`, corresponding to the final five letters.

[See Solution](/problems/600-699/problem-654.js)

--

## Problem 655 - Facebook [Difficulty: Easy]

Given a 32-bit integer, return the number with its bits reversed.

For example, given the binary number `1111 0000 1111 0000 1111 0000 1111 0000`, return `0000 1111 0000 1111 0000 1111 0000 1111`.

[See Solution](/problems/600-699/problem-655.js)

--

## Problem 656 - Unknown [Difficulty: Medium]

Given a 2-D matrix representing an image, a location of a pixel in the screen and a color `C`, replace the color of the given pixel and all adjacent same colored pixels with `C`.

For example, given the following matrix, and location pixel of `(2, 2)`, and 'G' for green:

    B B W
    W W W
    W W W
    B B B

Becomes

    B B G
    G G G
    G G G
    B B B

[See Solution](/problems/600-699/problem-656.js)

--

## Problem 657 - Google [Difficulty: Easy]

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set `{1, 2, 3}`, it should return `{{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}`.

You may also use a list or array to represent a set.

[See Solution](/problems/600-699/problem-657.js)

--

## Problem 658 - Google [Difficulty: Hard]

Suppose we represent our file system by a string in the following manner:

The string `"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"` represents:

    dir
        subdir1
        subdir2
            file.ext

The directory `dir` contains an empty sub-directory `subdir1` and a sub-directory `subdir2` containing a file `file.ext`.

The string `"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"` represents:

    dir
        subdir1
            file1.ext
            subsubdir1
        subdir2
            subsubdir2
                file2.ext

The directory `dir` contains two sub-directories `subdir1` and `subdir2`. `subdir1` contains a file `file1.ext` and an empty second-level sub-directory `subsubdir1`. `subdir2` contains a second-level sub-directory `subsubdir2` containing a file `file2.ext`.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is `"dir/subdir2/subsubdir2/file2.ext"`, and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.

[See Solution](/problems/600-699/problem-658.js)

--

## Problem 659 - Twitch [Difficulty: Hard]

Describe what happens when you type a URL into your browser and press Enter.

[See Solution](/problems/600-699/problem-659.js)

--

## Problem 660 - Airbnb [Difficulty: Hard]

You come across a dictionary of sorted words in a language you've never seen before. Write a program that returns the correct order of letters in this language.

For example, given `['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']`, you should return `['x', 'z', 'w', 'y']`.

[See Solution](/problems/600-699/problem-660.js)

--

## Problem 661 - Netflix [Difficulty: Hard]

Given a sorted list of integers of length `N`, determine if an element `x` is in the list without performing any multiplication, division, or bit-shift operations.

Do this in `O(log N)` time.

[See Solution](/problems/600-699/problem-661.js)

--

## Problem 662 - Amazon [Difficulty: Hard]

Given n numbers, find the greatest common denominator between them.

For example, given the numbers `[42, 56, 14]`, return `14`.

[See Solution](/problems/600-699/problem-662.js)

--

## Problem 663 - Riot Games [Difficulty: Easy]

Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

* `record(timestamp)`: records a hit that happened at `timestamp`
* `total()`: returns the total number of hits recorded
* `range(lower, upper)`: returns the number of hits that occurred between timestamps `lower` and `upper` (inclusive)

Follow-up: What if our system has limited memory?

[See Solution](/problems/600-699/problem-663.js)

--

## Problem 664 - Google [Difficulty: Easy]

Given a binary tree of integers, find the maximum path sum between two nodes. The path must go through at least one node, and does not need to go through the root.

[See Solution](/problems/600-699/problem-664.js)

--

## Problem 665 - Microsoft [Difficulty: Easy]

Implement a URL shortener with the following methods:

* `shorten(url)`, which shortens the url into a six-character alphanumeric string, such as `zLg6wl`.
* `restore(short)`, which expands the shortened string into the original url. If no such shortened string exists, return null.

Hint: What if we enter the same URL twice?

[See Solution](/problems/600-699/problem-665.js)

--

## Problem 666 - Microsoft [Difficulty: Hard]

Given an array of positive integers, divide the array into two subsets such that the difference between the sum of the subsets is as small as possible.

For example, given `[5, 10, 15, 20, 25]`, return the sets `{10, 25}` and `{5, 15, 20}`, which has a difference of 5, which is the smallest possible difference.

[See Solution](/problems/600-699/problem-666.js)

--

## Problem 667 - Facebook [Difficulty: Medium]

In chess, the Elo rating system is used to calculate player strengths based on game results.

A simplified description of the Elo system is as follows. Every player begins at the same score. For each subsequent game, the loser transfers some points to the winner, where the amount of points transferred depends on how unlikely the win is. For example, a 1200-ranked player should gain much more points for beating a 2000-ranked player than for beating a 1300-ranked player.

Implement this system.

[See Solution](/problems/600-699/problem-667.js)

--

## Problem 668 - Google [Difficulty: Easy]

In linear algebra, a Toeplitz matrix is one in which the elements on any given diagonal from top left to bottom right are identical.

Here is an example:

    1 2 3 4 8
    5 1 2 3 4
    4 5 1 2 3
    7 4 5 1 2

Write a program to determine whether a given input is a Toeplitz matrix.

[See Solution](/problems/600-699/problem-668.js)

--

## Problem 669 - Google [Difficulty: Hard]

The game of Nim is played as follows. Starting with three heaps, each containing a variable number of items, two players take turns removing one or more items from a single pile. The player who eventually is forced to take the last stone loses. For example, if the initial heap sizes are `3`, `4`, and `5`, a game could be played as shown below:

      A  |  B  |  C
    -----------------
      3  |  4  |  5
      3  |  1  |  3
      3  |  1  |  3
      0  |  1  |  3
      0  |  1  |  0
      0  |  0  |  0 

In other words, to start, the first player takes three items from pile `B`. The second player responds by removing two stones from pile `C`. The game continues in this way until player one takes last stone and loses.

Given a list of non-zero starting values `[a, b, c]`, and assuming optimal play, determine whether the first player has a forced win.

[See Solution](/problems/600-699/problem-669.js)

--

## Problem 670 - Facebook [Difficulty: Medium]

Given a positive integer `n`, find the smallest number of squared integers which sum to `n`.

For example, given `n` = 13, return 2 since 13 = 32 + 22 = 9 + 4.

Given `n` = 27, return 3 since 27 = 32 + 32 + 32 = 9 + 9 + 9.

[See Solution](/problems/600-699/problem-670.js)

--

## Problem 671 - Facebook [Difficulty: Easy]

Given a function `f`, and `N` return a debounced `f` of `N` milliseconds.

That is, as long as the debounced `f` continues to be invoked, `f` itself will not be called for `N` milliseconds.

[See Solution](/problems/600-699/problem-671.js)

--

## Problem 672 - Google [Difficulty: Easy]

You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, `[[1], [2, 3], [1, 5, 1]]` represents the triangle:

      1
     2 3
    1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, `1 -> 3 -> 5`. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.

[See Solution](/problems/600-699/problem-672.js)

--

## Problem 673 - LinkedIn [Difficulty: Hard]

Given a list of points, a central point, and an integer `k`, find the nearest `k` points from the central point.

For example, given the list of points `[(0, 0), (5, 4), (3, 1)]`, the central point `(1, 2)`, and `k` = 2, return `[(0, 0), (3, 1)]`.

[See Solution](/problems/600-699/problem-673.js)

--

## Problem 674 - Google [Difficulty: Easy]

A girl is walking along an apple orchard with a bag in each hand. She likes to pick apples from each tree as she goes along, but is meticulous about not putting different kinds of apples in the same bag.

Given an input describing the types of apples she will pass on her path, in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

For example, given the input `[2, 1, 2, 3, 3, 1, 3, 5]`, the longest portion will involve types `1` and `3`, with a length of four.

[See Solution](/problems/600-699/problem-674.js)

--

## Problem 675 - Google [Difficulty: Medium]

You are given a set of synonyms, such as `(big, large)` and `(eat, consume)`. Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

* "He wants to eat food."
* "He wants to consume food."

Note that the synonyms `(a, b)` and `(a, c)` do not necessarily imply `(b, c)`: consider the case of `(coach, bus)` and `(coach, teacher)`.

Follow-up: what if we can assume that `(a, b)` and `(a, c)` do in fact imply `(b, c)`?

[See Solution](/problems/600-699/problem-675.js)

--

## Problem 676 - LinkedIn [Difficulty: Hard]

Given a string, return whether it represents a number. Here are the different kinds of numbers:

* "10", a positive integer
* "-10", a negative integer
* "*10.1", a positive real number
* "-10.1", a negative real number
* "1e5", a number in scientific notation

And here are examples of non-numbers:

* "a"
* "x 1"
* "a -2"
* "-"

[See Solution](/problems/600-699/problem-676.js)

--

## Problem 677 - Square [Difficulty: Easy]

The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than `N`. The method is to take increasingly larger prime numbers, and mark their multiples as composite.

For example, to find all primes less than `100`, we would first mark `[4, 6, 8, ...]` (multiples of two), then `[6, 9, 12, ...]` (multiples of three), and so on. Once we have done this for all primes less than `N`, the unmarked numbers that remain will be prime.

Implement this algorithm.

Bonus: Create a generator that produces primes indefinitely (that is, without taking `N` as an input).

[See Solution](/problems/600-699/problem-677.js)

--

## Problem 678 - IBM [Difficulty: Easy]

Given an integer, find the next permutation of it in absolute order. For example, given `48975`, the next permutation would be `49578`.

[See Solution](/problems/600-699/problem-678.js)

--
