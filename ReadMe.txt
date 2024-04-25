Hello Grader, I hope this finds you well.

To start off lets talk about the project configuration
    1: connect mysql connect by entering your credentials into the settings.py file
    2: set up virtual env by running commands:
        pipenv install
        pipenv shell
    3: run any necessary migrations:
        pipenv run python manage.py makemigrations
        pipenv run python manage.py migrate
    4: create superuser 
        pipenv run python manage.py createsuperuser
    5: run application
        pipenv run python manage.py runserver
Now lets talk about tests:
    To run tests cases type the following command:
        pipenv python manage.py test
Now let talk about accessing endpoints:
    First off the root url of the application should be:
        localhost:8000
    Second the available paths are:
        /admin/ -> admin site urls 
        /restaurant/booking/ -> the routed viewset endpoints 
        /auth/ -> djoser urls
        /auth/ -> djoser authtoken urls
        /restaurant/ -> LittleLemon index page
        /restaurant/menu/items/ -> LittleLemon menu-items ListCreateView
        /restaurant/menu/items/<int:id> -> LittleLemon single menu items view retrieve update destroy
        /restaurant/api-token-auth -> obtain auth token link 