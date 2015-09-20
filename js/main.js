var images = ['http://i.imgur.com/bGjZeQ1.jpg','http://i.imgur.com/K0Vvsfm.jpg',
				'http://i.imgur.com/SQYMSt6.jpg',
				'http://i.imgur.com/Nx52QkB.jpg',
				'http://i.imgur.com/Xk2rwi2.jpg',
				'http://i.imgur.com/kxzyIK2.jpg',
				
				'http://i.imgur.com/RfUbxbM.jpg',
				'http://i.imgur.com/0cvsf0c.jpg',
				'http://i.imgur.com/BlTXj9I.jpg',
				'http://i.imgur.com/acB3c6K.jpg'];
				
var caro = $('.carousel-inner');
images.forEach(function(img,i){
	var item=$('<div class="item"></div>');
	if(i==0)
		item.addClass('active');
	caro.append(item);
	item.append($('<img width=800 src="'+img+'">'));
});