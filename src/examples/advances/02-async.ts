function delay(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncAwait() {
    console.log('Knock, knock!');

    await delay(3000);
    console.log('Who is there?');

    await delay(5000);
    console.log('async/await!');
}

asyncAwait();
