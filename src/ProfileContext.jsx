import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ProfileContext = createContext();

export function ProfileContextProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  function updateProfile(name, email, bio) {
    setProfile({ name, email, bio });
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

ProfileContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useProfileContext() {
  return useContext(ProfileContext);
}
