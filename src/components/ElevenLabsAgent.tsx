import React, { useCallback, useState } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Mic, MicOff, X } from 'lucide-react';

const AGENT_ID = 'agent_6001kste578gfc9rhjt1kd9k9wzb';

const ElevenLabsAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log('[ElevenLabs] Connected'),
    onDisconnect: () => console.log('[ElevenLabs] Disconnected'),
    onError: (error) => console.error('[ElevenLabs] Error:', error),
  });

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  const handleOpen = useCallback(async () => {
    setIsOpen(true);
    setPermissionDenied(false);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: 'webrtc',
      });
    } catch {
      setPermissionDenied(true);
    }
  }, [conversation]);

  const handleClose = useCallback(async () => {
    await conversation.endSession();
    setIsOpen(false);
    setPermissionDenied(false);
  }, [conversation]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {isOpen && (
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 w-64 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-gray-500'}`} />
              <span className="text-white text-sm font-semibold">Asier AI</span>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {permissionDenied ? (
            <p className="text-red-400 text-xs leading-relaxed">
              Microphone access is required. Please allow it in your browser and try again.
            </p>
          ) : (
            <>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                {isConnecting
                  ? 'Connecting…'
                  : isConnected
                  ? conversation.isSpeaking
                    ? 'Asier is speaking…'
                    : 'Listening — speak now'
                  : 'Starting session…'}
              </p>

              {isConnected && (
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-150 ${conversation.isSpeaking ? 'bg-orange-400 w-3/4' : 'bg-green-400 w-1/4'}`}
                    />
                  </div>
                  <span className="text-gray-500 text-xs">
                    {conversation.isSpeaking ? 'speaking' : 'listening'}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? 'Close AI agent' : 'Talk to Asier AI'}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center shadow-lg
          transition-all duration-300 hover:scale-110 active:scale-95
          ${isConnected
            ? 'bg-orange-500 hover:bg-orange-400'
            : 'bg-gray-800 hover:bg-gray-700 border border-gray-600'}
          ${isConnecting ? 'animate-pulse' : ''}
        `}
      >
        {isOpen
          ? <MicOff size={22} className="text-white" />
          : <Mic size={22} className="text-white" />}
      </button>
    </div>
  );
};

export default ElevenLabsAgent;
