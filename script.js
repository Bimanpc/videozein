const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const resultDiv = document.getElementById('result');

// Access the device camera and stream to video element
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Error accessing the camera: " + err);
    });

// Capture image from the video stream
captureButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to image data
    const imageData = canvas.toDataURL('image/png');

    // Send image data to AI processing function
    processImageWithAI(imageData);
});

// Function to process image with AI
function processImageWithAI(imageData) {
    // Here you would send the imageData to your AI model for processing
    // For demonstration, we'll just display a mock result
    resultDiv.innerText = "Processing image with AI...";

    // Simulate AI processing delay
    setTimeout(() => {
        resultDiv.innerText = "AI Analysis Result: Example output";
    }, 2000);
}
