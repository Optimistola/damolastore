import {useUser} from "../Context/Store"
const Profile =()=>{
    const {logUser}=useUser();
    const {user}=useUser();

    return(
        <div>
            <h2>Welcome {user.name}</h2>
            <h2>{logUser}</h2>
        </div>
    );
}
export default Profile;