import "./main.scss";
import profile from '../../components/img/profile.svg'
import UserProfileItem from './userProfileItem'

const usersProfilesList = ({profiles}) => {
    
    return (
        <div className="content">
         

            {profiles.map((item) => 
                <UserProfileItem profile = {item}/>
            )}

          </div>
    )
}


export default usersProfilesList