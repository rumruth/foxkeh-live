import Foxkeh from './Foxkeh.svelte';

var div = document.createElement('DIV');
var script = document.currentScript;

div.classList.add("foxkeh__wrapper");
script.parentNode.insertBefore(div, script);

const foxkeh = new Foxkeh({
	target: div,
});