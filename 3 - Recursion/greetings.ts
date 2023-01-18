function howAreYou(name: string): void {
    console.log(`How are you, ${name}?`);
}

function bye(): void {
    console.log('Bye!');
}

function greetings(name: string): void {
    console.log(`Hello ${name}!`);

    howAreYou(name);
    console.log('Getting ready to say bye!');
    bye();
}

greetings('Ítalo'); // You can see the Call Stack being executed.