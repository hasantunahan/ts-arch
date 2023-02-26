import { useCallback, useEffect } from "react";
import useUser from "../hooks/user/useUser";

function UserDetails(props: { id: string }) {
  const { user, loading } = useUser("2");



  return (
    loading === false ?
      <div>
        was finished
      </div> :
      <div>loading...</div>
  );

}

export default UserDetails;