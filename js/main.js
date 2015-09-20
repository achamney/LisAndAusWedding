var imageStories = [];
                    imageStories.push({URL : 'http://i.imgur.com/bGjZeQ1.jpg', width:'400', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/K0Vvsfm.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
                    imageStories.push({URL : 'http://i.imgur.com/SQYMSt6.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/Nx52QkB.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/Xk2rwi2.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/kxzyIK2.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/RfUbxbM.jpg', width:'450', height: '500', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/0cvsf0c.jpg', width:'450', height: '500', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/BlTXj9I.jpg', width:'550', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});
					imageStories.push({URL : 'http://i.imgur.com/acB3c6K.jpg', width:'400', height: '450', Heading : 'THIS IS MY HEADER', Text : 'This is my paragraph about Heading.......'});

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '0');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < imageStories.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
            var td = document.createElement('td');

			var iEven = i % 2 == 0;
			var jEven = j % 2 == 0;

			if (iEven != jEven)
			{
			    var img = document.createElement("img");
                img.setAttribute('src', imageStories[i].URL);
                img.setAttribute('alt', '');
	            img.setAttribute('align', 'center');
	            img.setAttribute('width', imageStories[i].width);
	            img.setAttribute('height', imageStories[i].height);
			    td.appendChild(img);
			}
			else
			{
				var HeadingText = document.createTextNode(imageStories[i].Heading);
				var HeadingSpan = document.createElement('span');
                HeadingSpan.style.fontSize = '20px';
                HeadingSpan.style.fontWeight = 'bold';
                HeadingSpan.style.color = 'blue';
				HeadingSpan.appendChild(HeadingText);
				td.appendChild(HeadingSpan);

				var brk = document.createElement("br");
				var brk1 = document.createElement("br");
				td.appendChild(brk);
				td.appendChild(brk1);
				
				var MainText = document.createTextNode(imageStories[i].Text);
				var MainTextSpan = document.createElement('span');
				MainTextSpan.style.fontSize = '15px';
				MainTextSpan.style.color = 'red';
				MainTextSpan.appendChild(MainText);
				td.appendChild(MainTextSpan);
				
			}
			td.align = 'center';
            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }
 tbl.appendChild(tbdy);
 body.appendChild(tbl)
