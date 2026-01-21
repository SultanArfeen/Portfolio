import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Sultan's AI assistant. Ask me anything about his work, projects, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [usedResponses, setUsedResponses] = useState(new Set());

  if (!greeting.displayGreeting) {
    return null;
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Helper to pick random response WITHOUT repeating
    const pick = (arr) => {
      const unused = arr.filter(r => !usedResponses.has(r));
      if (unused.length === 0) {
        // Reset if all used
        setUsedResponses(new Set());
        return arr[Math.floor(Math.random() * arr.length)];
      }
      const selected = unused[Math.floor(Math.random() * unused.length)];
      setUsedResponses(prev => new Set([...prev, selected]));
      return selected;
    };

    setTimeout(() => {
      const lowerMsg = userMessage.toLowerCase();
      let response;

      // 50 Greeting responses
      const greetings = [
        "Hello! Great to meet you! I can tell you about Sultan's projects, skills, or experience. What interests you?",
        "Hey there! Welcome! Ask me anything about Sultan's amazing work!",
        "Hi! I'm here to help you learn about Sultan. What would you like to know?",
        "Greetings! I can share all about Sultan's portfolio. What would you like to explore?",
        "Hello! Sultan's AI assistant here. Fire away with any questions!",
        "Hey! Great to have you here. Ask about projects, skills, or how to contact Sultan!",
        "Hi there! Ready to tell you all about Sultan Ul Arfeen. What's on your mind?",
        "Welcome! I know everything about Sultan's work. What can I help with?",
        "Hello friend! Ask me about CloudChaser, AIAR Guitar, or Sultan's AI expertise!",
        "Hey! Sultan's portfolio assistant at your service. What would you like to know?",
        "Hi! So glad you're here. I can discuss Sultan's projects, experience, or skills!",
        "Greetings human! Let me tell you about Sultan's amazing tech journey!",
        "Hello! Whether you want to know about AI, web dev, or projects - I've got you covered!",
        "Hey hey! Sultan's digital assistant reporting for duty. Ask away!",
        "Hi! Curious about Sultan? I'm the perfect one to ask!",
        "Welcome welcome! Let's chat about Sultan's impressive portfolio!",
        "Hello there! I'm excited to share Sultan's work with you. What interests you most?",
        "Hey! Thanks for stopping by. What would you like to learn about Sultan?",
        "Hi! From AI projects to full-stack skills, I know it all. What's your question?",
        "Greetings! Sultan is an amazing engineer - let me tell you about him!",
        "Hello! Ask about projects, skills, education, or contact info - I'm here to help!",
        "Hey! Sultan's portfolio has some cool stuff. Want me to highlight something specific?",
        "Hi there! Whether it's CloudChaser or KodeRift experience - ask me anything!",
        "Welcome aboard! Ready to dive into Sultan's tech expertise?",
        "Hello! I can tell you about ML projects, web apps, or Sultan's career. Pick one!",
        "Hey! Great question incoming? I'm ready! Ask about Sultan's work!",
        "Hi! Sultan's AI assistant speaking. How can I enlighten you today?",
        "Greetings! From Stanford ML to KodeRift - I know Sultan's whole journey!",
        "Hello! Excited to chat about Sultan's impressive portfolio. Shoot!",
        "Hey there friend! What aspect of Sultan's work catches your eye?",
        "Hi! I'm like a walking resume for Sultan - ask me literally anything!",
        "Welcome! Projects? Skills? Experience? Contact? I've got all the info!",
        "Hello! Sultan does AI, full-stack, and DevOps. Want details on any of these?",
        "Hey! This is Sultan's interactive portfolio assistant. How may I help?",
        "Hi! From PyTorch to React to Kubernetes - Sultan knows it all. Ask me about it!",
        "Greetings! Ready to learn about an awesome AI & Full-Stack engineer?",
        "Hello! Sultan's built some incredible things. Want to hear about them?",
        "Hey! I'm your guide to Sultan's world of tech. Where shall we start?",
        "Hi there! CloudChaser, AIAR Guitar, Medik - pick a project to explore!",
        "Welcome! Sultan's journey is impressive - from FAST NUCES to Stanford to KodeRift!",
        "Hello! I love talking about Sultan's work. What would make you go 'wow'?",
        "Hey! AI enthusiast? Full-stack curious? I can talk about either!",
        "Hi! Sultan is Head of AI at KodeRift - want to know more about that?",
        "Greetings! I'm basically Sultan's hype machine. Ask me why he's awesome!",
        "Hello! From research assistant to tech lead - Sultan's story is cool!",
        "Hey there! Let me tell you why Sultan is the engineer you've been looking for!",
        "Hi! Stanford certified, KodeRift leading - Sultan's credentials are solid!",
        "Welcome! Looking for an AI expert? Let me tell you about Sultan!",
        "Hello! I'm programmed to be enthusiastic about Sultan's work. Ask anything!",
        "Hey! Whether it's frontend, backend, or ML - Sultan's got the skills!"
      ];

      // 50 Gibberish/unclear responses
      const gibberish = [
        "Hmm, I didn't quite catch that. Could you try rephrasing? Ask about Sultan's projects, skills, or experience!",
        "That's a bit unclear to me. Try asking about CloudChaser, AIAR Guitar, or Sultan's expertise!",
        "I'm not sure I understand. What would you like to know about Sultan? Projects? Skills? Contact info?",
        "Could you say that differently? I'm great at answering questions about Sultan's portfolio!",
        "I didn't get that one. Try asking about Sultan's AI skills, web development, or work experience!",
        "Hmm, that went over my head. Ask me about Sultan's projects or how to contact him!",
        "Not quite following. What aspect of Sultan's work interests you?",
        "That's a new one for me! Try asking about Sultan's tech stack, education, or career!",
        "I'm scratching my digital head here. Ask about CloudChaser, KodeRift, or Sultan's skills!",
        "Didn't catch that. But I'm great at discussing Sultan's impressive portfolio!",
        "Sorry, I'm drawing a blank. What would you like to know about Sultan?",
        "That's beyond my vocabulary. Ask me about AI/ML, full-stack, or Sultan's projects!",
        "Hmm, interesting input! But let's talk about Sultan instead. What interests you?",
        "I'm not programmed for that one. Try asking about Sultan's work or experience!",
        "That one stumped me! Ask about Sultan's projects like CloudChaser or AIAR Guitar!",
        "Could you try again? I excel at discussing Sultan's impressive tech journey!",
        "Not quite sure what you mean. Ask about Sultan's skills, education, or contact!",
        "I'm better at portfolio questions! Try: 'What are Sultan's projects?'",
        "That's a bit fuzzy. Ask me something about Sultan's AI expertise or web skills!",
        "Hmm, let's try again. What would you like to know about Sultan Ul Arfeen?",
        "I didn't understand, but I'm eager to help! Ask about Sultan's work!",
        "That went right past me. Try asking about Sultan's KodeRift experience!",
        "Not computing that one. But ask about Sultan and I'm your assistant!",
        "Could you clarify? I'm great with questions about Sultan's portfolio!",
        "That's outside my wheelhouse. Ask about Sultan's projects, skills, or background!",
        "Hmm, unfamiliar territory. Try asking about Sultan's AI projects or career!",
        "I'm drawing blanks here. Ask about CloudChaser, experience, or contact info!",
        "Not sure about that. But I know everything about Sultan's impressive work!",
        "That's a puzzler! Try: 'Tell me about Sultan's skills' or 'What projects did he build?'",
        "Didn't quite get it. Ask me about Sultan and I'll be super helpful!",
        "That's not in my knowledge base. Ask about Sultan's tech expertise instead!",
        "Could you rephrase for a simple AI? Ask about Sultan's portfolio!",
        "I'm lost on that one. But ask about Sultan's ML work and I'll shine!",
        "Not tracking that. Try asking about Sultan's experience at KodeRift!",
        "Hmm, that's a mystery. Ask me about Sultan's projects or how to reach him!",
        "I didn't catch it. But I'm excellent at discussing Sultan's achievements!",
        "That's Greek to me. Try: 'What skills does Sultan have?'",
        "Not sure what you're asking. Want to know about Sultan's AI expertise?",
        "I'm puzzled! But ask about Sultan's portfolio and I'll deliver!",
        "Could you try simpler words? Ask about Sultan's work, skills, or education!",
        "That went over my circuits. Ask about CloudChaser, AIAR Guitar, or Medik!",
        "Hmm, I'm confused. But I know loads about Sultan - try a different question!",
        "Not quite getting you. Ask about Sultan's Stanford certification maybe?",
        "That's a head-scratcher. Try asking about Sultan's impressive career!",
        "I don't follow. But I'm great at explaining Sultan's tech stack!",
        "Could you reword that? I'm eager to share about Sultan's accomplishments!",
        "That's unclear to me. Ask about Sultan's projects and I'll be super helpful!",
        "Hmm, try again? Ask about Sultan's AI/ML expertise or full-stack skills!",
        "I'm stumped! But ask about Sultan's work and watch me come alive!",
        "Not understanding that one. Try: 'Tell me about Sultan's experience'"
      ];

      // Default responses (expanded)
      const defaults = [
        "I'd be happy to help! Sultan is an AI & Full-Stack engineer at KodeRift. Ask me about his projects, skills, or experience!",
        "Great question! Sultan specializes in AI/ML and full-stack development. What specifically interests you?",
        "I can tell you about Sultan's projects like CloudChaser or AIAR Guitar, his skills, or how to contact him!",
        "Sultan is a versatile engineer with AI and web expertise. Ask about his projects, skills, or background!",
        "I'm here to help you learn about Sultan. Ask about his work, education, or contact info!",
        "Sultan leads AI development at KodeRift. Want to know about his projects, skills, or experience?",
        "Ask me anything about Sultan! Projects, technical skills, career history - I know it all!",
        "I can share details about Sultan's impressive portfolio. What interests you most?",
        "Sultan's expertise spans AI/ML, full-stack, and DevOps. What would you like to explore?",
        "From CloudChaser to KodeRift leadership - I can tell you all about Sultan's journey!"
      ];

      // Check for greetings
      if (lowerMsg.match(/^(hi|hello|hey|greetings|yo|howdy|hola|sup|what's up|whats up|hiya|heya)[\s!.,?]*$/i) ||
        lowerMsg.includes("hello") || lowerMsg.includes("hi there") || lowerMsg.includes("hey there")) {
        response = pick(greetings);
      }

      // Projects
      else if (lowerMsg.includes("cloudchaser")) {
        response = pick([
          "CloudChaser is Sultan's AI-powered weather prediction app using real-time ML models. Built with PyTorch and React Native!",
          "CloudChaser uses computer vision and ML to predict weather by analyzing cloud patterns. One of Sultan's flagship projects!",
          "Sultan built CloudChaser to demonstrate his ML expertise - it predicts weather using deep learning on cloud imagery!",
          "CloudChaser combines PyTorch models with a React Native frontend for real-time weather AI. Very innovative!",
          "It's a weather prediction app using ML! Sultan trained models to analyze cloud formations for accurate forecasts."
        ]);
      } else if (lowerMsg.includes("aiar guitar") || lowerMsg.includes("aiar")) {
        response = pick([
          "AIAR Guitar is an AR-powered music learning app. It uses computer vision to guide users through guitar chords in real-time!",
          "Sultan built AIAR Guitar to combine AR with music education - it overlays chord guides on real guitars!",
          "AIAR Guitar is innovative - AR technology helps people learn guitar by showing finger positions in real-time!",
          "It's an augmented reality app for guitar learning! Sultan used computer vision to create interactive lessons.",
          "AIAR Guitar brings AR to music education - see chord diagrams overlaid on your actual guitar!"
        ]);
      } else if (lowerMsg.includes("medik")) {
        response = pick([
          "Medik is Sultan's AI medical assistant using NLP for symptom analysis and health recommendations.",
          "Sultan built Medik as an NLP-powered health assistant that analyzes symptoms and provides preliminary guidance.",
          "Medik showcases Sultan's NLP skills - it's an intelligent medical chatbot trained on healthcare data!",
          "It's an AI health assistant! Medik uses natural language processing to understand symptoms and suggest next steps.",
          "Medik demonstrates Sultan's ability to apply AI to healthcare - it's a symptom analysis and recommendation tool."
        ]);
      } else if (lowerMsg.includes("project") || lowerMsg.includes("work") || lowerMsg.includes("portfolio") || lowerMsg.includes("built")) {
        response = pick([
          "Sultan has built CloudChaser (AI weather), AIAR Guitar (AR music), Medik (medical AI), and many more! Check out the Projects section!",
          "Some of Sultan's best work includes CloudChaser, AIAR Guitar, and Medik. Each showcases his AI and full-stack expertise!",
          "Sultan's portfolio includes AI apps, AR experiences, and full-stack web solutions. His standout projects are CloudChaser and AIAR Guitar!",
          "From ML-powered weather prediction to AR guitar learning - Sultan's projects demonstrate his range as a developer!",
          "Sultan builds everything from AI applications to full-stack web solutions. His most notable projects use ML and computer vision!",
          "Projects galore! CloudChaser, AIAR Guitar, Medik - Sultan has built impressive applications across AI and web development."
        ]);
      }

      // Skills
      else if (lowerMsg.includes("pytorch") || lowerMsg.includes("tensorflow") || lowerMsg.includes("ai") || lowerMsg.includes("machine learning") || lowerMsg.includes("ml")) {
        response = pick([
          "Sultan is an AI/ML expert proficient in PyTorch, TensorFlow, LangChain, and scikit-learn. Stanford ML certified!",
          "When it comes to AI, Sultan knows his stuff - PyTorch, TensorFlow, computer vision, NLP, and more!",
          "Sultan's AI toolkit includes PyTorch, TensorFlow, LangChain, and scikit-learn. Real production experience!",
          "AI is Sultan's specialty! He's trained models for weather prediction, medical diagnosis, and music applications.",
          "Sultan's ML skills are Stanford-certified. He works with PyTorch, TensorFlow, and has built production AI systems.",
          "From computer vision to NLP, Sultan's AI expertise is comprehensive. PyTorch and TensorFlow are his primary tools."
        ]);
      } else if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("stack") || lowerMsg.includes("know")) {
        response = pick([
          "Sultan specializes in AI/ML (PyTorch, TensorFlow), Full-Stack (React, Next.js, FastAPI), and DevOps (Docker, Kubernetes)!",
          "Sultan's tech stack spans AI/ML, frontend, backend, databases, and DevOps. True full-stack engineer!",
          "From PyTorch to React to Kubernetes - Sultan's skills cover the entire software development lifecycle!",
          "Sultan is versatile: ML models, React UIs, FastAPI backends, Docker deployments - he does it all!",
          "Technical skills? AI/ML, full-stack development, cloud deployments - Sultan's expertise is comprehensive!",
          "Sultan's skillset includes PyTorch, TensorFlow, React, Next.js, FastAPI, Docker, and Kubernetes. Impressive range!"
        ]);
      }

      // Experience
      else if (lowerMsg.includes("experience") || lowerMsg.includes("job") || lowerMsg.includes("career") || lowerMsg.includes("work at")) {
        response = pick([
          "Sultan is Head of AI & Full-Stack Architecture at KodeRift, leading 100+ projects. Also freelances on Fiverr!",
          "Sultan's career spans KodeRift leadership, Fiverr freelancing, and FAST NUCES research!",
          "From research assistant to leading 100+ projects at KodeRift - Sultan's career shows consistent growth!",
          "Sultan wears many hats: KodeRift tech lead, Fiverr freelancer, and former research assistant!",
          "Currently Head of AI at KodeRift, Sultan has impressive experience across industry and academia.",
          "Sultan leads AI development at KodeRift and has a track record of successful freelance projects!"
        ]);
      } else if (lowerMsg.includes("koderift")) {
        response = pick([
          "Sultan is Head of AI & Full-Stack Architecture at KodeRift, leading 100+ projects!",
          "At KodeRift, Sultan leads as Head of AI & Full-Stack Architecture for 100+ projects!",
          "Sultan runs AI and full-stack development at KodeRift, managing large-scale projects and teams!",
          "KodeRift is where Sultan shines as the AI and full-stack lead!",
          "Sultan heads AI and full-stack architecture at KodeRift with an impressive project portfolio!"
        ]);
      }

      // Education
      else if (lowerMsg.includes("stanford") || lowerMsg.includes("certificate") || lowerMsg.includes("education") || lowerMsg.includes("degree") || lowerMsg.includes("study")) {
        response = pick([
          "Sultan has a BS in Computer Science from FAST NUCES and an ML Certificate from Stanford!",
          "Education-wise: FAST NUCES CS degree plus prestigious Stanford ML certification!",
          "Sultan's education combines FAST NUCES computer science with specialized Stanford ML training!",
          "Stanford ML certified! Sultan also holds a BS in CS from FAST NUCES.",
          "Sultan studied at FAST NUCES and earned his ML certification from Stanford University!",
          "Solid credentials: Bachelor's from FAST NUCES, ML certificate from Stanford School of Computing!"
        ]);
      }

      // Contact
      else if (lowerMsg.includes("email") || lowerMsg.includes("contact") || lowerMsg.includes("reach") || lowerMsg.includes("hire") || lowerMsg.includes("available")) {
        response = pick([
          "Reach Sultan at SultaanUlArfeen@gmail.com - he's open to new opportunities!",
          "Contact Sultan via email: SultaanUlArfeen@gmail.com or connect on LinkedIn!",
          "Want to connect? Sultan's available at SultaanUlArfeen@gmail.com!",
          "Email Sultan at SultaanUlArfeen@gmail.com - he responds to all inquiries!",
          "Sultan welcomes opportunities! Reach out at SultaanUlArfeen@gmail.com!",
          "Get in touch: SultaanUlArfeen@gmail.com or find his LinkedIn in the social links!"
        ]);
      } else if (lowerMsg.includes("linkedin") || lowerMsg.includes("github") || lowerMsg.includes("social")) {
        response = pick([
          "Find Sultan's LinkedIn and GitHub in the social media section above!",
          "Sultan's LinkedIn and GitHub links are in the social icons - connect with him there!",
          "Check the social media section for Sultan's LinkedIn, GitHub, and more!",
          "Sultan is active on LinkedIn and GitHub - links are in the header!",
          "Social links to LinkedIn and GitHub are displayed above - feel free to connect!"
        ]);
      }

      // Technologies
      else if (lowerMsg.includes("python")) {
        response = pick([
          "Sultan is an expert Python developer - AI/ML, FastAPI backends, data processing, and automation!",
          "Python is Sultan's go-to for AI, data science, and backend development with FastAPI!",
          "Sultan's Python expertise spans ML with PyTorch, APIs with FastAPI, and data processing!",
          "Python powers much of Sultan's work - from ML models to backend services!",
          "Sultan uses Python extensively for machine learning, web APIs, and automation scripts!"
        ]);
      } else if (lowerMsg.includes("react") || lowerMsg.includes("next") || lowerMsg.includes("frontend")) {
        response = pick([
          "Sultan is highly skilled in React and Next.js - beautiful, responsive UIs with clean architecture!",
          "Frontend is another strength - slick React and Next.js apps with attention to UX!",
          "Sultan crafts modern frontends with React and Next.js, focusing on responsive design!",
          "React and Next.js are Sultan's frontend tools of choice for building great user interfaces!",
          "Sultan builds production-ready React and Next.js applications with modern best practices!"
        ]);
      } else if (lowerMsg.includes("docker") || lowerMsg.includes("kubernetes") || lowerMsg.includes("devops")) {
        response = pick([
          "Sultan is experienced in DevOps - Docker, Kubernetes, and CI/CD pipelines!",
          "DevOps is part of Sultan's skillset - containerization with Docker, orchestration with Kubernetes!",
          "Sultan containerizes apps with Docker and orchestrates with Kubernetes. Infrastructure as code!",
          "Docker and Kubernetes expertise - Sultan ensures smooth deployment and scalability!",
          "Sultan handles DevOps with Docker containers and Kubernetes orchestration!"
        ]);
      }

      // About Sultan
      else if (lowerMsg.includes("about") || lowerMsg.includes("who is") || lowerMsg.includes("tell me")) {
        response = pick([
          "Sultan Ul Arfeen is an AI & Full-Stack Engineer at KodeRift. Stanford ML certified and passionate about innovation!",
          "Sultan is a versatile tech professional - Head of AI at KodeRift, Stanford certified, building amazing projects!",
          "Meet Sultan: AI/ML expert, full-stack developer, and tech leader. Built CloudChaser, AIAR Guitar, and more!",
          "Sultan Ul Arfeen leads AI development at KodeRift with expertise in machine learning and web development!",
          "Sultan is a multi-talented engineer with credentials from Stanford and impressive projects in AI and web!"
        ]);
      }

      // Thanks
      else if (lowerMsg.includes("thanks") || lowerMsg.includes("thank you") || lowerMsg.includes("appreciate")) {
        response = pick([
          "You're very welcome! Feel free to ask anything else about Sultan!",
          "Happy to help! Let me know if you have more questions!",
          "Anytime! I'm here if you want to know more about Sultan's work!",
          "Glad I could help! Ask away if you're curious about anything else!",
          "My pleasure! I love sharing about Sultan's impressive portfolio!"
        ]);
      }

      // How are you
      else if (lowerMsg.includes("how are you") || lowerMsg.includes("how's it going") || lowerMsg.includes("what's up")) {
        response = pick([
          "I'm doing great, thanks! Ready to tell you about Sultan's amazing work!",
          "All good here! Eager to share about Sultan's projects and skills!",
          "Fantastic! Let's chat about Sultan's portfolio - what catches your interest?",
          "Running smoothly! Ask me anything about Sultan!",
          "Doing well! What would you like to know about Sultan today?"
        ]);
      }

      // Check if message is mostly gibberish (short, no keywords, random chars)
      else if (lowerMsg.length < 4 ||
        !/[aeiou]/i.test(lowerMsg) ||
        lowerMsg.split(" ").every(w => w.length < 3) ||
        /^[^a-zA-Z]*$/.test(lowerMsg) ||
        lowerMsg.match(/(.)\1{3,}/) ||
        (lowerMsg.length < 15 && !lowerMsg.match(/(project|skill|work|hi|hello|contact|sultan|experience|edu)/i))) {
        response = pick(gibberish);
      }

      // Default fallback
      else {
        response = pick(defaults);
      }

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Download Resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* Professional Chat Button */}
            <div
              className="professional-chat-container"
              onClick={() => setChatOpen(!chatOpen)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <div className="chat-avatar-placeholder">
                <i className="fas fa-robot"></i>
                <div className="chat-hint">
                  Click to chat with my AI assistant!
                </div>
              </div>
            </div>

            {/* Chat Window */}
            {chatOpen && (
              <div className={`greeting-chat-window ${isDark ? 'dark' : ''}`}>
                <div className="chat-header">
                  <span>Sultan's AI Assistant</span>
                  <button onClick={() => setChatOpen(false)}>×</button>
                </div>
                <div className="chat-messages">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-msg ${msg.role}`}>
                      {msg.content}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="chat-msg assistant">
                      <span className="typing-dots">...</span>
                    </div>
                  )}
                </div>
                <div className="chat-input-area">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask anything you'd like to know..."
                    disabled={isLoading}
                  />
                  <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
