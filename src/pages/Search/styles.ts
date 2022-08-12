import styles from "styled-components";

export const MainContainer = styles.main`

    width: 100%;
    height: 100vh;
    

    display: flex;
    align-items: center;
    justify-content: center;
    
    z-index:0;
    overflow: hidden;

    padding: 1rem 4rem;

    @media(max-width: 600px){
        padding: 1rem 2rem;
    }


`;

export const SearchContainer = styles.section`

    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100vh;


    .image{
        width: 400px;
        height: 400px;
            filter: drop-shadow( 0px 100px 80px rgba(97, 99, 195, 0.07), 0px 50.0488px 40.0391px rgba(97, 99, 195, 0.0532233), 0px 30.1471px 24.1177px rgba(97, 99, 195, 0.0456112), 0px 19.3198px 15.4559px rgba(97, 99, 195, 0.0399626), 0px 12.5216px 10.0172px rgba(97, 99, 195, 0.035), 0px 7.88218px 6.30574px rgba(97, 99, 195, 0.0300374), 0px 4.5288px 3.62304px rgba(97, 99, 195, 0.0243888), 0px 1.99324px 1.59459px rgba(97, 99, 195, 0.0167767));
        img{
            filter: drop-shadow( 0px 100px 80px rgba(97, 99, 195, 0.07), 0px 50.0488px 40.0391px rgba(97, 99, 195, 0.0532233), 0px 30.1471px 24.1177px rgba(97, 99, 195, 0.0456112), 0px 19.3198px 15.4559px rgba(97, 99, 195, 0.0399626), 0px 12.5216px 10.0172px rgba(97, 99, 195, 0.035), 0px 7.88218px 6.30574px rgba(97, 99, 195, 0.0300374), 0px 4.5288px 3.62304px rgba(97, 99, 195, 0.0243888), 0px 1.99324px 1.59459px rgba(97, 99, 195, 0.0167767));
            width: 100%;
            height: 100%;
            animation: mymove2 .4s ease-out;

        }

            @keyframes mymove2 {
    from {
        margin-top: 70px;
        opacity: 0;
    }
     to {
        top: 0px;
        opacity: 1;
        }
}



    }

    @media(max-width: 920px){
        flex-direction: column;
    }


`;

export const Input = styles.div`

    display: flex;
    z-index: 1;

    margin-right: -60px;
    margin-top: -42px;

    width: 400px;
    height: 64px;

    background: white;

    margin-bottom: 2.5rem;
    overflow: hidden;

    transition: .2s ease-in-out;

    animation: mymove .5s ease-in-out;

    box-shadow: 0px 62px 72px rgba(97, 99, 195, 0.14), 0px 13.8485px 16.0821px rgba(97, 99, 195, 0.083455), 0px 4.12306px 4.78807px rgba(97, 99, 195, 0.056545);
    border-radius: 12px;

button{
   background: linear-gradient(53.46deg, #0C0C0C -12.83%, #323232 164.44%);
   width: 4rem;
   height: 4rem;

   svg{
       transition: .1s ease-in-out;
   }

   &:hover > svg{
    transform: scale(.95);
   }

    @keyframes mymove {
    from {
        margin-top: -70px;
        opacity: 0;
    }
     to {
        top: 0px;
        opacity: 1;
        }
}


}

input{
    background: transparent;
    outline: none;
    padding: 2rem;
    width: 90%;

}

    @media(max-width: 920px){
        margin: 4rem 0rem 2rem 0rem;
    }

    @media(max-width: 610px){
        height: 60px;
        width: 100%;
        
    }


`;
