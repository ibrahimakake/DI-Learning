/*Instructions

In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances.
 */

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// Instantiate Video instances
const video1 = new Video("Video 1", "User 1", 120);
const video2 = new Video("Video 2", "User 2", 180);

// Call the watch() method
video1.watch();
video2.watch();

// Bonus: Using an array to store data for Video instances
const videosData = [
    { title: "Video 1", uploader: "User 1", time: 150 },
    { title: "Video 2", uploader: "User 2", time: 240 },
    { title: "Video 3", uploader: "User 3", time: 300 },
    { title: "Video 4", uploader: "User 4", time: 300 },
    { title: "Video 5", uploader: "User 5", time: 300 }
];

// Bonus: Loop through the array to instantiate Video instances
const videoInstances = [];
for (const data of videosData) {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstances.push(video);
}

// Bonus: Call the watch() method for each instance
for (const video of videoInstances) {
    video.watch();
}
