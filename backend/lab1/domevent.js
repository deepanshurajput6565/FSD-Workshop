import {EventEmitter} from "node:events";
function createDOMElement(){
    const emitter= new EventEmitter;
    return{
        addEventListener(eventName,callback){
            emitter.on(eventName,callback);
        },
        removeEventListener(eventName,callback){
            emitter.off(eventName,callback);

        },
        dispatchEvent(event){
            emitter.emit(event.type,event);
        },
    };  

}
const button = createDOMElement;
button.addEventListener('click',()=>{
    console.log("button clicked")
});
button.dispatchEvent({
    type : "click"
});
button.removeEventListener('click',handleclick);
function handleclick(event){
    console.log("button clicked!");
    console.log('event type : ${even.type}');
    console.log('message : ${even.detail}');

}