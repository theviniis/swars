import React from 'react';

const useMedia = (media) => {
  //recives an media query param
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      //check if the vw matches the media param
      setMatch(matches);
      //set match state with matchMedia result
    }
    changeMatch();
    //calls the function
    window.addEventListener('resize', changeMatch);
    //add event listener resize to verify the window width when resizes
    return () => {
      window.removeEventListener('resize', changeMatch);
      //remove event listener when component dismount
    };
  }, [media]);

  return match;
};

export default useMedia;
