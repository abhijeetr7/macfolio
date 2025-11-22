'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Terminal,
  User,
  Briefcase,
  Cpu,
  Wifi,
  Battery,
  Search,
  LayoutGrid,
  X,
  Minus,
  Maximize2,
  Globe,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Server,
  Box,
  Eye,
  FolderOpen
} from 'lucide-react'

// --- Data Constants ---

const USER_NAME = "Abhijeet R. Sitafale"
const USER_TITLE = "Java Fullstack Developer"
const TAGLINE = "Translating Complex Business Requirements into Scalable Microservice Architectures."

const PROJECTS = [
  {
    id: 1,
    title: "Live CRM (Flagship)",
    tech: "Angular, Spring Boot Microservice, Rest API, MariaDB, AWS Lightsail",
    problem: "The legacy CRM system lacked scalability and suffered from tight coupling, hindering the addition of new functionalities.",
    action: "Architected transition to Spring Boot Microservices. Defined REST API contracts. Decoupled application for agility.",
    result: "Supports 100+ concurrent users. Deployed on AWS Lightsail. Full-stack cloud-native ownership."
  },
  {
    id: 2,
    title: "Pharma-Relationware",
    tech: "Angular 8.0, Java Web Services, Full Java Stack",
    problem: "Automating sales orders required complex logic for drug schedules and credit limits.",
    action: "Designed rule-based engine on Java backend. Centralized logic for SKU management and credit checks.",
    result: "Eliminated manual errors in compliance checks. Reduced order fulfillment latency by 30%."
  },
  {
    id: 3,
    title: "BMS (ERP Optimization)",
    tech: "Spring Boot, Angular, REST API",
    problem: "Manual production tracking led to delayed business insights and inefficiency.",
    action: "Developed robust Spring Boot backend for Inventory & QA. Implemented secure REST API for real-time data.",
    result: "Reduced data latency from hours to seconds. Improved inventory accuracy and decision cycles."
  },
  {
    id: 4,
    title: "Tsepl (Automation)",
    tech: "Fullstack, JSON, Spring Boot",
    problem: "Manually coding HTML pages for industrial apps was time-intensive and error-prone.",
    action: "Designed JSON-driven auto-page creation service. Dynamic generation of interfaces from config.",
    result: "Reduced dev time by 75%. Centralized validation logic. Enhanced consistency."
  },
  {
    id: 5,
    title: "Bio-Prime (Lab Data)",
    tech: "Spring Boot, Angular",
    problem: "Lab required robust tracking for samples through multi-stage testing with high integrity.",
    action: "Engineered complex backend data models. Developed Angular frontend for visualization.",
    result: "Eliminated ambiguity in BMR requirements. Improved accuracy of sample tracking."
  }
]

const SKILLS = {
  frontend: ["Angular (Latest)", "TypeScript", "RxJS", "Reactive Forms", "HTML/CSS", "React", "NextJS",],
  backend: ["Java Core", "Java Advanced", "Spring Boot", "Microservices", "REST API Design", "Spring Security", "NodeJS",],
  data: ["MariaDB", "SQL Server", "JPA/Hibernate", "Complex Joins"],
  devops: ["AWS (Lightsail)", "Docker", "CI/CD Concepts", "Vercel/Render"]
}

// --- Components ---

const BootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2 // Speed of boot
      })
    }, 30)
    return () => clearInterval(timer)
  }, [])

  // Move side effect (onComplete) out of the state updater and into a useEffect
  useEffect(() => {
    if (progress >= 100) {
      onComplete()
    }
  }, [progress, onComplete])

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-white z-50">
      <div className="mb-8">
        <svg className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.3,12.95l-1.4,1.4l-4.19-4.19c-0.39-0.39-1.02-0.39-1.41,0L6.1,14.35l-1.4-1.4l4.19-4.19 c1.17-1.17,3.07-1.17,4.24,0L17.3,12.95z M12,4C7.58,4,4,7.58,4,12s3.58,8,8,8s8-3.58,8-8S16.42,4,12,4z M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2z" />
        </svg>
      </div>
      <div className="w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

