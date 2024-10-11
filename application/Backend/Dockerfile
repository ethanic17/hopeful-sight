FROM python:3.9.6
# FROM python:3.9-alpine3.13

LABEL maintainer="teamForSight"
ENV PYTHONUNBUFFERED=1

# Copy the requirements file to /tmp
COPY ./dockertemp.txt /tmp/dockertemp.txt

# Only copy dev requirements if file exists and DEV=true
ARG DEV=false
COPY ./dockertemp.dev.txt /tmp/dockertemp.dev.txt

# Copy the application code
COPY ./app /app

# Set the working directory
WORKDIR /app

# Expose port 8000
EXPOSE 8000

# Create virtual environment and install dependencies
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/dockertemp.txt && \
    if [ "$DEV" = "true" ]; then /py/bin/pip install -r /tmp/dockertemp.dev.txt; fi && \
    rm -rf /tmp && \
    adduser \
    --disabled-password \
    --no-create-home \
    django-user

# Set the environment path for the virtual environment
ENV PATH="/py/bin:$PATH"

# Run the container as the django-user
USER django-user
