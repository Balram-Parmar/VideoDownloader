import React, { useState } from 'react';
import { Download, Instagram, AlertCircle } from 'lucide-react';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setDownloadLink('');

    // Simulate API call to download video
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
      // In a real application, you would make an API call here
      // const response = await api.downloadVideo(url);
      // setDownloadLink(response.downloadUrl);
      setDownloadLink('https://example.com/download/video123.mp4'); // Simulated download link
    } catch (err) {
      setError('Failed to download video. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          <Instagram className="mr-2" size={32} />
          Reel Downloader
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Paste Instagram Reel URL
            </label>
            <input
              type="text"
              id="videoUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2" size={20} />
                Download Reel
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-start">
            <AlertCircle className="mr-2 flex-shrink-0" size={20} />
            <p>{error}</p>
          </div>
        )}

        {downloadLink && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
            <p className="font-semibold">Video ready for download!</p>
            <a 
              href={downloadLink} 
              download 
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Click here to download
            </a>
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-white text-sm text-center">
        <p>&copy; 2024 Reel Downloader. For personal use only.</p>
        <p className="mt-1">Please respect copyright and use responsibly.</p>
      </footer>
    </div>
  );
};

export default HomePage;