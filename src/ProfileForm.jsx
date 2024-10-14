import { useState } from "react";
import { useProfileContext } from "./ProfileContext";

export function ProfileForm() {
  const { profile, updateProfile } = useProfileContext();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);

  function handleUpdate() {
    updateProfile(name, email, bio);
  }

  return (
    <div className="profile-form">
      <div>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Email:{" "}
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        Bio: <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>

      <button type="button" onClick={handleUpdate}>
        Save Profile
      </button>
    </div>
  );
}
