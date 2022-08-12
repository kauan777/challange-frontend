import styles from "styled-components";

export const MainContainer = styles.main`
width: 100%;


display: flex;
align-items: center;
justify-content: center;

z-index:0;
overflow: hidden;

padding: 6rem 4rem;

@media(max-width: 606px){
padding: 6rem 2rem;

}

`;

export const ProfileContainer = styles.div`

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100%;
    height:100%;
    
    padding: 2rem;

    animation: mymove2 .4s ease-out;

    
    background: white;
    box-shadow: 0px 265px 80px rgba(109, 109, 109, 0.02), 0px 132.629px 40.0391px rgba(109, 109, 109, 0.0152067), 0px 79.8897px 24.1177px rgba(109, 109, 109, 0.0130318), 0px 51.1975px 15.4559px rgba(109, 109, 109, 0.0114179), 0px 33.1821px 10.0172px rgba(109, 109, 109, 0.01), 0px 20.8878px 6.30574px rgba(109, 109, 109, 0.0085821), 0px 12.0013px 3.62304px rgba(109, 109, 109, 0.00696822), 0px 5.28209px 1.59459px rgba(109, 109, 109, 0.00479335);
    transition: .2s ease-in-out all;

    img{
        width: 270px;
        height: 270px;
    }

    .container-name-description{

        span{
            color:#2196F3;
            cursor: pointer;
        }

        .icon-back{
            float: right;
        }

    animation: mymove2 .2s ease-out;


        hr{
            width: 100%;
            border: 1px solid #D9D9D9;
            margin-top: 1rem;
        }

        @media(max-width: 425px){
            h2{
                font-size: 20px;
            }
            span{
                font-size: 14px;
            }
        }

    }

    @media(max-width:1115px){

            img{
             width: 200px;
             height: 200px;
        }
    }

        @media(max-width:780px){

            img{
                margin: 0 auto;
            }
    }

    @media(max-width: 425px){
            img{
             width: 100%;
             height: 100%;
        }
    }
`;

export const ContainerInfoProfile = styles.div`
    width: 100%;
    display: flex;
    gap: 3rem;

    @media(max-width:1115px){
    gap: 2rem;
    }

    @media(max-width:994px){
        flex-direction: column;
    }
    


`;

export const ContainerInformation = styles.div`
    width: 100%;
    

`;

export const ContainerSection = styles.div`
    display: flex;
    gap: 152px;

    @media(max-width: 828px){
        flex-direction: column;
        gap: .5rem;
    }

`;

export const SectionInformationProfile = styles.section`

display: flex;
flex-direction: column;
gap: 1rem;

margin-top: 1rem;

b{
    font-weight: 600;
    color: #676767;
}

span{
    position: relative;
    display: block;
    color: #9B9B9B;

    p{
        position: absolute;
        display: inline-block;
        left: 100px;
        color: #2196F3;
        cursor: pointer;

    }
}

   @media(max-width: 425px){
        span{
            font-size: 14px;
        }
    }

`;

export const WorkArea = styles.div`
    width: 100%;

    b{
        position: relative;
        font-weight: 600;
        color: #676767;
        display: inline-block;
        width: 100%;
    }

    b::after{
        content: '';
        position: absolute;
        bottom: 6px;
        height: 412px;
        z-index: 222;
        background: red;

    }

`;

export const SectionEnterprise = styles.div`
    margin: 2rem 0rem 2rem 0rem;
    gap: 1rem;
    display: flex;
    width: 100%;
    overflow: hidden;

    &:hover{
        box-shadow: 0px 265px 80px rgba(109, 109, 109, 0.02), 0px 132.629px 40.0391px rgba(109, 109, 109, 0.0152067), 0px 79.8897px 24.1177px rgba(109, 109, 109, 0.0130318), 0px 51.1975px 15.4559px rgba(109, 109, 109, 0.0114179), 0px 33.1821px 10.0172px rgba(109, 109, 109, 0.01), 0px 20.8878px 6.30574px rgba(109, 109, 109, 0.0085821), 0px 12.0013px 3.62304px rgba(109, 109, 109, 0.00696822), 0px 5.28209px 1.59459px rgba(109, 109, 109, 0.00479335);
    }

    
    .entreprise-information{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: .5rem;
    }


    img{
        border-radius: .25rem;
        width: 70px;
        height: 70px;
    }

    p{
        color: #2196F3;
        cursor: pointer;

    }
`;
