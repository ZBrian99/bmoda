import React from "react";
import styled from "styled-components";
//
const Layout = styled.div`
background-image: url(${({imagen})=>imagen});

color:${({theme})=>theme.colors.marronClaro};
`


//
export const ImageOverlay = ({imagen}) => {
  return (
    <Layout imagen={imagen}>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit amet.</p>
      <span>Lorem ipsum dolor sit amet.</span>
      <button>Lorem ipsum dolor sit amet.</button>
    </Layout>
  );
};
