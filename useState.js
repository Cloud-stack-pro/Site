/**
 * @param { * } initalValue
 * @returns { [ value:any, setValue:function, subscribe:function, unsubscribe:function ] }
 */
const useState = function useState( initalValue = !1 ) {
    let rootValue = initalValue, listeners = [];
    function getValue() {
        return rootValue
    }
    function setValue( value ) {
        rootValue = value;
        listeners.forEach( listener => listener( rootValue ) );
        return !0
    }
    function subscribe( listener ) {
        listeners.push( listener );
        return !0
    }
    function unsubscribe( listener ) {
        listeners = listeners.filter( i => i !== listener );
        return !0
    }
    return [ rootValue, setValue, subscribe, unsubscribe ]
}
