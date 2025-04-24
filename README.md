Portfolio Project

Welcome to the portfolio website of Binod Paudyal, an Educator, AI Researcher, and Entrepreneur based in Kathmandu, Nepal. This project showcases Binod's work in education reform, AI-driven innovations, and tech entrepreneurship, featuring projects like AgroConnect, HealthScan, and KMC LMS. The site includes a blog with insights on Nepal's education and tech ecosystem, a team section, and a contact form for collaboration.

Table of Contents

Features

Technologies Used

Setup Instructions

Google Sheets Integration

File Structure

Usage

Contributing

License

Contact

Features

Responsive Design: Mobile-friendly layout with a sticky navbar and smooth scrolling.

Dynamic Blog: Blog posts on education and innovation, dynamically loaded via JavaScript.

Interactive Elements: Typing animation, Owl Carousel for team members, and a scroll-up button.

SEO Optimized: Dynamic meta tags for blog posts.

Contact Form: Sends submissions to a Google Sheet for easy data management.

Projects Showcase: Highlights AgroConnect, HealthScan, and KMC LMS with hover effects.

Team Section: Displays team members with a carousel.

Technologies Used

HTML5: Structure of the website.

CSS3: Styling with custom fonts (Poppins, Ubuntu) and responsive design.

JavaScript/jQuery: Dynamic content loading, animations, and interactivity.

Owl Carousel: Team section slider.

Typed.js: Typing animation for the home and about sections.

Font Awesome: Icons for social links and UI elements.

Google Apps Script: Contact form integration with Google Sheets.

Setup Instructions

To run the portfolio locally or deploy it, follow these steps:

Clone the Repository:

git clone https://github.com/kasamthapa/portfolioprojectBP.git
cd portfolioprojectBP

Install Dependencies: No installation is required as all dependencies are loaded via CDNs (jQuery, Owl Carousel, Typed.js, Font Awesome).

Ensure Local Images: Verify that the following images are in the images folder:

IMG_2780.PNG (About section)

kasam.jpg (Team section)

