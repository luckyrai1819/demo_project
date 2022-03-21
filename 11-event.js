const EventEmitter= require('events');

const emitter=new EventEmitter();

emitter.on('response',()=>{console.log('other ');})
emitter.on('response',()=>{console.log('data received');})



emitter.emit('response');


