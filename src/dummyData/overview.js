export const getAllTokens = async () => {
    try{
        const response = await fetch(`http://0.0.0.0:8096/create-position/all-tokens`);
        if (!response.ok) {
          throw new Error('API call failed: ' + response.status);
        }
        const apiData = await response.json(); // Assuming JSON response
        return apiData;
    }
    catch (error) {
        console.error('Error fetching pool data:', error);
      }
}