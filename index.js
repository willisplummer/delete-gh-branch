import { forEach, fromEvent, filter, pipe } from "callbag-basics";

const clickDeleteBranchButton = () => {
  const bttn = document.querySelector(".post-merge-message button");
  if (bttn) {
    bttn.innerHTML.includes("Delete branch") && bttn.click();
  } else {
    setTimeout(clickDeleteBranchButton, 200);
  }
};

pipe(
  fromEvent(document, "click"),
  filter(
    ev =>
      ev.target.className &&
      typeof ev.target.className === "string" &&
      ev.target.className.includes("js-merge-commit-button")
  ),
  forEach(ev => setTimeout(clickDeleteBranchButton, 200))
);
