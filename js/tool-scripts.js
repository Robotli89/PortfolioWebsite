document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('video-to-mp3-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const videoUrl = document.querySelector('input[name="videoUrl"]').value;

        // Validate the URL before sending it to the server
        if (!videoUrl || !validURL(videoUrl)) {
            alert('Please enter a valid URL.');
            return;
        }

        // AJAX request to the server to convert the video
        fetch('/convert-to-mp3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl: videoUrl }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.blob(); // Convert the response to a blob
        })
        .then(blob => {
            // Create a link element, use it to download the MP3, and remove it
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'video.mp3'; // Set the file name for download
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url); // Clean up the URL object
            document.body.removeChild(a); // Remove the link from the DOM
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while converting the video.');
        });
    });S
});

// Helper function to validate the URL
function validURL(str) {
    // Regular expression for URL validation
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
