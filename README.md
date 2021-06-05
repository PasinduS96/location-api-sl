# Location Data API - Sri Lanka


[![MIT License][license-shield]][license-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]

![System Diagram](https://i.imgur.com/kdCzEBw.png)


<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#Technologies">Technologies</a>
      <ul>
        <li><a href="#implemantations">Implemantations</a></li>
        <li><a href="#hosting">Hosting</a></li>
      </ul>
    </li>
    <li>
      <a href="#use-cases">Use Cases</a>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-setup">Project Setup</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


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

#### 1. Get Major Cities And Sub Areas in Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/cities 
```

#### 2. Get All Provinces in Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/provinces
```

#### 3. Get All Districts in Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/districts
```

#### 4. Get GPS Cordinates of major city or sub area in Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/cities/cordinates/[CITY NAME IN ENGLISH]
```
###### Example

Assume user needs to find GPS cordinates of Kadduwela, Sri Lanka


```sh
   https://locatesrilanka.herokuapp.com/cities/cordinates/Kaduwela
```

#### 5. Get all major cities or sub areas in selected distict Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/cities/cordinates/[DISTRICT ID]
```
###### Example

Assume user needs to find GPS cordinates of Colombo District, Sri Lanka


```sh
   https://locatesrilanka.herokuapp.com/cities/byDistrict/5
```

#### 6. Get Administrative Districts of the Colombo Mucipal Council, Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/cities/colombo_mca/[COLOMBO SUB AREA]
```
###### Example

Assume user needs to find details of Colombo 1, Sri Lanka


```sh
   https://locatesrilanka.herokuapp.com/cities/colombo_mca/1
```


#### 7. Get all Administrative Districts of the Colombo Mucipal Council, Sri Lanka

```sh
   https://locatesrilanka.herokuapp.com/cities/colombo_mca
```


#### 8. Get all Districts in Selected Province

```sh
   https://locatesrilanka.herokuapp.com/districts/byprovince/[PROVINCE ID]
```
###### Example

Assume user needs to find districts in western province, Sri Lanka


```sh
   https://locatesrilanka.herokuapp.com/districts/byprovince/1
```

#### 9. Get count of all Districts in Selected Province

```sh
   https://locatesrilanka.herokuapp.com/districts/districtcount/[PROVINCE ID]
```
###### Example

Assume user needs to find count of districts in western province, Sri Lanka


```sh
   https://locatesrilanka.herokuapp.com/districts/districtcount/1
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
3. Create .env file for environment varialbes
4. Create environment variables
   ```sh
   PORT=
   MONGO_URI=
   ```
5. Run Project
   ```sh
   npm start
   ```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgements
* [Sri Lanka Provinces Districts Cities Database](https://github.com/madurapa/sri-lanka-provinces-districts-cities)

[license-shield]: https://img.shields.io/github/license/PasinduS96/location-api-sl?style=for-the-badge
[license-url]: https://github.com/PasinduS96/location-api-sl/blob/master/LICENSE
[forks-shield]: https://img.shields.io/github/forks/PasinduS96/location-api-sl?style=for-the-badge
[forks-url]: https://github.com/PasinduS96/location-api-sl/network/members
[stars-shield]: https://img.shields.io/github/stars/PasinduS96/location-api-sl?style=for-the-badge
[stars-url]: https://github.com/PasinduS96/location-api-sl/stargaze

## License

MIT © [PasinduS96](https://github.com/PasinduS96/location-api-sl/blob/master/LICENSE)
