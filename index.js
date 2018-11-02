function getName(node) {
  return node.name;
}

function getNextAddress(node) {
  return node.next;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  const currentNode = node;
  const nextNode = currentNode.next;

  return collection[nextNode];
}

function nodeAt(position, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);

  for (let i = 0; i < position; i++) {
    currentNode = next(currentNode, collection);
  }

  return currentNode;
}

function addressAt(position, linkedList, collection) {
  let priorAddress = position - 1;

  if (priorAddress < 0) {
    return linkedList;
  }

  const priorNode = nodeAt(priorAddress, linkedList, collection);

  return getNextAddress(priorNode);
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  let currentNode = headNode(linkedList, collection);

  while (currentNode !== node) {
    currentNode = next(currentNode, collection);
    index++;
  }

  return index;
}

function insertNodeAt(position, newPointer, linkedList, collection) {
  const pointer = addressAt(position, linkedList, collection);
  const nodeInFrontOfInsert = nodeAt(position - 1, linkedList, collection);

  nodeInFrontOfInsert.next = newPointer;

  const newNode = next(nodeInFrontOfInsert, collection);

  newNode.next = pointer;
}

function deleteNodeAt(position, linkedList, collection) {
  const nodeInFrontOfDelete = nodeAt(position - 1, linkedList, collection);
  const nextNodeAddress = addressAt(position + 1, linkedList, collection);

  nodeInFrontOfDelete.next = nextNodeAddress;
}
