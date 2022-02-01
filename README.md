
![Analyse.it Banner]()

# Analyse.it

Analyse.it is a website, built to help organizations, institutes and businesses in deciding wheather its the right time to open up their organizations and start functioning offline.

It uses Spatial Data Analysis to predict the results.

It has a professional & easy to navigate user interface.

It has the ability to display the data on a map, so as to give the data user a better visualization of its data.



## Need Of This Project

Amid the outbreak of the COVID19 pandemic, offices are closed and the organizations are functioning in online mode.

Due to this online mode the IT companies are facing significant amount of loss and want to reopen their offices at the earliest.

However, the currently situation seems to be in control and the offices may open with some risk, which is unknown to many organizations.

So, this is where this project come into picture, we analyse the employee data of the organization and help them in making the decision of reopening the organization.

Apart from IT companies this projects could be used by other organizations as well.
## Working

This website works in the following fassion:
    
- The user when opens up this website in a browser have an option of
  providing a `Data file` that contains the information of its employees (the format of this file is described below in the `Input Format` Section).
- After submitting the file, the data is ploted on a world map and display to the user.
- A new tab named `Analysis` is now visible on the navigation bar.
- Upon clicking on it, the user is redirected to a new page which displays all the results and predictions made by the website in a professional way.
- The user can also write a Testimonal/Feedback to us through this page.
- Additionally, upon clicking on the `Table View` button, the user is redirected to a page where the submitted data is displayed in a tabular representation.

## Input Format

- The input file should be a `.xlsx` file (Excel file) with following columns:

| Name |        lat      |  lng         | pin       | district|
| :-------- |   :------- |  :-----      | :-----    | :-------- |
| Required  |   Required |  Required    | Required  | Required |

## API Reference

#### Get the data submitted by user

```http
  GET /all_data
```

#### Posts the data provided by user into the database and returns the predictions & other related analysis.

```http
  POST /analyse
```

## Tech Stack

**Client:** React JS, Redux, BootStrap, Leaflet JS

**Server:** Node JS, Express JS

**Database:** PostgreSQL, PostGIS


## Uses

- This website can be used by organizations, institutes & businesses to get predictions about the fact that are the conditions favourable inaf, so as to open up the offices and continue the work offline.

- This website displays the data on a map, which helps the manager(user) of the organization to get a visual insight about where its employees reside and how their distribution looks like.

- This website also provides some other relevant analysis and information which might be useful.


## Future Scope

- I plan to add more features to this website.

- This project is currently a web application and I look forward to building a mobile application for this project.

- The prediction algorithm which is used by the application is currently a mathematical formula which uses concepts of probability and likelihood and I look ahead to integrate a Machine Learning model to further refine the prediction made.
