const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const articles = [
  {
    id: 1,
    title: "Career Development Tips",
    content:
      "Career guidance can be transformative, helping you identify your strengths, interests, and potential career paths that align with them. Start by setting clear, realistic goals and seek out mentors or advisors who can provide insights into your chosen field. Research trends in the industry, and make sure to develop both technical and soft skills to remain adaptable in an ever-changing job market. Networking, whether online or in person, opens doors to opportunities and provides a deeper understanding of different roles. Lastly, stay proactive in learning and remain open to new experiences that broaden your perspective and refine your career direction.",
  },
  {id: 2, title: "Improve Communication Skills", content: "Improving communication skills can greatly enhance both personal and professional relationships. Start by practicing active listening—giving your full attention to the speaker and responding thoughtfully. Work on clarity and conciseness to ensure your message is easily understood, and pay attention to nonverbal cues like body language and eye contact. Expanding your vocabulary and reading regularly can also help you express ideas more effectively. Additionally, seek feedback from others to identify areas for improvement, and don't shy away from public speaking or group discussions, as these can boost your confidence and ability to communicate under various circumstances."},
  {id: 3, title: "Write a good resume", content: "Writing a good resume is about showcasing your strengths in a clear, concise way that grabs the attention of recruiters. Start with a strong summary that highlights your skills, experience, and career goals. Tailor your resume to the job by focusing on relevant achievements and quantifiable results, such as “increased sales by 20%” or “managed a team of five.” Use bullet points and action verbs to make accomplishments stand out, and keep formatting simple and professional for easy readability. Include only essential information, and always proofread to ensure there are no typos or errors—every detail matters when making a strong first impression."},
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/contact", (req, res) => {
  console.log("Received:", req.body);
  res.json({message: "Form received"});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
