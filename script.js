"use strict";

let numbers = [100, 456, 98, 45, 43, 73];

let allNumbersList = document.getElementById("all-numbers");
let evensList = document.getElementById("evens-list");
let postsList = document.getElementById("all-posts");
let firstPost = document.getElementById("first-post");
let fiveMore = document.getElementById("five-more");

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  let li = `<li> ${num} </li>`;
  allNumbersList.innerHTML += li;
}

let evens = numbers.filter((number) => {
  return number % 2 === 0;
});

evens.forEach((number) => {
  evensList.innerHTML += `<li> ${number} </li>`;
});

let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
];

function createAllPosts(allPosts, element) {
  allPosts.forEach((post) => {
    element.innerHTML += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${post.date}</h6>
    <p class="card-text">Written by: ${post.author}</p>
  </div>
</div>
`;
  });
}

createAllPosts(blogPosts, postsList);

firstPost.innerHTML = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${blogPosts[0].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${blogPosts[0].date}</h6>
    <p class="card-text">Written by: ${blogPosts[0].author}</p>
  </div>
</div>
`;

const post3 = {
  id: 3,
  title: "Blog Post 3",
  author: "Author C",
  date: "2023-12-03",
};
const post4 = {
  id: 4,
  title: "Blog Post 4",
  author: "Author C",
  date: "2023-12-03",
};
const post5 = {
  id: 5,
  title: "Blog Post 5",
  author: "Author A",
  date: "2023-12-04",
};
const post6 = {
  id: 6,
  title: "Blog Post 6",
  author: "Author D",
  date: "2023-12-03",
};

const post7 = {
  id: 7,
  title: "Blog Post 7",
  author: "Author C",
  date: "2023-12-03",
};

blogPosts.push(post3);
blogPosts.push(post4);
blogPosts.push(post5);
blogPosts.push(post6);
blogPosts.push(post7);

createAllPosts(blogPosts, fiveMore);
