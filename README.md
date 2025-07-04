# Student Success Suite 🚀

An all-in-one AI toolkit designed to help you excel in your studies and prepare for your career. This suite provides a collection of powerful apps to master complex subjects, build winning presentations, improve writing, explore career paths, and more.

## 🌐 Live Demo

**https://studentsuccesssuite.netlify.app/(#)** <!-- Replace # with actual demo link -->

## ✨ Features

The Student Success Suite is composed of six powerful, single-purpose tools:

* **Study Buddy** 📖: Simplifies complex text from articles or textbooks. It can provide summaries, generate analogies to explain difficult concepts, and create quizzes to test your understanding.
* **Presentation Coach** 📊: Structures a winning presentation from a simple topic. It generates a title, a detailed blueprint with talking points for each section, slide content ideas, and audience engagement hooks.
* **Debate Lab** ⚖️: Explores any topic from multiple angles. It provides arguments for and against a topic, identifies key thinkers and their viewpoints, and helps find a logical middle ground.
* **Career Compass** 🧭: Discovers modern, future-proof career paths tailored to your skills and interests. It provides detailed information on roles, day-to-day responsibilities, required skills, and salary expectations.
* **Historical Interview** 🏛️: Lets you have interactive conversations with AI-powered historical figures. You can ask questions and get responses in their character, with historical context.
* **Language & Grammar Coach** ✍️: Improves your writing by providing proofreading, corrections with explanations, and targeted practice exercises based on your errors.

## 🛠️ Tech Stack

* **Frontend**: HTML, Tailwind CSS, Vanilla JavaScript
* **Backend**: Netlify Serverless Functions (Node.js)
* **API**: Google Gemini API
* **Hosting**: Netlify

## 🔧 Setup and Local Installation

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/student-success-suite.git
```

2. **Navigate to the project directory:**

```bash
cd student-success-suite
```

3. **Install the Netlify CLI:**
   This is required to run the serverless functions locally.

```bash
npm install netlify-cli -g
```

4. **Create the Environment Variables File:**
   Create a file named `.env` in the root of your project folder and add the following:

```env
GEMINI_API_KEY_STUDYBUDDY="your_api_key_here"
GEMINI_API_KEY_PRESENTATION="your_api_key_here"
GEMINI_API_KEY_DEBATE="your_api_key_here"
GEMINI_API_KEY_PATHFINDER="your_api_key_here"
GEMINI_API_KEY_HISTORY="your_api_key_here"
GEMINI_API_KEY_LANGUAGE="your_api_key_here"
```

5. **Start the local development server:**

```bash
netlify dev
```

This command will start a local server (usually at `http://localhost:8888`) and automatically run your serverless functions from the `netlify/functions` directory.

## ⚙️ Deployment Configuration

This project is designed for easy deployment on **Netlify**:

1. **Push to GitHub**: Create a repository and push your code.
2. **Connect to Netlify**: From your Netlify dashboard, import the project from GitHub.
3. **Add Environment Variables**:
   Go to `Site settings > Build & deploy > Environment` and add the six `GEMINI_API_KEY_...` variables.
4. **Deploy**: Netlify will automatically build and deploy your site.

## 📄 License

This project is licensed under the **MIT License**.

## 🙌 Acknowledgments

Built with passion to support students worldwide in their quest for knowledge, confidence, and success. Contributions and feedback are always welcome!
