window.activeMan={};
window.activeMaid={};
$(function(){
	var maidImgs = $('#maidImgs'),
		maidActive = $('#maidActive'),
		maidText= $('#maidText'),
		maidTextHeader= $('#maidTextHeader'),
		menImgs= $('#menImgs'),
		menActive = $('#manActive'),
		menText= $('#menText'),
		menTextHeader= $('#menTextHeader'),
		men = [{name:'Jordan Hardwick',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11150481_896871240374437_1931548533532726786_n.jpg?oh=f5f30015a1c443c470a7ddb5506e7e5c&oe=55FC61C4"},
				{name:'Daniel Ciantar',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/66271_3613008417674_1593558668_n.jpg?oh=2001142d1af4aa3c23686448d061e3d2&oe=55ED7C6A"},
				{name:'Calin Mindrut',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfa1/n31.0-8/1410701_248704051949978_380623143_o.jpg"},
				{name:'Aaron Katz',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/387109_2238325891771_1267386612_n.jpg?oh=052429f7ec48507f440dd9e66b5e8f0e&oe=55F03802"},
				{name:'Farshad Muhammed',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11034906_10153128390115429_4589520849890724093_n.jpg?oh=87844a187c57679a4825dfbb7b762358&oe=56034C47"}],
		maids = [{name:'Sara Koponen',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xaf1/n31.0-8/465316_3586106899623_2055500383_o.jpg"},
				{name:'Alison Kinsman',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/269879_108817582544758_3599986_n.jpg?oh=2c20bd2b8ffedf82c608e3a8dd7d1f13&oe=56059043"},
				{name:'Melody Frost',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xap1/t31.0-8/10655336_10203792589947622_709953313632037841_o.jpg"},
				{name:'Julie Powers',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/4948_110038698608_3153603_n.jpg?oh=bfef017a36c3584ef0f3c5b9f5a4b083&oe=55F5BBBA"},
				{name:'Holly Koponen',url:"https://scontent-ord1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10364002_705555636168196_5486101261914882042_n.jpg?oh=67e1cf9c891bfdbdaed1274794d91041&oe=55F4AA8B"}];
	function filterPeople(pplList){
		return pplList.filter(function(person){
			if(person.active == false)
				return true;
			return false;
		});
	};
	function setActivePerson(person){
		var img = renderPerson(person);
		img.addClass('active');
		person.active = true;
		person.activeDiv.html('');
		person.activeDiv.append(img);
		person.textAreaHeader.html('<h3>'+person.name+'</h3>');
		person.textArea.html(person.text);
	};
	function renderPerson(person){
		var img = $("<img src='"+person.url+"' id='img"+person.name+"' class='wedding-party-img'>");
		//person.imgDom = img;
		return img;	
	};
	function renderPassivePeople(people,allPeople){
		people[0].imgDom.html('');
		people.forEach(function(person,i){
			var img = renderPerson(person);
			img.click(function(){
				updatePerson(person,allPeople);
			});
			person.imgDom.append(img);
		});
	}
	window.updatePerson = function(person,people) {
		people.forEach(function(person){
			person.active = false;
		});
		setActivePerson(person);
		renderPassivePeople(filterPeople(people),people);
	}
	var filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dui erat, lobortis in tellus quis, malesuada fermentum nisl. Nullam a neque orci. Maecenas facilisis eu ex sed ultrices. Quisque purus felis, condimentum sit amet luctus ac, consectetur quis est. Morbi sed mattis tortor. Integer dapibus felis ultricies egestas posuere. Praesent a pharetra quam, in dignissim elit. Curabitur odio sem, fermentum eget efficitur sit amet, blandit quis risus. Sed suscipit felis eu ipsum faucibus venenatis. Integer aliquam magna ante, eget maximus nisi rutrum et. Sed viverra mauris mi, a lacinia arcu pellentesque non. Suspendisse convallis turpis vitae lacus sodales, id lacinia justo facilisis. Etiam malesuada arcu ex, eu iaculis justo mollis ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
	men.forEach(function(man){
		man.imgDom= menImgs;
		man.activeDiv = menActive;
		man.textArea = menText;
		man.textAreaHeader = menTextHeader;
		man.active = false;
		man.text=filler;
	});
	maids.forEach(function(maid){
		maid.imgDom= maidImgs;
		maid.activeDiv = maidActive;
		maid.textArea = maidText;
		maid.textAreaHeader = maidTextHeader;
		maid.active = false;
		maid.text=filler;
	});
	updatePerson(men[0],men);
	updatePerson(maids[0],maids);
});
