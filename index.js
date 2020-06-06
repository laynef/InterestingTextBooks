const repl = require('repl');
const { combineTextFiles } = require('./utils');


const options = { 
    useColors: true,
    prompt: '> '
};

const replServer = repl.start(options);

replServer.defineCommand('combineTextFiles', {
    help: `Combine multiple text files into one large text file using the input => directoryNameInSrc:bookTitle
i.e. FortuneInFormulas1939:FortuneInFormulas`,
    action(input) {
        this.clearBufferedCommand();
        try {
            const [directoryName, ...rest] = input.split(':');
            combineTextFiles(directoryName, rest.join(''));
            console.log('Your book has been created');
        } catch (error) {
            console.error('Your book could not be created');
        }
        this.displayPrompt();
    }
});
