import axios from 'axios';

export const fetchCryptoData = async () => {
  return await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
    },
  });
};
