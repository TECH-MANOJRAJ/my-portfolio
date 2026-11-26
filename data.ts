// Single source of truth for all portfolio content. Edit here, UI updates everywhere.
export const asset = (p: string) => import.meta.env.BASE_URL + p;

export const profile = {
  name: "Manojraj G",
  tag: "MANOJRAJ.G",
  title: "Data Science & Machine Learning Enthusiast",
  location: "Kumbakonam, Tamil Nadu, India",
  email: "tech.manojraj@gmail.com",
  phone: "+91 7010785130",
  github: "https://github.com/TECH-MANOJRAJ",
  linkedin: "https://www.linkedin.com/in/manojraj-tech",
  resume: asset("Manojraj-G-Resume.pdf"),
  intro:
    "Data Science student with hands-on experience in Machine Learning, NLP, Data Analytics and Predictive Modeling. Passionate about building AI-driven solutions and solving real-world problems using data.",
  goal:
    "Currently a Data Analyst Intern at NEXLIMA SOLUTIONS and developing an AI-based VLSI Routing Optimization system. My goal is to build scalable, intelligent AI/ML solutions while strengthening my expertise in Data Science and AI.",
  interests: ["Data Science", "Machine Learning", "Artificial Intelligence", "Data Analytics"],
  languages: ["Tamil", "English"],
  strengths: ["Problem Solving", "Analytical Thinking", "Quick Learner", "Team Collaboration", "Communication"],
  hobbies: ["Coding & Programming", "Exploring New Technologies", "Learning AI & Machine Learning"],
};

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  dept: "Computer Science Engineering (Data Science)",
  college: "Periyar Maniammai Institute of Science & Technology",
  period: "2023 – 2027",
  cgpa: "8.2",
};

export const skills = [
  { group: "Programming", items: ["Python", "SQL"] },
  { group: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "RFM Analysis"] },
  { group: "Machine Learning", items: ["Machine Learning", "Random Forest", "XGBoost", "Predictive Modeling"] },
  { group: "Deep Learning & AI", items: ["Deep Learning", "CNN", "NLP", "BERT", "Sentiment Analysis", "OpenCV"] },
  { group: "Visualization", items: ["Power BI", "Tableau", "Matplotlib"] },
  { group: "Tools & Deployment", items: ["Streamlit", "FastAPI", "Git", "GitHub"] },
  { group: "Specialized", items: ["Graph-based Modeling", "Reinforcement Learning", "NetworkX", "OpenROAD", "Sky130HD"] },
];

export type Project = {
  id: string; title: string; status: "IN PROGRESS" | "COMPLETED"; role: string; category: string;
  summary: string; detail?: string; tech: string[]; flow: [string, string, string];
};

export const projects: Project[] = [
  {
    id: "vlsi", title: "AI-Based VLSI Routing Optimization", status: "IN PROGRESS", role: "AI/ML Developer",
    category: "AI × VLSI × Machine Learning",
    summary: "An AI-driven VLSI routing optimization system that explores machine learning, graph-based modeling and reinforcement learning to improve routing efficiency in VLSI circuit design.",
    detail: "Integrates Python, OpenROAD and the Sky130HD technology library toward a practical AI-assisted VLSI design flow, framing circuit routing as an optimization problem. Currently in research and development.",
    tech: ["Python", "OpenROAD", "Sky130HD", "NetworkX", "NumPy", "Pandas", "Machine Learning", "Graph-based Modeling", "Reinforcement Learning"],
    flow: ["Circuit routing as a graph problem", "Machine learning + reinforcement learning", "Better routing efficiency (in development)"],
  },
  {
    id: "recsys", title: "Personalized Content Recommendation System", status: "COMPLETED", role: "NLP / ML Developer",
    category: "NLP",
    summary: "An NLP-based personalized recommendation system using BERT and sentiment analysis to provide relevant content recommendations.",
    tech: ["Python", "NLP", "BERT", "Sentiment Analysis", "Streamlit", "FastAPI"],
    flow: ["Text content", "BERT + sentiment analysis", "Relevant content recommendations"],
  },
  {
    id: "emotion", title: "Real-Time Emotion Detection", status: "COMPLETED", role: "ML / AI Developer",
    category: "Computer Vision",
    summary: "A real-time emotion detection system built with a Convolutional Neural Network and OpenCV.",
    detail: "Processes visual input and applies deep learning to identify human emotions in real time.",
    tech: ["Python", "CNN", "OpenCV", "Deep Learning"],
    flow: ["Live visual input", "CNN + OpenCV", "Emotion identified in real time"],
  },
  {
    id: "maintenance", title: "Predictive Maintenance for Manufacturing", status: "COMPLETED", role: "Machine Learning Developer",
    category: "Predictive Modeling",
    summary: "An ML-based predictive maintenance system using Random Forest and XGBoost for manufacturing applications.",
    detail: "Analyzes equipment-related patterns in historical manufacturing data to support early identification of possible failures.",
    tech: ["Python", "Machine Learning", "Random Forest", "XGBoost"],
    flow: ["Historical manufacturing data", "Random Forest + XGBoost", "Early identification of possible failures"],
  },
  {
    id: "clv", title: "Customer Lifetime Value Prediction", status: "COMPLETED", role: "Data Science / ML Developer",
    category: "Predictive Analytics",
    summary: "A Customer Lifetime Value prediction model using RFM analysis and Random Forest.",
    detail: "Combines customer segmentation, feature engineering and predictive modeling to identify high-value customer groups.",
    tech: ["Python", "Pandas", "Scikit-learn", "RFM Analysis", "Random Forest"],
    flow: ["Customer data", "RFM analysis + Random Forest", "High-value customer groups"],
  },
];

export const experience = [
  { org: "NEXLIMA SOLUTIONS", role: "Data Analyst Intern", period: "Sep 2026 – Dec 2026 · 3 months", current: true,
    text: "Gaining hands-on experience in data analysis, data cleaning, visualization and extracting meaningful insights from real-world datasets." },
  { org: "Elevate Labs", role: "Data Analyst Intern", period: "4 months", current: false, text: "Performed data cleaning, analysis and visualization." },
  { org: "Codec Technology", role: "Data Science Intern", period: "1 month", current: false, text: "Developed machine learning models and worked with real-world datasets." },
  { org: "Besant Technologies", role: "Machine Learning Engineer Intern", period: "1 month", current: false,
    text: "Completed a Machine Learning Engineer internship with training and project experience." },
];

export const certs = [
  { issuer: "ISRO", title: "Remote Sensing Data Analytics for Crop Production Forecasting", text: "Remote sensing and satellite data analysis techniques for crop production forecasting." },
  { issuer: "NoviTech", title: "Data Analytics with Power BI", text: "Data analysis, visualization and dashboard creation using Power BI." },
  { issuer: "Revamp", title: "Data Science", text: "Data science concepts, data analysis and machine learning." },
  { issuer: "NPTEL", title: "Joy of Computing using Python", text: "Python programming and problem-solving through practical computing concepts." },
];
