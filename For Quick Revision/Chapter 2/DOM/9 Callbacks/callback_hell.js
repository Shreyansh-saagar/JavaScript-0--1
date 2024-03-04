asyncFunc1(function(result1) {
    console.log('Result 1:', result1);
    
    asyncFunc2(result1, function(result2) {
      console.log('Result 2:', result2);
      
      asyncFunc3(result2, function(result3) {
        console.log('Result 3:', result3);
        
        asyncFunc4(result3, function(result4) {
          console.log('Result 4:', result4);
          
          // More nested callbacks...
        });
      });
    });
  });
  
  // Simulated asynchronous functions
  function asyncFunc1(callback) {
    setTimeout(function() {
      callback('Data from asyncFunc1');
    }, 1000);
  }
  
  function asyncFunc2(data, callback) {
    setTimeout(function() {
      callback('Data from asyncFunc2 based on: ' + data);
    }, 1000);
  }
  
  function asyncFunc3(data, callback) {
    setTimeout(function() {
      callback('Data from asyncFunc3 based on: ' + data);
    }, 1000);
  }
  
  function asyncFunc4(data, callback) {
    setTimeout(function() {
      callback('Data from asyncFunc4 based on: ' + data);
    }, 1000);
  }