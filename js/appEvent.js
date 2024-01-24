// window.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(typeof e);
// });

document
  .querySelector("section button#btn_event_basic")
  .addEventListener("click", () => {
    window.alert("sectionbuttonbtn_event_basic");
  });

document
  .querySelector("section button#btn_event_basic_target")
  .addEventListener("click", (e) => {
    console.log(e.target);
  });

document.querySelector("section form button").addEventListener("click", (e) => {
  e.preventDefault();
});

document
  .querySelector("section div#section_div1")
  .addEventListener("click", (e) => {
    alert("section_div1");
  });

document
  .querySelector("section button#div_btn1")
  .addEventListener("click", (e) => {
    alert("button#div_btn1");
  });

document
  .querySelector("section button#div_btn2")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    alert("button#div_btn2");
  });

document.querySelector("input#name").addEventListener("keydown", (data) => {
  // let { key } = data;
  // console.log(key);
});

document.querySelector("input#name").addEventListener("keypress", (data) => {
  let { key } = data;
  console.log(key);
});

// (function changeStyle() {
//     let button = document.querySelector("section#sec8_Stytle").querySelector("button#style2");
//     button.addEventListener('click', e => {
//         console.log(e.target);
//         if (count2) {
//             count2 = false;
//             e.target.style.fontSize = "2vw";
//             e.target.style.backgroundColor = "red";
//             e.target.style.padding = " 10px 20px 30px 40px";
//             e.preventDefault();
//         }
//         else {
//             count2 = true;
//             e.target.style = "font-size : 5vw; background-color : blue; padding : 40px 30px 20px 10px;"
//         }
//     });
// })();

// document.getElementById("a_home").addEventListener("click", smoothTop(e));

function smoothTop(e) {
  console.log("d");
  if (window.scrollTo) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

//bookmark
document.getElementById("anchor_tag").addEventListener("click", (e) => {
  if (window.scrollTo) {
    e.preventDefault();
    document.getElementById("div_btn3").scrollIntoView({
      behavior: "smooth",
    });
  }
});

//move to Top
document.querySelector("#div_btn3").addEventListener("click", (e) => {
  if (window.scrollTo) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
