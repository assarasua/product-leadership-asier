import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

const ElevenLabsAgent = () => (
  <elevenlabs-convai agent-id="agent_6001kste578gfc9rhjt1kd9k9wzb" />
);

export default ElevenLabsAgent;
