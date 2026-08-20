* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
    line-height: 1.6;
}


/* Navbar */

header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: #0f172a;
}

.navbar {
    max-width: 1100px;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 25px;
    font-weight: bold;
}

.logo span {
    color: #38bdf8;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #38bdf8;
}

.menu-btn {
    display: none;
    font-size: 25px;
}


/* Hero */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 20px 50px;
}

.hero-content {
    max-width: 750px;
}

.hello {
    color: #38bdf8;
    font-size: 20px;
}

.hero h1 {
    font-size: 65px;
    margin: 10px 0;
}

.hero h2 {
    font-size: 30px;
    color: #38bdf8;
}

.hero-text {
    margin: 20px auto;
    max-width: 600px;
    color: #cbd5e1;
}


/* Buttons */

.hero-buttons {
    margin-top: 30px;
}

.btn {
    display: inline-block;
    padding: 12px 25px;
    margin: 5px;
    background: #38bdf8;
    color: #0f172a;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    transform: translateY(-3px);
}

.btn.outline {
    background: transparent;
    color: #38bdf8;
    border: 1px solid #38bdf8;
}


/* Sections */

.section {
    max-width: 1100px;
    margin: auto;
    padding: 100px 20px;
}

.section-title {
    text-align: center;
    font-size: 35px;
    margin-bottom: 50px;
    color: #38bdf8;
}


/* About */

.about-container {
    max-width: 800px;
    margin: auto;
    text-align: center;
}

.about-text p {
    margin-bottom: 20px;
    color: #cbd5e1;
}


/* Skills */

.skills-section {
    background: #111827;
    max-width: 100%;
}

.skills-container {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.skill-card {
    padding: 30px;
    text-align: center;
    background: #1e293b;
    border-radius: 10px;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-8px);
}

.skill-card h3 {
    color: #38bdf8;
    margin-bottom: 10px;
}


/* Projects */

.projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.project-card {
    background: #1e293b;
    padding: 30px;
    border-radius: 12px;
    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-8px);
}

.project-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.project-card h3 {
    color: #38bdf8;
    margin-bottom: 15px;
}

.project-card p {
    color: #cbd5e1;
}

.project-tech {
    margin-top: 20px;
    color: #94a3b8;
    font-size: 14px;
}


/* Education */

.education-card {
    max-width: 700px;
    margin: auto;
    background: #1e293b;
    padding: 35px;
    border-radius: 10px;
    text-align: center;
}

.education-card h3 {
    color: #38bdf8;
    margin-bottom: 15px;
}


/* Resume */

.resume-section {
    text-align: center;
    padding: 80px 20px;
    background: #111827;
}

.resume-section h2 {
    font-size: 30px;
    margin-bottom: 15px;
}

.resume-section p {
    color: #cbd5e1;
    margin-bottom: 25px;
}


/* Contact */

.contact-container {
    text-align: center;
}

.contact-container p {
    margin: 20px;
}

.contact-container a {
    color: #38bdf8;
    text-decoration: none;
}


/* Footer */

footer {
    text-align: center;
    padding: 25px;
    background: #020617;
    color: #94a3b8;
}


/* Mobile */

@media (max-width: 768px) {

    .nav-links {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: #0f172a;
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-btn {
        display: block;
        cursor: pointer;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 23px;
    }

    .skills-container {
        grid-template-columns: 1fr;
    }

    .projects-container {
        grid-template-columns: 1fr;
    }

}