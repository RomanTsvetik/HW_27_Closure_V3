
let callbacks = {
    incCB: function(arg) {
        let a = `increase callback ` + arg;
        console.log(a);
        return a;
    },
    decCB: function (arg) {
        let a = `decrease callback ` + arg;
        console.log(a);
        return a;
    },
    getCB: function (arg) {
        let a = `get callback ` + arg;
        console.log(a);
        return a;
    },    
}

function counter(num = 0, obj) {
    let count = num;

    let statisticObject = {
        incCall: 0,
        decCall: 0,
        getCall: 0,
    }

    function increase() {        
        statisticObject.incCall++;
        return obj?.incCB ? obj.incCB(++count) : ++count;
    }

    function decrease() {
         statisticObject.decCall++;
        return obj?.decCB ? obj.decCB(--count) : --count;
    }

    function get() {
         statisticObject.getCall++;
        return obj?.getCB ? obj.getCB(count) : count;
    }

    function getStatistic() {
        return  statisticObject;
    }

    function reset () {
        return count = 0;
    }

    return {
        increase,
        decrease,
        get,
        getStatistic,
        reset,
    }
}

let newCounter = counter(10, callbacks);


newCounter.increase();
newCounter.increase();
newCounter.increase();

newCounter.decrease();
newCounter.decrease();

newCounter.get();

console.log(newCounter.getStatistic());

console.log(newCounter.reset());

newCounter.increase();
newCounter.decrease();














