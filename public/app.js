let count = 0

var createCounter = function(n) {
    
    return function() {
        n = n+count
        count=1
        console.log(n);
        return n
        

        
    };
};

 
const counter = createCounter(-2)
counter()
counter()
counter()
counter()
counter()