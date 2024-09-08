# PoorStudent
### video demonstration: https://youtu.be/cqkJaPvkxag

## Project Description

This project is a Flask based webscarpping app. After opening the website user can write a list of items which they intend to buy. They can also specify
the number of items and category. After they click search button PoorStudent determines where user should go shopping, so the list is the
cheepest. The server opens website of Morrisons and Asda where it searches for the items and chooses ones with the lowest price. Finally,
a table of results, which contains quantity, search item, result name, price and item image, is displayed. The name of the shop is shown as
well.

The program was run and tested using debugger mode of Visual Studio 2019.

## Screenshots

![Home page](https://github.com/LexXxik/PoorStudent/blob/dev/images/poor_student_1.png)
![User input for webscrapping](https://github.com/LexXxik/PoorStudent/blob/dev/images/web_scrapping.png)
![The result page with images of items to purchase!](https://github.com/LexXxik/PoorStudent/blob/dev/images/poor_student_results.png)

## Setting up the project

In the project directory there is an empty folder called 'GoogleChromePortable'. To this folder chrome portable should be installed and chrome
geckodriver moved before the project is run. For testing purposes version 93.0.4577.82 of chrome portable was used, with corresponding gecko
driver. I found them at:

chrome portable: https://portableapps.com/news/2021-08-31--google-chrome-portable-93.0.4577.63-released
gecko driver: https://chromedriver.storage.googleapis.com/index.html?path=93.0.4577.63/

## Files in the project 
### project directory

***app.py***
This file is the main file of the project. It takes care of managing GET and POST requests with Flask. It also gets data from JavaScript
part of the project and it calls functions in webscrape.py.

***FlaskWebProject1.pyproj and FlaskWebProject1.pyproj.user***
These files were used to launch the project in Visual Studio 2019.

***predefined.py***
It contains all hard-coded data in the project such as categories of food, array of stores including their URLs.

***requirements.py***
It contains names and versions of packages used in the project.

***webscrape.py***
This file contains functions which take care of finding URLs of items, opening them with selenium, scraping html content, filtering html content,
finding the cheepest item, comparing lists of items between shops.

### templates directory

***item.txt***
This file contains html code of one item from the list of form at shopping.html.

***layout.html***
This file defines common layout of all html pages in templates.

***results.html***
This is the page shown after search for items has been finished.

***shopping.html***
This the main page of the project. Here user can type in a list of items which they wan to buy.

### static directory
### css directory

***bootstrap-...***
These are CSS files of bootsrap.

***styles.css***
This is my css file where some attributes are specified to fit this project.

### static directory
### js directory

***animated.js***
This script animates title on the shooping.html page.

***bootstrap...***
These scripts are imported for bootstrap.

***listing.js***
This script takes care of dynamical generation of input field on the shopping.html, so that user can type in as many items as they like.

## Design choices

This project was inspired by my fascination with web scraping using Beautiful Soup, which I explored through online tutorials. I chose to use Flask as the framework, as I had prior experience with it during the CS50 course.

### Front-end Development:
I started with the design of ``shopping.html`` and ``listing.js`` to ensure the app was visually appealing. Generating dynamic forms took longer than expected, but I eventually implemented it successfully. Additionally, I experimented with animated text to enhance the interface.

### Back-end Development:
In ``app.py``, the main challenge was passing data from the dynamically generated forms to the back-end. Initially, I assumed I could scrape static URLs, but I soon discovered the websites I selected used dynamically generated content. This required switching from Beautiful Soup to Selenium, which allowed me to scrape JavaScript-rendered content, though it introduced slower load times—a notable drawback.

### Global Variables & Limitations:
Due to time constraints, I opted to use global variables to store user input, which limits the app to a single user at a time. A more scalable solution would involve passing the input through URLs or session handling, but I chose to focus on completing the core functionality.

### Future Considerations:
To reduce delays between input and results, I considered integrating a database. This would allow caching of previously scraped items and updating prices when necessary, significantly improving the app’s efficiency. However, for the purposes of this capstone project, I decided to prioritize functionality over-optimization.

This project significantly deepened my understanding of web scraping and technical problem-solving. While there are areas for improvement, I'm proud of the final result.

Thank you CS50 for the opportunity to work on this incredible course—I look forward to exploring more CS topics, especially in artificial intelligence.

Best regards,
Adrian
