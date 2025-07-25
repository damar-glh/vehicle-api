# Vehicle Api

This repository is a simple json server for a take-home frontend assignment from PT. Widya Inovasi Indonesia for an internship position as a Frontend Developer. This project focuses on developing a vehicle tracking dashboard using modern frontend technologies.

## API Endpoints

Base URL: `[http://128.199.106.149](https://vehicle-api.damar-galih.tech/)`

## Endpoints

- GET /vehicles: Returns a list of all vehicles with basic telemetry.

- GET /vehicles/:id: Returns telemetry details of a specific vehicle, including:
  - fuel level
  - odometer
  - speed
  - timestamp
  - location (latitude & longitude)
