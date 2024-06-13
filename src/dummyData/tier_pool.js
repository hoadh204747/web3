// export const pool_tier = {
//     "pools": [
//       {
//         "liquidity": "140869941462753590",
//         "volumeUSD": "876740800.7057259935653714394950541",
//         "feesUSD": "8767408.007057259935653714394950541",
//         "txCount": "46904",
//         "feeTier": "10000"
//       },
//       {
//         "liquidity": "12932674866059882053",
//         "volumeUSD": "470372036274.9354493427739529378687",
//         "feesUSD": "235186018.1374677246713869764689156",
//         "txCount": "7066642",
//         "feeTier": "500"
//       },
//       {
//         "liquidity": "8523737289689248125",
//         "volumeUSD": "77352597394.26490885363538703252584",
//         "feesUSD": "232057792.1827947265609061610975418",
//         "txCount": "728044",
//         "feeTier": "3000"
//       },
//       {
//         "liquidity": "13975059878055",
//         "volumeUSD": "9520830888.736877736620576822511971",
//         "feesUSD": "952083.0888736877736620576822511971",
//         "txCount": "245255",
//         "feeTier": "100"
//       }
//     ],
//     "bestPoolID": 1
//   }

export const getPoolTier = async function (token1, token0) {
  try {
    const response = await fetch(`http://0.0.0.0:8096/create-position/tokens?token1=${token1}&token0=${token0}`);
    if (!response.ok) {
      throw new Error('API call failed: ' + response.status);
    }
    const apiData = await response.json(); // Assuming JSON response

    return apiData;
    // console.log('Error fetching pool data:', poolTier);
    
  } catch (error) {
    console.error('Error fetching pool data:', error);
  }
}
export const optimizeRange = async function(address) {
  try{
    const response = await fetch(`http://0.0.0.0:8096/create-position/optimize?address=${address}`);
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

