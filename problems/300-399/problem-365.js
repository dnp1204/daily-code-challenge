/**
 * Company:Google.
 *
 * A quack is a data structure combining properties of both stacks and queues. It can be viewed as a list of elements written left to
 * right such that three operations are possible:
 *
 * push(x): add a new item x to the left end of the list
 * pop(): remove and return the item on the left end of the list
 * pull(): remove the item on the right end of the list.
 *
 * Implement a quack using three stacks and O(1) additional memory, so that the amortized time for any push, pop, or pull operation is
 * O(1).
 * TODO:
 */

/** 
Recall that a stack is a last-in first-out (LIFO) container of elements. Therefore, we can support push(x) and pop() simply by using the same methods provided by a normal stack. In order to support the pull() operation, we need to access the least-recently added item (FIFO).

We can simulate a deque (or double-ended queue) by using two stacks. One stack represents the left, or front (for push(x)/pop()), and the other represents the right, or back (for pull()). If we assume both the front and back stacks contain elements in the correct ordering, supporting all three operations is straightforward. We push to the top of the front stack, and pop from the same stack. When we call pull, we simply pop from the back stack, assuming we've already reversed the elements correctly.

For example, imagine the integers 1 through 6 being pushed in order. Some configurations might look like this:

(Stacks here are depicted as Python lists, which append to and pop from the right-hand side. This is different from the quack convention.)

|  Front (Left)  |  Back (Right)  |
     [4 5 6]          [3 2 1]

|  Front (Left)  |  Back (Right)  |
       []          [6 5 4 3 2 1]

|  Front (Left)  |  Back (Right)  |
  [1 2 3 4 5 6]         []
When we run out of elements in either stack, operations get tricky. How do we make sure that both stacks are ordered correctly? Recall that we can reverse a stack by using an auxiliary array. We can use the third stack as a buffer stack to move and reverse elements correctly. When we need more elements in the right stack, let's go ahead and move half of the items over to the left stack. We'll pop half of the left stack into the buffer stack. Then, pop the remainder into the right stack. Finally, pop the items from the buffer stack back into the left stack.


|  Front (Left)  |  Back (Right)  |  Buffer  |
  [1 2 3 4 5 6]         []             []

|  Front (Left)  |  Back (Right)  |  Buffer  |
     [1 2 3]            []          [6 5 4]

|  Front (Left)  |  Back (Right)  |  Buffer  |
       []             [3 2 1]       [6 5 4]

|  Front (Left)  |  Back (Right)  |
     [4 5 6]          [3 2 1]
When we run out of elements on the left stack, we can perform the same operations in reverse. This re-balancing operation takes time proportional to O(N). However, since we have guaranteed N/2 elements on both stacks, there must be no fewer than N/2 push or pop operations between each re-balance. Therefore, we can say that the amortized time for pop and pull are each O(1). The running time for each push operation is O(1).

class Quack:
    def __init__(self):
        self.right = []
        self.left = []
        self.buffer = []

    def push(self, x):
        self.left.append(x)

    def pop(self):
        if not self.left and not self.right:
            raise IndexError('pop from empty quack')

        if not self.left:  # Re-balance stacks
            size = len(self.right)
            # Move half of right stack to buffer
            for _ in range(size // 2):
                self.buffer.append(self.right.pop())
            # Move remainder of right to left
            while self.right:
                self.left.append(self.left.pop())
            # Move buffer elements back to right
            while self.buffer:
                self.right.append(self.buffer.pop())

        return self.left.pop()

    def pull(self):
        if not self.left and not self.right:
            raise IndexError('pull from empty quack')

        if not self.right:  # Re-balance stacks
            size = len(self.left)
            # Move half of left stack to buffer
            for _ in range(size // 2):
                self.buffer.append(self.left.pop())
            # Move remainder of left to right
            while self.left:
                self.right.append(self.left.pop())
            # Move buffer elements back to left
            while self.buffer:
                self.left.append(self.buffer.pop())

        return self.right.pop()
 */
