let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];




let mainTitleEl = document.getElementById('main-title'); //part 1
mainTitleEl.textContent = 'FOR THE FAMILY';

let bodyEl = document.querySelector('body');              //part 2
bodyEl.style.backgroundColor = 'teal';

let favThingsEl = document.getElementById('favorite-things'); //part 3
favThingsEl.lastElementChild.remove()

let specialTitleEl = document.querySelectorAll('.special-title'); //part 4
console.log(specialTitleEl);
specialTitleEl.forEach(function(elem) {
  elem.style.fontSize = '2rem';
});

let pastRacesListArray = document.querySelectorAll('#past-races > li'); //part 5
// console.log()
pastRacesListArray.forEach(function(liEl) {
  if(liEl.textContent === 'Chicago') {
    liEl.remove();
    return;
  }
});

let newLiEl = document.createElement('li');                           //part 6
newLiEl.textContent = 'Miami'
console.log(newLiEl)
let pastRacesULEl = document.getElementById('past-races')
pastRacesULEl.append(newLiEl)



let mainEl = document.querySelector('.main');                          //part 7
console.log(mainEl)
let newBlogDiv = document.createElement('div')
newBlogDiv.classList.add('blog-post', 'purple');

let newBlogH1 = document.createElement('h1');
newBlogH1.textContent = newLiEl.textContent;

let newBlogP = document.createElement('p');
newBlogP.textContent = "I RACED ACROSS THE BEACHES!";

newBlogDiv.append(newBlogH1, newBlogP);
mainEl.append(newBlogDiv);

const randomQuote = function() {                                        //part 8
  document.querySelector('#quote-of-the-day').innerText = `'${quotes[Math.floor(Math.random() * quotes.length)]}'`;
};

let quoteTitleEl = document.getElementById('quote-title');
quoteTitleEl.addEventListener('click', function() {
  randomQuote();
})

let allBlogPosts = document.querySelectorAll('.blog-post');              //part 9
console.log()
allBlogPosts.forEach(function (blogpost) {
  blogpost.addEventListener('mouseout', function() {
    blogpost.classList.toggle('red')
  });
  blogpost.addEventListener('mouseenter', function() {
    blogpost.classList.toggle('red');
  });
});




// let allBlogPosts = document.querySelectorAll('.blog-post');              //part 9 ????????
// console.log()
// allBlogPosts.forEach(function (blogpost) {
//   blogpost.addEventListener('mouseout', function() {
//     blogpost.classList.toggle('purple')
//   });
//   blogpost.addEventListener('mouseenter', function() {
//     blogpost.classList.toggle('red');
//   });
// });