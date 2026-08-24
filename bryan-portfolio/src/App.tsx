import { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react"
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark])

    return (
        <div className={`relative overflow-hidden min-h-screen ${isDark ? "bg-[#100e0b]" : "bg-[#faf8f2]"}`}>
            {isDark ? (
                <>
                    <div 
                        className="absolute inset-0 pointer-events-none blur-[25px] md:blur-[36px]"
                        style={{
                            background: "radial-gradient(85% 55% at 52% 0%, rgba(35,70,105,0.34) 0%, rgba(24,49,74,0.18) 38%, transparent 76%)",
                            mixBlendMode: "screen"
                        }}
                        aria-hidden="true"
                    />

                    <div 
                        className="absolute inset-0 pointer-events-none blur-[25px] md:blur-[36px] opacity-90"
                        style={{
                            background: "linear-gradient(180deg, rgba(54,88,120,0.16) 0%, transparent 45%, rgba(0,0,0,0.18) 100%)",
                            mixBlendMode: "soft-light"
                        }}
                        aria-hidden="true"
                    />

                    <div 
                        className="absolute inset-0 pointer-events-none blur-[25px] md:blur-[36px]"
                        style={{
                            background: "radial-gradient(42% 35% at 78% 16%, rgba(96,130,155,0.16) 0%, transparent 78%)",
                            mixBlendMode: "screen"
                        }}
                        aria-hidden="true"
                    />
                </>
            ) : (
                <>

                    <div 
                        className="absolute inset-0 pointer-events-none blur-[90px] md:blur-[130px]"
                        style={{
                            background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,230,255,0.12) 28%, rgb(255,255,255) 18%, rgb(150,200,255) 68%, rgb(100,130,200) 100%)",
                            mixBlendMode: "multiply"
                        }}
                        aria-hidden="true"
                    />

                    <div 
                        className="absolute inset-0 pointer-events-none blur-[90px] md:blur-[130px]"
                        style={{
                            background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(200,230,255,0.22) 34%, rgb(255,255,255) 66%, rgb(150,200,255) 82%, rgb(100,130,200) 100%)",
                            mixBlendMode: "multiply"
                        }}
                        aria-hidden="true"
                    />
                </>
            )}

            <div className="relative z-1">
                <button 
                    onClick={() => setIsDark(!isDark)}
                    className="fixed top-4 right-4 z-10 bg-indigo-400 hover:bg-indigo-500 rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
                    aria-label="Toggle dark mode"
                >
                    {isDark ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
                </button>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default App
