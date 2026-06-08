import { useEffect, useState } from "react";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isUsersError, setIsUsersError] = useState(false);

  useEffect(() => {
    async function fetchUSERS() {
      try {
        setIsUsersLoading(true);
        const response = await fetch(USERS_URL);
        const json = await response.json();
        setUsers(json);
        setIsUsersLoading(false);
      } catch {
        setIsUsersError(true);
        setIsUsersLoading(false);
      }
    }
    fetchUSERS();
  }, []);
  return { users, isUsersLoading, isUsersError };
}

export default useFetchUsers;