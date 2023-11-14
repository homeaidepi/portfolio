// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "homeaidepi";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 28,
    skill: <Icon icon="fluent-mdl2:party-leader" className="display-4" />,
    name: "Leadership",
  },
  {
    id: 29,
    skill: <Icon icon="fluent-mdl2:teamwork" className="display-4" />,
    name: "Teamwork",
  },
  {
    id: 30,
    skill: <Icon icon="ion:git-network-sharp" className="display-4" />,
    name: "Community",
  },
  {
    id: 1,
    skill: <Icon icon="carbon:ibm-z-environments-dev-sec-ops" className="display-4" />,
    name: "DevSecOps",
  },
  {
    id: 2,
    skill: <Icon icon="iconoir:agile" className="display-4" />,
    name: "Agile",
  },
  {
    id: 3,
    skill: <Icon icon="fluent-mdl2:test-step" className="display-4" />,
    name: "TDD & BDD",
  },
  {
    id: 4,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 5,
    skill: <Icon icon="cib:typescript" className="display-4" />,
    name: "TypeScript",
  },
  {
    id: 6,
    skill: <Icon icon="nonicons:c-sharp-16" className="display-4" />,
    name: "C#",
  },
  {
    id: 7,
    skill: <Icon icon="devicon-plain:dot-net-wordmark" className="display-4" />,
    name: "",
  },
  {
    id: 8,
    skill: <Icon icon="cib:azure-devops" className="display-4" />,
    name: "Azure DevOps",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="bxl:nodejs" className="display-4" />,
    name: "NodeJS",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "Express",
  },
  {
    id: 12,
    skill: <Icon icon="cib:graphql" className="display-4" />,
    name: "GraphQL",
  },
  {
    id: 13,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 14,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 15,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  
  {
    id: 16,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 17,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  
  {
    id: 18,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 19,
    skill: <Icon icon="devicon-plain:redis-wordmark" className="display-4" />,
    name: "Redis",
  },
  {
    id: 20,
    skill: <Icon icon="devicon-plain:cosmosdb" className="display-4" />,
    name: "Cosmos DB",
  },
  {
    id: 21,
    skill: <Icon icon="cib:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 22,
    skill: <Icon icon="cib:postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 23,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
  {
    id: 24,
    skill: <Icon icon="dashicons:rest-api" className="display-4" />,
    name: "REST API",
  },
  {
    id: 25,
    skill: <Icon icon="fluent-mdl2:open-source" className="display-4" />,
    name: "OSS",
  },
  {
    id: 26,
    skill: <Icon icon="devicon-plain:visualstudio" className="display-4" />,
    name: "Visual Studio & Code",
  },
  {
    id: 27,
    skill: <Icon icon="ri:more-line" className="display-4" />,
    name: "& More",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://1drv.ms/b/s!AoLZTAi2yjiXsf0ihRCVaAgo9dzAXg?e=yatec1";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Ask-Archie", "BlueBuzz", "tdd", "portfolio"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
