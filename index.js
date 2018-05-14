import { forEach, fromEvent, map, filter, pipe } from "callbag-basics";

const clickDeleteBranchButton = () => {
  const bttn = document.querySelector(".post-merge-message button");
  console.log(bttn || "no button");
  if (bttn) {
    bttn.innerHTML.includes("Delete branch") && bttn.click();
  } else {
    setTimeout(clickDeleteBranchButton, 200);
  }
};

pipe(
  fromEvent(document, "click"),
  filter(ev => ev.target.className.includes("js-merge-commit-button")),
  forEach(ev => setTimeout(clickDeleteBranchButton, 200))
);
