import styled from 'styled-components';
import { MQ } from '../../../styles/styleVars.js';


//Team style definition
let Team = styled.div`
    border             : 2px solid #000;
    background-image   : url('/build/assets/pitch-bg.png');
    background-position: 50%;


    header {
      display         : flex;
      padding         : 5px 20px;
      background-color: rgba(0,0,0,.5);
      color           : #fff;
      align-items     : flex-end;
      margin-bottom   : 30px;

      .teamName {
        font-size:3em;
        margin-right:1em;
      }
    }

    .team_formation {
      display              : grid;
      grid-gap             : 30px;
      grid-template-columns: 1fr;
      margin-bottom        : 30px;
    }


    @media (min-width: ${MQ.mobile}){
      .team_formation {
        grid-gap:30px 10px;
      }

      .formation_place_1{
        grid-area:1/1/1/5;
      }

      &.formation_442 {
        .team_formation {
          grid-template-rows   : repeat(4,1fr);
          grid-template-columns: repeat(4,1fr);
        }
  
        .formation_place_10{
          grid-area:4/1/4/3;
        }
        .formation_place_9{
          grid-area:4/3/4/5;
        } 
      }
  
      &.formation_4411 {
        .team_formation {
          grid-template-rows   : repeat(5,1fr);
          grid-template-columns: repeat(4,1fr);
        }
  
        .formation_place_10{
          grid-area:4/1/4/5;
        }
        .formation_place_9{
          grid-area:5/1/5/5;
        }       
      }
  
      &.formation_3421 {
        .team_formation {
          grid-template-rows   : repeat(5,1fr);
          grid-template-columns: repeat(4,1fr);
        }

        .formation_place_6{
          grid-area: 2/1/2/3;
        }

        .formation_place_5{
          grid-area: 2/2/2/4;
        }

        .formation_place_4{
          grid-area: 2/3/2/5;
        }

        .formation_place_2{
          grid-area: 3/1;
        } 
        
        .formation_place_7{
          grid-area: 3/2;
        } 

        .formation_place_8{
          grid-area: 3/3;
        } 

        .formation_place_3{
          grid-area: 3/4;
        } 

        .formation_place_10{
          grid-area: 4/2;
        } 
        .formation_place_11{
          grid-area: 4/3;
        }         
        .formation_place_9{
          grid-area: 5/2/5/4;
        }         

      }    

    }


    @media (min-width: ${MQ.largeMobile}){
      .team_formation {
        grid-gap:20px;
      }
    }

    @media (min-width: ${MQ.tablet}){
      .team_formation {
        grid-gap:40px 20px;
      }
    }
    
  `;


export default Team;