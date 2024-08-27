import { useContext, useState } from "react";
import { UserContext } from "@/contexts/user-context";

export default function UserForm() {
  const [inputName, setInputName] = useState<string>("");
  const { setName } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(inputName);
    window.history.pushState({}, "", "/quiz");
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <button style={{ marginTop: "20px" }} type="submit">
          Start Quiz
        </button>
      </form>
    </div>
  );
}
