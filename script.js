document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Search Functionality (Dummy)
  const searchBar = document.querySelector(".search-bar input")
  const searchButton = document.querySelector(".search-bar button")
  const searchExamples = document.querySelector(".search-examples")
  const popularSearches = ["Paracetamol", "Ibuprofen", "Amoxicillin", "Aspirin"]

  searchButton.addEventListener("click", () => {
    handleSearch()
  })

  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  })

  function handleSearch() {
    const searchTerm = searchBar.value.trim()
    if (searchTerm) {
      alert(
        `Searching for: ${searchTerm}\n\nThis is a demo functionality. In a real application, this would search the database for drug information.`,
      )
      searchBar.value = ""
    }
  }

  // Add click functionality to search examples
  searchExamples.addEventListener("click", (e) => {
    const text = e.target.textContent
    if (popularSearches.includes(text)) {
      searchBar.value = text
      handleSearch()
    }
  })

  // Learn More Buttons
  const learnMoreButtons = document.querySelectorAll(".learn-more")
  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const drugName = this.parentElement.querySelector("h3").textContent
      alert(
        `You clicked to learn more about ${drugName}.\n\nIn a complete application, this would take you to a detailed page about this medication.`,
      )
    })
  })

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const formElements = contactForm.elements
      const name = formElements[0].value
      const email = formElements[1].value
      const subject = formElements[2].value
      const message = formElements[3].value

      // Show confirmation (in a real app, this would send data to a server)
      alert(
        `Thank you for your message, ${name}!\n\nWe've received your inquiry and will get back to you at ${email} soon.`,
      )

      // Reset form
      contactForm.reset()
    })
  }

  // Newsletter Subscription
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = this.querySelector("input").value
      if (email) {
        alert(`Thank you for subscribing to our newsletter with ${email}!`)
        this.querySelector("input").value = ""
      }
    })
  }

  // Scroll Animation for Elements
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".drug-card, .feature, .about-content > div")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("fade-in")
      }
    })
  }

  // Add fade-in class for CSS animation
  const style = document.createElement("style")
  style.textContent = `
        .fade-in {
            animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .drug-card, .feature, .about-content > div {
            opacity: 0;
        }
    `
  document.head.appendChild(style)

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run once on load
  animateOnScroll()

  // Header scroll effect
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Add scrolled class styles
  const headerStyle = document.createElement("style")
  headerStyle.textContent = `
        header.scrolled {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            background-color: rgba(255, 255, 255, 0.95);
            transition: all 0.3s ease;
        }
    `
  document.head.appendChild(headerStyle)

  // CTA Button Animation
  const ctaButton = document.querySelector(".cta-button")
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      // Scroll to search section
      const searchSection = document.getElementById("search")
      if (searchSection) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = searchSection.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Focus on search input
        setTimeout(() => {
          document.querySelector(".search-bar input").focus()
        }, 1000)
      }
    })
  }
})
