# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Annie Wang

Time spent: 5.5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] There are two modes: easy and hard. Easy mode has less pattern the user needs to memorize and hard mode has more.
- [x] The game plays an error sound effect when the incorrect button is being clicked on. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://i.imgur.com/kw5KskH.gif)
![](https://i.imgur.com/pyRK5Du.gif)




## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   I used W3Schools and MDN Web Docs as a reference to the definition of some functions such as addEventListener, onmousedown and adding external audio. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
  
  I had a little experience with HTML and CSS before. Therefore, throughout the project I tried exploring new functions and features. A few specific challenges I encountered was implementing a function that allows the computer to randomly generate numbers for the pattern in the beginning of the game. From my experience in Java and C++, my first approach was to use the built-in function Math.random() and push the number into the pattern array one by one. However, when I tested out the game, the game was running but no sound was playing. Therefore, to debug, I output the pattern array in the console to check if Math.random() is working correctly. I then found out that Math.random() in javascript randomized floating numbers within the range specified because javascript follows the IEEE 754 rule. I did some search on the Internet and learned that we need to add the function Math.floor to make sure the number is rounded to the largest integer greater than or equal to the floating number. The next challenge I faced was when implementing the feature of playing an error sound effect when the user clicked the incorrect button. My goal is to replace the audio with the error sound effect when the user incorrectly clicks a specific button. However, there were two problems when implementing this feature. First, there would be a slight delay when the user presses on the button. Second, if I want to completely replace the sound of the specific button with the error sound effect, I won’t be able to achieve the goal of button playing sound without the game starting. I read multiple documents on W3Schools and MDN Web Docs to try to figure out how to fix this problem, but am not able to fix it at the end. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   After completing my submission, I have gained a better understanding in web development. However, I have a few questions and topics that I would like to further discover. I wonder how different programming languages would work with each other to implement more features into websites and keep data of the website. As I know that there are different programming languages that are used for backend and frontend, I would like to learn how these languages interact with each other and how to distinguish which specific language to use in different scenarios. In addition, I would also like to learn about how AWS or other infrastructure tools can be used to monitor the website and maintain the website.  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had a few more hours to work on this project, I would like to improve the overall appearance. For example, instead of just a plain background with colors of my preference, I would add a little design. Instead of a simple web alert notifying the loser if they win or lose the game, I would like to design an actual pop up on the web page with designs that matches the overall style of the website to notify users of the result. Lastly, I would like to implement some statistical data at the end to make the overall game more meaningful and fun. My idea is: based on users’ score, the app would tell them that their memory is better than a certain percentage of the player playing this game.There is also a slight bug on the timer that I would like to fix if I have more time.  

## License

    Copyright Annie Wang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
