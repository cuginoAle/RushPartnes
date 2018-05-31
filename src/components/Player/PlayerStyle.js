import styled from 'styled-components';
import { MQ } from '../../../styles/styleVars.js';


//Player style definition
let Player = styled.div`
  align-items   : center;
  display       : flex;
  filter        : drop-shadow(0px 2px 5px);
  flex-direction: column;
  position      : relative;

  .imgWrapper {
    margin-bottom:5px;
  }

  .shirtImg {
    display:block;
  }

  @media (min-width: ${MQ.mobile}){
    .shirtImg {
      width:60px;
    }
  }

  .number {
    position : absolute;
    top      : 1em;
    font-size: 2.6em;
  }

  .name {
    padding         : 3px 10px;
    background-color: #444;
    color           : #fff;
    font-size       : 1.6em;
    display:block;
    overflow:hidden;
    text-overflow:ellipsis;

    text-align:center;
  }

  @media (min-width: ${MQ.mobile}){
    .name {
      width:50px;
      font-size:1.2em;
    }

    .number {
      font-size: 1.6em;
    }
  }
  @media (min-width: ${MQ.largeMobile}){
    .name {
      width:auto;
    }
  }
  
  @media (min-width: ${MQ.tablet}){
    
    .number {
      font-size: 2.6em;
    }    
    .shirtImg {
      width:auto;
    }    
    .name {
      font-size:1.6em;
    }    
  }
`;


export default Player;
