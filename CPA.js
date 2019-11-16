	function add(x,y){
	    console.log(x+y);
	}
	    function addFive(x,addRefernces){
		addRefernces(5,x);
	    }
	    addFive(10,add);

	    function higherOrderFunction(x,callback){
		callback(5,x)
	    }
	    higherOrderFunction(10,add);
