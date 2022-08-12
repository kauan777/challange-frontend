import { Backpack, KeyReturn } from "phosphor-react";
import { useSearch } from "../../contexts/SearchContext";
import {
  ContainerInfoProfile,
  ContainerInformation,
  ContainerSection,
  MainContainer,
  ProfileContainer,
  SectionEnterprise,
  SectionInformationProfile,
  WorkArea,
} from "./styles";

function Profile() {

  const { user } =  useSearch(); 

  const lengthEnterprises: any = user?.enterprises.length;


  return (
    <MainContainer>
      <ProfileContainer>
        <ContainerInfoProfile>
          <img src={`https://6f6e-186-224-27-227.sa.ngrok.io/avatars/get/user/${user?.imageId || 1}`} alt="Foto de usuário" />

          <ContainerInformation>
            <div className="container-name-description">
              <h2>{user?.fullName}</h2>
              <span>{user?.permName}</span>
              <hr />
            </div>

            <ContainerSection>
              <SectionInformationProfile>
                <b>account information</b>

                <div className="information">
                  <span>
                    Nickname: <p>{user?.nickName}</p>
                  </span>
                  <span>
                    Username: <p>{user?.userName}</p>
                  </span>
                </div>
              </SectionInformationProfile>

              <SectionInformationProfile>
                <b>contact infomartion</b>

                <div className="information">
                  <span>
                    Email:<p>{user?.email}</p>
                  </span>
                  <span>
                    Number: <p>{user?.phoneNumbers[0].number}</p>
                  </span>
                </div>
              </SectionInformationProfile>
            </ContainerSection>

            <SectionInformationProfile>
              <b>status</b>

              <div className="information">
                <span>{user?.messageAwayOrBusy}</span>
              </div>
            </SectionInformationProfile>
          </ContainerInformation>
        </ContainerInfoProfile>


        <WorkArea>
          <b>Work</b>

        {
           lengthEnterprises  > 0 ? (
            user?.enterprises?.map(enterprise => {
              return(
                <SectionEnterprise key={enterprise.id}>
                <img src="https://source.unsplash.com/random/550x550" />
    
                <div className="entreprise-information">
                  <span>{enterprise.name}</span>
                  <p>{enterprise.socialReazon}</p>
                </div>
              </SectionEnterprise>
              )
            })
          ): (
            <span style={{
              color: "#8b8b8b"
            }}>Nenhum trabalho no momento</span>
          )
        }
        </WorkArea>
      </ProfileContainer>
    </MainContainer>
  );
}

export default Profile;
