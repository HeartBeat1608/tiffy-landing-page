"use client";
import { useState } from "react";
import mixpanel from "mixpanel-browser";
import { identifyUser } from "@/lib/api/user";

type Props = {
  onClose: () => void;
  open: boolean;
};

const Modal = ({ open, onClose }: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const handleJoin = async () => {
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      await identifyUser(email);
    } catch (e) {
      console.error(e);
    }

    // capture this email
    try {
      mixpanel.people.set({ $email: email, $name: email });
      mixpanel.identify(email);
      mixpanel.track("modal:join-waitlist", { email });
    } catch (e) {
      console.error(e);
    }
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500/50 flex items-center justify-center z-50">
      <div className="w-full mx-4 md:mx-0 md:min-w-[220px] max-w-md bg-white rounded-md p-8 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Join the waitlist.</h3>
          <button
            className="flex items-center justify-center text-red-500 font-bold text-lg"
            onClick={() => {
              try {
                mixpanel.track("modal:close");
              } catch (e) {
                console.error(e);
              }
              onClose();
            }}
          >
            &times;
          </button>
        </div>
        <span className="text-sm italic font-light">
          You will be the first to be notified as soon as we launch. We
          won&apos;t spam you. Promise.
        </span>
        <input
          type="text"
          required
          className="border border-gray-400 px-2 py-1 w-full rounded-md"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <span className="text-xs italic font-light text-red-400">
            {error}
          </span>
        )}
        <button
          className="bg-emerald-500 text-white font-bold w-full py-1 rounded-md"
          onClick={handleJoin}
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default Modal;
