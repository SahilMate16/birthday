// // script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const heartContainer = document.querySelector('.heart-container');
//     const colors = ['#ff6666', '#ff3333', '#cc0066', '#ff9999', '#ffcc66'];
  
//     function createHeart() {
//       const heart = document.createElement('div');
//       heart.classList.add('heart');
  
//       // Random size
//       const size = Math.random() * 20 + 30; // Random size between 30px and 50px
//       heart.style.width = `${size}px`;
//       heart.style.height = `${size}px`;
  
//       // Random color
//       const color = colors[Math.floor(Math.random() * colors.length)];
//       heart.style.backgroundColor = color;
  
//       // Random position
//       heart.style.left = `${Math.random() * 100}vw`;
  
//       // Append heart to container
//       heartContainer.appendChild(heart);
  
//       // Remove the heart after animation completes
//       setTimeout(() => {
//         heart.remove();
//       }, 10000); // Adjust based on animation duration
//     }
  
 
//     setInterval(createHeart, 200);
//   });
  

document.addEventListener("DOMContentLoaded", function() {
    const heartContainer = document.querySelector('.heart-container');
    const colors = ['#F05A7E', '#7695FF', '#E85C0D', '#ff9999', '#ffcc66'];
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
  
      // Random size
      const size = Math.random() * 25 + 30; // Random size between 30px and 50px
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
  
      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      heart.style.backgroundColor = color;
  
      // Random horizontal position
      heart.style.left = `${Math.random() * 100}vw`;
  
      // Append heart to container
      heartContainer.appendChild(heart);
  
      // Remove the heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, 10000); // Adjust based on animation duration
    }
  
    setInterval(createHeart, 250); // Create a heart every 200ms
  });
  
  
  