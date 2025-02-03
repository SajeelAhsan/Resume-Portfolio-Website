"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend",
    description:
      "Designing responsive, interactive UIs.Technologies: HTML, CSS, JavaScript, React, Angular, Tailwind CSS, Bootstrap.",
    href: "",
  },
  {
    num: "02",
    title: "Backend",
    description:
      "Building RESTful APIs or GraphQL endpoints.Technologies: Node.js, Express.js, Django, Flask, PHP, Java, .NET.Implementing secure login systems (JWT, OAuth)",
    href: "",
  },
  {
    num: "03",
    title: "Database Design",
    description:
      "SQL Databases: MySQL, PostgreSQL, MSSQL. NoSQL Databases: MongoDB.",
    href: "",
  },
  {
    num: "04",
    title: "CI/CD Pipeline",
    description:
      "Automating build, test, and deployment workflows.Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI.",
    href: "",
  },
  {
    num: "05",
    title: "Infrastructure as Code (IaC)",
    description:
      "Automating infrastructure setup using code.Tools: Terraform, Ansible, CloudFormation.",
    href: "",
  },
  {
    num: "06",
    title: "Cloud Management",
    description:
      "Deploying and managing applications in the cloud. Platforms: AWS, Azure, Google Cloud, DigitalOcean.",
    href: "",
  },
  {
    num: "07",
    title: "Containerization & Orchestration",
    description:
      "Using Docker to containerize applications. Managing containers with Kubernetes.",
    href: "",
  },
  {
    num: "08",
    title: "Monitoring & Logging",
    description:
      "Setting up performance monitoring, alerts, and log management.Tools: Prometheus, Grafana, ELK Stack",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[100px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70-px] bg-white rounded-full  group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight  className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p >{service.description}</p>
                <div className="border-b border-white/20 w-full">
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