const LoginScreen = ({ onLogin }) => {
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center z-40 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="z-10 flex flex-col items-center">
        {/* <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-gray-600 shadow-2xl border-4 border-white/20">
          AS
        </div> */}
        <img className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-gray-600 shadow-2xl border-4 border-white/20"
            src="https://avatars.githubusercontent.com/u/127108925?v=4"
            alt="Your Profile"
          />
        <h2 className="text-white text-xl font-semibold mb-6 drop-shadow-md">{USER_NAME}</h2>

        <form onSubmit={handleLogin} className="flex flex-col items-center gap-3">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="bg-white/20 border border-white/30 text-white placeholder-gray-300 rounded-full px-4 py-1.5 outline-none focus:bg-white/30 transition-all w-48 text-center backdrop-blur-md text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            >
              ➔
            </button>
          </div>
          <p className="text-white/60 text-xs mt-2 cursor-pointer hover:text-white">Click arrow or Enter to login</p>
        </form>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center text-white/80">
        <p className="text-sm font-medium">Macfolio OS</p>
        <p className="text-xs opacity-70">Enterprise Edition</p>
      </div>
    </div>
  )
}

const Window = ({ title, icon: Icon, children, isOpen, isMinimized, onClose, onMinimize, onMaximize, zIndex, onClick }) => {
  if (!isOpen || isMinimized) return null

  return (
    <div
      className={`absolute rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl transition-all duration-200 flex flex-col`}
      style={{
        width: 'min(90%, 800px)',
        height: 'min(80%, 600px)',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: zIndex
      }}
      onClick={onClick}
    >
      {/* Title Bar */}
      <div className="bg-gray-200/50 dark:bg-gray-800/50 h-8 flex items-center px-3 border-b border-gray-300/30 justify-between select-none">
        <div className="flex gap-2 group">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-black/0 hover:text-black/50 text-[8px]">
            <X size={6} />
          </button>
          <button onClick={onMinimize} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center text-black/0 hover:text-black/50 text-[8px]">
            <Minus size={6} />
          </button>
          <button onClick={onMaximize} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-black/0 hover:text-black/50 text-[8px]">
            <Maximize2 size={6} />
          </button>
        </div>
        <div className="flex items-center gap-2 opacity-70">
          {Icon && <Icon size={12} />}
          <span className="text-xs font-medium font-sans">{title}</span>
        </div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white/50 dark:bg-gray-900/50 p-1 relative">
        {children}
      </div>
    </div>
  )
}

// --- App Contents ---

