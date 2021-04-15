const userName = document.getElementById('name');
const age = document.getElementById('age');
const place = document.getElementById('place');
const gender = document.getElementById('gender');
const looking = document.getElementById('looking');
const pic = document.getElementById('pic');

const userData = [
	{
		name: 'Narendra Singh',
		age: '21',
		location: 'Jodhpur,Rajasthan',
		gender: 'Male',
		lookingFor: 'Female',
		img: 'https://randomuser.me/api/portraits/men/47.jpg',
	},
	{
		name: 'Sunita Williams',
		age: '32',
		location: 'Hisar,Haryana',
		gender: 'Female',
		lookingFor: 'Male',
		img: 'https://randomuser.me/api/portraits/women/7.jpg',
	},
	{
		name: 'Rajesh Patil',
		age: '41',
		location: 'Bikaner,Rajasthan',
		gender: 'Male',
		lookingFor: 'Male',
		img: 'https://randomuser.me/api/portraits/men/21.jpg',
	},
	{
		name: 'Sapna Mishra',
		age: '18',
		location: 'Jaipur,Rajasthan',
		gender: 'Female',
		lookingFor: 'Male',
		img: 'https://randomuser.me/api/portraits/women/21.jpg',
	},
	{
		name: 'Sanjay Yadav',
		age: '45',
		location: 'Mathura,UP',
		gender: 'Male',
		lookingFor: 'Female',
		img: 'https://randomuser.me/api/portraits/men/85.jpg',
	},
	{
		name: 'Raj Malhotra',
		age: '30',
		location: 'Mumbai,Maharashtra',
		gender: 'Male',
		lookingFor: 'Female',
		img: 'https://randomuser.me/api/portraits/men/30.jpg',
	},
	{
		name: 'Dhriti Vyas',
		age: '28',
		location: 'Pune,Maharashtra',
		gender: 'Female',
		lookingFor: 'Male',
		img: 'https://randomuser.me/api/portraits/women/10.jpg',
	},
];

//using iterators
// function iterateProfile(user) {
// 	let index = 0;

// 	return {
// 		next: function () {
// 			return index < user.length
// 				? {
// 						value: user[index++],
// 						done: false,
// 				  }
// 				: {
// 						done: true,
// 				  };
// 		},
// 	};
// }

//using generators
function* iterateProfile(user) {
	let index = 0;
	while (index < user.length) yield user[index++];
}

const profiles = iterateProfile(userData);

document.getElementById('nextBtn').addEventListener('click', showUser);

showUser();

function showUser() {
	const currentUser = profiles.next().value;

	if (currentUser != undefined) {
		userName.innerHTML = currentUser.name;
		place.innerHTML = `Place : ${currentUser.location}`;
		age.innerHTML = `Age : ${currentUser.age}`;
		gender.innerHTML = `Gender : ${currentUser.gender}`;
		looking.innerHTML = `Looking For : ${currentUser.lookingFor}`;
		pic.setAttribute('src', currentUser.img);
	} else {
		window.location.reload();
	}
}
