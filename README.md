# flatiron-phase-2-project-frontend
## Art Gallery ##

I have made website of Art Gallery using React 

Where I made 5 components in src
  1.Home.js
  2.Navbar.js
  3.PaintingCard.js
  4.PaintingForm.js
  5.PaintingList.js
  6.App.js

I have made db.json file

* Home.js
  -  In this component, I have added 1 image for home page and 1 slogen

* Navbar.js
  - In this component, I have linked 3 pages which named Home, Paintings and Add Painting and once you click on one of the option, it will goes to that page.

* PaintingCard.js
  - In this component, I have added all painting cards with image, name, price and 1 button which has click event on it. Once you clicked, if it is "In stock" then it will change in to "Out Of Stock"

* PaintingForm.js
  - In this component, I have made 1 form which will allow us to add new painting in the list and for that I have used fetch and POST request. Adn used click event to Submit all data. I have added address and contact info in to this component.

* PaintingList.js
  - In this component, I have used "useState" and "useEffect" to fetch db.json file and import PaintingCard component to show list of Paintings.

* App.js
  - I have import all components in to this and also import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'.

* db.json
  - In this file, I have made 1 object named paintings which has 1 array of 7 painting with keys and values. For that have added id, name, image and price and other can see those images I have used raw images which URL start like this "https://raw.githubusercontent.com"
