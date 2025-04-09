import { useState } from 'react';
import styles from './Settings.module.css';

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    profilePicture: null,
  });

  const [notifications, setNotifications] = useState(true);

  function handleInputChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handlePictureChange(e) {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
  }

  function handleDeleteAccount() {
    if (window.confirm('Are you sure you want to delete your account?')) {
      alert('Account deleted! (simulate API call)');
    }
  }

  return (
    <div className={styles.settingsPage}>
      <h1>Settings</h1>

      <section className={styles.section}>
        <h2>Profile Settings</h2>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input type="file" onChange={handlePictureChange} />
      </section>

      <section className={styles.section}>
        <h2>Account Settings</h2>
        <button>Change Password</button>
        <div>
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            Enable Email Notifications
          </label>
        </div>
      </section>

      <section className={styles.dangerZone}>
        <h2>Danger Zone</h2>
        <button className={styles.deleteButton} onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </section>
    </div>
  );
}
