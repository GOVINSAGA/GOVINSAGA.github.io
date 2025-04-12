document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Calculate position considering sticky header height
            const headerOffset =
              document.querySelector("header").offsetHeight + 20; // Get header height + extra space
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        });
      });