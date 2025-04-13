// // Card component implementation
// class Card {
//   constructor(cardElement, dataImage) {
//     this.cardElement = cardElement;
//     this.cardBgElement = cardElement.querySelector(".card-bg");
//     this.cardInfoElement = cardElement.querySelector(".card-info");
//     this.dataImage = dataImage;

//     this.width = 0;
//     this.height = 0;
//     this.mouseX = 0;
//     this.mouseY = 0;
//     this.mouseLeaveDelay = null;

//     this.init();
//   }

//   init() {
//     this.cardElement.style.setProperty("--card-bg-image", `url(${this.dataImage})`);
//     this.width = this.cardElement.offsetWidth;
//     this.height = this.cardElement.offsetHeight;

//     this.cardElement.addEventListener("mousemove", (e) => this.handleMouseMove(e));
//     this.cardElement.addEventListener("mouseenter", () => this.handleMouseEnter());
//     this.cardElement.addEventListener("mouseleave", () => this.handleMouseLeave());
//   }

//   handleMouseMove(e) {
//     const rect = this.cardElement.getBoundingClientRect();
//     this.mouseX = e.clientX - rect.left - this.width / 2;
//     this.mouseY = e.clientY - rect.top - this.height / 2;

//     const mousePX = this.mouseX / this.width;
//     const mousePY = this.mouseY / this.height;

//     const rX = mousePX * 30;
//     const rY = mousePY * -30;

//     const tX = mousePX * -40;
//     const tY = mousePY * -40;

//     this.cardElement.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;
//     this.cardBgElement.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
//   }

//   handleMouseEnter() {
//     clearTimeout(this.mouseLeaveDelay);
//   }

//   handleMouseLeave() {
//     this.mouseLeaveDelay = setTimeout(() => {
//       this.mouseX = 0;
//       this.mouseY = 0;
//       this.cardElement.style.transform = "";
//       this.cardBgElement.style.transform = "";
//     }, 1000);
//   }
// }

// // Initialize cards
// document.querySelectorAll(".card-wrap").forEach((cardWrap) => {
//   const dataImage = cardWrap.getAttribute("data-image");
//   new Card(cardWrap, dataImage);
// });
