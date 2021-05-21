# DistanceCalculator

## Introduction
*  **`DistanceCalculator`** is an applicationt hat can tell us the distance between our location and some other
locations which we expect to be supplied to us..

###### DistanceCalculator Application

*   Create new location
*   Edit Location
*   Delete Location
*   Fetch All Locations
*   Fetch Specific Location
*   Calculate distance

## Technologies Used
- **[Typescript]** - Codes were written in Typescript
- **[NestJs](https://nestjs.com/)** - Nestjs is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.

- **[PostgreSQL](https://www.postgresql.org/)** - Postgres is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.
- **[Typeorm](https://typeorm.io/#/)** - The ORM used for this application

#### Routes
* POST `/api/locations` Use this route to create a location. The following fields are required:
  * `name`  The location name
  * `lat`  The latitude of the location
  * `long` Longitude of the location
  * `phone` phone number
  * `description` Location description
  * `contact_person` The contact person, this the only person that edit and delete a location


* POST `/api/locations/distance` Use this route to calculate the distance between two locations. The following fields are required:
  * `location_name1` The name of the first location
  * `location_name2` The name of the second location


* PUT `/api/locations/<id>` Use this route to update a location with the given id. At least one of the following fields is required:
  * `name`  The location name
  * `lat`  The latitude of the location
  * `long` Longitude of the location
  * `phone` phone number
  * `description` Location description
  * `contact_person` The contact person of the location

* GET `/api/locations` Use this route to fetch all locations

* GET `/api/locations/<id>` Use this route to fetch a particular location


* DELETE `/api/locations/<id>/<contact_person` Use this route to delete a group with its groupId

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    > git clone git@github.com:EricDav/DistanceCalculator.git 

  *  Using HTTP;

    >`https://github.com/EricDav/DistanceCalculator.git`

*  Navigate to the repo's folder on your computer
  *  `cd DistanceCalculator`
*  Install the app's dependencies. For best results, using a node package manager.
  *  `npm install`

    >In order to use app dependencies, you need to install it through **npm**. You also need to have **node** installed on your system.
* Run app
  *  `npm start`
  *  Running the command above will produce output that's similar to the sample below.
  > nest start
```
[Nest] 92694   - 05/21/2021, 16:25:38   [NestFactory] Starting Nest application...
[Nest] 92694   - 05/21/2021, 16:25:38   [InstanceLoader] TypeOrmModule dependencies initialized +57ms
[Nest] 92694   - 05/21/2021, 16:25:38   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [InstanceLoader] TypeOrmCoreModule dependencies initialized +85ms
[Nest] 92694   - 05/21/2021, 16:25:38   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [InstanceLoader] LocationModule dependencies initialized +1ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RoutesResolver] AppController {}: +23ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {, GET} route +3ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RoutesResolver] LocationController {/api/locations}: +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations, POST} route +1ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations, GET} route +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations/:id, GET} route +1ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations/distance, POST} route +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations/:id, PUT} route +0ms
[Nest] 92694   - 05/21/2021, 16:25:38   [RouterExplorer] Mapped {/api/locations/:id/:contact_person, DELETE} route +1ms
[Nest] 92694   - 05/21/2021, 16:25:38   [NestApplication] Nest application successfully started +2ms
```
