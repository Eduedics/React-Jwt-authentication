# React-Jwt-authentication
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
    ![Screenshot from 2025-05-16 09-59-43](https://github.com/user-attachments/assets/b97bd375-ecaf-4ade-9519-aba727d40aa0)
    ![Screenshot from 2025-05-16 10-00-10](https://github.com/user-attachments/assets/01745a3e-c265-4ba5-ba7d-e3fa7aac249e)![Screenshot from 2025-05-16 10-00-42](https://github.com/user-attachments/assets/          c4a6eebd-2358-4f69-bb10-0864dffe4ed5)
    ![Screenshot from 2025-05-16 10-03-31](https://github.com/user-attachments/assets/b19df20a-4e60-4422-aed1-f8d8ca98fe7b)
    ![Screenshot from 2025-05-16 10-02-21](https://github.com/user-attachments/assets/3bf275cc-07ae-4991-9671-56c7a64b91d2)
