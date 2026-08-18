class Graph {
  private adjacencyList = new Map<string, string[]>();

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1: string, v2: string): void {
    this.adjacencyList.get(v1)?.push(v2);
    this.adjacencyList.get(v2)?.push(v1);
  }

  getNeighbors(vertex: string): string[] {
    return this.adjacencyList.get(vertex) ?? [];
  }

  // Deep-First Search
  dfs(start: string): string[] {
    const result: string[] = [];
    const visited = new Set<string>();

    const traverse = (vertex: string): void => {
      if (visited.has(vertex)) return;
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        traverse(neighbor);
      }
    };

    traverse(start);

    return result;
  }

  hasPath(start: string, end: string): boolean {
    const visited = new Set<string>();

    const traverse = (vertex: string): boolean => {
      if (vertex === end) return true;
      if (visited.has(vertex)) return false;

      visited.add(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (traverse(neighbor)) return true;
      }

      return false;
    };

    return traverse(start);
  }

  // Breadth-First Search
  bfs(start: string): string[] {
    const result: string[] = [];
    const visited = new Set<string>([start]);
    const queue: string[] = [start];

    while (queue.length > 0) {
      const vertex = queue.shift(); // queue.shift()!;

      if (vertex === undefined) break;
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  shortestPath(start: string, end: string): string[] | null {
    const visited = new Set<string>([start]);
    const queue: string[] = [start];

    const previous = new Map<string, string | null>();
    previous.set(start, null);

    while (queue.length > 0) {
      const vertex = queue.shift();

      if (vertex === undefined) break;

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
          previous.set(neighbor, vertex);
        }
      }
    }

    if (!previous.has(end)) return null;

    const path: string[] = [];
    let cur: string | null | undefined = end;

    while (cur != null) {
      path.push(cur);
      cur = previous.get(cur)
    }

    return path.reverse();
  }
}

const g = new Graph();
['A', 'B', 'C', 'D', 'E'].forEach((v) => g.addVertex(v));
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'D');
g.addEdge('D', 'E');

// const g2 = new Graph();
// ['A', 'B', 'C', 'D'].forEach((v) => g2.addVertex(v));
// g2.addEdge('A', 'B');
// g2.addEdge('B', 'C');
// g2.addEdge('C', 'D');
// g2.addEdge('A', 'D');

console.log(g.shortestPath('A', 'D'));
