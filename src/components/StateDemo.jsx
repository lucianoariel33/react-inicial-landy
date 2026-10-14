import { useState } from "react";

export default function StateDemo({ content }) {
  // Único hook del proyecto: recuerda si la pista está visible.
  const [visible, setVisible] = useState(false);

  return (
    <div className="state-demo">
      <div className="demo-controls">
        <h3>{content.title}</h3>
        <button
          type="button"
          aria-expanded={visible}
          aria-controls={content.panelId}
          onClick={() => setVisible(!visible)}
        >
          {visible ? content.hideLabel : content.showLabel}
        </button>
      </div>
      <div className="demo-result" aria-live="polite">
        <p className="state-status">{visible ? content.openStatus : content.closedStatus}</p>
        <p id={content.panelId} hidden={!visible}>{content.hint}</p>
      </div>
    </div>
  );
}
