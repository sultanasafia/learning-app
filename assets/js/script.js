
const enrolledCourses = [];

function enroll() {
  const courseList = document.getElementById('course-list');
  const selectedCourse = courseList.options[courseList.selectedIndex].text;
  enrolledCourses.push(selectedCourse);
  
  const enrolledList = document.getElementById('enrolled-list');
  const listItem = document.createElement('li');
  listItem.textContent = selectedCourse;
  enrolledList.appendChild(listItem);
}

function startLiveClass(course) {
  const liveClassTitle = document.getElementById('live-class-title');
  liveClassTitle.textContent = course + ' Live Class';
  
  const liveClassContainer = document.getElementById('live-class-container');
  liveClassContainer.style.display = 'block';
}

function sendMessage() {
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  
  const message = chatInput.value;
  chatInput.value = '';
  
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
}
// =================
// Sample data for courses and progress
const courses = [
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
];

const userProgress = [
    { courseId: 1, progress: 80 },
    { courseId: 2, progress: 60 },
];

// Function to display courses and progress
function displayCoursesAndProgress() {
    const courseList = document.getElementById('course-list');
    const progressDiv = document.getElementById('progress');
    
    courseList.innerHTML = '';
    progressDiv.innerHTML = '';

    courses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course.name;
        courseList.appendChild(listItem);

        const progress = userProgress.find(progress => progress.courseId === course.id);
        if (progress) {
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = progress.progress + '%';
            progressDiv.appendChild(progressBar);
        }
    });
}

// Function to display earned certificates
function displayCertificates() {
    const certificatesList = document.querySelector('#certificates ul');
    certificatesList.innerHTML = '';

    userProgress.forEach(progress => {
        if (progress.progress >= 100) {
            const certificateItem = document.createElement('li');
            certificateItem.textContent = `Certificate for Course ${progress.courseId}`;
            certificatesList.appendChild(certificateItem);
        }
    });
}

// Initial display
// displayCoursesAndProgress();
displayCertificates();
// =======================================================================


const express = require('express');
const app = express();
const port = 3000;

// Define routes for posting and retrieving messages
app.post('/api/messages', (req, res) => {
    // Save the message to the database
    const message = req.body.message;
    // Add logic for moderation here

    res.send({ message: 'Message posted successfully' });
});

app.get('/api/messages', (req, res) => {
    // Retrieve messages from the database
    // Add logic for user roles and permissions here

    res.send(messages);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// =================================


// This is a simplified example for sending and displaying messages.
document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message');
    const messagesContainer = document.getElementById('messages');

    document.getElementById('send').addEventListener('click', function () {
        const message = messageInput.value;

        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = message;

            messagesContainer.appendChild(messageElement);

            // You would typically send this message to the server and store it in a database.
            // For a real-time system, consider using WebSockets or a library like Socket.io.
        }

        messageInput.value = '';
    });
});


