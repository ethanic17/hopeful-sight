# How to initialize backend
## Step 1
1. Clone the repository into your local file system.
2. CD into the directory\
``/application/Backend``

## Step 2
3. Type the command:\
```python -m venv venv```

This will create your virtual environment. this prevents version issues across multiple systens

4. Activate your virtual environment\
**Windows**\
&ensp;&ensp;&ensp;&ensp;```./venv/Scripts/activate```\
**Mac or Linux**\
&ensp;&ensp;&ensp;&ensp;```source ./venv/bin/activate```\
To decactivate, just type:\
&ensp;&ensp;&ensp;&ensp;```deactivate```

5. Type the command:\
&ensp;```pip install -r requirements.txt```

This will install all associated packages.

## Step 3
6. cd into ``/hopefulsight``
7. We want to update our database here. To do this lets type these commands in\
&ensp;&ensp;&ensp;&ensp;&ensp;a) update user migration ```python manage.py makemigrations user```\
&ensp;&ensp;&ensp;&ensp;&ensp;b) update database table ```python manage.py migrate user```\
&ensp;&ensp;&ensp;&ensp;&ensp;c) update auth attributes in migration ```python manage.py makemigrations```\
&ensp;&ensp;&ensp;&ensp;&ensp;d) update DB ```python manage.py migrate```\

7. We can now run the server!\

### To run the server enter
```python manage.py runserver``` - this is to run the server at port 8000

# REMEMBER
WHEN PUSHING TO GITHUB - DO NOT USE ``git add .``\
WE DO NOT WANT TO INCLUDE ANY OF THE __PY_CACHE__ FOLDERS OR **MIGRATIONS** IN OUR PUSH
