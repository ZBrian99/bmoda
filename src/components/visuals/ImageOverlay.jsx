import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
//
const Layout = styled.div`
/* background-image: url(${({ imagen }) => imagen}); */
color:${({ theme }) => theme.colors.white};
width: 100%;
height: 100vh;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
position: relative;
 overflow: hidden;

z-index: 1;
&::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: -1;
  }
  
  ::selection {
    background-color:${({ theme }) => theme.colors.white};
    color:${({ theme }) => theme.colors.black};
}
 
`
const Title = styled(motion.h2)`
color: ${({ theme }) => theme.colors.white};
 font-size: 13vw;
 text-align: center;
 white-space: nowrap;
 width: 100%;
 margin-top: auto;
 margin-bottom: 2rem;
 text-transform: uppercase;
 @media screen and (max-width: 60rem) {
 margin-top: 0;
  
 }

`
const SubTitle = styled.h3`
  
`
const Description = styled.p`
  
`
const Span = styled.span`
  
`
const Button = styled.button`
  
`
const CoveredLayer = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-color:${({ theme }) => theme.colors.black}; */
    z-index: 2;
`

//
export const ImageOverlay = ({ imagen, title ="Lorem ipsum" }) => {
  return (
    <Layout imagen={imagen}>

      <Title initial={{ y: '100%' }}
        whileInView={{ y: "0%" }}
        transition={{ delay: 1, duration: .8, ease: "easeOut" }}
      >{title}</Title>
      {/* <SubTitle>Lorem ipsum dolor sit amet.</SubTitle> */}
      {/* <Description>Lorem ipsum dolor sit amet.</Description> */}
      {/* <Span>Lorem ipsum dolor sit amet.</Span> */}
      {/* <Button>Lorem ipsum dolor sit amet.</Button> */}
      <CoveredLayer
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        transition={{ delay: 0.5, duration: .5, ease: "easeOut" }}
      />
    </Layout>
  );
};
