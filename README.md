# COVID-Now <!-- omit in toc -->

## Description:

## An interactive application that allows the user to lookup current COVID-19 info

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

### Description

\_**Project Title**

## COVID-Now

### An interactive applicaiton that allows the user to lookup current COVID-19 info

<br>

### Wireframes

[Desktop Landing](https://wireframe.cc/pro/pp/4280c4226354300)

[Desktop Details](https://wireframe.cc/pro/pp/4280c4226354300)

<br>

### MVP

_The **Project Title** COVID-Now is an app that allows the user to see a snapshot of how the world is affected by this pandemic and to allow the user to search by country.

<br>

#### MVP Goals

- _Homepage that displays top five countries with hightest number of cases._
- _Allows user to search for a country._
- _Utilize six separate components._
- _Utilize the COVID19API._
- _Allow the user to see more detail on a selected country._

<br>

#### MVP API

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| COVID19API |      yes      | _https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest_ | _https://api.covid19api.com/summary_ |

Sample Query Results:
<br>
[Console.log of sample query](https://user-images.githubusercontent.com/4926360/85970621-fc764b80-b998-11ea-95ba-6f6cbdaf001d.png)

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _To build component based app._ |
| React Router | _To utilize dom manipulation._ |
| Axios | _To pull API information._ |

<br>

#### MVP Components

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Navigation.jsx
      |__ Home.jsx
      |__ Button.jsx
      |__ Top 5.jsx
      |__ Detail Page.jsx
      |__ Country List.jsx
      |__ Search.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Displays the main site._ |
|    Header    | functional |   n   |   n   |   n   | _Top display on each page_ |
|  Navigation  | functional |   n   |   n   |   n   | _Allows user to navigate the app._ |
|     Home     | functional |   n   |   y   |   n   | _Displays the base page of the app._ |
|    Index     | functional |   n   |   y   |   n   | _Displays the app_ |
|    Detail    | functional |   n   |   y   |   n   | _Displays more detail on a selected country._ |
|   Top 5      |   class    |   y   |   y   |   n   | _Displays the top five countries with covid._ |
| Country List | class      |   n   |   y   |   n   | _Page that user can browse to see numbers by country._ |
| Button       | functional |   n   |   y   |   n   | _Button that allows user to search by country._ |
|    Footer    | functional |   n   |   n   |   n   | _App footer._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above.
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Lorem Ipsum      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL            |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Lorem ipsum._
- _Lorem ipsum._

<br>

---

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
