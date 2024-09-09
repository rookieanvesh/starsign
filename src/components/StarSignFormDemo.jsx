import React, { useState, useEffect } from 'react';

const StarSignFormDemo = () => {
  const [stage, setStage] = useState('initial');
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if (stage === 'scanning') {
      setTimeout(() => setStage('results'), 3000);
    }
    if (stage === 'results') {
      setTimeout(() => setShowQuote(true), 1000);
    }
  }, [stage]);

  const startScan = () => setStage('scanning');

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-lg max-w-sm mx-auto">
      <header className="bg-blue-600 text-white p-2 rounded-t-lg">
        <h1 className="text-xl font-bold">StarSign 2.0</h1>
      </header>
      
      <form className="bg-white p-3 rounded-b-lg">
        {stage === 'initial' && (
          <div className="text-center">
            <div className="border-2 border-dashed border-gray-300 p-4 mb-3">
              <span className="text-4xl mb-1">📷</span>
              <p className="mt-1 text-sm text-gray-600">Tap to scan signature</p>
            </div>
            <button 
              type="button"
              onClick={startScan}
              className="bg-blue-500 text-white font-bold py-1 px-3 rounded text-sm hover:bg-blue-600"
            >
              Start Scan
            </button>
          </div>
        )}
        
        {stage === 'scanning' && (
          <div className="text-center">
            <div className="border-2 border-blue-500 p-4 mb-3 relative">
              <div className="absolute inset-0 bg-blue-100 opacity-50 animate-pulse"></div>
              <img 
                src="/mjsign.jpg" 
                alt="Michael Jordan Signature" 
                className="mx-auto w-[200px] h-[100px] object-contain"
              />
              <p className="mt-1 text-sm text-blue-600 font-bold">Scanning...</p>
            </div>
          </div>
        )}
        
        {stage === 'results' && (
          <div>
            <h2 className="text-lg font-bold mb-2">Authentication Results:</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span> 
                <label className="font-bold">Signature:</label>
                <span className="ml-1">Authentic</span>
              </div>
              <div className="flex items-center">
                <label className="font-bold">Celebrity:</label>
                <span className="ml-1">Michael Jordan</span>
              </div>
              <div className="flex items-center">
                <label className="font-bold">Era:</label>
                <span className="ml-1">Late 1990s (Bulls Dynasty)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span> 
                <label className="font-bold">Deep Fake Check:</label>
                <span className="ml-1">Passed</span>
              </div>
              {showQuote && (
                <div className="flex items-center text-yellow-600 font-bold animate-fadeIn">
                  <span className="mr-1">🏆</span> 
                  <span>Iconic Quote Detected!</span>
                </div>
              )}
            </div>
            {showQuote && (
              <p className="mt-2 italic text-xs text-gray-600 animate-fadeIn">
                "I've failed over and over again in my life. And that is why I succeed."
              </p>
            )}
            <div className="flex justify-between mt-4">
              <button type="button" className="bg-blue-500 text-white py-1 px-2 rounded text-xs hover:bg-blue-600">
                Generate COA
              </button>
              <button type="button" className="bg-green-500 text-white py-1 px-2 rounded text-xs hover:bg-green-600">
                List for Sale
              </button>
              <button type="button" className="bg-purple-500 text-white py-1 px-2 rounded text-xs hover:bg-purple-600">
                Share
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StarSignFormDemo;