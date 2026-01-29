import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

// ✅ Backend URL (local + deployed support)
const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    setReview(""); // clear old output

    try {
      const response = await axios.post(
        `${API_URL}/ai/get-review`,
        { code }
      );

      // ✅ Backend sends { response: "AI text" }
      setReview(response.data.response);
    } catch (error) {
      console.error("Review failed:", error);
      setReview("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={12}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "6px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>

        <button
          className="review"
          onClick={reviewCode}
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review || "👈 Paste your code and click Review"}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
