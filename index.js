import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        style={{ width: '100%', height: '200px', marginBottom: '20px' }}
        value={markdown}
        onChange={handleChange}
      />
      <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}