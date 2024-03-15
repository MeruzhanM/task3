///////////////////////  TASK 1 ///////////////////////

tree1 = {
  1:{
      2: {
          4: {
              7: {
                  8: {
                      9: {}
                  }
              }
          },
          5: {}
      },
      3: {
          6: {}
      }
  }
}


nodes = [
  {id: 1, parentId: null},
  {id: 2, parentId: 1},
  {id: 3, parentId: 1},
  {id: 4, parentId: 2},
  {id: 5, parentId: 2},
  {id: 6, parentId: 3},
  {id: 7, parentId: 4},
  {id: 8, parentId: 7},
  {id: 9, parentId: 8},
]

function createTree1(nodes, parent = null) {
  let tree = {};
  for(let i = 0; i < nodes.length; i++) {
    if(nodes[i].parentId === parent) {
      tree[nodes[i].id] = createTree1(nodes, nodes[i].id)
    }
  }
  return tree;
}


///////////////////////  TASK 2 ///////////////////////


tree2 = {
  id: 1,
  children: [
      {
          id: 2,
          children: [
              {id: 4, children: [
                  {id: 7, children: [
                      {id: 8, children: [
                          {id: 9, children: []}
                      ]}
                  ]}
              ]},
              {id: 5, children: []}
          ]
      },
      {
          id: 3,
          children: [
              {id: 6, children: []}
          ]
      }
  ]
}


nodes = [
  {id: 1, parentId: null},
  {id: 2, parentId: 1},
  {id: 3, parentId: 1},
  {id: 4, parentId: 2},
  {id: 5, parentId: 2},
  {id: 6, parentId: 3},
  {id: 7, parentId: 4},
  {id: 8, parentId: 7},
  {id: 9, parentId: 8},
]

function createTree2(nodes) {
  const tree2 = {}
  for(let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if(node.parentId === null) {
      tree2.id = node.id;
      tree2.children = createChildren(nodes, node.id)
      break;
    }
  }
  return tree2
}

function createChildren(nodes, parent) {
  let children = [];
  for(let i = 0; i < nodes.length; i++) {
    let child = nodes[i];
    if(child.parentId === parent) {
      children.push({
        id: child.id,
        children: createChildren(nodes, child.id)
      });
    }
  }
  return children;
}
createTree2(nodes)


///// skzbum mi funkciayov em shat porcel lucem u chkaroxaca, sencer stacvum 

// function createTree2(nodes, parent = null) {
//   let tree = {};
//   for(let i = 0; i < nodes.length; i++) {
//     let node = nodes[i]
//       if(node.parentId === parent) {
//           let child = createTree2(nodes, node.id);
//           if(Object.keys(child).length > 0) {
//             tree[node.id] = {id: node.id, children: [child]};
//           } else {
//             tree[node.id] = {id: node.id, children: []};
//           }
          
//       }
//   }
//   return tree;
// }





