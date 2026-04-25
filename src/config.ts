export const siteConfig = {
  name: 'Rishabh Tiwari',
  titleQA: 'QA Engineer → SDET | Test Automation & Quality Engineering',
  titleAIML: 'AI/ML Engineer | Generative AI, NLP & Computer Vision',
  social: {
    email: 'rishabhofficial244@gmail.com',
    linkedin: 'https://linkedin.com/in/iamrishabh27',
    github: 'https://github.com/rishabh0282',
    twitter: 'https://x.com/auracup',
    scholar: 'https://scholar.google.com/citations?user=xu-c9WIAAAAJ',
    orcid: 'https://orcid.org/0000-0003-2000-4167',
  },
  aboutMe:
    'I am a QA Engineer building toward a full SDET profile — combining automation framework design, codebase-level contribution, and a research background in computer vision and deep learning. My work sits at the intersection of engineering quality and AI systems.\n\n' +
    'At Factech (Jan 2026 – Present), I drive Selenium-based automation and API validation on a legacy AngularJS product, investigate defects to root cause, and contribute to open source — with merged PRs on a production Next.js / Node.js / SQLite application.\n\n' +
    'At IBM India (Jun 2022 – Jul 2023), I developed and maintained Selenium WebDriver automation frameworks, designed 180+ automated test scripts, reduced regression testing time by 50%, and validated AI/ML model outputs through structured SQL-based checks.\n\n' +
    'Earlier, as an ML Research Intern at Collaborative Intelligence (Jun 2021 – May 2022), I engineered computer vision pipelines using YOLO architectures and published 5 peer-reviewed papers across IEEE, Springer, and Wiley. I hold ISTQB Foundation Level and Microsoft Azure Fundamentals (AZ-900) certifications, and a B.Tech in Electronics and Communications Engineering from Amity University.',
  skillGroups: [
    {
      label: 'Test Automation',
      skills: ['Selenium WebDriver', 'Playwright', 'TestNG', 'JUnit', 'Page Object Model', 'Data-Driven Testing', 'Cross-Browser Testing', 'Selenium Grid', 'Maven', 'ExtentReports', 'Allure'],
    },
    {
      label: 'Testing & QA',
      skills: ['Regression Testing', 'Functional Testing', 'Integration Testing', 'API Testing', 'Performance Testing', 'Smoke Testing', 'End-to-End Testing', 'BDD/Gherkin', 'Defect Tracking', 'Test Case Design', 'Agile/Scrum'],
    },
    {
      label: 'CI/CD & Tools',
      skills: ['GitHub Actions', 'Jenkins', 'Docker', 'Git', 'JIRA', 'Postman', 'JMeter'],
    },
    {
      label: 'Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript'],
    },
    {
      label: 'AI / ML',
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'LangChain', 'RAG', 'LLMs', 'FAISS'],
    },
  ],
  projects: [
    {
      name: 'EComRegress',
      description: 'Selenium-based regression test suite for a full-featured e-commerce platform with CI/CD integration.',
      link: 'https://github.com/rishabh0282/EComRegress',
      tags: ['Selenium WebDriver', 'TestNG', 'Maven', 'Jenkins', 'Page Object Model', 'Selenium Grid'],
      bullets: [
        'Designed a comprehensive regression suite using Selenium WebDriver, TestNG, and Maven with Page Object Model architecture.',
        'Automated critical user journeys: authentication, product search, cart management, checkout, and order tracking.',
        'Integrated with Jenkins for scheduled nightly execution; achieved 90%+ coverage with parallel execution via Selenium Grid.',
      ],
    },
    {
      name: 'SauceDemo Test Automation',
      description: 'End-to-end automated test suite for the SauceDemo e-commerce demo application.',
      link: 'https://github.com/rishabh0282/saucedemo-test-automation',
      tags: ['Selenium WebDriver', 'TestNG', 'Maven', 'Page Object Model', 'ExtentReports', 'GitHub Actions'],
      bullets: [
        'Built comprehensive automation covering login, inventory, cart, checkout, and payment flows.',
        'Implemented data-driven testing and detailed HTML reporting via ExtentReports.',
        'Integrated with GitHub Actions for continuous testing on every push; 95%+ test coverage.',
      ],
    },
    {
      name: 'WebMobi Test Automation',
      description: 'Automation framework for mobile-responsive web applications.',
      link: 'https://github.com/rishabh0282/webmobi-test-automation',
      tags: ['Selenium WebDriver', 'Java', 'Page Object Model', 'Jenkins', 'TestNG'],
      bullets: [
        'Developed end-to-end framework using Selenium WebDriver and Java with parallel test execution via TestNG.',
        'Validated UI responsiveness across multiple viewport sizes using Selenium mobile emulation.',
        'CI-integrated with Jenkins for automated regression runs on desktop and mobile layouts.',
      ],
    },
  ],
  experience: [
    {
      company: 'Factech',
      title: 'QA Engineer',
      dateRange: 'Jan 2026 – Present',
      bullets: [
        'Driving Selenium-based automation and API validation on a legacy AngularJS product with CI-integrated execution.',
        'Investigating defects to root cause; improving automation stability and reducing flakiness across the test suite.',
        'Open source contributor — merged PRs on a production Next.js / Node.js / SQLite application.',
      ],
    },
    {
      company: 'IBM India Pvt. Ltd.',
      title: 'Associate Systems Engineer',
      dateRange: 'Jun 2022 – Jul 2023',
      bullets: [
        'Developed and maintained Selenium WebDriver automation frameworks for enterprise web applications using Java, TestNG, and Page Object Model; reduced regression testing time by 50%.',
        'Designed and executed 180+ automated test scripts across 5 major application modules with cross-browser coverage via Selenium Grid.',
        'Integrated test suites into Jenkins CI/CD pipelines; collaborated with developers to cut post-release issues by 15%.',
        'Validated AI/ML model outputs and data quality through structured SQL-based checks.',
      ],
    },
    {
      company: 'Collaborative Intelligence Pvt. Ltd.',
      title: 'ML Research Intern',
      dateRange: 'Jun 2021 – May 2022',
      bullets: [
        'Engineered computer vision pipelines using YOLOv4/v8 architectures; improved object detection accuracy by 15%+.',
        'Validated model outputs rigorously through test datasets and ablation studies.',
        'Published 5 peer-reviewed papers across IEEE, Springer, and Wiley.',
      ],
    },
  ],
  publications: [
    {
      name: 'Deep Learning Approach for Object Detection in Satellite Imagery',
      description: 'Engineered modified YOLOv4 architecture for small-object detection in high-resolution satellite imagery, boosting detection speed and accuracy.',
      link: 'https://doi.org/10.1111/exsy.13180',
      publisher: 'Expert Systems (Wiley) · April 2023',
      tags: ['YOLOv4', 'TensorFlow', 'Object Detection', 'Satellite Imagery'],
    },
    {
      name: 'WasteDet: Anchor-Free Detection for Waste Management',
      description: 'Novel anchor-free detection algorithm for waste object recognition, outperforming traditional anchor-based models in cluttered environments.',
      link: 'https://doi.org/10.1109/CISES54857.2022.9844399',
      publisher: 'IEEE CISES · May 2022',
      tags: ['Object Detection', 'Anchor-Free Models', 'Computer Vision'],
    },
    {
      name: 'Computer Vision and Deep Learning for Waste Management Systems',
      description: 'CNN pipeline for automated waste classification, improving accuracy and operational efficiency in sorting systems.',
      link: 'https://doi.org/10.1109/ICACITE53722.2022.9823449',
      publisher: 'IEEE ICACITE · April 2022',
      tags: ['Deep Learning', 'CNN', 'Classification'],
    },
    {
      name: 'Detection of Camouflaged Drones Using Computer Vision',
      description: 'YOLO-based detection system for camouflaged UAVs in complex, low-visibility environments.',
      link: 'https://doi.org/10.1109/Confluence52989.2022.9734191',
      publisher: 'IEEE Confluence · January 2022',
      tags: ['YOLO', 'Object Detection', 'UAV'],
    },
    {
      name: 'Apple Fruit Disease Detection Using K-Means Clustering',
      description: 'MATLAB-based image segmentation and disease detection for agricultural AI; 5% accuracy gain over baseline through optimized clustering.',
      link: 'https://doi.org/10.1007/978-981-16-0695-3_9',
      publisher: 'Springer · October 2021',
      tags: ['MATLAB', 'K-Means Clustering', 'Image Segmentation'],
    },
  ],
  certifications: [
    {
      name: 'ISTQB Foundation Level',
      issuer: 'ISTQB',
      date: '2022',
      description: 'Certified in software testing fundamentals, test design techniques, and QA best practices.',
      badge: '/istqb-ctfl.png',
    },
    {
      name: 'Microsoft Azure Fundamentals AZ-900',
      issuer: 'Microsoft',
      date: '2022',
      description: 'Certified in cloud computing fundamentals and Microsoft Azure services.',
      badge: '/azure-az900.png',
    },
    {
      name: 'Elsevier Certificate of Reviewing',
      issuer: 'Elsevier',
      date: 'Nov 2025',
      description: 'Recognized peer reviewer for Microchemical Journal.',
      badge: '/elsevier-reviewer.png',
    },
  ],
  education: [
    {
      school: 'Amity University',
      degree: 'B.Tech in Electronics and Communications Engineering',
      dateRange: 'May 2022',
      achievements: [],
    },
  ],
};
