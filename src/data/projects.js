export const projects = [
    {
      title: "MLB Season Simulator",
      role: "Personal Project · June – August 2024",
      summary: "A probabilistic baseball engine that simulates full seasons using real player statistics.",
      description: ["Modeled at-bats, baserunner advancement, and game outcomes using real player statistics.", "Integrated 30+ datasets to simulate 2,430-game seasons, standings, playoff seeding, and postseason play."],
      imgs: [],
    },
    {
      title: "Reverie",
      role: "Technical Lead",
      summary: "Reverie is an iOS application that helps users capture, explore, and understand their dreams through on-device AI, visual storytelling, and interactive visualizations",
      description: [
        "Log dreams instantly upon waking using Siri, App Intents, widgets, or directly in the app",
        "Leverage Apple’s on-device Foundation Model to intelligently complete and expand unfinished dreams",
        "Analyze dreams to uncover recurring themes, emotions, and patterns over time",
        "Visualize how dreams connect to mood and activity data through interactive views",
        "Generate dream inspired visuals using on-device Stable Diffusion via CoreML",
        "Transform dreams into characters, illustrated storybooks, and an evolving personal dreamscape",
        "Explore relationships between dreams in an interactive Constellation View",
        "Led development as Technical Lead, guiding architecture decisions, mentoring developers, and coordinating execution",
        "Awarded Best Design and Best App at Georgia Tech iOS Club Demo Day",
        "Reduced on-device image generation from 30+ seconds to about 5 seconds through model caching and concurrency",
        "Built using Swift, SwiftUI, CoreML, Apple Foundation Model, and iOS-native frameworks"
      ],
      imgs: [
        // TO ADD

      ],
      git: "https://github.com/gtiosclub/Reverie",
    },
    {
      title: "Teen Mental Health Predictive Model",
      role: "Machine Learning Class Project",
      summary: "A machine learning project focused on predicting depression risk in teenagers using survey data",
      description: [
        "Diagnosed a synthetic dataset with no learnable signal and rebuilt the pipeline using validated teen depression data",
        "Tuned Random Forest and SVM models to approximately 85% accuracy and 0.88 F1 with cross-validation",
        "Identified two dominant Random Forest features that preserved performance while reducing training time by approximately 80%",
        "Performed data preprocessing, feature engineering, and exploratory data analysis on data",
        "Compared supervised learning models including linear and logistic regression, random forests, and support vector machines (SVMs)",
        "Analyzed model performance using accuracy, precision, recall, F1-score, and confusion matrices",
        "Identified key features correlated with depression indicators and discussed ethical considerations",
        "Worked collaboratively in a team to iterate on model design and improve predictive performance",
        "Presented findings and insights with clear visualizations and technical justification",
        "Implemented using Python, scikit-learn, pandas, NumPy, and matplotlib"
      ],
      imgs: [
        // TO ADD

      ],
      git: "https://github.gatech.edu/sgarg330/CS4641PredictingDepression",
    },
    {
      title: "Nomad",
      role: "Member of the GT iOS Club",
      summary: "Nomad is an all-in-one road trip planning app created to make every journey smoother and more memorable",
      description: [
        "Plan itineraries manually or with guidance from our AI assistant, Atlas",
        "Navigate routes with a custom-built navigation system",
        "Relive trips by viewing past journeys and uploading photos to preserve memories",
        "Developed the itinerary planning feature, allowing users to plan trips step-by-step with an intuitive UI",
        "Contributed 55+ commits to a codebase shared by 20+ developers",
        "Built Yelp-powered stop discovery and itinerary workflows for adding, removing, and geocoding stops",
        "Won Best App and Most Popular at iOS Club Demo Day",
        "Built using Swift, SwiftUI, Firebase, the OpenAI API, and various Apple frameworks to deliver a seamless iOS experience"
      ],
      imgs: [
        "/assets/Nomad1.png",
        "/assets/Nomad2.png",
        "/assets/Nomad3.png",
        "/assets/Nomad4.png",
        "/assets/Nomad5.png",
        "/assets/Nomad6.png",
        "/assets/Nomad7.png",
      ],
      imageDescriptions: [
        "Nomad home screen with upcoming trips, previous trips, and community favorites",
        "Trip planning form with origin, destination, dates, and an AI planning option",
        "Stop discovery map with cuisine, rating, and price filters and Yelp results",
        "Atlas AI assistant suggesting a stop along a road-trip route",
        "Route preview with trip duration, distance, stop details, and save controls",
        "Turn-by-turn navigation with a route map and arrival information",
        "Completed trip with visited stops and a map of the route",
      ],
      git: "https://github.com/gtiosclub/Nomad",
    },
    {
      title: "Findy",
      role: "Scrum Master",
      summary: "Findy is a web application that helps new students find their way around campus and discover events",
      description: [
        "Discover campus events through an interactive map and intuitive event listings",
        "Create and share personal events with the campus community",
        "Navigate campus using student-focused, map-based features",
        "Stay informed with real-time event notifications and updates",
        "Register for events directly through the platform",
        "Experience a clean, user-friendly interface designed to enhance student life",
        "Led the team as Scrum Master and developer, implementing Agile practices and ensuring smooth project delivery",
        "Contributed over 7,000 lines of code, significantly enhancing functionality and user experience",
        "Built using Django, Tailwind CSS, JavaScript, and SQLite"
      ],
      imgs: [
        "https://www.youtube.com/watch?v=smOSz-krosM&t=49s",
      ],
      git: "https://github.com/danielachacon/findy",
    },
  ]
