class Testimony {
    constructor(data){
        this.name = data.name;
        this.pos = data.pos;
        this.id = data.id;
        this.quote = data.quote;
        this.img = data.img_url;
        this.__pushToList()
    }
    printData() {
        const text = slider.querySelector("#quote");
        const name_label = slider.querySelector("#name");
        const pos_label = slider.querySelector("#position");
        const image = slider.querySelector("#picture");
        slider.setAttribute("data-id", this.id);
        text.innerHTML = this.quote;
        name_label.innerHTML =  this.name;
        pos_label.innerHTML = this.pos;
        image.setAttribute("src", this.img)
        console.log('click')
    }
    __pushToList(){
        testimonials.push(this);
    }
}

const testimonials = [];
const tanya = new Testimony({
    name: "Tanya Sinclair",
    pos: "UX Engineer",
    id: 1,
    quote: `I've been interested in coding for a while but never taken the jump, until
    now. I couldn't recommend this course enough. I’m now in the job of my
    dreams and so excited about the future.`,
    img_url: "./images/image-tanya.jpg"
})
const john = new Testimony ({
    name: "John Tarkpor",
    pos: "Junior Front-end Developer",
    id: 2,
    quote: `If you want to lay the best foundation possible I’d recommend taking this
    course. The depth the instructors go into is incredible. I now feel so
    confident about starting up as a professional developer.`,
    img_url: "./images/image-john.jpg"
})

const slider = document.querySelector('.slider');
const buttons = slider.querySelector(".slider-buttons");
const left_btn =  buttons.querySelector('.left-arrow');
const right_btn = buttons.querySelector('.right-arrow');


const togglePerson = (math) => {
    let id = parseInt(slider.dataset.id);
    let person;
    if( math(id) > testimonials.length) {
        id = 1;
    } else if(math === subtract1 && id === 1) {
        id = testimonials.length;
    } else {
        id = math(id);
    }
    person = findPerson(testimonials, id);
    person[0].printData();
}
const add1 = (n) => n + 1;
const subtract1 = (n) => n - 1;
const findPerson = (arr, id) => arr.filter(person => Object.values(person).includes(id));

left_btn.addEventListener('click', () => togglePerson(subtract1))
right_btn.addEventListener('click', () => togglePerson(add1))
document.addEventListener('keydown', (e) => {
    if(e.code === "ArrowLeft"){
        togglePerson(subtract1)
    } else if (e.code === "ArrowRight"){
        togglePerson(add1);
    }
})