/**
 * Company: Amazon.
 *
 * Huffman coding is a method of encoding characters based on their frequency. Each letter is assigned
 * a variable-length binary string, such as 0101 or 111110, where shorter lengths correspond to more
 * common letters. To accomplish this, a binary tree is built such that the path from the root to any
 * leaf uniquely maps to a character. When traversing the path, descending to a left child corresponds
 * to a 0 in the prefix, while descending right corresponds to 1.
 *
 * Given a dictionary of character frequencies, build a Huffman tree, and use it to determine a mapping
 * between characters and their encoded binary strings.
 * TODO:
 */
