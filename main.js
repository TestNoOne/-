var menu = document.querySelector('#button_content');
document.querySelector('#btn').addEventListener('click', () => {
    if(menu.classList.contains('menu')){
        menu.classList.remove('menu');
    }
    else{
        menu.classList.add('menu');
    }
})

var left_two = 2;
var right_two = 0;
var marg = document.getElementById('s2');
document.querySelector('#right_two').addEventListener('click', () => {
    if(right_two == 0){
        marg.style.cssText = "margin-left: -20%;";
        right_two++;
        left_two = 1;
    }
    else if(right_two == 1){
        marg.style.cssText = "margin-left: -42.5%;";
        right_two++;
        left_two = 0;
    }
    else{
        marg.style.cssText = "margin-left: 2.5%;";
        right_two = 0;
        left_two = 2;
    }
})
document.querySelector('#left_two').addEventListener('click', () => {
    if(left_two == 0){
        marg.style.cssText = "margin-left: -20%;";
        left_two++;
        right_two = 1;
    }
    else if(left_two == 1){
        marg.style.cssText = "margin-left: 2.5%;";
        left_two++;
        right_two = 0;
    }
    else{
        marg.style.cssText = "margin-left: -42.5%;";
        left_two = 0;
        right_two = 2;
    }
})
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) { change.target.classList.add('el-show') }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.grid');
for (let elm of elements) { observer.observe(elm) }

function Ent(ent){
    ent.forEach(change => {
        if (change.isIntersecting) { change.target.classList.add('wow') }
    });
}
let obs = new IntersectionObserver(Ent, options);
let ela = document.querySelectorAll('.anim');
for (let en of ela) { obs.observe(en) }

function Rt (rn){
    rn.forEach(change => {
        if (change.isIntersecting) { change.target.classList.add('show') }
    })
}
let oda = new IntersectionObserver(Rt, options);
let ema = document.querySelectorAll('#footer');
for (let f of ema) { oda.observe(f) }