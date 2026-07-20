const RESPONSES = {

    greeting: [
        "👋 Hello! I'm Abhishek AI Assistant. I can help you learn about Abhishek's portfolio, skills, projects, education and experience.",
        "Hi! 😊 Welcome to Abhishek's Portfolio. Ask me anything related to Abhishek.",
        "Hey! I'm here to answer questions about Abhishek Nayak and his professional portfolio."
    ],

    about: [
        () => KNOWLEDGE.owner.about
    ],

    skills: [
        () => `🚀 Abhishek's Skills:\n\n${KNOWLEDGE.skills.join(", ")}`
    ],

    education: [
        () => `
🎓 Degree: ${KNOWLEDGE.education.degree}

🏫 College: ${KNOWLEDGE.education.college}

📍 Location: ${KNOWLEDGE.education.location}
`
    ],

    projects: [
        () => {
            return "💼 Projects\n\n" +
                KNOWLEDGE.projects.map((p, i) =>
                    `${i + 1}. ${p.name}\n${p.description}`
                ).join("\n\n");
        }
    ],

    contact: [
        () => `
📧 Email:
${KNOWLEDGE.contact.email}

📍 Location:
${KNOWLEDGE.contact.location}

💼 Abhishek is open to internships, freelance work and collaboration opportunities.
`
    ],

    experience: [
        "Abhishek is continuously improving his Full Stack Development skills by building real-world projects and AI-powered applications."
    ],

    thanks: [
        "You're welcome! 😊",
        "Happy to help!",
        "Glad I could help."
    ],

    goodbye: [
        "👋 Goodbye! Have a wonderful day.",
        "See you again! Feel free to ask about Abhishek anytime.",
        "Thanks for visiting Abhishek's portfolio!"
    ],

    unknown: [
`❌ Sorry!

I'm **Abhishek AI Assistant**.

I only answer questions related to:

• Abhishek Nayak
• Portfolio
• Projects
• Skills
• Education
• Experience
• Contact Information

Please ask something related to Abhishek. 😊`
    ]

};
