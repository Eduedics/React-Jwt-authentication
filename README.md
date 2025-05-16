## React-Jwt-authentication
This project demonstrates how to integrate  JWT authentication between a  React frontend  and a Django backend using Django REST Framework (DRF),Error handling by flash messages.It supports:

- Secure login/signup
- JWT token authentication
- Token storage in `localStorage`
- Protected routes in React
- Auto-refresh of access token every 5 minutes using the refresh token
- Token blacklisting
- password reset by email

## Tech Stack
- Frontend: React, Axios, React Router DOM
- Backend: Django, Django REST Framework, Simple JWT
- 
## Token Storage
    Access Token: Stored in localStorage (valid for 5 minutes)
    Refresh Token: Stored in localStorage (valid for 1 day)
    Auto-refresh runs when making a request and access token is expired.

## Testing
    Start Django server: python manage.py runserver
    Start React app: npm start
    Login and access /dashboard (or other protected routes)
    Try accessing without login to see redirection to login page.
## License
    MIT License
## screenshots
    ![App Screenshot](./assets/screenshot1.png)
    ![App Screenshot](./assets/screenshot2.png)
    ![App Screenshot](./assets/screenshot3.png)
    ![App Screenshot](./assets/screenshot4.png)
    ![App Screenshot](./assets/screenshot5.png)
    ![App Screenshot](./assets/screenshot6.png)
