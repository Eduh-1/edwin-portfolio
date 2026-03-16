const roles = [
"Full-Stack Developer",
"Networking Enthusiast",
"IT Student"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect(){

currentRole = roles[roleIndex];

if(!isDeleting){
charIndex++;
}else{
charIndex--;
}

document.getElementById("typing").textContent =
currentRole.substring(0, charIndex);

if(!isDeleting && charIndex === currentRole.length){
isDeleting = true;
setTimeout(typeEffect,1500);
return;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
roleIndex++;
if(roleIndex === roles.length){
roleIndex = 0;
}
}

setTimeout(typeEffect,80);
}

typeEffect();
const canvas = document.getElementById("rain-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const particleCount =120;

for (let i = 0; i < particleCount; i++) {
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
speed: 1 + Math.random() * 1.5,
size: 2 + Math.random() * 2
});
}

let mouse = {x:0,y:0};

window.addEventListener("mousemove", e => {
mouse.x = e.clientX;
mouse.y = e.clientY;
});

function drawParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {

p.y += p.speed;

if(p.y > canvas.height){
p.y = -10;
p.x = Math.random() * canvas.width;
}

ctx.beginPath();
ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
ctx.fillStyle = "rgba(56,189,248,0.6)";
ctx.fill();

let dx = p.x - mouse.x;
let dy = p.y - mouse.y;
let dist = Math.sqrt(dx*dx + dy*dy);

if(dist < 120){
p.x += dx * 0.02;
p.y += dy * 0.02;
}

});

drawConnections();

requestAnimationFrame(drawParticles);

}

function drawConnections(){

for(let a = 0; a < particles.length; a++){

for(let b = a; b < particles.length; b++){

let dx = particles[a].x - particles[b].x;
let dy = particles[a].y - particles[b].y;

let dist = Math.sqrt(dx*dx + dy*dy);

if(dist < 80){

ctx.beginPath();
ctx.strokeStyle = "rgba(56,189,248,0.08)";
ctx.lineWidth = 1;

ctx.moveTo(particles[a].x, particles[a].y);
ctx.lineTo(particles[b].x, particles[b].y);

ctx.stroke();

}

}

}

}

drawParticles();
const skillFills = document.querySelectorAll(".skill-fill");

function animateSkills(){

skillFills.forEach(bar => {

const barPosition = bar.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if(barPosition < screenPosition){

bar.style.width = bar.classList.contains("python") ? "90%" :
bar.classList.contains("django") ? "85%" :
bar.classList.contains("js") ? "80%" :
bar.classList.contains("networking") ? "75%" :
bar.classList.contains("cloud") ? "65%" : "0";

}

});

}

window.addEventListener("scroll", animateSkills);