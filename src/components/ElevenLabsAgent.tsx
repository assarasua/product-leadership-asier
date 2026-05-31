import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
        HTMLElement
      >;
    }
  }
}

const ElevenLabsAgent = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="elevenlabs.io/convai-widget"]')) return;
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <elevenlabs-convai agent-id="agent_6001kste578gfc9rhjt1kd9k9wzb" />;
};

export default ElevenLabsAgent;
