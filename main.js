$(function(){

	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/johnbob/orders',
		success: function(friends) {			
			$.each(friends, function(i, friend){
				$orders.append('<li>name: '+ friend.name +', drink: '+ friend.drink +' </li>');
			});
		}, error: function(){
			alert('error loading order');
		}
	});


$('#add-order').on('click', function(){

	var order = {
		name: $name.val(),
		drink = $drink.val()
	};

	$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/johnbob/orders',
		data: order,
		success: function(newOrder){
			$orders.append('<li>name: '+ newOrder.name +', drink: '+ newOrder.drink +' </li>');
		},
		error: function(){
			alert('error saving order');
		}
	});

});



});