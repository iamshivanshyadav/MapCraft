# MapCraft

This project demonstrates the integration of Google Maps API to create a custom map with markers. It allows you to mark specific locations and display custom icons for each marker. You can use this project to create interactive maps for various purposes such as showcasing points of interest, highlighting specific locations, or guiding users to different destinations.

## Installation

1. Clone the repository: `git clone https://github.com/iamshivanshyadav/MapCraft.git`
2. Navigate to the project folder.
3. Open the project in a web browser:
   - For local development, simply double-click the `index.html` file and it will open in your default web browser.
   - For deployment, upload the project to a web server or hosting platform of your choice.

## Usage

1. Open the `index.html` file in your web browser.
2. The map is initially centered at coordinates (23.07847, 76.85228) with a zoom level of 18. You can adjust these settings in the `initMap()` function in the `script.js` file.
3. Custom markers are added to the map using the `markers` array in the `script.js` file.
4. Each marker in the `markers` array consists of the following information:
   - Marker title: A descriptive name for the location.
   - Latitude and longitude coordinates: The geographical position of the location.
   - Icon URL: The URL of the custom icon image to be displayed for the marker.
   - Icon size: The width and height of the icon image in pixels.
5. To add a new marker, modify the `markers` array with the desired information. You can add as many markers as you want.
6. Each marker on the map is clickable. Clicking on a marker will open an info window displaying the marker's title.
7. Customize the map's appearance and behavior by modifying the CSS in the `style.css` file.
8. You can also customize the markers' appearance and behavior by modifying the JavaScript code in the `script.js` file.
9. Explore the Google Maps API documentation for more options and functionalities that you can incorporate into your custom map.

## Dependencies

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview): The core API library for displaying and interacting with Google Maps.
- [Google Fonts](https://fonts.google.com/): The "Press Start 2P" font is used for the title in the HTML. It is loaded from the Google Fonts CDN.

## Contributing

Contributions are welcome! If you find any issues, have suggestions for improvements, or want to add new features, please create a pull request or submit an issue. Your contributions can help enhance the functionality and usability of this project.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Credits

- Google Maps API: [Google Maps Platform](https://developers.google.com/maps)
- Link for website:- https://buoyant-dynamo-341514.web.app/
