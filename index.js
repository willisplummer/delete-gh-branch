import { forEach, fromEvent, map, filter, pipe } from "callbag-basics";

pipe(
  fromEvent(document, "click"),
  filter(ev => ev.target.className.includes("js-merge-commit-button")),
  forEach(ev => console.log(ev.target.className, ev.target.parentNode.className))
);
