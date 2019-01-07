const BotSentences = {
  job_description: ["Here's a short description of the job"],
  name: [
    "What's your name?",
    "Your name please?",
    "So What should we call you? (Your full Name)",
    "Please tell us your Name..",
    "Start by telling us your full name..",
  ],
  email: [
    "What's your E-Mail ID?",
    "Where can we email you?",
    "Please give us your Email ID?",
    "Can We have your Email Address?",
  ],
  phone: ["What's your Phone Number?", "Phone Number to call you on"],
  work_experience: {
    working_exp: ["How many Years of working experience do you have?"],
    job_position: ["What was your position at your Current/Last Job?"],
    job_company_name: ["And what is the name of that Company?"],
    job_exp_desc: ["What was your experience like at {previousValue} ?"],
    job_switch_reason: ["What's the reason for switching to this company?"],
  },
  education: {
    highest_attained_degree: ["What's your Highest Attained Degree?"],
    highest_degree_university: ["and whats the university?"],
    highest_degree_year: [
      "What was the year when you attained the degree from {previousValue} ?",
    ],
  },
  current_city: [
    "Where do you currently reside?",
    "Where do you live currently?",
  ],
  certifications: [
    "Any certifications you have recieved?",
    "Do you have any Certifications?",
  ],
  publications: ["Any publications in your name?"],
  patents: ["Do you have any Patents you would like to share about?"],
  social: {
    linkedin: [
      "Please give me your LinkedIN profile link",
      "What's your LinkedIN profile link?",
    ],
    twitter: [
      "Please give me your twitter handle.",
      "I would like to know your Twitter handle.",
    ],
    github: [
      "What's github profile link.",
      "So How big are you in Open Source? Can you share your github link?",
    ],
    facebook: [
      "What's facebook profile link.",
      "Give me your facebook profile link.",
      "Share your Facebook profile link please.",
    ],
    dribbble: [
      "What's dribbble portfolio link.",
      "Can you Share your dribble link now!",
      "Do you have a Dribble portfolio? If Yes, Please share its link..",
    ],
    behance: [
      "What's behance protfolio link.",
      "Do you have a portfolio on behance? If Yes, Please share its link..",
    ],
    stack_overflow: ["What's your stack overflow link?"],
    medium: [
      "What's medium blog link?",
      "Do you blog on medium? what's the link?",
      "Do you have a blog on Medium?",
    ],
  },
  not_interested: ["Sad to see you go 😔, wish you the best of luck."],
  thank_you: [
    `Thank you for your time, 
    the humans will review your interview and if you pass, 
    you will be contacted shortly after`,
  ],
  greeting: ["Hello There!", "Hey There!"],
};

export default BotSentences;