const FinderContent = () => (
  <div className="flex h-full text-gray-800 dark:text-gray-200 font-sans">
    <div className="w-48 bg-gray-100/50 dark:bg-gray-800/30 border-r border-gray-300/30 p-3 hidden sm:block">
      <div className="text-xs font-bold text-gray-400 mb-2 px-2">Favorites</div>
      <div className="space-y-1">
        {['Recents', 'Applications', 'Desktop', 'Documents', 'Downloads'].map(item => (
          <div key={item} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-500/10 hover:text-blue-500 cursor-pointer text-sm">
            <FolderOpen size={14} /> {item}
          </div>
        ))}
      </div>
    </div>
    <div className="flex-1 p-6 overflow-y-auto bg-white dark:bg-[#1e1e1e]">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg border-4 border-white/10">
          {/* Placeholder for profile image */}
          {/* <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            AS
          </div> */}
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQE_4tATd7fPog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709104962816?e=1765411200&v=beta&t=CtGgcdx1Pl4LEOaaU1qGX4saFn9squS0ogAUbO1D2N4"
            alt="Your Profile"
            className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold"
          />
        </div>
        <h1 className="text-2xl font-bold">{USER_NAME}</h1>
        <h2 className="text-blue-500 font-medium">{USER_TITLE}</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-md">{TAGLINE}</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-3">About Me: Analyst Turned Architect</h3>
        <p className="text-sm leading-relaxed mb-4">
          I am a dedicated Fullstack Developer specializing in delivering robust, scalable enterprise applications using the Angular/TypeScript frontend and the Spring Boot/Java backend. My professional experience spans critical business domains, including CRM, complex logistics, and manufacturing ERP systems.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          My foundation is rooted in a B.Tech in Mechanical Engineering. I strategically pivoted to software development, applying the rigorous principles of structural analysis and systematic problem-solving directly to software architecture.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <h4 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-2">Core Focus</h4>
          <ul className="text-xs space-y-1 grid grid-cols-2 gap-x-4">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Secure REST APIs</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Microservices</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Cloud Deployment (AWS)</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Docker Containerization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const TerminalContent = () => (
  <div className="bg-[#1e1e1e] h-full p-4 font-mono text-sm overflow-y-auto text-green-400 shadow-inner">
    <div className="mb-4">
      <span className="text-blue-400">user@macfolio</span>:<span className="text-yellow-400">~</span>$ ./display_skills.sh
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-white border-b border-gray-700 pb-1 mb-2 font-bold uppercase">Frontend_Stack</h3>
        {SKILLS.frontend.map(s => (
          <div key={s} className="flex items-center gap-2">
            <span className="text-purple-400">➜</span> {s}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-white border-b border-gray-700 pb-1 mb-2 font-bold uppercase">Backend_Core</h3>
        {SKILLS.backend.map(s => (
          <div key={s} className="flex items-center gap-2">
            <span className="text-red-400">➜</span> {s}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-white border-b border-gray-700 pb-1 mb-2 font-bold uppercase">Data_Layer</h3>
        {SKILLS.data.map(s => (
          <div key={s} className="flex items-center gap-2">
            <span className="text-yellow-400">➜</span> {s}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-white border-b border-gray-700 pb-1 mb-2 font-bold uppercase">DevOps_Cloud</h3>
        {SKILLS.devops.map(s => (
          <div key={s} className="flex items-center gap-2">
            <span className="text-blue-400">➜</span> {s}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6">
      <span className="text-blue-400">user@macfolio</span>:<span className="text-yellow-400">~</span>$ echo "Ready to deploy."<span className="animate-pulse">_</span>
    </div>
  </div>
)

const SafariContent = () => {
  const [url, setUrl] = useState('portfolio.local/projects')

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#2a2a2a]">
      {/* Safari Toolbar */}
      <div className="h-12 bg-[#f0f0f0] dark:bg-[#333] flex items-center px-4 border-b border-gray-300 dark:border-black/50 gap-4">
        <div className="flex gap-2 text-gray-500">
          <div className="hover:text-black dark:hover:text-white">❮</div>
          <div className="hover:text-black dark:hover:text-white">❯</div>
        </div>
        <div className="flex-1 bg-white dark:bg-[#1e1e1e] h-8 rounded-lg flex items-center justify-center text-xs text-gray-500 dark:text-gray-300 shadow-sm border border-gray-300/50">
          <span className="mr-1">🔒</span> {url}
        </div>
        <div className="text-gray-500 text-sm">
          <Github size={16} className="hover:text-black dark:hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-[#1a1a1a] p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Optimized Project Narratives</h2>
        <div className="grid gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white dark:bg-[#2d2d2d] rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{project.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 font-mono">{project.tech}</p>
                </div>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">
                  STAR Verified
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <span className="font-bold text-red-500 block text-xs uppercase tracking-wide">Problem</span>
                  {project.problem}
                </div>
                <div>
                  <span className="font-bold text-yellow-600 block text-xs uppercase tracking-wide">Action</span>
                  {project.action}
                </div>
                <div>
                  <span className="font-bold text-green-600 block text-xs uppercase tracking-wide">Result</span>
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border-2 border-dashed border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">View Live Demo</h3>
          <p className="text-sm text-gray-500 mb-4">The Flagship CRM Microservices project is deployed and live.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg">
            Launch Demo
          </button>
        </div>
      </div>
    </div>
  )
}

const NotesContent = () => (
  <div className="h-full bg-[#fdfbf7] text-gray-800 flex flex-col">
    <div className="p-4 border-b border-yellow-200/50">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vision.txt</span>
    </div>
    <div className="p-8 flex-1 overflow-y-auto font-serif leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Project Macfolio: The Vision</h1>
      <p className="mb-4">
        Macfolio is my visionary project. I initiated this as a personal portfolio website, but it is much more than that.
        The Vision behind this project is to create a futuristic OS which will entirely work on Cloud.
      </p>
      <p className="mb-4">
        Imagine an operating system freed from hardware constraints. The use cases are endless—specifically integrating with
        <strong> Augmented Reality (AR)</strong> and <strong> Virtual Reality (VR)</strong>.
      </p>
      <blockquote className="pl-4 border-l-4 border-yellow-400 italic my-6 text-gray-600">
        "Think of it like this: You can code or perform complex tasks on a PC interface simply by wearing glasses.
        No bulky hardware, just pure cloud compute rendered in your field of view."
      </blockquote>
      <p className="mb-4">
        This project aims to eliminate the need for carrying bulky hardware devices and their unbearable costs.
        Inspired by pioneers like Bruno Simon, I have open-sourced this project to push the boundaries of web capabilities.
      </p>
      <hr className="my-8 border-gray-200" />
      <p className="text-sm text-gray-500">
        <a href="github.com/abhijeetr7/macfolio" className="text-blue-600 hover:underline">github.com/abhijeetr7/macfolio</a>
      </p>
    </div>
  </div>
)

const MailContent = () => (
  <div className="h-full bg-white dark:bg-[#1e1e1e] flex">
    <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] flex flex-col">
      <div className="p-3 border-b border-gray-200 dark:border-gray-700">
        <input type="text" placeholder="Search" className="w-full bg-gray-200 dark:bg-[#333] rounded px-2 py-1 text-sm" />
      </div>
      <div className="p-3 bg-blue-500/10 border-l-4 border-blue-500 cursor-pointer">
        <div className="font-bold text-sm text-gray-800 dark:text-white">Recruiter</div>
        <div className="text-xs text-gray-500">Subject: Job Opportunity...</div>
        <div className="text-xs text-gray-400 mt-1">10:42 AM</div>
      </div>
    </div>
    <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
        <User size={32} className="text-gray-500" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Contact Abhijeet</h2>
      <p className="text-gray-500 text-sm mb-6 max-w-xs">
        I am currently available for Enterprise Architect roles. Let's discuss how I can scale your architecture.
      </p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          <Mail size={14} /> Send Email
          <a href="abhijeetrs877@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
          </a>
        </button>
        <button className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded-full text-sm hover:bg-[#006396] transition">
          <Linkedin size={14} /> LinkedIn
          <a href="https://www.linkedin.com/in/imjeetrs/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
          </a>
        </button>
      </div>
    </div>
  </div>
)

// --- Main OS Component ---

const Macfolio = () => {
  const [bootState, setBootState] = useState('booting') // booting, login, desktop
  const [activeWindowId, setActiveWindowId] = useState(null)
  const [maxZ, setMaxZ] = useState(10)

  const [windows, setWindows] = useState([
    { id: 'finder', title: 'Finder', icon: User, isOpen: true, isMinimized: false, z: 10, content: <FinderContent /> },
    { id: 'terminal', title: 'Terminal - Skills', icon: Code2, isOpen: false, isMinimized: false, z: 1, content: <TerminalContent /> },
    { id: 'safari', title: 'Safari - Projects', icon: Globe, isOpen: false, isMinimized: false, z: 1, content: <SafariContent /> },
    { id: 'notes', title: 'Notes - Vision', icon: Box, isOpen: false, isMinimized: false, z: 1, content: <NotesContent /> },
    { id: 'mail', title: 'Mail - Contact', icon: Mail, isOpen: false, isMinimized: false, z: 1, content: <MailContent /> },
  ])

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleWindow = (id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        const newZ = maxZ + 1
        setMaxZ(newZ)
        setActiveWindowId(id)
        return { ...w, isOpen: true, isMinimized: false, z: newZ }
      }
      return w
    }))
  }

  const closeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w))
  }

  const minimizeWindow = (id) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w))
    setActiveWindowId(null)
  }

  const focusWindow = (id) => {
    const newZ = maxZ + 1
    setMaxZ(newZ)
    setActiveWindowId(id)
    setWindows(prev => prev.map(w => w.id === id ? { ...w, z: newZ, isMinimized: false } : w))
  }

  // App Icons for Dock
  const apps = [
    { id: 'finder', icon: User, color: 'bg-blue-500' },
    { id: 'safari', icon: Globe, color: 'bg-blue-400' },
    { id: 'terminal', icon: Code2, color: 'bg-gray-800' },
    { id: 'notes', icon: Box, color: 'bg-yellow-400' },
    { id: 'mail', icon: Mail, color: 'bg-green-500' },
  ]

  if (bootState === 'booting') {
    return <BootScreen onComplete={() => setBootState('login')} />
  }

  if (bootState === 'login') {
    return <LoginScreen onLogin={() => setBootState('desktop')} />
  }

  return (
    <div
      className="h-screen w-full overflow-hidden relative flex flex-col font-sans select-none bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2574&auto=format&fit=crop')", // Abstract Big Sur style
      }}
    >
      {/* Top Bar */}
      <div className="h-7 bg-black/20 backdrop-blur-md text-white flex items-center justify-between px-4 text-xs font-medium z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="font-bold text-sm"></div>
          <span className="font-bold hidden sm:inline">Finder</span>
          <span className="hidden sm:inline">File</span>
          <span className="hidden sm:inline">Edit</span>
          <span className="hidden sm:inline">View</span>
          <span className="hidden sm:inline">Go</span>
          <span className="hidden sm:inline">Window</span>
          <span className="hidden sm:inline">Help</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3">
            <Battery size={14} />
            <Wifi size={14} />
            <Search size={14} />
            <LayoutGrid size={14} />
          </div>
          <span>{currentTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Desktop Area */}
      <div className="flex-1 relative overflow-hidden" onClick={() => setActiveWindowId(null)}>
        {/* Desktop Icons */}
        <div className="absolute right-4 top-4 flex flex-col gap-6 items-end sm:items-start sm:left-4 sm:right-auto">
          <div className="group flex flex-col items-center gap-1 cursor-pointer w-20" onClick={() => toggleWindow('safari')}>
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-white/20 transition">
              <Globe className="text-white" size={32} />
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md bg-black/20 px-2 rounded-full">Projects</span>
          </div>

          <div className="group flex flex-col items-center gap-1 cursor-pointer w-20" onClick={() => toggleWindow('terminal')}>
            <div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-black/50 transition">
              <Terminal className="text-green-400" size={32} />
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md bg-black/20 px-2 rounded-full">Skills.sh</span>
          </div>

          <div className="group flex flex-col items-center gap-1 cursor-pointer w-20">
            <a href="https://github.com/abhijeetr7" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-gray-800 transition">
                <Github className="text-white" size={32} />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-md bg-black/20 px-2 rounded-full">GitHub</span>
            </a>
          </div>
        </div>

        {/* Windows */}
        {windows.map(w => (
          <Window
            key={w.id}
            {...w}
            onClose={() => closeWindow(w.id)}
            onMinimize={(e) => { e.stopPropagation(); minimizeWindow(w.id) }}
            onMaximize={(e) => { e.stopPropagation(); focusWindow(w.id) }}
            onClick={(e) => { e.stopPropagation(); focusWindow(w.id) }}
            zIndex={w.z}
          >
            {w.content}
          </Window>
        ))}
      </div>

      {/* Dock */}
      <div className="z-50 mb-2 flex justify-center">
        <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex gap-3 shadow-2xl items-end mb-2 mx-2 transition-all duration-300">
          {apps.map(app => {
            const isOpen = windows.find(w => w.id === app.id)?.isOpen
            return (
              <div key={app.id} className="relative group flex flex-col items-center gap-1">
                {/* Tooltip */}
                <div className="absolute -top-12 bg-gray-800/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md border border-white/10">
                  {windows.find(w => w.id === app.id)?.title.split(' -')[0]}
                </div>

                {/* Icon */}
                <button
                  onClick={() => toggleWindow(app.id)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:-translate-y-2 hover:scale-110 active:scale-95 ${app.color}`}
                >
                  <app.icon size={24} />
                </button>

                {/* Dot indicator */}
                <div className={`w-1 h-1 rounded-full bg-black/50 dark:bg-white/50 mt-1 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            )
          })}

          <div className="w-px h-10 bg-white/20 mx-1 self-center"></div>

          <div className="relative group flex flex-col items-center gap-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-400/30 flex items-center justify-center hover:-translate-y-2 transition-all duration-200 cursor-pointer border border-white/10">
              <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-[8px] text-white font-mono">BIN</span>
              </div>
            </div>
            <div className="w-1 h-1 mt-1 opacity-0" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Macfolio