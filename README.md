# _Super Galactic Age Calculator_

#### _Epicodus Friday Independent Project: Test Driven Development_

#### By _**Kenneth Du**_

#### Date _**10_12_2018**_

## Description

_Super Galactic Age Calculator._

Super Galactic Age Calculator

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years. You will need to use the Javascript Date object.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit your specs before starting to code. You need at least one test for each spec.

The business logic of your application should:

Take a person’s age in years and create a class that does the following:

    Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
    Returns their age in Venus years. (A Venus year is .62 Earth years.)
    Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
    Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
    Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
    If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

## Setup/Installation Requirements
* Open a terminal application(I suggest gitbash)
* $ git clone {this repository URL}
* Navigate to the /package.json file
* Type '$ npm install' in a terminal application to install necessary packages 
* Type '$ npm test' to run tests

## Specifications

### Specs: Super Galactic Age Calculator
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program will identify user's entered birthday, country, and level of activity** | Input: "'Kenneth', 1997, 'United States', 'Moderate', 'Mercury' " | Output: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Earth' } |
| **The program will calculate the users age in Mercury years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Mercury' } } | Output: 5.04|
| **The program will calculate the users age in Venus years** | Input:  Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Venus' } } | Output: 13.02 |
| **The program will calculate the users age in Mars years** | Input:  Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Mars' } } | Output: 39.48|
| **The program will calculate the users age in Jupiter years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Jupiter' } }| Output: 249.06|
| **The program will calculate the user's life expectancy in Earth years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Earth' } }| Output: 57 |
| **The program will calculate identify if the user has lived beyond life expectancy and return how long past the normal life expectancy** | Input: Kenneth { 'Kenneth', 1800, 'United States', 'Moderate', 'Earth' } }| Output: 140 |
| **The program will calculate the user's life expectancy in Mercury years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Mercury' } }| Output: 13.68 |
| **The program will calculate the user's life expectancy in Venus years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Venus' } }| Output: 35.339999999999996 |
| **The program will calculate the user's life expectancy in Mars years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Mars' } }| Output: 107.16 |
| **The program will calculate the user's life expectancy in Jupiter years** | Input: Kenneth { 'Kenneth', 1997, 'United States', 'Moderate', 'Jupiter' } }| Output: 676.02 |

## Known Bugs

_No known bugs._

## Support and contact details

_kennethdu3@gmail.com_

## Technologies Used

_Vs Code_
_Git_
_Github_
_HTML_
_TDD_
_Javascript_
_ES6_
_Node_
### License

This software is licensed under the MIT license.

Copyright (c) 2018 **_Kenneth_Du_**