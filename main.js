// 1. 페이지가 로드될 때 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
    // 여기에 초기화 코드 추가
    populateProjects(); // 예: 프로젝트 목록 채우기
    setupContactForm(); // 예: 연락처 양식 설정
    // 추가적으로 실행되어야 할 초기화 코드들을 여기에 추가하세요.
});

// 2. 프로젝트 목록 채우기
function populateProjects() {
    const projectsContainer = document.getElementById("projects");

    // 프로젝트 데이터를 가져오거나 하드코딩하여 프로젝트 목록을 생성하세요.
    const projects = [
        { title: "Project 1", description: "Description 1", link: "https://project1.com" },
        { title: "Project 2", description: "Description 2", link: "https://project2.com" },
        // 추가 프로젝트들을 필요에 따라 추가하세요.
    ];

    // 프로젝트 목록을 HTML에 추가
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View
