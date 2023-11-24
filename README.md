# CrickGossip Web App


This full-stack web application provides live cricket match commentary, displays point tables of recent world cups, and maintains a record of previous matches. The application is built using Angular 17, Spring Boot, and MySQL. Additionally, web scraping is employed to enhance the live match commentary feature.

## Features

### 1. Live Match Commentary
- Real-time commentary for live cricket matches.
- Updates dynamically as the match progresses.

### 2. Point Tables
- Displays the latest point tables for recent world cups.
- Keeps track of team standings throughout the tournament.

### 3. Previous Matches
- Maintains a record of previous cricket matches.
- Updates the list of previous matches when live matches are viewed.

### 4. Web Scraping
- Utilizes web scraping to enhance live match commentary.
- Fetches additional data and statistics dynamically.

## Technologies Used

- **Angular 17**: Frontend framework for building dynamic web applications.
- **Spring Boot**: Backend framework for building Java-based web applications.
- **MySQL**: Relational database for storing application data.
- **Web Scraping**: Utilized for fetching additional data for live match commentary.

## Prerequisites

- Node.js and npm for Angular development.
- Java Development Kit (JDK) for Spring Boot.
- MySQL database server.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cricket-web-app.git
   ```

2. Navigate to the Angular frontend:
   ```bash
   cd cricket-web-app/frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the Angular development server:
   ```bash
   ng serve
   ```

5. Navigate to the Spring Boot backend:
   ```bash
   cd ../backend
   ```

6. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

7. Access the application in your web browser: [http://localhost:4200](http://localhost:4200)

## Configuration

- Configure MySQL database connection in `backend/src/main/resources/application.properties`.
- Adjust web scraping logic in the backend as needed.

## Future Enhancements

- User authentication for personalized experiences.
- More detailed statistics for matches.
- Enhanced web scraping for comprehensive live match updates.

Feel free to contribute to the project and suggest improvements.

## License

This project is licensed under the [MIT License](LICENSE).
