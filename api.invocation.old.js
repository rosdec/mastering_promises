// Function to make an API call using fetch and return a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                // Check if the response is okay (status 200-299)
                if (response.ok) {
                    return response.json(); // Parse JSON if response is okay
                } else {
                    // Reject the promise if response is not okay
                    reject(new Error('API Invocation failed'));
                }
            })
            .then(data => {
                // Resolve the promise with the data
                resolve(data);
            })
            .catch(error => {
                // Catch and reject the promise if there is a network error
                reject(error);
            });
    });
}

// Example usage
const apiURL = 'https://reqres.in/api/users/2'; // use https://reqres.in/api/users/2 for check the failure 

fetchData(apiURL)
    .then(data => {
        // Handle the resolved data
        console.log('Data received:', data);
    })
    .catch(error => {
        // Handle any errors that occurred
        console.error('Error occurred:', error);
    });
