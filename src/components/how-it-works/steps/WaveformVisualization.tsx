import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

export const WaveformVisualization: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<'cochlear' | 'hearing-aid' | 'none'>('cochlear');
  const [time, setTime] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 0.1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate realistic waveform data based on speech patterns
  const waveformBars = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      // Create realistic speech frequency distribution
      const frequency = i / 12; // 0 to 2
      const speechPattern = Math.sin(time * 2 + i * 0.3) * Math.exp(-frequency * 0.5);
      const noisePattern = Math.sin(time * 4 + i * 0.1) * 0.3;
      const baseHeight = Math.abs(speechPattern + noisePattern) * 50 + 15;
      
      let deviceMultiplier = 1;
      let clarity = 1;
      
      switch (selectedDevice) {
        case 'cochlear':
          // Cochlear implants provide clearer digital processing
          deviceMultiplier = 1.2;
          clarity = 0.95;
          break;
        case 'hearing-aid':
          // Hearing aids amplify but may introduce some distortion
          deviceMultiplier = 1.1;
          clarity = 0.8;
          break;
        case 'none':
          // Natural hearing with potential loss
          deviceMultiplier = 0.6;
          clarity = 0.4;
          break;
      }
      
      return {
        id: i,
        height: Math.max(baseHeight * deviceMultiplier, 8),
        delay: i * 0.02,
        clarity
      };
    });
  }, [time, selectedDevice]);

  const deviceOptions = [
    { id: 'cochlear' as const, label: 'Cochlear Implant' },
    { id: 'hearing-aid' as const, label: 'Hearing Aid' },
    { id: 'none' as const, label: 'No Device' }
  ];

  // Calculate button position for smooth sliding
  const getButtonPosition = (index: number) => {
    const button = buttonRefs.current[index];
    if (!button || !containerRef.current) return { left: 0, width: 0 };
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    return {
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width
    };
  };

  const currentIndex = deviceOptions.findIndex(option => option.id === selectedDevice);
  const activeButtonPosition = getButtonPosition(currentIndex);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      {/* Platform Integration Info */}
      <div className="text-center mb-1">
        <div className="text-sm font-medium text-foreground mb-1">Zoom Audio Enhancement</div>
        <div className="text-xs text-muted-foreground">Real-time device optimization during live sessions</div>
      </div>

      {/* Connected Device Toggle */}
      <div 
        ref={containerRef}
        className="relative bg-card/80 backdrop-blur-sm border border-border/60 rounded-lg p-1 shadow-sm"
      >
        <div className="flex relative">
          {/* Sliding Background Indicator */}
          <motion.div
            className="absolute top-1 bg-primary rounded-md shadow-lg border border-primary/20"
            initial={false}
            animate={{
              left: activeButtonPosition.left,
              width: activeButtonPosition.width,
              height: 'calc(100% - 8px)'
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 35,
              mass: 0.8
            }}
          />
          {deviceOptions.map((option, index) => (
            <motion.button
              key={option.id}
              ref={el => buttonRefs.current[index] = el}
              onClick={() => setSelectedDevice(option.id)}
              className={`relative z-10 px-4 py-2.5 text-xs font-medium transition-colors duration-200 rounded-md ${
                selectedDevice === option.id
                  ? 'text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Waveform */}
      <div className="flex items-end space-x-1 h-28 px-4">
        {waveformBars.map((bar) => (
          <motion.div
            key={bar.id}
            className="relative"
            style={{ width: '8px' }}
          >
            <motion.div
              className={`w-full rounded-t-sm transition-all duration-300 ${
                selectedDevice === 'cochlear' 
                  ? 'bg-gradient-to-t from-blue-500 to-blue-300' 
                  : selectedDevice === 'hearing-aid'
                  ? 'bg-gradient-to-t from-green-500 to-green-300'
                  : 'bg-gradient-to-t from-muted-foreground/60 to-muted-foreground/30'
              }`}
              animate={{ 
                height: bar.height,
                opacity: bar.clarity,
                filter: selectedDevice === 'none' ? 'blur(1px)' : 'blur(0px)',
                scaleY: selectedDevice === 'none' ? 0.7 : 1
              }}
              transition={{ 
                duration: 0.3,
                delay: bar.delay,
                ease: 'easeInOut'
              }}
            />
            {/* Frequency indicator dots */}
            {selectedDevice !== 'none' && (
              <motion.div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary/60"
                animate={{
                  opacity: bar.height > 40 ? 1 : 0,
                  scale: bar.height > 60 ? 1.2 : 1
                }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Clarity Indicator */}
      <motion.div
        className="text-center space-y-2"
        animate={{
          color: selectedDevice === 'none' 
            ? 'hsl(var(--muted-foreground))' 
            : 'hsl(var(--primary))'
        }}
      >
        <div className="text-sm font-medium">
          {selectedDevice === 'cochlear' ? 'Zoom + Cochlear Integration' : 
           selectedDevice === 'hearing-aid' ? 'Zoom Audio Enhancement' : 
           'Standard Zoom Audio'}
        </div>
        <div className="text-xs text-muted-foreground">
          {selectedDevice === 'cochlear' ? 'Direct digital streaming optimized for Zoom meetings' :
           selectedDevice === 'hearing-aid' ? 'Zoom audio boosted and filtered for clarity' :
           'Basic Zoom audio without device optimization'}
        </div>
        
        {/* Audio Quality Meter */}
        <div className="flex items-center justify-center space-x-2 mt-3">
          <span className="text-xs text-muted-foreground">Quality:</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((level) => (
              <motion.div
                key={level}
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: level <= (selectedDevice === 'cochlear' ? 5 : selectedDevice === 'hearing-aid' ? 4 : 2)
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--muted))'
                }}
                transition={{ delay: level * 0.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};