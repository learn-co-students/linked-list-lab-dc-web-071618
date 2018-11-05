function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  return collection[node.next];
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList];
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  let address = linkedList;
  for (let i = 0; i < index; i++) {
    let node = collection[address];
    address = node.next;
  }
  return address;
}

function indexAt(inputNode, collection, linkedList) {
  let node = collection[linkedList];
  let index = 0;
  while (node !== inputNode) {
    node = next(node, collection);
    index++;
  }
  return index;
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let newNext = previousNode.next;
  previousNode.next = newAddress;
  let newNode = collection[newAddress];
  newNode.next = newNext;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let node = nodeAt(index, linkedList, collection);
  previousNode.next = node.next;
}
