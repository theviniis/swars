import React from 'react';

const CustomDetail = ({ person, attr }) => {
  // recives an name for summary tag and an url with urls
  const [data, setData] = React.useState([]);

  React.useMemo(() => {
    // calls memo to run function once
    const fetchData = (urlArray) => {
      if (!urlArray || !urlArray.length) return;
      // check if array isnt empty

      const fetchEachUrl = async (url) => {
        //fetchs each url
        const res = await fetch(url);
        const json = await res.json();
        setData((currentList) => [...currentList, json]);
        //spread each fetch in data state
      };

      urlArray.map((url) => fetchEachUrl(url));
      //maps each url and calls fetchEachUrl function
    };
    fetchData(person[attr]);
  }, [person, attr]);
  return (
    <details>
      <summary className='attr'>{attr.replace('_', ' ')}:</summary>
      {data &&
        data.map(({ name, title }, index) => (
          <div className='attr-desc' key={(name, index || title, index)}>
            {name || title}
          </div>
        ))}
    </details>
  );
};

export default React.memo(CustomDetail);
