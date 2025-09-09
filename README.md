Star Rating Component
A simple, interactive star rating component built with vanilla HTML, CSS, and JavaScript. This project provides a reusable and visually appealing way for users to give a rating.

About the Project
This star rating component is a lightweight and responsive UI element. The core functionality is to allow users to hover over a set of stars to preview a rating and then click to confirm their selection. The selected rating remains visible until the user chooses a new one.

Process and Key Challenges
Creating this interactive component involved overcoming a few common challenges in front-end development:

Event Handling: The primary challenge was correctly handling different user interactions, specifically hover and click events. To achieve this, separate event listeners were attached to each star element. It was crucial to use the correct event types: mouseenter and mouseleave for the hover effect and click for setting the final rating.

State Management: The component needed to remember the user's selected rating, even after they moved their mouse away. This was solved by using a JavaScript variable (currentRating) to store the last-clicked value. The mouseleave event then used this variable to restore the star display to its correct state, preventing it from going blank after the hover effect ended.

Dynamic Styling: Visually updating the stars in real-time required manipulating CSS classes dynamically. Instead of changing inline styles, the classList property was used to add and remove active and hover classes. This approach keeps the styling separate from the JavaScript logic, making the code cleaner and more maintainable. A key detail was ensuring that the dot (.) prefix, used in CSS selectors, was not included when adding or removing classes with classList.

Getting Started
To get a local copy of this component up and running, simply follow these steps. No server or special environment is needed.

Open the project folder in your code editor.

Open the index.html file in any web browser.

You can now interact with the star rating component in your browser.
