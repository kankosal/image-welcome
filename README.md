# Welcome

Testing welcome page

## Setup

1. Clone the repo<br />
   `git clone https://gitlab.com/ittesting/docker-image/gitlab-image-welcome.git`
2. Create `docker-compose.yml` file and add below

```
version: '3.8'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    environment:
      NODE_ENV: dev
      TITLE: Welcome to Container App
      DESCRIPTION: This is a simple welcome page for demonstration purposes.

```

glpat-qndyKjoqH9qEwD6t_A7H
