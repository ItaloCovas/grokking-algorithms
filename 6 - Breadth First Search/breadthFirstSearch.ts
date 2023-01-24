interface Graph<T> {
    [key: string]: T[]
};

// Just an example of a rule for being a seller - your name ends with "m", I know, silly :p
function personIsSeller(name: string): boolean {
    return name.endsWith('m');
}

const graph: Graph<string> = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

function search(name: string): boolean {
    let searchQueue: Array<string> = graph[name];

    // This array is how you keep track of which people you've searched before.
    const searched: Array<string> = [];

    while(searchQueue.length > 0) {
        // Select the first person in queue
        const person: string | undefined = searchQueue.shift();
        // Only search this person if you haven't already searched them
        if (!searched.includes(person as string)) {
            if (personIsSeller(person as string)) {
                console.log(`${person} is a mango seller!`);
                return true;
            } else {
                searchQueue = searchQueue.concat(graph[person as string]);
                // Marks this person as searched
                searched.push(person as string);
            }
        }
    }

    return false;
};

search('you');