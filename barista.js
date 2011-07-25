function Barista() {
	var queue = [];
	var completeCallbacks = [];
	
	
	var callNext = function() {
		queue[queue.length-1]();
	}
	
	var fireComplete = function() {
		for (i=0; i< completeCallbacks.length; i++) {
			completeCallbacks[i]();
		}
	}
	
	this.enqueue = function(func) {
		queue.unshift(func);
		if(queue.length == 1) {
			callNext();
		}
	}
	this.next = function() {
		queue.pop();
		if (queue.length > 0) {
			callNext();
		} else {
			fireComplete();
		}
	}
	this.complete = function(func) {
		completeCallbacks.push(func)
	}
	
}