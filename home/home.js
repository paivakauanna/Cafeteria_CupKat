document.addEventListener("DOMContentLoaded", function () {
  // MOBILE MENU
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // MENU TABS
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      tabContents.forEach((content) => content.classList.add("hidden"));
      const tabId = this.getAttribute("data-tab");
      const contentToShow = document.getElementById(`${tabId}-content`);
      if (contentToShow) {
        contentToShow.classList.remove("hidden");
      }
    });
  });

  // SHOPPING CART
  const cartIcon = document.querySelector(".ri-shopping-bag-line");
  if (cartIcon) {
    const cartButton = cartIcon.parentElement;
    const shoppingCart = document.getElementById("shopping-cart");
    const closeCart = document.getElementById("close-cart");

    if (cartButton && shoppingCart && closeCart) {
      cartButton.addEventListener("click", function () {
        shoppingCart.classList.toggle("translate-x-full");
        document.body.classList.toggle("overflow-hidden");
      });

      closeCart.addEventListener("click", function () {
        shoppingCart.classList.add("translate-x-full");
        document.body.classList.remove("overflow-hidden");
      });
    }
  }

  // COOKIE CONSENT
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptCookies = document.getElementById("accept-cookies");
  const customizeCookies = document.getElementById("customize-cookies");

  if (cookieConsent && acceptCookies && customizeCookies) {
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieConsent.classList.remove("hidden");
    } else {
      cookieConsent.classList.add("hidden");
    }

    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieConsent.classList.add("hidden");
    });

    customizeCookies.addEventListener("click", function () {
      // Real implementation would show a settings panel
      localStorage.setItem("cookiesAccepted", "customized");
      cookieConsent.classList.add("hidden");
    });
  }

  // BACK TO TOP BUTTON
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible");
        backToTopButton.classList.add("opacity-100", "visible");
      } else {
        backToTopButton.classList.remove("opacity-100", "visible");
        backToTopButton.classList.add("opacity-0", "invisible");
      }
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // SMOOTH SCROLL FOR ANCHORS
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
