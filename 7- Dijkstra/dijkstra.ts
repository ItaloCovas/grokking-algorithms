interface Node {
    [key: string]: number;
}

interface DijkstraGraph {
    [key: string]: Node;
};

interface Costs {
    [key: string]: number;
}

interface Parents {
    [key: string]: string | null;
}


// We will use 3 tables: graph, costs, parents

// GRAPH
const dijkstraGraph: DijkstraGraph = {};
dijkstraGraph.start = {};
dijkstraGraph.start.a = 6;
dijkstraGraph.start.b = 2;

dijkstraGraph.a = {};
dijkstraGraph.a.fin = 1;

dijkstraGraph.b = {};
dijkstraGraph.b.a = 3;
dijkstraGraph.b.fin = 5;

dijkstraGraph.fin = {}; 

// COSTS
const costs: Costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// PARENTS
const parents: Parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

let processed: Array<any> = [];


const findLowestCostNode = (itCosts: Costs): string | null => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach(node => {
    const cost = itCosts[node];
    // If it's the lowest cost so far and hasn't been processed yet...
    if (cost < lowestCost && !processed.includes(node)) {
      // ... set it as the new lowest-cost node.
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowestCostNode(costs);


while (node !== null) {
  const cost = costs[node];
  // Go through all the neighbors of this node
  const neighbors = dijkstraGraph[node];
  Object.keys(neighbors).forEach((n: string) => {
    const newCost = cost + neighbors[n];
    // If it's cheaper to get to this neighbor by going through this node
    if (costs[n] > newCost) {
      // ... update the cost for this node
      costs[n] = newCost;
      // This node becomes the new parent for this neighbor.
      parents[n] = node;
    }
  });

  // Mark the node as processed
  processed.push(node);

  // Find the next node to process, and loop
  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }


