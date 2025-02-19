import {data} from "./data.js";
import { data1 } from "./data.js";
const mainBlog = document.getElementById("main-blog");
const viewMore = document.getElementById('view-more')

function render(itemdata) {
  let blogListing = itemdata
    .map((item) => {
      return `<div class="flex-main">
                        <img src="${item.image}" alt="">
                        <h4>${item.date}</h4>
                        <h2>${item.title}</h2>
                        <p>${item.content}</p>
                        </div>  `;
    })
    .join("");

  mainBlog.innerHTML = blogListing;
}
render(data)

viewMore.addEventListener("click", function(){
  render(data1);
  viewMore.style.display = 'none'

})

