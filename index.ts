console.clear();

import { of,Subject } from 'rxjs'; 

//Initialization using the Subject Constructor
const subject = new Subject();

//Adding Subscribers 
subject.subscribe(msg => console.log(`Subscriber 1 : ${msg}`));
subject.subscribe(msg => console.log(`Subscriber 2 : ${msg}`));

// Feeding value to be pushed to the Subscribers
subject.next('Hello Subjects');

//Late Subscriber will not recieve any value emitted before
subject.subscribe(msg => console.log(`Subscriber 3 : ${msg}`));

//Everyone Subscriber will recieve this message
subject.next('All my intended subscribers are listening now');