blog1.jpeg, blog2.webp, blog3.webp (Blog section) If missing, replace with placeholders (e.g., https://via.placeholder.com/300x200?text=Blog+1) or contact the repository owner.

Configure Contact Form:

Open index.html and replace YOUR_SCRIPT_ID in the contact form’s action attribute with your Google Apps Script web app ID:

<form action="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" method="POST">

See Google Sheets Integration for setup details.

Run Locally:

Use a local server (e.g., VS Code Live Server extension or Python’s HTTP server):

python -m http.server 8000

Open http://localhost:8000 in your browser.

Deploy (Optional):

Deploy to platforms like Netlify, Vercel, or GitHub Pages.

For Netlify:

Drag and drop the project folder into Netlify’s dashboard.

Set the build directory to . and publish directory to ..

Ensure images are included in the deployment.

Google Sheets Integration

The contact form submissions are automatically saved to a Google Sheet associated with kasamthapa89@gmail.com. To set this up:

Create a Google Sheet:

Log in to Google Sheets with kasamthapa89@gmail.com.

Create a spreadsheet named “Portfolio Contact Form Data”.

Add headers in Sheet1: Date, Name, Email, Subject, Message.

Set Up Google Apps Script:

In the Google Sheet, go to Extensions > Apps Script.

Paste the following code:

function doPost(e) {
try {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var data = JSON.parse(e.postData.contents);
var date = new Date().toLocaleString();
var name = data.name || "";
var email = data.email || "";
var subject = data.subject || "";
var message = data.message || "";
sheet.appendRow([date, name, email, subject, message]);
return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
} catch (error) {
return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
}
}

Save as “FormToSheet”.

Deploy as a web app:

Execute as: Me (kasamthapa89@gmail.com).

Who has access: Anyone.

Copy the web app URL (e.g., https://script.google.com/macros/s/SCRIPT_ID/exec).

Update index.html:

Replace YOUR_SCRIPT_ID in the form’s action with the web app ID from the deployment.

Test the Integration:

Submit a test form via the website.

Verify a new row appears in the Google Sheet with the form data.

For troubleshooting, check the Apps Script execution logs (View > Executions) or contact the repository owner.

File Structure

portfolioprojectBP/
├── images/
│ ├── IMG_2780.PNG # About section profile image
│ ├── kasam.jpg # Team member image
│ ├── blog1.jpeg # Blog post 1 image
│ ├── blog2.webp # Blog post 2 image
│ ├── blog3.webp # Blog post 3 image
├── index.html # Main portfolio page
├── blog.html # Blog post page
├── style.css # Custom styles
├── script.js # JavaScript for interactivity
└── README.md # Project documentation

Usage

Home Page (index.html):

Navigate sections (Home, About, Projects, Blog, Teams, Contact) via the navbar.

Click “Read More” in the Blog section to view full posts on blog.html.

Use the contact form to send messages, which are logged to a Google Sheet.

Blog Page (blog.html):

Access via URLs like blog.html?id=1 to view specific posts.

Posts are dynamically loaded from script.js’s blogPosts array.

Responsive Design:

Test on mobile devices to ensure navbar toggles and cards stack correctly.

SEO:

Blog posts update meta descriptions and titles dynamically for better search visibility.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make changes and commit (git commit -m "Add feature").

Push to your fork (git push origin feature-name).

Open a pull request with a description of your changes.

Please ensure:

Code follows existing style (e.g., 2-space indentation for HTML/CSS/JS).

No sensitive data (e.g., Google Apps Script IDs) is committed.

Tests are done on desktop and mobile browsers.

License

This project is licensed under the MIT License. See LICENSE for details.

Contact

For inquiries or collaboration:

Email: kasamthapa89@gmail.com

LinkedIn: Kasam Thapa Magar

GitHub: kasamthapa

Feel free to reach out for questions about the project or to discuss education and tech initiatives in Nepal!

# Created by Kasam Thapa Magar, 2025

Portfolio Project

Welcome to the portfolio website of Binod Paudyal, an Educator, AI Researcher, and Entrepreneur based in Kathmandu, Nepal. This project showcases Binod's work in education reform, AI-driven innovations, and tech entrepreneurship, featuring projects like AgroConnect, HealthScan, and KMC LMS. The site includes a blog with insights on Nepal's education and tech ecosystem, a team section, and a contact form for collaboration.

Table of Contents

Features

Technologies Used

Setup Instructions

Google Sheets Integration

File Structure

Usage

Contributing

License

Contact

Features

Responsive Design: Mobile-friendly layout with a sticky navbar and smooth scrolling.

Dynamic Blog: Blog posts on education and innovation, dynamically loaded via JavaScript.

Interactive Elements: Typing animation, Owl Carousel for team members, and a scroll-up button.

SEO Optimized: Dynamic meta tags for blog posts.

Contact Form: Sends submissions to a Google Sheet for easy data management.

Projects Showcase: Highlights AgroConnect, HealthScan, and KMC LMS with hover effects.

Team Section: Displays team members with a carousel.

Technologies Used

HTML5: Structure of the website.

CSS3: Styling with custom fonts (Poppins, Ubuntu) and responsive design.

JavaScript/jQuery: Dynamic content loading, animations, and interactivity.

Owl Carousel: Team section slider.

Typed.js: Typing animation for the home and about sections.

Font Awesome: Icons for social links and UI elements.

Google Apps Script: Contact form integration with Google Sheets.

Setup Instructions

To run the portfolio locally or deploy it, follow these steps:

Clone the Repository:

git clone https://github.com/kasamthapa/portfolioprojectBP.git
cd portfolioprojectBP

Install Dependencies: No installation is required as all dependencies are loaded via CDNs (jQuery, Owl Carousel, Typed.js, Font Awesome).

Ensure Local Images: Verify that the following images are in the images folder:

IMG_2780.PNG (About section)

kasam.jpg (Team section)

blog1.jpeg, blog2.webp, blog3.webp (Blog section) If missing, replace with placeholders (e.g., https://via.placeholder.com/300x200?text=Blog+1) or contact the repository owner.

Configure Contact Form:

Open index.html and replace YOUR_SCRIPT_ID in the contact form’s action attribute with your Google Apps Script web app ID:

<form action="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" method="POST">

See Google Sheets Integration for setup details.

Run Locally:

Use a local server (e.g., VS Code Live Server extension or Python’s HTTP server):

python -m http.server 8000

Open http://localhost:8000 in your browser.

Deploy (Optional):

Deploy to platforms like Netlify, Vercel, or GitHub Pages.

For Netlify:

Drag and drop the project folder into Netlify’s dashboard.

Set the build directory to . and publish directory to ..

Ensure images are included in the deployment.

Google Sheets Integration

The contact form submissions are automatically saved to a Google Sheet associated with kasamthapa89@gmail.com. To set this up:

Create a Google Sheet:

Log in to Google Sheets with kasamthapa89@gmail.com.

Create a spreadsheet named “Portfolio Contact Form Data”.

Add headers in Sheet1: Date, Name, Email, Subject, Message.

Set Up Google Apps Script:

In the Google Sheet, go to Extensions > Apps Script.

Paste the following code:

function doPost(e) {
try {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
var data = JSON.parse(e.postData.contents);
var date = new Date().toLocaleString();
var name = data.name || "";
var email = data.email || "";
var subject = data.subject || "";
var message = data.message || "";
sheet.appendRow([date, name, email, subject, message]);
return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
} catch (error) {
return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
}
}

Save as “FormToSheet”.

Deploy as a web app:

Execute as: Me (kasamthapa89@gmail.com).

Who has access: Anyone.

Copy the web app URL (e.g., https://script.google.com/macros/s/SCRIPT_ID/exec).

Update index.html:

Replace YOUR_SCRIPT_ID in the form’s action with the web app ID from the deployment.

Test the Integration:

Submit a test form via the website.

Verify a new row appears in the Google Sheet with the form data.

For troubleshooting, check the Apps Script execution logs (View > Executions) or contact the repository owner.

File Structure

portfolioprojectBP/
├── images/
│ ├── IMG_2780.PNG # About section profile image
│ ├── kasam.jpg # Team member image
│ ├── blog1.jpeg # Blog post 1 image
│ ├── blog2.webp # Blog post 2 image
│ ├── blog3.webp # Blog post 3 image
├── index.html # Main portfolio page
├── blog.html # Blog post page
├── style.css # Custom styles
├── script.js # JavaScript for interactivity
└── README.md # Project documentation

Usage

Home Page (index.html):

Navigate sections (Home, About, Projects, Blog, Teams, Contact) via the navbar.

Click “Read More” in the Blog section to view full posts on blog.html.

Use the contact form to send messages, which are logged to a Google Sheet.

Blog Page (blog.html):

Access via URLs like blog.html?id=1 to view specific posts.

Posts are dynamically loaded from script.js’s blogPosts array.

Responsive Design:

Test on mobile devices to ensure navbar toggles and cards stack correctly.

SEO:

Blog posts update meta descriptions and titles dynamically for better search visibility.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make changes and commit (git commit -m "Add feature").

Push to your fork (git push origin feature-name).

Open a pull request with a description of your changes.

Please ensure:

Code follows existing style (e.g., 2-space indentation for HTML/CSS/JS).

No sensitive data (e.g., Google Apps Script IDs) is committed.

Tests are done on desktop and mobile browsers.

License

This project is licensed under the MIT License. See LICENSE for details.

Contact

For inquiries or collaboration:

Email: kasamthapa89@gmail.com

LinkedIn: Kasam Thapa

GitHub:kasamthapa

Feel free to reach out for questions about the project or to discuss education and tech initiatives in Nepal!

Created by Kasam Thapa Magar, 2025
