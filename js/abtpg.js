function setupAnimation(targetClass, animationClass) {
  const elementsToAnimate = document.querySelectorAll(`.${targetClass}`);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Defer the animation until scrolling is complete
        setTimeout(() => {
          entry.target.classList.remove("animate__hidden");
          entry.target.classList.add("animate__animated", animationClass);
        }, 50);
      } else {
        entry.target.classList.remove("animate__animated", animationClass);
        entry.target.classList.add("animate__hidden");
      }
    });
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// Apply different animations for different classes
setupAnimation("text-indicator", "animate__fadeInUp");
setupAnimation("about-text", "animate__fadeInUp");
