import { useState } from 'react';
    import axios from 'axios';

    function IPGeolocation() {
      const [ipInfo, setIpInfo] = useState(null);
      const [loading, setLoading] = useState(false);

      const handleGeolocation = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.ipgeolocation.io/ipgeo?apiKey=ac649d74-ad8d-4393-be92-9f859290fe82`
          );
          setIpInfo(response.data);
        } catch (error) {
          console.error('Error fetching IP info:', error);
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="ip-geolocation">
          <button onClick={handleGeolocation} disabled={loading}>
            {loading ? 'Loading...' : 'Show My Location'}
          </button>
          {ipInfo && (
            <div className="ip-info">
              <p>IP: {ipInfo.ip}</p>
              <p>City: {ipInfo.city}</p>
              <p>Country: {ipInfo.country_name}</p>
              <p>ISP: {ipInfo.isp}</p>
            </div>
          )}
        </div>
      );
    }

    export default IPGeolocation;
