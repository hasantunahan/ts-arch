import './UserDetails.css'
import useUser from "../../../hooks/user/useUser";

function UserDetails(props: { id: string }) {
    const {user, loading} = useUser("2");


    return _renderState();

    function _renderState() {
        if (loading) {
            return <div>Loading app..</div>
        } else {
            return _renderUserDetail()
        }
    }

    function _renderUserDetail() {
        return <div className="infomation_user">
            <div className="combine_image">
                <div className="user_name">
                    {user.id} {user.pantone_value}
                </div>

            </div>
            <div className="user_fullname">
                <div className="user_title">
                </div>
            </div>
        </div>
    }
}

export default UserDetails;