import profileIMG from './../../components/img/profile.svg'
import "./main.scss";
import TestsList from './testsList';

const UserProfileItem = ({profile}) => {
 
    return(
        <div className="content_item">
            <div>
              <img src={profileIMG} alt="" />
              <span>{profile.email}</span>
            </div>

            <TestsList userTests = {profile.test_information}/>
          </div>
    )
}

export default UserProfileItem