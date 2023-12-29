import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

import project1 from '../../public/project1.png'
import project2 from '../../public/project2.png'
import project3 from '../../public/project3.png'
import project4 from '../../public/project4.png'
import project5 from '../../public/project5.png'

function Projects() {
  const projectsData = [
    {
      image: project1,
      projectName: "RideShare",
      projectLink: "https://ride-share-frontend-eight.vercel.app/",
      projectDescription:
        "This is a web application that mimics Uber in a non-commercial manner. The users can give a ride to other user (after their verification is done by admin). Users can also get a ride, view the status of their rides. Used Mapbox API to provide a responsive map in the frontend to view the routes",
      projectTech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Javascript",
        "Mapbox API",
      ],
      projectExternalLinks: {
        github: "https://github.com/AdityaCoder-N/RideShare-frontend",
        externalLink: "https://ride-share-frontend-eight.vercel.app/",
      },
    },
    {
      image: project2,
      projectName: "Hotello",
      projectLink: "https://hotello-service.netlify.app/",
      projectDescription:
        "This is a Hotel booking website made with React and Node.js that shows real-time hotels and their details. With Express.js in the backend, It can track whcih rooms are booked or not for showcasing latest info to user. Integrated with Razorpay Payment Gateway.",
      projectTech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "REST Api",
      ],
      projectExternalLinks: {
        github: "https://github.com/AdityaCoder-N/hotello-frontend",
        externalLink: "https://hotello-service.netlify.app/",
      },
    },
    {
      image: project3,
      projectName: "Company portfolio",
      projectLink: "https://www.invictusglobaltech.com/",
      projectDescription:
        "Revamped the company's portfolio website to give it a modern and fresh look. Created API in next backend to connect mailing service to the company's contact form.",
      projectTech: [
        "Next.js",
        "Tailwind",
        "Resend API"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://www.invictusglobaltech.com/",
      },
    },
    {
      image: project4,
      projectName: "e-Notes",
      projectLink: "https://main--monumental-kelpie-6b72a2.netlify.app/login",
      projectDescription:
        "One of my first Full-stack application , It is an online notes taking website, connected to mongoDB atlas for your notes to be available 24x7. Used JWT authtokens for user authentication.",
      projectTech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT"
      ],
      projectExternalLinks: {
        github: "https://github.com/AdityaCoder-N/iNotebook",
        externalLink: "https://main--monumental-kelpie-6b72a2.netlify.app/login",
      },
    },
    {
      image: project5,
      projectName: "Lung Disease Prediction application",
      projectLink: "https://lungdiseaseprediction.onrender.com/",
      projectDescription:
        "Successfully configured and trained CNN model on X-ray images to detect Pneumonia and tuberculosis. Achieved an accuracy of around 94% in both the models. This project can be used by people with less availibility to doctors, or can reduce the work load of doctors with higher patients count.",
      projectTech: [
        "Deep Learning",
        "Python",
        "Numpy",
        "Tensorflow",
        "OpenCV"
      ],
      projectExternalLinks: {
        github: "https://github.com/AdityaCoder-N/LungsDiseasePredictionSystem",
        externalLink: "https://lungdiseaseprediction.onrender.com/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Projects I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
