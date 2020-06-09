<img src="https://i.ibb.co/R40zvjz/grayscalejs.png" alt="grayscalejs" border="0" height="36px">

Add a GrayScale filter to images

## Install
You can get it on npm.

    npm install grayscalejs --save
    
Or if you're not into package management, just [download a ZIP](https://github.com/IamIsPra/GrayScaleJS/archive/master.zip) file.

## Setup
First, include the script file to your project

    <script src="grayscale.js"></script>
Or load it from CDN

    <script src="https://cdn.jsdelivr.net/gh/IamIsPra/grayscalejs@1.0.0/grayscale.min.js"></script>

## Usage

 1. GrayScale all images in webpage

>     <img src="image.jpg"/>
>     <button  onclick="grayscale()">Click Me</button>

 2. GrayScale all images with a specific ID
>     <img id="myImage" src="image.jpg"/>
>     <button  onclick="grayscaleById("myImage")">Click Me</button>
 3. GrayScale all images with a specific Class
 >     <img class="myImage" src="image.jpg"/>
>     <button  onclick="grayscaleByClass("myImage")">Click Me</button>

 4. Reset all GrayScaled images in webpage

>     <img src="image.jpg"/>
>     <button  onclick="grayscaleClear()">Clear Me</button>

 5. Reset all GrayScaled images with a specific ID
>     <img id="myImage" src="image.jpg"/>
>     <button  onclick="grayscaleClearById("myImage")">Clear Me</button>
 6. Reset all GrayScaled images with a specific Class
 >     <img class="myImage" src="image.jpg"/>
>     <button onclick="grayscaleClearByClass("myImage")">Clear Me</button>

 7. Toggle all images  in webpage between GrayScale and Color

>     <img src="image.jpg"/>
>     <button  onclick="grayscaleToggle()">Click Me</button>

 8. Toggle all images  with a specific ID in a webpage between GrayScale and Color
>     <img id="myImage" src="image.jpg"/>
>     <button  onclick="grayscaleToggleById("myImage")">Click Me</button>
 9. Toggle all images  with a specific Class Name in a webpage between GrayScale and Color
 >     <img class="myImage" src="image.jpg"/>
>     <button onclick="grayscaleToggleByClass("myImage")">Click Me</button>

## Demo
[View Live Demo](https://bit.ly/3f8NN70) 






