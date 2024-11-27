const path = require("path");
const Plugin = require(path.resolve('./src/classes/Plugin'));

class MyFirstPlugin extends Plugin {
    constructor() {
        super('My First Amazing Plugin!', 'You', 'MyFirstPlugin', false);
    }

    onInitialize () {
        console.log('Initialized my first plugin!')
        this.registerNewType('Button 0', 'mfp.button0');        
        this.registerNewType('Button 1', 'mfp.button1');        
        this.registerNewType('Button 2', 'mfp.button2');
        
        return true;
    }

    onButton(interaction) {
        console.log("HELLO! You pressed " + interaction.type);
    }
}

module.exports = {
	exec: () => new MyFirstPlugin(),
 	class: MyFirstPlugin
}