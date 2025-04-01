import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import ContactForm from "../Components/ContactForm";
import SkillsSection from "../Components/Skill";



function Home() {
    const typedRef = useRef(null);

    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ["Full Stack Developer","MERN Stack Developer", "Backend Developer", "Front-End Developer", "Web Developer", "WordPress Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        typed.destroy(); // Cleanup when component unmounts
      };
    }, []);
   
  return (
    <>
      {/* Navbar Start */}
      <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="/" className="navbar-brand ml-lg-3">
  <img src="img/logo1.png" alt="Alka Sinha Logo" className="img-fluid" style={{height:"80px",width:"auto"}} />
</a>

        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div class="navbar-nav m-auto py-0">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#about" class="nav-item nav-link">About</a>
                <a href="#qualification" class="nav-item nav-link">Quality</a>
                <a href="#skill" class="nav-item nav-link">Skill</a>
                {/* <a href="#service" class="nav-item nav-link">Service</a> */}
                {/* <a href="#portfolio" class="nav-item nav-link">Portfolio</a> */}
                {/* <a href="#testimonial" class="nav-item nav-link">Review</a> */}
                <a href="#project" class="nav-item nav-link">Project</a>
                <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
            <a href="javascript:void(0);" class="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
        </div>
    </nav>

    {/* Video Modal Start */}  
    {/* <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>        
     
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
        </div>
      </div>
    </div>
  </div>
</div> */}
     {/* Video Modal End */}

    {/* Header Start */}
    <div className="container-fluid d-flex align-items-center mb-5 py-5" id="home" 
     style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white' }}>
  <div className="container">
    <div className="row align-items-center">
      
      {/* Image Section with Diamond Shape */}
      <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0 d-flex justify-content-center">
        <div style={{
          width: "250px",
          height: "250px",
          transform: "rotate(45deg)",
          overflow: "hidden",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
          border: "5px solid rgba(0, 255, 255, 0.3)"
          
        }}>
          <img src="img/profile.jpg" alt="Profile photo of alka" className="img-fluid w-100 h-100" 
               style={{ objectFit: "cover", transform: "rotate(-45deg)" }} />
        </div>
      </div>

      {/* Text Section */}
      <div className="col-lg-7 text-center text-lg-left">
        <h3 className="font-weight-normal mb-3">I'm</h3>
        <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>
          Alka Sinha
        </h1>
        
        
        <div className="container">
          <h1>
            <span ref={typedRef} className="typed-text-output" style={{ color: "#fff", marginLeft: "-18px", display: "inline-block" }}></span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
          <a href="img/Alka-Sinha.pdf" download className="btn btn-outline-light mr-5">Download CV</a>
          <a href="javascript:void(0);" className="btn btn-outline-light mr-5">Hire Me</a>
        </div>
      </div>

    </div>
  </div>
</div>

{/* Header End */}

{/* About Start */}
<div className="container-fluid py-5"  style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white',marginTop: "-50px" }} id="about">
  <div className="container">
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>About</h1>
      <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 pb-4 pb-lg-0">
        <img  src="img/about.jpg" alt="About us team photo"className="img-fluid rounded w-100" />
      </div>
      <div className="col-lg-7">
        <h3 className="mb-4">Full Stack Developer</h3>
        <p>Full Stack Developer with expertise in MERN Stack, proficient in building scalable web applications. Skilled in backend development with Node.js and Express, and frontend development using React. Experienced in database management with MongoDB and API integrations. Passionate about delivering efficient and user-friendly solutions.</p>
        <div className="row mb-3">
          <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Alka Sinha</span></h6></div>
          {/* <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">1 April 1990</span></h6></div> */}
          <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Bachelor</span></h6></div>
          <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">1.7 Years</span></h6></div>
          <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">9430540933</span></h6></div>
          <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">sinhaalka802211@gmail.com</span></h6></div>
          <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Ramnagari, Sector-4, Patna, Bihar</span></h6></div>
          {/* <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div> */}
        </div>
        <a href="javascript:void(0);" className="btn btn-outline-primary mr-4">Hire Me</a>
        <a href="javascript:void(0);" className="btn btn-outline-primary">Learn More</a>
      </div>
    </div>
  </div>
</div>
{/* About End */}

{/* Qualification Start */}
<div className="container-fluid py-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white' }}id="qualification">
  <div className="container">
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Quality</h1>
      <h1 className="position-absolute text-uppercase text-primary">Education &amp; Expericence</h1>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h3 className="mb-4">My Education</h3>
        <div className="border-left border-primary pt-2 pl-4 ml-2">
          <div className="position-relative mb-4">
            <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
            <h5 className="font-weight-bold mb-1">Intermediate</h5>
            <p className="mb-2"><strong>Jawahar Navodaya Vidyalaya, Rohtash</strong> | <small>2015 - 2017</small></p>
            <p>Completed intermediate education at Jawahar Navodaya Vidyalaya, Rohtash (2015-2017), developing a strong academic foundation, critical thinking skills, and a disciplined approach to learning, fostering both intellectual and personal growth.</p>
          </div>
          <div className="position-relative mb-4">
            <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
            <h5 className="font-weight-bold mb-1">Bachelor's in Mathematics</h5>
            <p className="mb-2"><strong>Magadh University</strong> | <small>2017 - 2020</small></p>
            <p>Completed a Bachelor's in Mathematics from Magadh University, building a strong foundation in analytical thinking, problem-solving, and logical reasoning. Gained expertise in mathematical concepts and their real-world applications, fostering a detail-oriented and structured approach to problem-solving.</p>
          </div>
          <div className="position-relative mb-4">
            <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
            <h5 className="font-weight-bold mb-1">MERN Stack Development</h5>
            <p className="mb-2"><strong>Masai School, Bangalore</strong> | <small>02/2022 - 11/2022</small></p>
            <p>Completed MERN Stack Development from Masai School, gaining hands-on experience in MongoDB, Express.js, React, and Node.js, along with HTML, CSS, JavaScript, Git, GitHub, and Data Structures & Algorithms. Developed scalable web applications, implemented efficient algorithms, and worked on real-world projects to enhance problem-solving and coding efficiency.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <h3 className="mb-4">My Expericence</h3>
        <div className="border-left border-primary pt-2 pl-4 ml-2">
          <div className="position-relative mb-4">
            <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
            <h5 className="font-weight-bold mb-1">Full Stack Developer</h5>
            <p className="mb-2"><strong>Rad Techno Services</strong> | <small>04/09/2023 - 30/09/2024</small></p>
            <p>Full Stack Developer at Rad Techno Services (Sep 2023 - Sep 2024)
            Designed, developed, and maintained dynamic web applications using MERN Stack (MongoDB, Express.js, React, Node.js), WordPress, and SQL. Worked on building scalable backend architectures, optimizing databases, and creating responsive user interfaces to enhance performance and user experience. Collaborated with teams to implement best practices in development, security, and deployment.</p>
          </div>
          <div className="position-relative mb-4">
            <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
            <h5 className="font-weight-bold mb-1">Full Stack Developer</h5>
            <p className="mb-2"><strong>Sainity Software</strong> | <small>01/10/2024 - Present</small></p>
            <p>Full Stack Developer at Sainity Software (Oct 2024 - Present)
            Developed and maintained robust web applications using MERN Stack (MongoDB, Express.js, React, Node.js), WordPress, and SQL. Designed scalable backend systems, optimized database queries, and built responsive front-end interfaces for seamless user experiences. Implemented best coding practices, collaborated with cross-functional teams, and ensured high-performance application development.</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
{/* Qualification End */}


{/* Skill Start */}
<SkillsSection/>
{/* Skill End */}




{/* Blog Start */}
<div className="container-fluid pt-5" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: 'white' }} id="project">
  <div className="container">
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>Projects</h1>
      <h1 className="position-absolute text-uppercase text-primary">My Projects</h1>
    </div>
    <div className="row">
      {[
        {
          title: "Inventory Management System",
          description: "A collaborative project that enables Admins and Super Admins to efficiently manage orders, suppliers, financial reports, profit & loss, and warehouse operations with real-time updates and role-based access control.",
          stack:"Node.js, Express.js, Mongodb, Postman",
          image: "img/project1.jpg",
          github: "https://github.com/Harish7775/Inventory_management_system",
          liveDemo: "javascript:void(0);",
        },
        {
          title: "Employee Management System",
          description: "Designed and developed a comprehensive Employee Management System to streamline employee records, attendance tracking, and performance evaluation. Implemented role-based access, automated reports, and real-time updates to enhance efficiency and accuracy.",
          stack:"Node.js, Express.js, Mongodb, Postman",
          image: "img/project2.jpg",
          github: "https://github.com/AlkaSinha5/Employee_management",
          liveDemo: "javascript:void(0);",
        },
        {
          title: "REC(Clone of Housing.com)",
          description: "Built a Housing.com clone with a team, featuring property listings, search filters, user authentication, interactive maps, and role-based access for buyers, sellers, and admins. Focused on responsive design, performance, and secure transactions for a seamless experience. ",
          stack:"Node.js, Express.js, Mongodb, React.js, Postman, Nodemailer",
          image: "img/project3.png",
          github: "https://github.com/ashish2341/REC_API",
          liveDemo: "https://dashboard-live.com",
        },
        {
          title: "IGCL",
          description: "IGCL INDIA is dedicated to providing outstanding service in Labor Law and statutory compliance, ensuring premium value and compliance excellence for our clients. Our expertise, commitment, and strong work ethic define our corporate identity",
          stack:"Node.js, Express.js, Mongodb, Postman, NodeMailer, React.js",
          image: "img/project4.png",
          github: "https://github.com/AlkaSinha5/IGCL_API",
          liveDemo: "https://www.igclindia.com/",
        },
        {
          title: "IGRF",
          description: "A non-profit committed to environmental sustainability, education, and rural development. Through initiatives like Green Harmony, Green Campus, and Green Village, we promote eco-friendly practices and community empowerment for a greener future.",
          stack:"Node.js, Express.js, Mongodb, Postman, React.js",
          image: "img/project5.png",
          github: "https://github.com/AlkaSinha5/IGRF-API",
          liveDemo: "https://main--igrf.netlify.app/",
        },
        {
          title: "vision and growth",
          description: "Vision and Growth is designed for pediatric endocrine care and comprehensive eye health. Built by an expert in childhood growth disorders and juvenile diabetes, it integrates advanced research and technology.",
          stack:"WordPress",
          image: "img/project6.png",
          github: "javascript:void(0);",
          liveDemo: "https://visiongrowth.in/",
        },
        {
          title: "Khistiz Agro Tech",
          description: "Agroteck is developed to provide innovative agricultural solutions for efficient and sustainable farming. Built with advanced technology, it offers high-quality equipment and precision tools. The project aims to empower farmers with eco-friendly solutions for a better future.",
          stack:"Node.js, Express.js, Mongodb, Postman, NodeMailer, React.js",
          image: "img/project7.png",
          github: "https://github.com/AlkaSinha5/khistiz_agro_tech",
          liveDemo: "https://khistizagrotech.co.in/",
        },
        {
          title: "Pearl Hospital",
          description: "Pearl Hospital is developed using HTML, CSS, Bootstrap, and JavaScript to ensure a responsive and user-friendly healthcare platform. It provides advanced medical services with a focus on accessibility, efficiency, and patient-centered care.",
          stack:"HTML, CSS, Javascript, Bootstrap",
          image: "img/project8.png",
          github: "javascript:void(0);",
          liveDemo: "https://pearlhospitalpatna.com/",
        }
        // {
        //   title: "vision and growth",
        //   description: "React & Node.js Dashboard",
        //   stack:"Node.js, Express.js, Mongodb, Postman",
        //   image: "img/project6.png",
        //   github: "https://github.com/yourgithub/admin-dashboard",
        //   liveDemo: "https://visiongrowth.in/",
        // }
      ].map((project, index) => (
        <div className="col-lg-6 mb-5" key={index}>
          <div 
            className="card project-card text-white" 
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={project.image} alt={project.title} className="card-img-top"  style={{ height: "250px", objectFit: "cover" }} />
            <div className="card-body text-center" style={{ background: "linear-gradient(135deg, #2c3e50, #27ae60)", padding: "20px" }}>
              <h5 className="card-title mb-3" style={{ fontSize: "18px", textTransform: "uppercase" }}>{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text" style={{color:"#0BCEAF"}}>{project.stack}</p>
              <div className="d-flex justify-content-center">
              <a className="btn btn-sm btn-outline-light mx-2" 
   href={project.github} 
   target="_blank" 
   rel="noopener noreferrer">
   GitHub
</a>

<a className="btn btn-sm btn-outline-light mx-2" 
   href={project.liveDemo} 
   target="_blank" 
   rel="noopener noreferrer">
   Live Demo
</a>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Blog End */}


{/* Contact Start */}


{/* Contact End */}

<ContactForm/>
{/* Footer Start */}
<div className="container-fluid text-white py-5 px-sm-3 px-md-5"
 style={{
  background: "linear-gradient(135deg, rgb(26, 26, 46), rgb(22, 33, 62))",
  borderTop: "2px solid #0BCEAF" // Change 'white' to your desired color
}}>
  <div className="container text-center py-5">
    <div className="d-flex justify-content-center mb-4">
      <a className="btn btn-light btn-social mr-2" href="https://github.com/AlkaSinha5"><i className="fab fa-github" /></a>
      {/* <a className="btn btn-light btn-social mr-2" href="javascript:void(0);"><i className="fab fa-twitter" /></a> */}
      <a className="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/alkasinha5"><i className="fab fa-linkedin-in" /></a>
      {/* <a className="btn btn-light btn-social" href="javascript:void(0);"><i className="fab fa-instagram" /></a> */}
    </div>
   
    <p className="m-0">© <a className="text-white font-weight-bold" href="javascript:void(0);">Alka Sinha</a>. All Rights Reserved. 
    </p>
  </div>
</div>
{/* Footer End */}


    </>
  );
}

export default Home;
