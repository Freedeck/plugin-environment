# Freedeck Developer Environment

![Developer](https://github.com/Freedeck/media-kit/blob/main/sections/slice1.png?raw=true)

---

Welcome to the official Developer Environment! Here, you can create insanely powerful Freedeck plugins.

## Marketplace

The Marketplace is a built-in section of the Freedeck Companion app that allows users to easily download plugins using [Handoff](https://github.com/Freedeck/handoff).  
You can host your own Marketplace repository as well [using this server, or your own! (Specification coming soon.)](http://freedeckex.moonprod.me/Manifest).  

[You can see the default repository raw here.](https://releases.freedeck.app/index.json)

## Want to submit your own plugin to the Marketplace?

[Make an issue here! Title it something related to "Marketplace Submission"!](https://github.com/Freedeck/plugin-environment/issues/new)

## Back to the Developer Environment

Here's what the plugin system can do:

- Add your own dependencies with a Node project in a tiny tar + gzip format!
- Hook into the Client, Companion, Socket server, AND main process!
  - This allows you to communicate back and forth between every client & send your own encoded events/data.
- Create your own Tiles!
  - You can make sliders, text, button, and more on the way!
- Hook into [other](https://github.com/Freedeck/WaveLink) [applications](https://github.com/Freedeck/obscontrol)!

## Using the Developer Environment

To use the package environment, it's pretty self explanatory. Take a look at any folder with .src at the end, you'll want to copy that. MyFirstPlugin is a nice and clean base.

Now, you can use methods like
```js
this.setJSServerHook("file.js");
this.setJSClientHook("fileTwo.js");
this.setJSSocketHook("socketHook.js");
```
during initialization to hook into Freedeck. Server & client hooks don't require an export, but for socket hooks, you MUST export a method like this.

(socketHook.js)
```js
module.exports = (socket, io, pluginInstance) => {
  console.log("Somebody connected to the Freedeck server! Now I can access the user, socket.io server, and plugin instance.")
}
```

## Running

Running a plugin uses a simulated Plugin class. This means you don't need to keep restarting Freedeck to test changes, unless it's something like a button press.  
There are some drawbacks though:

- Hooks are never loaded.. because they have nowhere to load
- All Tile types are "registered" but you can't press them

However, it's simple to build your own tests to press the "Tile"s.

To build and run your plugin in the dev env, just do `node index.js` and let the environment do the rest!  

Very much magic.
