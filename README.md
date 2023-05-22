# useState in Vanila.js

### Example to use
``` js
const [ count, setCount, subscribe, unsubscribe ] = useState(); // default ( false )

const app = document.getElementById("MyApp");
subscribe( value => {
    // Updates every time the value changes by setCount.
    app.textContent = value;
});

setCount(100);
```
