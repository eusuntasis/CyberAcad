// Definim cursurile într-un array
const courses = [
  {
    id: 1,
    title: "Advanced Social Engineering",
    instructor: "Asis Sisu",
    level: "Advanced",
    duration: "8 weeks",
    pdf: "social_engineering.pdf",
    description: "Detailed exploration into social engineering tactics..."
  },
  {
    id: 2,
    title: "Cyber Threat Intelligence",
    instructor: "Asis Sisu",
    level: "Intermediate",
    duration: "6 weeks",
    pdf: "Cyber Threat Intelligence ( PDFDrive ).pdf",
    description: "An introduction to threat intelligence..."
  },
  {
    id: 3,
    title: "Military Psychology Fundamentals",
    instructor: "Asis Sisu",
    level: "Beginner",
    duration: "10 weeks",
    pdf: "Military Psychology ( PDFDrive ).pdf",
    description: "An overview of psychology in military contexts..."
  }
];

// Funcția pentru a afișa lista cursurilor
function showCoursesList() {
  document.getElementById("courses-list").style.display = "block";
  document.getElementById("course-details").style.display = "none";
}

// Funcția pentru a afișa detaliile unui curs
function showCourseDetails(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (course) {
    document.getElementById("course-title").innerText = course.title;
    document.getElementById("course-instructor").innerText = `Instructor: ${course.instructor}`;
    document.getElementById("course-level").innerText = `Level: ${course.level}`;
    document.getElementById("course-duration").innerText = `Duration: ${course.duration}`;
    document.getElementById("course-description").innerText = course.description;
    document.getElementById("course-pdf").href = course.pdf;
    
    document.getElementById("courses-list").style.display = "none";
    document.getElementById("course-details").style.display = "block";
  }
}

// Generăm lista cursurilor la încărcarea paginii
document.addEventListener("DOMContentLoaded", () => {
  const coursesList = document.getElementById("courses-list");
  courses.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    courseDiv.onclick = () => showCourseDetails(course.id);
    courseDiv.innerHTML = `
      <h3>${course.title}</h3>
      <p>Instructor: ${course.instructor}</p>
      <p>Level: ${course.level}</p>
      <p>Duration: ${course.duration}</p>
    `;
    coursesList.appendChild(courseDiv);
  });

  // Funcția de căutare
  const searchButton = document.getElementById("search-button");
  searchButton.onclick = () => {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchQuery));
    coursesList.innerHTML = ""; // Resetează lista
    filteredCourses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
      courseDiv.onclick = () => showCourseDetails(course.id);
      courseDiv.innerHTML = `
        <h3>${course.title}</h3>
        <p>Instructor: ${course.instructor}</p>
        <p>Level: ${course.level}</p>
        <p>Duration: ${course.duration}</p>
      `;
      coursesList.appendChild(courseDiv);
    });
  };
});
