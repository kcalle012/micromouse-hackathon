import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.scss";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: "How much programming experience is needed?",
      answer: (
        <>
          <br />
          You'll need minimal coding experience and basic understanding of
          programming logic.
          <br />
        </>
      ),
    },
    {
      id: 2,
      question: "What types of programming languages will be used?",
      answer: (
        <>
          <br />
          Python and C / C++
          <br />
        </>
      ),
    },
    {
      id: 3,
      question:
        "Can there be someone on the team who can focus on the electrical aspects (i.e. wiring connections) of the micromouse?",
      answer: (
        <>
          <br />
          Teams can have members who specialize in the electrical components of
          the micromouse. This person can focus on wiring & connections.
          <br />
        </>
      ),
    },
    {
      id: 4,
      question:
        "Other than the main programmer, what types of teammate do you need (ex: teammate who handles the budget of materials for making the micromouse, teammate who focuses on the electrical aspects)Do I need to pay to participate?",
      answer: (
        <>
          {" "}
          <br />
          There are no specific or assigned roles required for the teams. You
          can simply form a group with other participants or we’ll help assign
          teammates if needed. Our staff will be available throughout the event
          to guide and help you.
          <br />
        </>
      ),
    },
    {
      id: 5,
      question:
        "Are teams randomly assigned? Am I supposed to come up with my team or we'll be paired?",
      answer: (
        <>
          <br />
          We encourage participants to make their own teams but if you don’t
          have one that’s not a problem! We’ll help assign you to a team so
          everyone has a chance to participate and contribute.
          <br />
        </>
      ),
    },
    {
      id: 6,
      question:
        "Will students from other universities be participating in this event as well? If so, which universities will be included, or is it welcomed to all? Would I be allowed to form teams with other students from those universities?",
      answer: (
        <>
          <br />
          Students from NJIT, Stevens, Ramapo, and other universities are
          joining. The event is open to all universities and we encourage
          participants to form teams across different schools!
          <br />
        </>
      ),
    },
    {
      id: 7,
      question: "Is this available for master's students?",
      answer: (
        <>
          {" "}
          <br />
          The event is open to anyone interested in participating including
          master’s students and undergraduates.
          <br />
        </>
      ),
    },
    {
      id: 8,
      question: "I am a beginner and I hope that’s okay.",
      answer: (
        <>
          <br />
          The event welcomes beginners and is designed to help you learn.
          Minimal programming or robotics experience is required and you’ll get
          guidance and support throughout the process.
          <br />
        </>
      ),
    },
    {
      id: 9,
      question:
        "Do we need to bring our hardware or will you be providing the equipment, is it like just we need to design the algorithm for running the car.",
      answer: (
        <>
          <br />
          All necessary hardware and components will be provided for the event
          so you don’t need to bring your own equipment. Participants will focus
          mainly on designing and developing the algorithm that controls the
          micromouse.
          <br />
        </>
      ),
    },
  ];

  return (
    <section className="faq" id="faq">
      <div className="question-container">
        <h2>Frequently Asked Questions</h2>
        {questions.map((q) => (
          <div key={q.id}>
            <button
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1 }}
                  className="answer"
                >
                  {q.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
