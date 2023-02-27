import { define } from 'uelements'
import  App  from './app'
import './index.css'

define(
	"f22-plugin",
	(el) => <App dataURL={(el.getAttribute("dataURL") || "")}  
	/>,
	["dataURL" ],
	() => console.log("F22 Plugin cleanup")
);


let widget2 = document.createElement('f22-plugin')
widget2.setAttribute('dataUrl', "https://api.jsonbin.io/v3/b/63eba33cc0e7653a05776546")


let widget1 = document.createElement('f22-plugin')
widget1.setAttribute('dataUrl', "https://api.jsonbin.io/v3/b/63f46ecaace6f33a22e27e65")
document.body.append(widget1)
document.body.append(widget2)


