import React from 'react';
import axios from 'axios';

const CustomDetail = ({ person, attr }) => {
  // recives an name for summary tag and an url with urls
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // calls memo to run function once
    const fetchData = async (urlArray) => {
      if (!urlArray) return;
      console.log(urlArray);
      axios
        .all(urlArray.map((url) => axios.get(url)))
        .then((data) => setData(data));
      // use axios to fetch each url and spread data in data state
    };
    fetchData(person[attr]);
  }, [person, attr]);

  return (
    <details>
      <summary className='attr'>{attr.replace('_', ' ')}:</summary>
      {data &&
        data.map((item) => (
          // for each data render a span with the props
          <div
            key={item.data.name ? item.data.name : item.data.title}
            className='attr-desc'
          >
            {item.data.name ? item.data.name : item.data.title}
          </div>
        ))}
    </details>
  );
};

export default React.memo(CustomDetail);
