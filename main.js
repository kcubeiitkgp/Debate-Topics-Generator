let btn = document.getElementById('btn');
let output = document.getElementById('output');
let timer=document.getElementById('timer');
let topics = 
   [
	'Is college education essential ?',
	'Social media; Boon or Bane',
	'Is College Teaching You the Skills You’ll Need to Succeed in Life?',
	'Will technology make people smarter?',
	'Does money buy happiness?',
	'Should you eat animals ?',
	'Digital books vs Hard copy books',
	'Does age and maturity go hand in hand?',
	'Ghosts:Fact or fiction?',
	'Should Companies Collect Information About Us?',
	'Is paying actors and professional athletes huge amount of money justified?',
	'Should the supernumary seats for girls at elite institutions like IITs be removed?',
	'Should smoking be banned?',
	'Is forcing children to study for engineering or medical entrance bad ?',
	'Should everyone know how to cook?',
	'Do people change when they have power?',
	'Do age and wisdom go hand in hand?',
	'Should you keep pets?',
	'Should parents spend their hard earned money to enroll an academically weaker student in good school?',
	'Should homework be banned for primary school children?',
	'Should government impose more tax on ultra rich and give it to the poor?',
	'Should children below 14 be made to work legally?',
	'Should social media platforms be responsible for fake news that is posted on their site?',
	'Should apps track your location?',
	'Should reservations be banned?',
	'Are beauty paegents a waste of time and resources?',
	'Should animals be used in laboratories for experiments?',
	'Is India truly a democracy?',
	'Is unity in India a myth?',
	'Do celebrities have a moral obligation to be good role models?',
	'Are advertisements boon or a bane?',
	'Does ancient culture have any place in modern society?',
	'Is money the root of all evil?',
	'Online learning v/s traditional learning',
	'Should history be taught in schools?',
	'Are men stronger than women?',
	'Government job v/s Private Job',
	'Job v/s Business',
	'Should media be free to express their opinions and criticism?',
	'Team sport/game v/s Individual sport/game',


	
  ];



btn.addEventListener('click',function(){
	var randomTopic = topics[Math.floor(Math.random() * topics.length)] ;
	output.innerHTML= "<h3>" + randomTopic + " </h3>";
	const timeLeftDisplay = document.getElementById('time-left');
	let timeLeft= 60
	setInterval(function(){
			if (timeLeft <=0) {
				clearInterval(timeLeft= 0)

			}
			timeLeftDisplay.innerHTML = timeLeft;
		

			
			timeLeft -=1
		},1000)

})

 
