import { ProfileContextProvider, useProfileContext } from "./ProfileContext";
import { ProfileForm } from "./ProfileForm";
import "./App.css";

export default function App() {
  return (
    <ProfileContextProvider>
      <div className="title">
        <h1>User Profile Manager</h1>
      </div>
      <ProfileForm />
      <ProfileDisplay />
    </ProfileContextProvider>
  );
}

function ProfileDisplay() {
  const { profile } = useProfileContext();

  return (
    <div className="profile-display">
      <div>Name: {profile.name}</div>
      <div>Email: {profile.email}</div>
      <div>Bio: {profile.bio}</div>
    </div>
  );
}
