// client/src/i18n.tsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- EMBEDDED TRANSLATIONS START ---
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "about": "About Us",
        "careers": "Careers",
        "contact": "Contact",
        "login": "Login",
        "register": "Register"
      },
      "home": {
        "hero": {
          "title": "Innovating the Future of Automation in North Africa",
          "subtitle": "Driving efficiency and growth through advanced robotics, AI, and smart industrial solutions.",
          "cta": "Explore Our Solutions"
        },
        "homeServicesSection": {
          "title": "Our Core Expertise",
          "viewAll": "View All Services"
        },
        "about": {
          "title": "Empowering Industries with Precision and Innovation",
          "paragraph1": "North Africa Automation is a leading provider of cutting-edge industrial automation solutions, dedicated to transforming businesses across the region.",
          "paragraph2": "We specialize in designing, implementing, and maintaining intelligent systems that enhance productivity, optimize operations, and drive sustainable growth.",
          "learnMore": "Learn More About Us"
        },
        "cta": {
          "title": "Ready to Shape the Future with Us?",
          "subtitle": "Join a team of visionaries and innovators pushing the boundaries of automation.",
          "button": "View Open Positions"
        }
      },
      "services": {
        "item1": "Advanced Automation System Design & Integration",
        "desc1": "Crafting bespoke automation systems tailored to your unique operational needs, from conceptualization to full deployment. We ensure seamless integration with existing infrastructure for smart manufacturing.",
        "item2": "Intelligent Robotics Implementation",
        "desc2": "Seamlessly integrating advanced robotic solutions to boost productivity, precision, and safety across various industrial sectors. Our robots perform complex tasks with unparalleled accuracy, enhancing production.",
        "item3": "PLC/SCADA Development & Process Optimization",
        "desc3": "Developing robust and scalable Programmable Logic Controller (PLC) and Supervisory Control and Data Acquisition (SCADA) systems for reliable and efficient process automation and monitoring. We optimize existing systems for peak performance and production enhancement.",
        "item4": "Data Analytics & Predictive Insights",
        "desc4": "Transforming complex operational data into actionable insights. Our predictive analytics solutions help you anticipate trends, optimize resource allocation, and make informed decisions for process and production enhancement.",
        "item5": "Industrial IoT & Digital Transformation Solutions",
        "desc5": "Connecting your machines, sensors, and processes for real-time monitoring, remote control, and enhanced operational visibility. Leverage the power of IoT for smart factories and comprehensive digital transformation.",
        "item6": "Preventive & Predictive Maintenance",
        "desc6": "Implementing smart solutions to predict and prevent equipment failures, minimizing downtime and maintenance costs. Our systems use AI to anticipate issues before they occur, ensuring continuous production.",
        "item7": "AI & Machine Learning Integration in Automatism",
        "desc7": "Integrating artificial intelligence and machine learning models directly into your automation systems for smarter operations and data-driven decision-making. Enhance efficiency, reduce errors, and unlock new capabilities for process and production enhancement.",
        "item8": "Production Enhancement & Efficiency",
        "desc8": "Dedicated solutions focused on improving overall production output, reducing waste, and streamlining workflows through advanced automation and optimization techniques.",
        "whyChooseUsTitle": "Why Choose Our Services?",
        "whyChooseUsPoint1Title": "Tailored Solutions",
        "whyChooseUsPoint1Desc": "Customized automation strategies designed to meet your specific business goals and operational challenges.",
        "whyChooseUsPoint2Title": "Expert Team",
        "whyChooseUsPoint2Desc": "A team of highly skilled engineers and specialists with deep industry knowledge and technical expertise.",
        "whyChooseUsPoint3Title": "Cutting-Edge Technology",
        "whyChooseUsPoint3Desc": "Leveraging the latest advancements in robotics, AI, IoT, and control systems to deliver superior results.",
        "whyChooseUsPoint4Title": "End-to-End Support",
        "whyChooseUsPoint4Desc": "Comprehensive support from initial consultation and design to implementation, training, and ongoing maintenance."
      },
      "servicesPage": {
        "title": "Comprehensive Automation Services",
        "subtitle": "At North Africa Automation, we offer a full spectrum of services designed to revolutionize your industrial operations. Our solutions are built on innovation, reliability, and precision, driving smart manufacturing and digital transformation.",
        "section1Title": "Advanced Automation System Design & Integration",
        "section1Desc": "We specialize in creating bespoke automation systems, including PLC programming, PLC installation, and configuration, tailored to your unique operational needs. From conceptualization to full deployment, our experts ensure your new systems integrate flawlessly with existing infrastructure, enhancing efficiency and productivity across the board for smart manufacturing. Our comprehensive approach covers everything from initial feasibility studies to final commissioning and ongoing support, ensuring a smooth transition and optimal performance.",
        "section2Title": "Intelligent Robotics Implementation",
        "section2Desc": "Seamlessly integrating advanced robotic solutions to boost productivity, precision, and safety across various industrial sectors. Our robots perform complex tasks with unparalleled accuracy, enhancing production. We provide end-to-end services, including robot selection, programming, installation, and maintenance, ensuring optimal performance and rapid ROI for production enhancement. Our solutions range from collaborative robots (cobots) working alongside humans to fully autonomous industrial robots handling heavy-duty tasks.",
        "section3Title": "PLC/SCADA Development & Process Optimization",
        "section3Desc": "We develop robust and scalable Programmable Logic Controller (PLC) and Supervisory Control and Data Acquisition (SCADA) systems that provide reliable and efficient control over your industrial processes. Our services include new system development, optimization of existing setups, and comprehensive training to ensure your team can manage and monitor operations effectively, leading to significant process optimization. We focus on creating intuitive and secure control systems that enhance operational visibility and responsiveness.",
        "section4Title": "Data Analytics & Predictive Insights",
        "section4Desc": "Unlock the true potential of your operational data with our advanced data analytics and predictive insights solutions. We transform raw, complex data into actionable intelligence, enabling you to anticipate trends, optimize resource allocation, predict equipment failures, and make data-driven decisions that enhance overall efficiency and reduce costs, leading to production enhancement. This includes Statistical Process Control (SPC), dynamic charting for real-time visualization, in-depth data analysis, and sophisticated forecasting models to guide strategic planning.",
        "section5Title": "Industrial IoT & Digital Transformation Solutions",
        "section5Desc": "Connecting your machines, sensors (including PLC connections) and processes to a centralized server for real-time monitoring, remote control, and enhanced operational visibility. Leverage the power of IoT for smart factories and comprehensive digital transformation, including customized dashboard creation. Our solutions enable seamless data flow, remote diagnostics, and proactive management of your industrial assets, transforming traditional operations into intelligent, interconnected ecosystems.",
        "section6Title": "Preventive & Predictive Maintenance",
        "desc6": "Implementing smart solutions to predict and prevent equipment failures, minimizing downtime and maintenance costs. Our systems use AI to anticipate issues before they occur, ensuring continuous production. This includes condition monitoring, anomaly detection, and automated maintenance scheduling.",
        "section7Title": "AI & Machine Learning Integration in Automatism",
        "desc7": "Integrate artificial intelligence and machine learning models directly into your automation systems. This includes implementing edge computing to run AI models and ML algorithms for intelligent process optimization, automated quality control, enhanced precision through machine vision, and smarter decision-making, leading to significant production enhancement and efficiency gains. Our solutions enable systems to learn from data, adapt to changing conditions, and perform complex tasks with human-like intelligence.",
        "section8Title": "Production Enhancement & Efficiency",
        "section8Desc": "Our dedicated expertise in production enhancement focuses on analyzing your current manufacturing processes to identify bottlenecks and inefficiencies. We then implement tailored automation solutions, advanced robotics, and intelligent control systems to streamline workflows, reduce waste, and significantly boost your overall production output and operational efficiency. This holistic approach ensures every aspect of your production line is optimized for peak performance and maximum profitability."
      },
      "contactPage": {
        "title": "Connect With North Africa Automation",
        "subtitle": "We're here to answer your questions, provide support, and help you with your automation needs. Reach out to us through the form below or using our contact information.",
        "infoTitle": "Contact Information",
        "addressLabel": "Address",
        "addressValue": "Akbou, Bejaia, Algeria",
        "phoneLabel": "Phone",
        "phoneValue": "+213 (553) 431-748",
        "emailLabel": "Email",
        "emailAddress": "benmahrezbelaid@gmail.com",
        "socialsTitle": "Follow Us on Social Media",
        "formTitle": "Send Us a Message",
        "namePlaceholder": "Your Full Name",
        "emailPlaceholder": "Your Email Address",
        "subjectPlaceholder": "Subject (Optional)",
        "messagePlaceholder": "Your Message",
        "sendButton": "Send Message",
        "successMessage": "Your message has been sent successfully!",
        "errorMessage": "Failed to send message. Please try again."
      },
      "footer": {
        "tagline": "Empowering industries with cutting-edge automation solutions.",
        "quickLinks": "Quick Links",
        "ourServices": "Our Services",
        "connectWithUs": "Connect With Us",
        "allRightsReserved": "All Rights Reserved.",
        "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service"
      },
      "aboutPage": {
        "title": "About North Africa Automation",
        "subtitle": "Pioneering the future of industrial automation and digital transformation in North Africa.",
        "missionTitle": "Our Mission & Vision",
        "missionParagraph": "Our mission is to provide cutting-edge automation solutions that optimize industrial processes, enhance efficiency, and drive sustainable growth across North Africa. We are committed to excellence, innovation, and fostering long-term partnerships with our clients, leading the charge in smart manufacturing and digital transformation.",
        "visionParagraph": "We aspire to be the leading force in industrial automation, recognized for our technological advancements, unwavering reliability, and transformative impact on businesses throughout the region and beyond, setting new benchmarks for process optimization and production enhancement.",
        "valuesTitle": "Our Core Values",
        "value1Title": "Innovation",
        "value1Desc": "We constantly push the boundaries of technology, embracing new ideas and creative approaches to deliver groundbreaking solutions that redefine industry standards.",
        "value2Title": "Reliability",
        "value2Desc": "We ensure consistent performance, operational excellence, and robust security in all our systems, building trust and delivering dependable results for our clients.",
        "value3Title": "Partnership",
        "value3Desc": "We believe in building strong, collaborative, and long-term relationships with our clients, understanding their unique needs and working together to achieve shared success.",
        "value4Title": "Excellence",
        "value4Desc": "We are dedicated to achieving the highest standards in everything we do, from solution design and implementation to customer service and continuous improvement.",
        "value5Title": "Collaboration",
        "value5Desc": "Fostering a collaborative environment internally and with clients to achieve shared goals and drive collective success.",
        "historyTitle": "Our Journey",
        "historyParagraph1": "Founded in 2025, North Africa Automation began with a vision to revolutionize the industrial landscape of the region. Starting as a small team of passionate engineers, we quickly gained recognition for our innovative approach and commitment to quality in automation systems and process optimization.",
        "historyParagraph2": "Over the years, we have expanded our expertise, embraced emerging technologies like AI and IoT for smart manufacturing, and successfully delivered numerous large-scale projects across diverse sectors, including manufacturing, logistics, and energy. Our growth is a testament to our dedication and the trust our clients place in us, driving production enhancement and digital transformation.",
        "teamTitle": "Meet Our Leadership Team",
        "teamParagraph": "Our strength lies in our diverse team of highly skilled engineers, data scientists, and project managers. Each member brings a wealth of experience and a shared passion for automation, working collaboratively to deliver exceptional results.",
        "teamMembers": {
          "belaidBenmahrez": {
            "name": "Belaid Benmahrez",
            "title": "Head of Automation Systems & Business Lead Department",
            "location": "Akbou, Bejaia, Algeria"
          },
          "massinissaTinouche": {
            "name": "Massinissa TINOUCHE",
            "title": "Head of Process Optimization & AI Integration Department",
            "location": "San Jose, California, USA"
          }
        },
        "contactUsCtaTitle": "Ready to Automate Your Success?",
        "contactUsCtaSubtitle": "Let us help you transform your operations and achieve new levels of efficiency and productivity. Contact our team today to discuss your automation needs.",
        "contactUsButton": "Contact Our Team"
      },
      "careersPage": {
        "hero": {
          "title": "Careers at North Africa Automation",
          "subtitle": "We are currently developing our company and will be recruiting talented and challenging candidates in the future. Join us to be part of our innovative journey!",
          "cta": "Learn More About Future Opportunities"
        },
        "culture": {
          "title": "Our Culture and Benefits",
          "paragraph1": "We foster a culture of continuous learning, innovation, and collaboration. We believe in empowering our employees to grow professionally and personally, providing them with the tools and opportunities to excel.",
          "benefit1Title": "Innovation & Learning",
          "benefit1Desc": "An environment that fosters continuous growth and learning of cutting-edge technologies, with access to workshops, certifications, and industry events.",
          "benefit2Title": "Professional Development",
          "benefit2Desc": "Opportunities for training, mentorship, and advancement to grow your career within a rapidly expanding industry.",
          "benefit3Title": "Global Impact",
          "benefit3Desc": "Contribute to meaningful projects that shape the future of industry across North Africa and potentially beyond.",
          "benefit4Title": "Work-Life Balance",
          "benefit4Desc": "We support a healthy work-life balance with flexible working arrangements and comprehensive well-being programs.",
          "benefit5Title": "Competitive Compensation",
          "benefit5Desc": "Attractive salary packages, performance bonuses, and comprehensive health benefits."
        },
        "openingsTitle": "Future Recruitment Opportunities",
        "noOpenings": "No positions currently available? We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.",
        "contactCta": "Send Your Resume",
        "job1": {
          "title": "Future Automation Engineer",
          "location": "Various Locations, North Africa",
          "type": "Full-time",
          "description": "Opportunities will arise for designing, implementing, and maintaining industrial automation systems. Future roles will require strong knowledge of PLC/SCADA, robotics, and industrial networks. Experience with Python or C++ will be a plus."
        },
        "job2": {
          "title": "Future Software Developer (AI/ML)",
          "location": "Algeria, North Africa",
          "type": "Full-time",
          "description": "Future roles will focus on developing advanced software solutions and machine learning models for automation, predictive analytics, and computer vision. Strong programming skills in Python/TensorFlow/PyTorch will be required. Experience with cloud platforms (AWS, Azure, GCP) will be a plus."
        },
        "job3": {
          "title": "Future Robotics Maintenance Technician",
          "location": "Algeria, North Africa",
          "type": "Full-time",
          "description": "Future roles will involve providing technical support, troubleshooting, and preventive maintenance for our robotic solutions on client sites. Will require hands-on experience with industrial robots and strong problem-solving skills."
        },
        "job4": {
          "title": "Future IoT Solutions Architect",
          "location": "Various Locations, North Africa",
          "type": "Full-time",
          "description": "Future roles will involve designing and implementing scalable Industrial IoT architectures, including sensor integration, data ingestion, and customized dashboard creation. Strong understanding of IoT protocols and security best practices will be essential."
        }
      },
      "auth": {
        "emailLabel": "Email Address",
        "emailPlaceholder": "Enter your email address",
        "passwordLabel": "Password",
        "passwordPlaceholder": "Enter your password",
        "rememberMe": "Remember me",
        "forgotPassword": "Forgot password?",
        "login": {
          "title": "Welcome Back",
          "subtitle": "Please log in to your account.",
          "button": "Log In",
          "link": "Log In"
        },
        "register": {
          "title": "Create an Account",
          "subtitle": "Sign up to access our services.",
          "button": "Register",
          "link": "Register"
        },
        "nameLabel": "Full Name",
        "namePlaceholder": "Enter your full name",
        "confirmPasswordLabel": "Confirm Password",
        "confirmPasswordPlaceholder": "Confirm your password",
        "noAccount": "Don't have an account?",
        "haveAccount": "Already have an account?"
      },
      "aiMlPage": {
        "title": "AI & Machine Learning Embedding in Automation",
        "subtitle": "Harness the power of Artificial Intelligence and Machine Learning to transform your operations, drive efficiency, and unlock new levels of productivity.",
        "introParagraph1": "At North Africa Automation, we integrate cutting-edge AI and ML models directly into your industrial processes, enabling intelligent decision-making, predictive capabilities, and autonomous operations. This includes implementing edge computing to run AI models and ML algorithms directly on devices, reducing latency and enhancing real-time responsiveness.",
        "introParagraph2": "Our expertise spans across various applications, from optimizing complex manufacturing lines to enhancing quality control, predicting maintenance needs, and providing comprehensive data insights through Statistical Process Control (SPC), advanced charting, in-depth data analysis, and precise forecasting.",
        "featuresTitle": "Key Features of Our AI/ML Solutions",
        "feature1Title": "Predictive Analytics & Forecasting for Operational Efficiency",
        "feature1Desc": "Leverage AI to analyze vast datasets, predict future outcomes, and optimize resource allocation, leading to significant cost savings and improved throughput. This includes advanced forecasting models that anticipate market demands and operational bottlenecks, ensuring proactive decision-making.",
        "feature2Title": "Automated Quality Control Systems with SPC",
        "feature2Desc": "Implement machine vision and deep learning models for real-time defect detection and quality assurance, drastically reducing errors and waste. Integrated with Statistical Process Control (SPC) for robust monitoring, our systems ensure consistent product quality and compliance with industry standards.",
        "feature3Title": "Intelligent Process Optimization & Data Analysis",
        "feature3Desc": "Utilize ML algorithms to continuously learn and adapt to changing conditions, fine-tuning your processes for maximum efficiency and performance. Supported by in-depth data analysis, our solutions identify hidden patterns and opportunities for improvement, driving continuous operational excellence.",
        "feature4Title": "Machine Vision for Enhanced Precision & Charting",
        "feature4Desc": "Integrate advanced computer vision systems for tasks requiring high precision, such as robotic guidance, assembly verification, and anomaly detection. Visualized through dynamic charting, these systems provide immediate feedback and actionable insights, enhancing accuracy and reducing manual inspection efforts.",
        "feature5Title": "Natural Language Processing (NLP) for HMI",
        "feature5Desc": "Enhance human-machine interaction with NLP, allowing for intuitive voice commands and intelligent data interpretation from unstructured text. This simplifies complex operations, improves accessibility, and enables more natural communication with automated systems.",
        "feature6Title": "Reinforcement Learning for Autonomous Systems",
        "feature6Desc": "Develop self-learning autonomous systems that can make optimal decisions in dynamic environments, from robotic navigation to complex system control. These systems continuously improve their performance through trial and error, adapting to unforeseen circumstances and maximizing operational autonomy.",
        "benefitsTitle": "Benefits of AI/ML Integration",
        "benefit1": "Increased Efficiency & Productivity: Streamline operations, reduce manual intervention, and accelerate production cycles.",
        "benefit2": "Reduced Operational Costs: Minimize waste, optimize resource utilization, and lower energy consumption.",
        "benefit3": "Improved Product Quality: Ensure consistent quality through automated inspection and defect detection.",
        "benefit4": "Enhanced Safety & Reliability: Mitigate risks, predict equipment failures, and ensure continuous operation.",
        "benefit5": "Faster Decision-Making: Gain real-time insights and predictive intelligence for agile strategic responses.",
        "ctaTitle": "Ready to Transform Your Industry with AI?",
        "ctaSubtitle": "Our team of AI/ML specialists is ready to design and implement bespoke solutions tailored to your unique industrial challenges. Contact us to schedule a consultation.",
        "ctaButton": "Discuss Your AI/ML Project"
      },
      "dashboard": {
        "title": "User Dashboard",
        "welcome": "Welcome",
        "logout": "Logout"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "services": "Services",
        "about": "À propos de nous",
        "careers": "Carrières",
        "contact": "Contact",
        "login": "Se connecter",
        "register": "S'inscrire"
      },
      "home": {
        "hero": {
          "title": "Innover l'avenir de l'automatisation en Afrique du Nord",
          "subtitle": "Favoriser l'efficacité et la croissance grâce à la robotique avancée, à l'IA et aux solutions industrielles intelligentes.",
          "cta": "Découvrir nos solutions"
        },
        "homeServicesSection": {
          "title": "Notre expertise principale",
          "viewAll": "Voir tous les services"
        },
        "about": {
          "title": "Donner du pouvoir aux industries avec précision et innovation",
          "paragraph1": "North Africa Automation est un fournisseur de premier plan de solutions d'automatisation industrielle de pointe, dédié à la transformation des entreprises dans toute la région.",
          "paragraph2": "Nous sommes spécialisés dans la conception, la mise en œuvre et la maintenance de systèmes intelligents qui améliorent la productivité, optimisent les opérations et favorisent une croissance durable.",
          "learnMore": "En savoir plus sur nous"
        },
        "cta": {
          "title": "Prêt à façonner l'avenir avec nous ?",
          "subtitle": "Rejoignez une équipe de visionnaires et d'innovateurs repoussant les limites de l'automatisation.",
          "button": "Voir les postes ouverts"
        }
      },
      "services": {
        "item1": "Conception et intégration de systèmes d'automatisation avancés",
        "desc1": "Élaboration de systèmes d'automatisation sur mesure, de la conceptualisation au déploiement complet, adaptés à vos besoins opérationnels uniques. Nous assurons une intégration transparente avec l'infrastructure existante pour la fabrication intelligente.",
        "item2": "Mise en œuvre de robotique intelligente",
        "desc2": "Intégration transparente de solutions robotiques avancées pour augmenter la productivité, la précision et la sécurité dans divers secteurs industriels. Nos robots effectuent des tâches complexes avec une précision inégalée, améliorant la production.",
        "item3": "Développement et optimisation PLC/SCADA et des processus",
        "desc3": "Développement de systèmes robustes et évolutifs de contrôleurs logiques programmables (PLC) et de systèmes de contrôle et d'acquisition de données (SCADA) pour une automatisation et une surveillance des processus fiables et efficaces. Nous optimisons les systèmes existants pour des performances optimales et l'amélioration de la production.",
        "item4": "Analyse de données et aperçus prédictifs",
        "desc4": "Transformation de données opérationnelles complexes en informations exploitables. Nos solutions d'analyse prédictive vous aident à anticiper les tendances, à optimiser l'allocation des ressources et à prendre des décisions éclairées pour l'optimisation des processus et l'amélioration de la production.",
        "item5": "Solutions IdO industriel et de transformation numérique",
        "desc5": "Connexion de vos machines, capteurs et processus pour une surveillance en temps réel, un contrôle à distance et une visibilité opérationnelle améliorée. Tirez parti de la puissance de l'IoT pour les usines intelligentes et une transformation numérique complète.",
        "item6": "Maintenance préventive et prédictive",
        "desc6": "Mise en œuvre de solutions intelligentes pour prévoir et prévenir les pannes d'équipement, minimisant ainsi les temps d'arrêt et les coûts de maintenance. Nos systèmes utilisent l'IA pour anticiper les problèmes avant qu'ils ne surviennent, assurant une production continue.",
        "item7": "Intégration de l'IA et de l'apprentissage automatique dans l'automatisme",
        "desc7": "Intégration de modèles d'intelligence artificielle et d'apprentissage automatique directement dans vos systèmes d'automatisation pour des opérations plus intelligentes et une prise de décision basée sur les données. Améliorez l'efficacité, réduisez les erreurs et débloquez de nouvelles capacités pour l'optimisation des processus et l'amélioration de la production.",
        "item8": "Amélioration de la production et de l'efficacité",
        "desc8": "Solutions dédiées axées sur l'amélioration de la production globale, la réduction des déchets et la rationalisation des flux de travail grâce à des techniques d'automatisation et d'optimisation avancées.",
        "whyChooseUsTitle": "Pourquoi choisir nos services ?",
        "whyChooseUsPoint1Title": "Solutions sur mesure",
        "whyChooseUsPoint1Desc": "Stratégies d'automatisation personnalisées conçues pour atteindre vos objectifs commerciaux spécifiques et relever vos défis opérationnels.",
        "whyChooseUsPoint2Title": "Équipe d'experts",
        "whyChooseUsPoint2Desc": "Une équipe d'ingénieurs et de spécialistes hautement qualifiés possédant une connaissance approfondie de l'industrie et une expertise technique.",
        "whyChooseUsPoint3Title": "Technologie de pointe",
        "whyChooseUsPoint3Desc": "Tirer parti des dernières avancées en robotique, IA, IoT et systèmes de contrôle pour obtenir des résultats supérieurs.",
        "whyChooseUsPoint4Title": "Support de bout en bout",
        "whyChooseUsPoint4Desc": "Support complet, de la consultation initiale et de la conception à la mise en œuvre, la formation et la maintenance continue."
      },
      "servicesPage": {
        "title": "Services d'automatisation complets",
        "subtitle": "Chez North Africa Automation, nous offrons une gamme complète de services conçus pour révolutionner vos opérations industrielles. Nos solutions sont basées sur l'innovation, la fiabilité et la précision, favorisant la fabrication intelligente et la transformation numérique.",
        "section1Title": "Conception et intégration de systèmes d'automatisation avancés",
        "section1Desc": "Nous sommes spécialisés dans la création de systèmes d'automatisation sur mesure qui s'alignent parfaitement avec vos besoins opérationnels uniques. De la conceptualisation et de l'ingénierie détaillée au déploiement transparent, nos experts garantissent que vos nouveaux systèmes s'intègrent parfaitement à votre infrastructure existante, améliorant l'efficacité et la productivité à tous les niveaux pour la fabrication intelligente.",
        "section2Title": "Mise en œuvre de robotique intelligente",
        "section2Desc": "Nos solutions robotiques intelligentes sont conçues pour automatiser les tâches complexes, répétitives ou dangereuses, augmentant la productivité, la précision et la sécurité dans divers secteurs industriels. Nous fournissons des services de bout en bout, y compris la sélection, la programmation, l'installation et la maintenance des robots, garantissant des performances optimales et un retour sur investissement rapide pour l'amélioration de la production.",
        "section3Title": "Développement et optimisation PLC/SCADA et des processus",
        "section3Desc": "Nous développons des systèmes robustes et évolutifs de contrôleurs logiques programmables (PLC) et de systèmes de contrôle et d'acquisition de données (SCADA) qui offrent un contrôle fiable et efficace de vos processus industriels. Nos services comprennent le développement de nouveaux systèmes, l'optimisation des configurations existantes et une formation complète pour garantir que votre équipe peut gérer et surveiller efficacement les opérations, conduisant à une optimisation significative des processus.",
        "section4Title": "Analyse de données et aperçus prédictifs",
        "section4Desc": "Libérez le véritable potentiel de vos données opérationnelles grâce à nos solutions avancées d'analyse de données et d'aperçus prédictifs. Nous transformons les données brutes et complexes en informations exploitables, vous permettant d'anticiper les tendances, d'optimiser l'allocation des ressources, de prédire les pannes d'équipement et de prendre des décisions basées sur les données qui améliorent l'efficacité globale et réduisent les coûts, conduisant à l'amélioration de la production.",
        "section5Title": "Solutions IdO industriel et de transformation numérique",
        "section5Desc": "Adoptez l'avenir de la fabrication intelligente avec nos solutions d'Internet des objets industriel (IIoT) et de connectivité. Nous connectons vos machines, capteurs et processus à un réseau centralisé, offrant une surveillance en temps réel, des capacités de contrôle à distance et une visibilité opérationnelle améliorée, ouvrant la voie à des usines véritablement intelligentes et une transformation numérique complète.",
        "section6Title": "Maintenance préventive et prédictive",
        "section6Desc": "Minimisez les temps d'arrêt et prolongez la durée de vie de votre équipement grâce à nos solutions de maintenance de pointe. Nous mettons en œuvre des systèmes intelligents qui utilisent l'IA et l'apprentissage automatique pour prédire les pannes potentielles d'équipement avant qu'elles ne se produisent, permettant une maintenance proactive et des économies significatives. Nos stratégies préventives garantissent que vos opérations se déroulent sans heurts et en continu, soutenant l'amélioration de la production.",
        "section7Title": "Intégration de l'IA et de l'apprentissage automatique dans l'automatisme",
        "section7Desc": "Intégrez des modèles d'intelligence artificielle et d'apprentissage automatique directement dans vos systèmes d'automatisation. Cela permet une optimisation intelligente des processus, un contrôle qualité automatisé, une précision améliorée grâce à la vision par machine et une prise de décision plus intelligente, conduisant à une amélioration significative de la production et des gains d'efficacité.",
        "section8Title": "Amélioration de la production et de l'efficacité",
        "section8Desc": "Notre expertise dédiée à l'amélioration de la production se concentre sur l'analyse de vos processus de fabrication actuels afin d'identifier les goulots d'étranglement et les inefficacités. Nous mettons ensuite en œuvre des solutions d'automatisation sur mesure, des robots avancés et des systèmes de contrôle intelligents pour rationaliser les flux de travail, réduire les déchets et augmenter considérablement votre production globale et votre efficacité opérationnelle.",
        "contactCtaTitle": "Prêt à discuter de votre projet ?",
        "contactCtaSubtitle": "Nos experts sont là pour vous aider à trouver la solution d'automatisation parfaite pour votre entreprise. Construisons l'avenir ensemble.",
        "contactCtaButton": "Contactez-nous"
      },
      "contactPage": {
        "title": "Connectez-vous avec North Africa Automation",
        "subtitle": "Nous sommes là pour répondre à vos questions, vous apporter un soutien et vous aider avec vos besoins en automatisation. Contactez-nous via le formulaire ci-dessous ou en utilisant nos coordonnées.",
        "infoTitle": "Coordonnées",
        "address": "123, Rue de l'Automatisation, Ville Technologique, Afrique du Nord",
        "phone": "+212 5XX XXX XXX",
        "email": "info@naa-automation.com",
        "socialsTitle": "Suivez-nous sur les réseaux sociaux",
        "formTitle": "Envoyez-nous un message",
        "namePlaceholder": "Votre nom complet",
        "emailPlaceholder": "Votre adresse e-mail",
        "subjectPlaceholder": "Sujet (Facultatif)",
        "messagePlaceholder": "Votre message",
        "sendButton": "Envoyer le message",
        "successMessage": "Votre message a été envoyé avec succès !",
        "errorMessage": "Échec de l'envoi du message. Veuillez réessayer."
      },
      "footer": {
        "tagline": "Donner du pouvoir aux industries avec des solutions d'automatisation de pointe.",
        "quickLinks": "Liens rapides",
        "ourServices": "Nos services",
        "connectWithUs": "Connectez-vous avec nous",
        "allRightsReserved": "Tous droits réservés.",
        "privacyPolicy": "Politique de confidentialité",
        "termsOfService": "Conditions d'utilisation"
      },
      "aboutPage": {
        "title": "À propos de North Africa Automation",
        "subtitle": "Pionnier de l'avenir de l'automatisation industrielle intelligente en Afrique du Nord.",
        "missionTitle": "Notre Mission & Vision",
        "missionParagraph": "Notre mission est de fournir des solutions d'automatisation de pointe qui optimisent les processus industriels, améliorent l'efficacité et favorisent une croissance durable en Afrique du Nord. Nous nous engageons à l'excellence, à l'innovation et à l'établissement de partenariats à long terme avec nos clients, menant la charge dans la fabrication intelligente et la transformation numérique.",
        "visionParagraph": "Nous aspirons à être la force motrice de l'automatisation industrielle, reconnue pour nos avancées technologiques, notre fiabilité inébranlable et notre impact transformateur sur les entreprises de la région et au-delà, établissant de nouvelles références pour l'optimisation des processus et l'amélioration de la production.",
        "valuesTitle": "Nos Valeurs Fondamentales",
        "value1Title": "Innovation",
        "value1Desc": "Nous repoussons constamment les limites de la technologie, en adoptant de nouvelles idées et des approches créatives pour offrir des solutions révolutionnaires qui redéfinissent les normes de l'industrie.",
        "value2Title": "Fiabilité",
        "value2Desc": "Nous assurons des performances constantes, l'excellence opérationnelle et une sécurité robuste dans tous nos systèmes, instaurant la confiance et fournissant des résultats fiables à nos clients.",
        "value3Title": "Partenariat",
        "value3Desc": "Nous croyons en la construction de relations solides, collaboratives et à long terme avec nos clients, en comprenant leurs besoins uniques et en travaillant ensemble pour atteindre un succès partagé.",
        "value4Title": "Excellence",
        "value4Desc": "Nous nous engageons à atteindre les normes les plus élevées dans tout ce que nous faisons, de la conception et de la mise en œuvre des solutions au service client et à l'amélioration continue.",
        "historyTitle": "Notre parcours",
        "historyParagraph1": "Fondée en [Année], North Africa Automation a commencé avec la vision de révolutionner le paysage industriel de la région. En tant que petite équipe d'ingénieurs passionnés, nous avons rapidement été reconnus pour notre approche innovante et notre engagement envers la qualité dans les systèmes d'automatisation et l'optimisation des processus.",
        "historyParagraph2": "Au fil des ans, nous avons élargi notre expertise, adopté des technologies émergentes comme l'IA et l'IoT pour la fabrication intelligente, et livré avec succès de nombreux projets à grande échelle.",
        "teamTitle": "Rencontrez notre équipe de direction",
        "teamParagraph": "Notre force réside dans notre équipe de passionés، de scientifiques des données et de chefs de projet hautement qualifiés. Chaque membre apporte une richesse d'expérience et une passion commune pour l'automatisme et  travaillant en collaboration.",
        "teamMembers": {
          "belaidBenmahrez": {
            "name": "Belaid Benmahrez",
            "title": "Chef des systèmes d'automatisation et du département de développement commercial",
            "location": "Akbou, Bejaia, Algeria"
          },
          "massinissaTinouche": {
            "name": "Massinissa TINOUCHE",
            "title": "Chef du département d'optimisation des processus et d'intégration de l'IA",
            "location": "San Jose, Californie, USA"
          }
        },
        "contactUsCtaTitle": "Prêt à automatiser votre succès ?",
        "contactUsCtaSubtitle": "Laissez-nous vous aider à transformer vos opérations et à atteindre de nouveaux niveaux d'efficacité et de productivité. Contactez notre équipe dès aujourd'hui pour discuter de vos besoins en automatisation.",
        "contactUsButton": "Contactez notre équipe"
      },
      "careersPage": {
        "hero": {
          "title": "Carrières chez North Africa Automation",
          "subtitle": "Rejoignez une équipe dynamique dédiée à la révolution de l'automatisation industrielle. Chez NAA, vous trouverez un environnement stimulant mais gratifiant où l'innovation prospère et où vos contributions ont un réel impact.",
          "cta": "Voir les postes ouverts"
        },
        "culture": {
          "title": "Notre Culture et Avantages",
          "paragraph1": "Nous favorisons une culture d'apprentissage continu, d'innovation et de collaboration. Nous croyons qu'il faut donner à nos employés les moyens de se développer professionnellement et personnellement, en leur fournissant les outils et les opportunités d'exceller.",
          "benefit1Title": "Innovation et Apprentissage",
          "benefit1Desc": "Un environnement qui favorise la croissance continue et l'apprentissage de technologies de pointe, avec accès à des ateliers, des certifications et des événements de l'industrie.",
          "benefit2Title": "Développement Professionnel",
          "benefit2Desc": "Des opportunités de formation, de mentorat et d'avancement pour développer votre carrière au sein d'une industrie en pleine expansion.",
          "benefit3Title": "Impact Global",
          "benefit3Desc": "Contribuez à des projets significatifs qui façonnent l'avenir de l'industrie en Afrique du Nord et potentiellement au-delà.",
          "benefit4Title": "Équilibre vie professionnelle-vie privée",
          "benefit4Desc": "Nous soutenons un équilibre sain entre vie professionnelle et vie privée avec des modalités de travail flexibles et des programmes de bien-être complets.",
          "benefit5Title": "Rémunération compétitive",
          "benefit5Desc": "Des salaires attractifs, des primes de performance et des avantages sociaux complets."
        },
        "openingsTitle": "Fturs Postes ",
        "noOpenings": "Aucun poste actuellement disponible, nous aurons besoin de personnes talentueuses. Envoyez-nous votre CV et dites-nous comment vous pouvez contribuer à notre mission.",
        "contactCta": "Envoyer votre CV",
        "job1": {
          "title": "Ingénieur en automatisation",
          "location": "Algérie",
          "type": "Temps plein",
          "description": "Responsable de la conception, de la mise en œuvre et de la maintenance des systèmes d'automatisation industrielle. Nécessite une solide connaissance des PLC/SCADA, de la robotique et des réseaux industriels. L'expérience avec Python ou C++ est un plus."
        },
        "job2": {
          "title": "Développeur Logiciel (IA/ML)",
          "location": "Algérie",
          "type": "Full-time",
          "description": "Développement de solutions logicielles avancées et de modèles d'apprentissage automatique pour l'automatisation, l'analyse prédictive et la vision par ordinateur. Solides compétences en programmation Python/TensorFlow/PyTorch requises. L'expérience avec les plateformes cloud (AWS, Azure, GCP) est un plus."
        },
        "job3": {
          "title": "Technicien de maintenance robotique",
          "location": "Algérie",
          "type": "Full-time",
          "description": "Fournir un support technique، un dépannage et une maintenance préventive pour nos solutions robotiques sur les sites clients. "},
        "job4": {
          "title": "Architecte de solutions IoT",
          "location": "Algérie",
          "type": "Full-time",
          "description": "Conception et mise en œuvre d'architectures IoT industrielles évolutives, y compris l'intégration de capteurs, l'ingestion de données et la connectivité cloud. Solide compréhension des protocoles IoT et des meilleures pratiques de sécurité."
        }
      },
      "auth": {
        "emailLabel": "Adresse e-mail",
        "emailPlaceholder": "Entrez votre adresse e-mail",
        "passwordLabel": "Mot de passe",
        "passwordPlaceholder": "Entrez votre mot de passe",
        "rememberMe": "Se souvenir de moi",
        "forgotPassword": "Mot de passe oublié?",
        "login": {
          "title": "Bienvenue de retour",
          "subtitle": "Veuillez vous connecter à votre compte.",
          "button": "Se connecter",
          "link": "Se connecter"
        },
        "register": {
          "title": "Créer un compte",
          "subtitle": "Inscrivez-vous pour accéder à nos services.",
          "button": "S'inscrire",
          "link": "S'inscrire"
        },
        "nameLabel": "Nom complet",
        "namePlaceholder": "Entrez votre nom complet",
        "confirmPasswordLabel": "Confirmer le mot de passe",
        "confirmPasswordPlaceholder": "Confirmez votre mot de passe",
        "noAccount": "Vous n'avez pas de compte ?",
        "haveAccount": "Vous avez déjà un compte ?"
      },
      "aiMlPage": {
        "featuresTitle": "Fonctionnalités Clés de Nos Solutions IA/ML",
        "feature1": "Analyse Prédictive pour l'Efficacité Opérationnelle",
        "feature2": "Systèmes de Contrôle Qualité Automatisés",
        "feature3": "Optimisation Intelligente des Processus",
        "feature4": "Vision par Machine pour une Précision Améliorée",
        "ctaButton": "Discutez de votre projet IA/ML"
      },
      "dashboard": {
        "title": "Tableau de bord utilisateur",
        "welcome": "Bienvenue",
        "logout": "Déconnexion"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "services": "الخدمات",
        "about": "حول الشركة",
        "careers": "الوظائف",
        "contact": "اتصل بنا",
        "login": "تسجيل الدخول",
        "register": "التسجيل"
      },
      "home": {
        "hero": {
          "title": "ابتكار مستقبل الأتمتة في شمال أفريقيا",
          "subtitle": "قيادة الكفاءة والنمو من خلال الروبوتات المتقدمة، والذكاء الاصطناعي، والحلول الصناعية الذكية.",
          "cta": "استكشف حلولنا"
        },
        "homeServicesSection": {
          "title": "خبرتنا الأساسية",
          "viewAll": "عرض جميع الخدمات"
        },
        "about": {
          "title": "تمكين الصناعات بالدقة والابتكار",
          "paragraph1": "تعتبر شركة North Africa Automation مزودًا رائدًا لحلول الأتمتة الصناعية المتطورة، المخصصة لتحويل الأعمال في جميع أنحاء المنطقة.",
          "paragraph2": "نحن متخصصون في تصميم وتطبيق وصيانة الأنظمة الذكية التي تعزز الإنتاجية، وتحسن العمليات، وتدفع النمو المستدام.",
          "learnMore": "اعرف المزيد عنا"
        },
        "cta": {
          "title": "هل أنت مستعد لتشكيل المستقبل معنا؟",
          "subtitle": "انضم إلى فريق من أصحاب الرؤى والمبتكرين الذين يدفعون حدود الأتمتة.",
          "button": "عرض الوظائف المتاحة"
        }
      },
      "services": {
        "item1": "تصميم وتكامل أنظمة الأتمتة المتقدمة",
        "desc1": "صياغة أنظمة أتمتة مصممة خصيصًا لتلبية احتياجاتك التشغيلية الفريدة، من التصور إلى النشر الكامل. نحن نضمن التكامل السلس مع البنية التحتية الحالية للتصنيع الذكي  ",
        "item2": "تطبيق الروبوتات الذكية",
        "desc2": "دمج حلول الروبوتات المتقدمة بسلاسة لزيادة الإنتاجية والدقة والسلامة عبر مختلف القطاعات الصناعية. تقوم روبوتاتنا بأداء مهام معقدة بدقة لا مثيل لها، مما يعزز الإنتاج.",
        "item3": "تطوير وتحسين PLC/SCADA وتحسين العمليات",
        "desc3": "تطوير أنظمة تحكم منطقية قابلة للبرمجة (PLC) وأنظمة تحكم وإشراف على البيانات (SCADA) قوية وقابلة للتطوير لأتمتة ومراقبة العمليات بشكل موثوق وفعال. نحن نحسن الأنظمة الحالية لتحقيق أقصى أداء وتحسين الإنتاج.",
        "item4": "تحليل البيانات والرؤى التنبؤية",
        "desc4": "تحويل البيانات التشغيلية المعقدة إلى رؤى قابلة للتنفيذ. تساعدك حلولنا التحليلية التنبؤية على توقع الاتجاهات، وتحسين تخصيص الموارد، واتخاذ قرارات مستنيرة لتحسين العمليات والإنتاج.",
        "item5": "حلول إنترنت الأشياء الصناعية والتحول الرقمي",
        "desc5": "ربط أجهزتك وأجهزة الاستشعار والعمليات للمراقبة في الوقت الفعلي، والتحكم عن بعد، وتحسين الرؤية التشغيلية. استفد من قوة إنترنت الأشياء للمصانع الذكية والتحول الرقمي الشامل.",
        "item6": "الصيانة الوقائية والتنبؤية",
        "desc6": "تنفيذ حلول ذكية للتنبؤ بأعطال المعدات ومنعها، مما يقلل من وقت التوقف وتكاليف الصيانة. تستخدم أنظمتنا الذكاء الاصطناعي لتوقع المشكلات قبل حدوثها، مما يضمن استمرارية الإنتاج.",
        "item7": "دمج الذكاء الاصطناعي والتعلم الآلي في الأتمتة",
        "desc7": "دمج نماذج الذكاء الاصطناعي والتعلم الآلي مباشرة في أنظمة الأتمتة الخاصة بك لعمليات أكثر ذكاءً واتخاذ قرارات تعتمد على البيانات. عزز الكفاءة، وقلل الأخطاء، وافتح قدرات جديدة لتحسين العمليات والإنتاج.",
        "item8": "تعزيز الإنتاج والكفاءة",
        "desc8": "حلول مخصصة تركز على تحسين الإنتاج الإجمالي، وتقليل النفايات، وتبسيط سير العمل من خلال تقنيات الأتمتة والتحسين المتقدمة.",
        "whyChooseUsTitle": "لماذا تختار خدماتنا؟",
        "whyChooseUsPoint1Title": "حلول مخصصة",
        "whyChooseUsPoint1Desc": "استراتيجيات أتمتة مخصصة مصممة لتلبية أهداف عملك المحددة وتحديات التشغيل.",
        "whyChooseUsPoint2Title": "فريق من الخبراء",
        "whyChooseUsPoint2Desc": "فريق من المهندسين والمتخصصين ذوي المهارات العالية والخبرة العميقة في الصناعة والخبرة الفنية.",
        "whyChooseUsPoint3Title": "أحدث التقنيات",
        "whyChooseUsPoint3Desc": "الاستفادة من أحدث التطورات في الروبوتات والذكاء الاصطناعي وإنترنت الأشياء وأنظمة التحكم لتقديم نتائج متفوقة.",
        "whyChooseUsPoint4Title": "دعم شامل",
        "whyChooseUsPoint4Desc": "دعم شامل من الاستشارة الأولية والتصميم إلى التنفيذ والتدريب والصيانة المستمرة."
      },
      "servicesPage": {
        "title": "خدمات الأتمتة الشاملة",
        "subtitle": "في North Africa Automation، نقدم مجموعة كاملة من الخدمات المصممة لإحداث ثورة في عملياتك الصناعية. تعتمد حلولنا على الابتكار والموثوقية والدقة، مما يدفع التصنيع الذكي والتحول الرقمي.",
        "section1Title": "تصميم وتكامل أنظمة الأتمتة المتقدمة",
        "section1Desc": "نحن متخصصون في إنشاء أنظمة أتمتة مخصصة، بما في ذلك برمجة PLC، وتركيب وتكوين PLC، مصممة خصيصًا لاحتياجاتك التشغيلية الفريدة. من التصور إلى النشر الكامل، يضمن خبراؤنا أن تتكامل أنظمتك الجديدة بسلاسة مع البنية التحتية الحالية لديك، مما يعزز الكفاءة والإنتاجية في جميع المجالات للتصنيع الذكي. يغطي نهجنا الشامل كل شيء بدءًا من دراسات الجدوى الأولية وحتى التشغيل النهائي والدعم المستمر، مما يضمن انتقالًا سلسًا وأداءً أمثل.",
        "section2Title": "تطبيق الروبوتات الذكية",
        "section2Desc": "تم تصميم حلولنا الروبوتية الذكية لأتمتة المهام المعقدة أو المتكررة أو الخطرة، مما يزيد من الإنتاجية والدقة والسلامة في مختلف القطاعات الصناعية. نحن نقدم خدمات شاملة، بما في ذلك اختيار الروبوتات وبرمجتها وتركيبها وصيانتها، مما يضمن الأداء الأمثل وعائدًا سريعًا على الاستثمار لتحسين الإنتاج. تتراوح حلولنا من الروبوتات التعاونية (cobots) التي تعمل جنبًا إلى جنب مع البشر إلى الروبوتات الصناعية المستقلة تمامًا التي تتعامل مع المهام الشاقة.",
        "section3Title": "تطوير وتحسين PLC/SCADA وتحسين العمليات",
        "section3Desc": "نحن نطور أنظمة تحكم منطقية قابلة للبرمجة (PLC) وأنظمة تحكم وإشراف على البيانات (SCADA) قوية وقابلة للتطوير توفر تحكمًا موثوقًا وفعالًا في عملياتك الصناعية. تشمل خدماتنا تطوير أنظمة جديدة، وتحسين الإعدادات الحالية، وتدريبًا شاملاً لضمان قدرة فريقك على إدارة العمليات ومراقبتها بفعالية، مما يؤدي إلى تحسين كبير في العمليات. نحن نركز على إنشاء أنظمة تحكم بديهية وآمنة تعزز الرؤية التشغيلية والاستجابة.",
        "section4Title": "تحليل البيانات والرؤى التنبؤية",
        "section4Desc": "أطلق العنان للإمكانات الحقيقية لبياناتك التشغيلية من خلال حلولنا المتقدمة لتحليل البيانات والرؤى التنبؤية. نحن نحول البيانات الخام والمعقدة إلى معلومات قابلة للتنفيذ، مما يمكّنك من توقع الاتجاهات، وتحسين تخصيص الموارد، والتنبؤ بأعطال المعدات، واتخاذ قرارات تعتمد على البيانات التي تعزز الكفاءة العامة وتخفض التكاليف، مما يؤدي إلى تحسين الإنتاج. وهذا يشمل التحكم الإحصائي في العمليات (SPC)، ورسم الخرائط الديناميكية للمراقبة في الوقت الفعلي، وتحليل البيانات المتعمق، ونماذج التنبؤ المتطورة لتوجيه التخطيط الاستراتيجي.",
        "section5Title": "حلول إنترنت الأشياء الصناعية والتحول الرقمي",
        "section5Desc": "ربط أجهزتك وأجهزة الاستشعار والعمليات (بما في ذلك اتصالات PLC) بخادم مركزي للمراقبة في الوقت الفعلي، والتحكم عن بعد، والرؤية التشغيلية المحسنة. استفد من قوة إنترنت الأشياء للمصانع الذكية والتحول الرقمي الشامل، بما في ذلك إنشاء لوحات معلومات مخصصة. تمكن حلولنا تدفق البيانات بسلاسة، والتشخيص عن بعد، والإدارة الاستباقية لأصولك الصناعية، وتحويل العمليات التقليدية إلى أنظمة بيئية ذكية ومترابطة.",
        "section6Title": "الصيانة الوقائية والتنبؤية",
        "desc6": "قلل من وقت التوقف عن العمل وأطل عمر معداتك من خلال حلول الصيانة المتطورة لدينا. نحن ننفذ أنظمة ذكية تستخدم الذكاء الاصطناعي والتعلم الآلي للتنبؤ بأعطال المعدات المحتملة قبل حدوثها، مما يسمح بالصيانة الاستباقية وتوفير كبير في التكاليف. تضمن استراتيجياتنا الوقائية أن تعمل عملياتك بسلاسة وباستمرار، مما يدعم تحسين الإنتاج. وهذا يشمل مراقبة الحالة، واكتشاف الشذوذ، وجدولة الصيانة الآلية.",
        "section7Title": "دمج الذكاء الاصطناعي والتعلم الآلي في الأتمتة",
        "desc7": "ادمج نماذج الذكاء الاصطناعي والتعلم الآلي مباشرة في أنظمة الأتمتة الخاصة بك لعمليات أكثر ذكاءً واتخاذ قرارات تعتمد على البيانات. عزز الكفاءة، وقلل الأخطاء، وافتح قدرات جديدة لتحسين العمليات والإنتاج.",
        "section8Title": "تعزيز الإنتاج والكفاءة",
        "desc8": "تركز خبرتنا المتخصصة في تعزيز الإنتاج على تحليل عمليات التصنيع الحالية لديك لتحديد الاختناقات وأوجه القصور. ثم نقوم بتنفيذ حلول أتمتة مخصصة، وروبوتات متقدمة، وأنظمة تحكم ذكية لتبسيط سير العمل، وتقليل النفايات، وزيادة إنتاجك الإجمالي وكفاءتك التشغيلية بشكل كبير. يضمن هذا النهج الشامل تحسين كل جانب من جوانب خط الإنتاج الخاص بك لتحقيق أقصى أداء وأقصى ربحية.",
        "contactCtaTitle": "هل أنت مستعد لمناقشة مشروعك؟",
        "contactCtaSubtitle": "خبراؤنا هنا لمساعدتك في العثور على حل الأتمتة المثالي لعملك. دعنا نبني المستقبل معًا.",
        "contactCtaButton": "اتصل بنا"
      },
      "contactPage": {
        "title": "تواصل مع North Africa Automation",
        "subtitle": "نحن هنا للإجابة على أسئلتك، وتقديم الدعم، ومساعدتك في احتياجات الأتمتة الخاصة بك. تواصل معنا عبر النموذج أدناه أو باستخدام معلومات الاتصال الخاصة بنا.",
        "infoTitle": "معلومات الاتصال",
        "addressLabel": "العنوان",
        "addressValue": "أقبو، بجاية، الجزائر",
        "phoneLabel": "الهاتف",
        "phoneValue": "+213 (553) 431-748",
        "emailLabel": "البريد الإلكتروني",
        "emailAddress": "benmahrezbelaid@gmail.com",
        "socialsTitle": "تابعونا على وسائل التواصل الاجتماعي",
        "formTitle": "أرسل لنا رسالة",
        "namePlaceholder": "اسمك الكامل",
        "emailPlaceholder": "عنوان بريدك الإلكتروني",
        "subjectPlaceholder": "الموضوع (اختياري)",
        "messagePlaceholder": "رسالتك",
        "sendButton": "إرسال الرسالة",
        "successMessage": "تم إرسال رسالتك بنجاح!",
        "errorMessage": "فشل إرسال الرسالة. الرجاء المحاولة مرة أخرى."
      },
      "footer": {
        "tagline": "تمكين الصناعات بحلول الأتمتة المتطورة.",
        "quickLinks": "روابط سريعة",
        "ourServices": "خدماتنا",
        "connectWithUs": "تواصل معنا",
        "allRightsReserved": "جميع الحقوق محفوظة.",
        "privacyPolicy": "سياسة الخصوصية",
        "termsOfService": "شروط الخدمة"
      },
      "aboutPage": {
        "title": "حول شركة North Africa Automation",
        "subtitle": "ريادة مستقبل الأتمتة الصناعية والتحول الرقمي في شمال أفريقيا.",
        "missionTitle": "مهمتنا ورؤيتنا",
        "missionParagraph": "مهمتنا هي توفير حلول أتمتة متطورة تعمل على تحسين العمليات الصناعية، وتعزيز الكفاءة، ودفع النمو المستدام في جميع أنحاء شمال أفريقيا. نحن ملتزمون بالتميز والابتكار وبناء شراكات طويلة الأمد مع عملائنا، مما يقود التوجه نحو التصنيع الذكي والتحول الرقمي.",
        "visionParagraph": "نطمح لأن نكون القوة الرائدة في الأتمتة الصناعية، معترفًا بنا لتقدمنا التكنولوجي، وموثوقيتنا الثابتة، وتأثيرنا التحويلي على الأعمال التجارية في المنطقة وخارجها، ووضع معايير جديدة لتحسين العمليات وتعزيز الإنتاج.",
        "valuesTitle": "قيمنا الأساسية",
        "value1Title": "الابتكار",
        "value1Desc": "نحن ندفع باستمرار حدود التكنولوجيا، ونتبنى أفكارًا جديدة ومناهج إبداعية لتقديم حلول رائدة تعيد تعريف معايير الصناعة.",
        "value2Title": "الموثوقية",
        "value2Desc": "نحن نضمن الأداء المتسق، والتميز التشغيلي، والأمان القوي في جميع أنظمتنا، وبناء الثقة وتقديم نتائج موثوقة لعملائنا.",
        "value3Title": "الشراكة",
        "value3Desc": "نحن نؤمن ببناء علاقات قوية وتعاونية وطويلة الأمد مع عملائنا، وفهم احتياجاتهم الفريدة والعمل معًا لتحقيق النجاح المشترك.",
        "value4Title": "التميز",
        "value4Desc": "نحن ملتزمون بتحقيق أعلى المعايير في كل ما نقوم به، من تصميم الحلول وتنفيذها إلى خدمة العملاء والتحسين المستمر.",
        "value5Title": "التعاون",
        "value5Desc": "تعزيز بيئة تعاونية داخليًا ومع العملاء لتحقيق أهداف مشتركة ودفع النجاح الجماعي.",
        "historyTitle": "رحلتنا",
        "historyParagraph1": "تأسست شركة North Africa Automation في 2025 برؤية لإحداث ثورة في المشهد الصناعي في المنطقة. بدأت كفريق صغير من المهندسين المتحمسين، وسرعان ما اكتسبنا تقديرًا لنهجنا المبتكر والتزامنا بالجودة في أنظمة الأتمتة وتحسين العمليات.",
        "historyParagraph2": "على مر السنين، قمنا بتوسيع خبرتنا، واعتمدنا تقنيات ناشئة مثل الذكاء الاصطناعي وإنترنت الأشياء للتصنيع الذكي، وقدمنا بنجاح العديد من المشاريع واسعة النطاق في قطاعات متنوعة، بما في ذلك التصنيع والخدمات اللوجستية والطاقة. نمونا هو شهادة على تفانينا وثقة عملائنا بنا، مما يدفع تعزيز الإنتاج والتحول الرقمي.",
        "teamTitle": "تعرف على فريق القيادة لدينا",
        "teamParagraph": "تكمن قوتنا في فريقنا المتنوع من المهندسين وعلماء البيانات ومديري المشاريع ذوي المهارات العالية. يقدم كل عضو ثروة من الخبرة وشغفًا مشتركًا بالأتمتة، ويعملون بشكل تعاوني لتقديم نتائج استثنائية.",
        "teamMembers": {
          "belaidBenmahrez": {
            "name": "بلعيد بن محرز",
            "title": "رئيس أنظمة الأتمتة وقسم قيادة الأعمال",
            "location": "أقبو، بجاية، الجزائر"
          },
          "massinissaTinouche": {
            "name": "مسينيسا تينوش",
            "title": "رئيس قسم تحسين العمليات وتكامل الذكاء الاصطناعي",
            "location": "سان خوسي، كاليفورنيا، الولايات المتحدة الأمريكية"
          }
        },
        "contactUsCtaTitle": "هل أنت مستعد لأتمتة نجاحك؟",
        "contactUsCtaSubtitle": "دعنا نساعدك في تحويل عملياتك وتحقيق مستويات جديدة من الكفاءة والإنتاجية. اتصل بفريقنا اليوم لمناقشة احتياجات الأتمتة الخاصة بك.",
        "contactUsButton": "اتصل بفريقنا"
      },
      "careersPage": {
        "hero": {
          "title": "الوظائف في North Africa Automation",
          "subtitle": "نحن نعمل حاليًا على تطوير شركتنا وسنقوم بتوظيف مرشحين موهوبين ومليئين بالتحديات في المستقبل. انضم إلينا لتكون جزءًا من رحلتنا المبتكرة!",
          "cta": "تعرف على المزيد حول الفرص المستقبلية"
        },
        "culture": {
          "title": "ثقافتنا ومزايا العمل",
          "paragraph1": "نحن نتبنى ثقافة التعلم المستمر والابتكار والتعاون. نحن نؤمن بتمكين موظفينا من النمو مهنيًا وشخصيًا، وتزويدهم بالأدوات والفرص للتفوق.",
          "benefit1Title": "الابتكار والتعلم",
          "benefit1Desc": "بيئة تعزز النمو المستمر والتعلم من أحدث التقنيات، مع الوصول إلى ورش العمل والشهادات وفعاليات الصناعة.",
          "benefit2Title": "التطوير المهني",
          "benefit2Desc": "فرص للتدريب والتوجيه والتقدم الوظيفي لتطوير مسيرتك المهنية ضمن صناعة سريعة التوسع.",
          "benefit3Title": "تأثير عالمي",
          "benefit3Desc": "المساهمة في مشاريع هامة تشكل مستقبل الصناعة في شمال أفريقيا وربما خارجها.",
          "benefit4Title": "التوازن بين العمل والحياة",
          "benefit4Desc": "نحن ندعم توازنًا صحيًا بين العمل والحياة من خلال ترتيبات عمل مرنة وبرامج رفاهية شاملة.",
          "benefit5Title": "تعويضات تنافسية",
          "benefit5Desc": "حزم رواتب جذابة، ومكافآت أداء، ومزايا صحية شاملة."
        },
        "openingsTitle": "فرص التوظيف المستقبلية",
        "noOpenings": "لا توجد وظائف متاحة حالياً؟ نحن نبحث دائمًا عن الأفراد الموهوبين للانضمام إلى فريقنا في المستقبل. أرسل لنا سيرتك الذاتية وأخبرنا كيف يمكنك المساهمة في مهمتنا.",
        "contactCta": "أرسل سيرتك الذاتية",
        "job1": {
          "title": "مهندس أتمتة",
          "location": "الجزائر",
          "type": "دائم",
          "description": "ستنشأ فرص لتصميم وتطبيق وصيانة أنظمة الأتمتة الصناعية. ستتطلب الأدوار المستقبلية معرفة قوية بـ PLC/SCADA، والروبوتات، والشبكات الصناعية. ستكون الخبرة في Python أو C++ ميزة إضافية."
        },
        "job2": {
          "title": "مطور برامج (ذكاء اصطناعي/تعلم آلي)",
          "location": "الجزائر",
          "type": "دائم",
          "description": "ستركز الأدوار المستقبلية على تطوير حلول برمجية متقدمة ونماذج تعلم آلي للأتمتة، والتحليلات التنبؤية، ورؤية الكمبيوتر. سيتطلب مهارات برمجة قوية في Python/TensorFlow/PyTorch. ستكون الخبرة في المنصات السحابية (AWS، Azure، GCP) ميزة إضافية."
        },
        "job3": {
          "title": "فني صيانة روبوتات ",
          "location": "الجزائر",
          "type": "دائم",
          "description": "ستتضمن الأدوار المستقبلية تقديم الدعم الفني، واستكشاف الأخطاء وإصلاحها، والصيانة الوقائية لحلول الروبوتات لدينا في مواقع العملاء. سيتطلب خبرة عملية في الروبوتات الصناعية ومهارات قوية في حل المشكلات."
        },
        "job4": {
          "title": "مهندس حلول إنترنت الأشياء",
          "location": "الجزائر",
          "type": "دائم",
          "description": "ستتضمن الأدوار المستقبلية تصميم وتطبيق معماريات إنترنت الأشياء الصناعية القابلة للتطوير، بما في ذلك دمج أجهزة الاستشعار، واستيعاب البيانات، وإنشاء لوحات معلومات مخصصة. سيكون الفهم القوي لبروتوكولات إنترنت الأشياء وأفضل ممارسات الأمان ضروريًا."
        }
      },
      "auth": {
        "emailLabel": "البريد الإلكتروني",
        "emailPlaceholder": "أدخل بريدك الإلكتروني",
        "passwordLabel": "كلمة المرور",
        "passwordPlaceholder": "أدخل كلمة المرور",
        "rememberMe": "تذكرني",
        "forgotPassword": "هل نسيت كلمة المرور؟",
        "login": {
          "title": "مرحباً بعودتك",
          "subtitle": "الرجاء تسجيل الدخول إلى حسابك.",
          "button": "تسجيل الدخول",
          "link": "تسجيل الدخول"
        },
        "register": {
          "title": "إنشاء حساب",
          "subtitle": "قم بالتسجيل للوصول إلى خدماتنا.",
          "button": "التسجيل",
          "link": "التسجيل"
        },
        "nameLabel": "الاسم الكامل",
        "namePlaceholder": "أدخل اسمك الكامل",
        "confirmPasswordLabel": "تأكيد كلمة المرور",
        "confirmPasswordPlaceholder": "تأكيد كلمة المرور",
        "noAccount": "ليس لديك حساب؟",
        "haveAccount": "هل لديك حساب بالفعل؟"
      },
      "aiMlPage": {
        "title": "دمج الذكاء الاصطناعي والتعلم الآلي في الأتمتة",
        "subtitle": "استفد من قوة الذكاء الاصطناعي والتعلم الآلي لتحويل عملياتك، ودفع الكفاءة، وفتح مستويات جديدة من الإنتاجية.",
        "introParagraph1": "في North Africa Automation، نقوم بدمج نماذج الذكاء الاصطناعي والتعلم الآلي المتطورة مباشرة في عملياتك الصناعية، مما يتيح اتخاذ قرارات ذكية، وقدرات تنبؤية، وعمليات مستقلة. يتضمن ذلك تنفيذ الحوسبة الطرفية لتشغيل نماذج الذكاء الاصطناعي وخوارزميات التعلم الآلي مباشرة على الأجهزة، مما يقلل من زمن الوصول ويعزز الاستجابة في الوقت الفعلي.",
        "introParagraph2": "تمتد خبرتنا عبر تطبيقات مختلفة، من تحسين خطوط التصنيع المعقدة إلى تعزيز مراقبة الجودة، والتنبؤ باحتياجات الصيانة، وتوفير رؤى بيانات شاملة من خلال التحكم الإحصائي في العمليات (SPC)، والرسوم البيانية المتقدمة، وتحليل البيانات المتعمق، والتنبؤ الدقيق.",
        "featuresTitle": "الميزات الرئيسية لحلول الذكاء الاصطناعي/التعلم الآلي لدينا",
        "feature1Title": "التحليلات التنبؤية والتنبؤ بالكفاءة التشغيلية",
        "feature1Desc": "استفد من الذكاء الاصطناعي لتحليل مجموعات البيانات الضخمة، والتنبؤ بالنتائج المستقبلية، وتحسين تخصيص الموارد، مما يؤدي إلى توفير كبير في التكاليف وتحسين الإنتاجية. يتضمن ذلك نماذج تنبؤ متقدمة تتوقع متطلبات السوق واختناقات التشغيل، مما يضمن اتخاذ قرارات استباقية.",
        "feature2Title": "أنظمة مراقبة الجودة الآلية مع SPC",
        "feature2Desc": "نفذ رؤية الآلة ونماذج التعلم العميق للكشف عن العيوب في الوقت الفعلي وضمان الجودة، مما يقلل بشكل كبير من الأخطاء والهدر. تضمن أنظمتنا المدمجة مع التحكم الإحصائي في العمليات (SPC) للمراقبة القوية جودة المنتج المتسقة والامتثال لمعايير الصناعة.",
        "feature3Title": "تحسين العمليات الذكي وتحليل البيانات",
        "feature3Desc": "استخدم خوارزميات التعلم الآلي للتعلم والتكيف المستمر مع الظروف المتغيرة، وتحسين عملياتك لتحقيق أقصى قدر من الكفاءة والأداء. بدعم من تحليل البيانات المتعمق، تحدد حلولنا الأنماط الخفية وفرص التحسين، مما يدفع التميز التشغيلي المستمر.",
        "feature4Title": "رؤية الآلة لدقة محسنة ورسم بياني",
        "feature4Desc": "ادمج أنظمة رؤية الكمبيوتر المتقدمة للمهام التي تتطلب دقة عالية، مثل توجيه الروبوتات، والتحقق من التجميع، واكتشاف الشذوذ. توفر هذه الأنظمة، التي يتم تصورها من خلال الرسوم البيانية الديناميكية، ملاحظات فورية ورؤى قابلة للتنفيذ، مما يعزز الدقة ويقلل من جهود الفحص اليدوي.",
        "feature5Title": "معالجة اللغة الطبيعية (NLP) لواجهة المستخدم الرسومية (HMI)",
        "feature5Desc": "عزز التفاعل بين الإنسان والآلة باستخدام معالجة اللغة الطبيعية، مما يسمح بأوامر صوتية بديهية وتفسير ذكي للبيانات من النص غير المهيكل. يؤدي هذا إلى تبسيط العمليات المعقدة، وتحسين إمكانية الوصول، وتمكين التواصل الأكثر طبيعية مع الأنظمة الآلية.",
        "feature6Title": "Apprentissage par Renforcement pour les Systèmes Autonomes",
        "feature6Desc": "تطوير أنظمة مستقلة ذاتية التعلم يمكنها اتخاذ قرارات مثلى في بيئات ديناميكية، من التنقل الروبوتي إلى التحكم في الأنظمة المعقدة. تعمل هذه الأنظمة باستمرار على تحسين أدائها من خلال التجربة والخطأ، والتكيف مع الظروف غير المتوقعة وزيادة الاستقلالية التشغيلية.",
        "benefitsTitle": "فوائد دمج الذكاء الاصطناعي/التعلم الآلي",
        "benefit1": "زيادة الكفاءة والإنتاجية: تبسيط العمليات، وتقليل التدخل اليدوي، وتسريع دورات الإنتاج.",
        "benefit2": "تقليل تكاليف التشغيل: تقليل النفايات، وتحسين استخدام الموارد، وخفض استهلاك الطاقة.",
        "benefit3": "تحسين جودة المنتج: ضمان جودة متسقة من خلال الفحص الآلي واكتشاف العيوب.",
        "benefit4": "تعزيز السلامة والموثوقية: التخفيف من المخاطر، والتنبؤ بأعطال المعدات، وضمان التشغيل المستمر.",
        "benefit5": "اتخاذ قرارات أسرع: اكتساب رؤى في الوقت الفعلي وذكاء تنبؤي لاستجابات استراتيجية سريعة.",
        "ctaTitle": "هل أنت مستعد لتحويل صناعتك بالذكاء الاصطناعي؟",
        "ctaSubtitle": "فريقنا من المتخصصين في الذكاء الاصطناعي/التعلم الآلي جاهز لتصميم وتنفيذ حلول مخصصة تتناسب مع تحدياتك الصناعية الفريدة. اتصل بنا لتحديد موعد استشارة.",
        "ctaButton": "ناقش مشروع الذكاء الاصطناعي/التعلم الآلي الخاص بك"
      },
      "dashboard": {
        "title": "لوحة تحكم المستخدم",
        "welcome": "أهلاً بك",
        "logout": "تسجيل الخروج"
      }
    }
  }
};
// --- EMBEDDED TRANSLATIONS END ---

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translation'],
    defaultNS: 'translation',
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    },
    supportedLngs: ['en', 'fr', 'ar'],
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    }
  });

export default i18n;
