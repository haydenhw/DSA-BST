const BinarySearchTree = require('./bst')

const makeBST = () => {
  const bst = new BinarySearchTree()
  bst.insert('E', 'foo')
  bst.insert('A', 'bar')
  bst.insert('S', 'bing')
  bst.insert('Y', 'bang')
  bst.insert('D', 'baz')
  bst.insert('O', 'bat')
  return bst
}

test('bst - throws an error if key is not found', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('C', 'baz')
  bst.insert('B', 'bar')
  expect(() => {
    bst.find('Z')
  }).toThrow('Key Error')
})

test('bst - returns the correct value given a key', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('C', 'baz')
  bst.insert('B', 'bar')
  expect(bst.find('B')).toBe('bar')
})

test('bst - returns value of the first node', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('C', 'baz')
  bst.insert('B', 'bar')
  expect(bst.find('A')).toBe('foo')
})


test('bst - inserting a A and then a B and then a C results in a root node and a node on the right with a node on the left', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('C', 'baz')
  bst.insert('B', 'bar')
  expect(bst.right.left.value).toBe('bar')
})

test('bst - inserting a A and then a B and then a C results in a root node and a node on the right with another node on the right', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('B', 'bar')
  bst.insert('C', 'baz')
  expect(bst.right.right.value).toBe('baz')
})

test('bst - inserting a A and then a B results in a root node and a node on the right', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('B', 'bar')
  console.log(bst)
  expect(bst.right.value).toBe('bar')
})

test('bst - the first node on the right is value bing', () => {
  const bst = makeBST()
  expect(bst.right.value).toBe('bing')
})

test('bst - calling retrieve value with value B returns bar ', () => {
  const bst = new BinarySearchTree()
  bst.insert('A', 'foo')
  bst.insert('B', 'bar')
  expect(bst.find('B')).toBe('bar')
})
