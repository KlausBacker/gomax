# FROM
# https://hub.docker.com/_/openjdk
# ( Docker Debian )
FROM openjdk:8-jdk-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY /target/gmx-0.0.1-SNAPSHOT.jar /app

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run .jar when the container launches
CMD ["java", "-jar", "gmx-0.0.1-SNAPSHOT.jar"]
