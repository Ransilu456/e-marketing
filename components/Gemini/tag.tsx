{/* import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles, Send, Loader2, Zap } from 'lucide-react';

// Define the main Navbar component
function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu and handle navigation (simulated)
  const handleNavClick = (e) => {
    setIsMenuOpen(false);
  };

  // Define navigation links
  const links = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Services', href: '#services', current: false },
    { name: 'Projects', href: '#projects', current: false },
  ];

  // Helper function to render links for both desktop and mobile
  const NavLink = ({ name, href, current, isMobile = false }) => (
    <a 
      href={href}
      onClick={handleNavClick}
      className={`
        px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
        ${isMobile ? 'text-white block w-full text-center py-3 my-1 hover:bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-[#D9D9D9]/5'}
        ${current && !isMobile ? 'bg-[#978BF2]/20 text-white' : ''}
      `}
      aria-current={current ? 'page' : undefined}
    >
      {name}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#06091A]/90 backdrop-blur-xl shadow-xl border-b border-indigo-700/30">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

        <div className="flex items-center">
            <Rocket className="w-6 h-6 mr-2 text-[#978BF2]" />
            <h1 
                className="text-2xl font-poppins tracking-wider font-bold"
                style={{
                    backgroundImage: 'linear-gradient(to right, #978BF2, #1C3ED2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent'
                }}
            >
                E Marketing Paradise
            </h1>
        </div>

        <nav className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10 shadow-lg">
          {links.map(link => (
            <NavLink key={link.name} {...link} />
          ))}
        </nav>

        <button className="hidden md:block ml-8 cursor-pointer relative group overflow-hidden rounded-xl px-6 py-2 bg-indigo-700 text-white font-semibold transition duration-300 ease-in-out hover:bg-indigo-600 shadow-[0_0_15px_rgba(151,139,242,0.5)]">
          <span className="relative z-10">Access Portal</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500"></div>
        </button>
        
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition duration-300"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 pb-3 px-2 space-y-1 bg-[#06091A] border-t border-white/10">
          {links.map(link => (
            <NavLink key={link.name} {...link} isMobile={true} />
          ))}
          <button className="w-full mt-4 cursor-pointer rounded-xl px-3 py-3 text-sm bg-indigo-700 text-white font-semibold hover:bg-indigo-600 transition duration-300">
            Access Portal
          </button>
        </div>
      </div>
    </header>
  );
}

// --- Gemini API Functionality ---

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";
const API_KEY = ""; // Placeholder for Canvas environment

// Exponential backoff retry utility
const fetchWithRetry = async (url, options, retries = 3) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                // If it's a 429 (Too Many Requests) or 5xx, retry
                if (response.status === 429 || response.status >= 500) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // For other errors, don't retry, just throw
                const errorBody = await response.json();
                console.error("API Error:", errorBody);
                throw new Error(`Non-retryable HTTP error: ${response.status}`);
            }
            return response;
        } catch (error) {
            if (i < retries - 1) {
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                throw error;
            }
        }
    }
};

const fetchGeminiTaglines = async (productName, description) => {
    if (!productName || !description) return [];

    const systemPrompt = "You are a witty, persuasive, and ultra-modern marketing copywriter for E Marketing Paradise. Your task is to generate three unique, high-impact marketing taglines based on the user's product/service. The taglines must be concise, benefit-driven, and highly memorable.";
    
    const userQuery = `Product/Service Name: "${productName}". Description: "${description}". Generate three taglines in the requested JSON format.`;
    
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "ARRAY",
                description: "An array containing exactly three powerful marketing taglines.",
                items: { type: "STRING" }
            }
        }
    };

    try {
        const response = await fetchWithRetry(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        const jsonText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (jsonText) {
            // The model is instructed to return a JSON array of strings
            const parsedJson = JSON.parse(jsonText);
            if (Array.isArray(parsedJson)) {
                return parsedJson;
            }
        }
        return ["Error: Could not parse response. Try again."];

    } catch (error) {
        console.error("Gemini API call failed:", error);
        return [`Error: Failed to fetch taglines. (${error.message})`];
    }
};


// --- Marketing Copy Generator Component ---

function MarketingCopyGenerator() {
    const [productName, setProductName] = useState("AI-Powered SEO Audit Tool");
    const [description, setDescription] = useState("Automates keyword research, identifies low-hanging content gaps, and gives actionable, prioritized fixes in minutes, saving agencies 10 hours per audit.");
    const [taglines, setTaglines] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if (!productName.trim() || !description.trim()) {
            setError("Please enter both the product name and description.");
            return;
        }

        setIsLoading(true);
        setTaglines([]);

        try {
            const results = await fetchGeminiTaglines(productName, description);
            setTaglines(results);
        } catch (err) {
            setError("A network error occurred while generating the taglines.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#06091A] rounded-2xl border border-indigo-700/50 shadow-2xl">
            <h3 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center gap-3">
                <Sparkles className="w-6 h-6" /> Marketing Copy Generator
            </h3>
            <p className="text-center text-gray-400 mb-8 max-w-lg mx-auto">
                Generate three ultra-compelling taglines for your product or service using our AI marketing wizard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-300 mb-2">Product / Service Name</label>
                    <input
                        id="productName"
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g., Quantum Data Analytics Platform"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Key Selling Points / Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="e.g., Saves users 50% on ad spend by predicting optimal budget allocation in real-time."
                        rows="3"
                        className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-none"
                        required
                    />
                </div>
                
                {error && <div className="p-3 bg-red-900/50 border border-red-500 text-red-300 rounded-lg text-sm">{error}</div>}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.5)]"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating Taglines...
                        </>
                    ) : (
                        <>
                            <Zap className="mr-2 h-5 w-5" />
                            Generate Taglines
                        </>
                    )}
                </button>
            </form>
            {(taglines.length > 0 || isLoading) && (
                <div className="mt-10 pt-6 border-t border-white/10">
                    <h4 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        Generated Taglines
                    </h4>
                    {taglines.length > 0 && (
                        <div className="space-y-4">
                            {taglines.map((tagline, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-3">
                                    <Send className="w-5 h-5 text-indigo-400 mt-0.5" />
                                    <p className="text-lg font-light italic text-gray-200">"{tagline}"</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Main App component to demonstrate the Navbar in a full-screen context
export default function App() {
    
    useEffect(() => {
        document.body.className = 'bg-[#06091A] text-white min-h-[200vh] font-sans';
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    const sections = ['Home', 'About', 'Services', 'Projects'];

    return (
        <div className="App">
            <Navbar />
            <main className="pt-20"> 
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {sections.map((title, index) => (
                        <section 
                            key={index}
                            id={title.toLowerCase()}
                            className="min-h-screen pt-20 flex flex-col justify-center items-center text-center border-b border-white/10"
                        >
                            <h2 className="text-6xl font-extrabold mb-10" 
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #978BF2, #1C3ED2)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent'
                                }}
                            >
                                {title} Section
                            </h2>
                            {title === 'Services' ? (
                                <MarketingCopyGenerator />
                            ) : (
                                <p className="text-lg text-gray-400 max-w-2xl">
                                    This is the placeholder content for the **{title}** section. Scroll down to Services to try the Gemini-powered tool!
                                </p>
                            )}
                        </section>
                    ))}
                </div>
            </main>
            <footer className="text-center py-10 text-gray-500">
                &copy; 2024 E Marketing Paradise. All rights reserved.
            </footer>
        </div>
    );
} */}