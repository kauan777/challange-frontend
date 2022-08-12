import styles from 'styled-components'

export const HeaderContainer = styles.header`

display: flex;
position: fixed;
justify-content: space-between;
align-items: center;
z-index: 2;
padding: 2rem 8rem;
transition: .2s ease-out;
  background-color: #F9F9F9;

  &.activeY{
    box-shadow: 0px 33px 80px rgba(0, 0, 0, 0.06);
  }


.icon-menu, .icon-close{
    display: none;
    cursor: pointer;
}

.icon-close{
    position: absolute;
    top: 3rem;
    right: 2rem;
}


width: 100%;
height: 6rem;



.logo{
   color: #272727;
   cursor: pointer;
   font-weight: bold;
   font-size: 1.2rem;
}

nav{
    position: relative;
    display: flex;
    justify-content: center;

}

ul{
    display: flex;
    gap: 0.5rem;
    align-items: center;

    li{
        font-weight: 400;
        position: relative;
        cursor: pointer;
        
        
        &::before{
            content: '';
            position: absolute;
            width: 0%;
            bottom: 0px;
            left: 50%;
            transform: translate(-50%);
            height: 2px;
            background-color: #272727;
            transition: .2s ease-in-out;
        }

        &:hover::before{
            width: 85%;
        }

    }

   a{
       display: block;
       text-decoration: none;
       padding: 10px;
       color: #272727;
   }
}

.nav-social-media{
    display: flex;
    gap: .5rem;

    .icon-social-nav{
        transition: .1s ease-in-out;

        &:hover{
            transform: translateY(-6%);
        }

    }

}

@media(max-width: 780px){

padding: 2rem 4rem;


     nav{
         display: none;
     }

     span{
        display: block !important;
    }

     .nav-social-media{
         display: none;
     }

     .icon-menu{
        display: block;
    }

    // MENU OPEN

    &.header-open{
        z-index: 22222;
        height: 100vh;
        width: 100vw;
        position: fixed;
        text-align: center;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
        background-color: #fff;
        span{
            display: none !important;
        }
    }
    .nav-open{
        display: flex;
        flex-direction: column;
    }

    .menu-open{
        display: none;
    }

    .close-open{
        display: block;
    }

}

@media(max-width: 606px){

padding: 2rem;
}

`