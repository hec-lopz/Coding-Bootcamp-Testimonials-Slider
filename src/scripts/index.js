const tanya = {
    name: "Tanya Sinclair",
    pos: "UX Engineer",
    id: 1,
    quote: `I've been interested in coding for a while but never taken the jump, until
    now. I couldn't recommend this course enough. I’m now in the job of my
    dreams and so excited about the future.`
}
const john = {
    name: "John Tarkpor",
    pos: "Junior Front-end Developer",
    id: 2,
    quote: `If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer.`
}
const slider = document.querySelector('.slider');
const buttons = slider.querySelector(".slider-buttons");
const left_btn =  buttons.querySelector('.left-arrow');
const right_btn = buttons.querySelector('.right-arrow');

left_btn.addEventListener('click', () => console.log("left click"))

console.log("Hello World")