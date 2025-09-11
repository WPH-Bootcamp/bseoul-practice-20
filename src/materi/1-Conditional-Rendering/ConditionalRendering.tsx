import React from "react";

type MessageProps = {
  unreadCount: number;
};

export const Message: React.FC<MessageProps> = ({ unreadCount }) => {
  return (
    <div>
      {/* Menggunakan && */}
      <h2 style={{ backgroundColor: "red" }}>Inbox</h2>

      {/* Salah : akan render angka 0 */}
      <p>{unreadCount && `You have ${unreadCount} Unread Messages`}</p>

      {/* Benar : Konversi ke boolean terlebih dahulu */}
      <p>{!!unreadCount && `You have ${unreadCount} Unread Messages.`}</p>
    </div>
  );
};

type UserProps = {
  name?: string;
};

export const UserGreeting: React.FC<UserProps> = ({ name }) => {
  return (
    <div>
      {/* Menggunakan || */}
      <h1>Hello, {name || "Guest"}!</h1>
    </div>
  );
};

type ScoreProps = {
  score?: number | string;
};

export const UserScore: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div>
      {/* Menggunakan ?? */}
      <p>Your Score : {score ?? "Not Available"}</p>
    </div>
  );
};

// =====================================================================
// Contoh

type DashboardProps = {
  username?: string;
  points?: number | null;
  unreadMsg: number;
  errorMsg?: string | null;
};

export const Dashboard: React.FC<DashboardProps> = ({
  username,
  errorMsg,
  unreadMsg,
  points,
}) => {
  return (
    <div>
      <h1>Welcome, {username || "guest"}</h1>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {!!unreadMsg && <p>You have {unreadMsg} unread messages.</p>}

      <p>Your points : {points ?? "No Points"}</p>
    </div>
  );
};
