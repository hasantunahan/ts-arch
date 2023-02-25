import { useEffect } from "react";
import useUser from "../hooks/useUser";

const UserDetails = (props: { id: string }) => {
  const callUseUser = useUser();

  useEffect(() => {
    callUseUser.getUserById(props.id);
  }, [])

  return (
    callUseUser.loading === false ?
      <div>
        was finished
      </div> :
      <div>loading...</div>
  );

}

export default UserDetails;