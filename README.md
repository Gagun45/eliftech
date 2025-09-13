# ELIF Tech Test Assignment

# Next.js test project demonstrating CRUD functionality, backend interactions using Redux Toolkit + RTK Query, UI responsiveness

# Project is being deployed and can be accessed via link: https://eliftech-ruddy.vercel.app/

## Table of Contents

    -[Features]
    -[Tech Stack]
    -[Getting Started]
    -[Scripts]
    -[Folder Structure]

## Features

    Core Features:
        - Create - add new items
        - Read - view list of items
        - State Management - uses Redux Toolkit for global state

    UX & UI Features
        - Responsive Design - works seamlessly on desktop and mobile
        - User Feedback - toasts for success or error actions
        - Loading States - spinners while fetching data

    Additionally:
        - Searching, Pagination, Sorting
        - Routing - dynamic routes for individual item pages
        - API Integration - fetch and mutate data using RTK Query
        - Protected routes - some pages require permission in order to be accessable

## Tech Stack

    - Next.js 15
    - React 19
    - Redux Toolkit
    - ShadCN
    - Prisma + PostgreSQL
    - JavaScript (ES6+) + Typescript

## Folder Structure

    eliftech/
    ├─  app/                    # Next.js App directory (pages/routes)
    ├─  components/             # Reusable UI Components
    ├─  forms/                  # Forms used across the app
    ├─  hooks/                  # Custom React hooks with API calls and user feedback
    ├─  lib/                    # Server actions, configuration files (types, schemas, constants)
    ├─  prisma/                 # Folder containing prisma.schema file
    ├─  public/                 # Static assets
    ├─  redux/                  # Redux configuration (store, slice, services, provider)
    ├─  next.config.mjs
    ├─  package.json
    └─  README.md
