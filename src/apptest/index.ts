function sayHello(person: string):string {
   
    interface Lengthwise {
        length: number;
    }
    
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    } 
    // function loggingIdentity(arg: Lengthwise) {
    //     console.log(arg.length);
    //     return arg;
    // }

    const dd = loggingIdentity({length:111,aa:12})
    
    console.log(dd); // Jack

    return 'Hello, ' + person;
}

export default sayHello;