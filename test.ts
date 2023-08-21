// test.ts
Feature('API Testing with Authentication');

Scenario('Test API Endpoint with Authentication', async ({ I }) => {
    // Import the classes
    const { APIAuthHelper } = require('./apiAuthHelper');
    const { APITest } = require('./apiTest');

    // Configure the API authentication parameters
    const authApiUrl = 'https://example.com/api/auth'; // Replace with your API authentication endpoint
    const apiKey = 'your_api_key'; // Replace with your API key

    // Create an instance of the APIAuthHelper class and authenticate
    const apiAuth = new APIAuthHelper(authApiUrl, apiKey);
    await apiAuth.authenticateAPI();

    // Create an instance of the APITest class
    const dataApiUrl = 'https://example.com/api/v1'; // Replace with your API base URL
    const authToken = apiAuth.getAuthToken();
    const apiTest = new APITest(dataApiUrl, authToken);

    // Get data from the 'me' endpoint
    const meData = await apiTest.getMeData();

    // Perform assertions on the response
    I.assertEqual(meData.status, 200);
    I.assertContains(meData.message, 'Success');
});
