import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Property Price Prediction App",
    description:
      "App to predict the estimated price of a property based on various features like size, age, location, and property type",
    image: "property_app.png",
    tech: ["Python", "GenAI", "OpenAI", "Flask", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Harsha-mj/Property_Price_Predection",
    live: "https://propertypricepredection-fsybbqrdwfpeqmdinbazju.streamlit.app/",
    details: {
      "problem": "Finding recipes based on available ingredients can be time-consuming and inefficient",
      "solution": "Developed a custom property price prediction app that predicts price using inputs like square footage, number of beds/baths, lot size, property tax, insurance, and more.",
      "features": [
        "Predicts price using inputs like square footage, number of beds/baths, lot size, property tax, insurance, and more.",
        "Uses a pre-trained regression model",
        "Clean, interactive UI built using Streamlit forms",
        "Optional feature importance visualization to show model transparency."
      ],
      "impact": "Helping users providing clear picture of Property price."
    },
  },
  {
    title: "Credit Eligibility Predictor",
    description: "A Calendly clone for seamless meeting scheduling",
    image: "credit.png",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Harsha-mj/Credit_eligibility",
    live: "https://crediteligibility-4ztjbqgl78bn32deanm3sh.streamlit.app/",
    details: {
      "problem": "Assessing credit risk accurately is crucial for financial institutions to minimize defaults",
      "solution": "Developed a predictive model using the German credit risk dataset to classify applicants as low or high risk",
      "features": [
        "Machine learning-based credit risk prediction",
        "Feature engineering for improved model accuracy",
        "Model evaluation with precision-recall metrics",
        "Explainability of risk factors for transparency"
      ],
      "impact": "Enhancing decision-making in credit risk assessment, reducing default rates, and improving financial inclusion."
    },
  },
  {
    title: "Admission Prediction using Neural-Networks",
    description: "Predicts whether a applicant is likely to be admitted to a university",
    image: "admission_app.png",
    tech: ["Python", "GenAI", "HuggingFace", "Transformers", "Large Language Model (LLM)"],
    github: "https://github.com/Harsha-mj/Admission-Prediction-Neural-Networks",
    live: "https://admission-prediction-neural-networks-9n89gns8ykuuirqgqigyqv.streamlit.app/",
    details: {
      "problem": "Manually summarizing large text documents is time-consuming and inefficient",
      "solution": "Developed a Admission Prediction app using Streamlit and deployed with Streamlit Community Cloud.",
      "features": [
        "User-friendly interface powered by Streamlit.",
        "Input form to enter details such as GPA, university rating, research experience, and other relevant factors.",
        "Real-time prediction of admission chances based on the trained model.",
        "Accessible via Streamlit Community Cloud."
      ],
      "impact": "Helping users save time by generating concise, high-quality summaries instantly"
    },
  },
  {
    title: "Object Detection & Text-to-Speech",
    description: "A minimalist Object Detection application for impaired vision",
    image: "object.png",
    tech: ["Python", "Transformers", "Large Language Models", "HuggingFace", "AI"],
    github: "https://github.com/Harsha-mj/Object-detection-using-HuggingFace",
    live: "https://huggingface.co/spaces/Harshamj/Object_Detection",
    details: {
      problem:
      "Traditional image recognition apps lack accessibility features for impaired vision",
      solution:
        "Developed an image-to-description app using advanced AI models for object recognition and audio transcription for enhanced accessibility",
      features: [
        "Object identification with DETR-ResNet-50",
        "Image description generation",
        "Audio transcript for impaired vision with vits-ljs",
        "AI-powered visual understanding",
      ],
      impact: "Empowering individuals with impaired vision by providing accessible image descriptions and insights.",
    },
  },
];
