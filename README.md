# Location Data API - Sri Lanka

## Introduction

Developers can use this API to get datails of cities, districts and provinces which located all around the Sri Lanka. This API can easily intergarte to you appication using particular URI. 


## Technologies

### Implemantations 

- MongoDB
- NodeJS

### Hosting

- Heroku
- DigitalOcean


## Use Cases

- Developers can get **major cities and sub areas** in each district
- **GPS cordinates** (Latitude and Longitude) are avilabe for each major city and sub areas. GPS cordinates can be use with Google Maps and other GPS/ Map services
- Developers can easily get **Administrative Districts of the Colombo Mucipal Council** with GPS cordinates, Administrative Distict Name and Sub Area (Known name like Kollupitiya, Modara, etc.)
- Users can get all the disticts and provinces in Sri Lanka


## Getting Started

### API Documentation

#### Get Major Cities And Sub Areas in Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/cities
```

#### Get All Provinces in Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/provinces
```

#### Get All Districts in Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/districts
```

#### Get GPS Cordinates of major city or sub area in Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/cities/cordinates/[CITY NAME IN ENGLISH]
```
###### Example

Assume user needs to find GPS cordinates of Kadduwela, Sri Lanka


```sh
   https://locationssrilanka.herokuapp.com/cities/cordinates/Kaduwela
```

#### Get all major cities or sub areas in selected distict Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/cities/cordinates/[DISTRICT ID]
```
###### Example

Assume user needs to find GPS cordinates of Colombo District, Sri Lanka


```sh
   https://locationssrilanka.herokuapp.com/cities/byDistrict/5
```

#### Get Administrative Districts of the Colombo Mucipal Council, Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/cities/colombo_mca/[COLOMBO SUB AREA]
```
###### Example

Assume user needs to find details of Colombo 1, Sri Lanka


```sh
   https://locationssrilanka.herokuapp.com/cities/colombo_mca/1
```


#### Get all Administrative Districts of the Colombo Mucipal Council, Sri Lanka

```sh
   https://locationssrilanka.herokuapp.com/cities/colombo_mca
```


#### Get all Districts in Selected Province

```sh
   https://locationssrilanka.herokuapp.com/districts/byprovince/[PROVINCE ID]
```
###### Example

Assume user needs to find districts in western province, Sri Lanka


```sh
   https://locationssrilanka.herokuapp.com/districts/byprovince/1
```

#### Get count of all Districts in Selected Province

```sh
   https://locationssrilanka.herokuapp.com/districts/districtcount/[PROVINCE ID]
```
###### Example

Assume user needs to find count of districts in western province, Sri Lanka


```sh
   https://locationssrilanka.herokuapp.com/districts/districtcount/1
```


### Project Setup

1. Clone the repo
   ```sh
   git clone https://github.com/PasinduS96/location-api-sl.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3.Create .env file for environment varialbes
4.Create environment variables
```sh
   PORT=
   MONGO_URI=
```
5.Run Project
   ```sh
   npm start
   ```
