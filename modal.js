// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'Project_UI/UX Design',
    image: 'img/portfolio/p1.png',
    description: '이 프로젝트는 브랜드 아이덴티티를 위한 패키지 디자인입니다. 심플하면서도 감각적인 디자인으로 제품의 가치를 극대화했습니다.'
  },
  project2: {
    title: 'Project_Detail page Design',
    image: 'img/portfolio/p2.png',
    description: '차가 주는 여유와 따뜻함을 시각적으로 표현해, 오설록의 신뢰감과 선물용 감성을 스토리로 풀어낸 비주얼 디자인입니다.'
  },
  project3: {
    title: 'Project_SNS Card Design',
    image: 'img/portfolio/p3.png',
    description: '청취자들이 프로그램 구성을 쉽게 이해하도록 핵심 코너를 요약해 제작한 라디오 프로그램 홍보 카드뉴스입니다.'
  },
  project4: {
    title: 'Project_3-Fold leaflet Design',
    image: 'img/portfolio/p4.png',
    description: '장학금 제도를 한눈에 이해할 수 있도록 일러스트와 텍스트를 조화롭게 구성한 3단 접지 리플렛 디자인입니다.'
  },
  project5: {
    title: 'Project_Package Design',
    image: 'img/portfolio/p5.png',
    description: '클라이언트의 요구를 반영해 만든 패키지 디자인입니다.'
  },
  project6: {
    title: 'Project_Poster Design',
    image: 'img/portfolio/p6.png',
    description: '나이키 러닝화를 기반으로 스포츠 브랜드의 철학을 감성적으로 재해석한 콘셉트 포스터 디자인입니다.'
  },

  project7: {
    title: 'Project_House organ Design',
    image: 'img/portfolio/p7.png',
    description: '조직의 소통 강화와 신뢰 구축을 위해 정보 전달력을 높이고 시각적 완성도를 강조한 인천국제공항공사 사보 리디자인 작업입니다.'
  },

  project8: {
    title: 'Project_Logo Design',
    image: 'img/portfolio/p8.png',
    description: '카페의 외형과 커피 이미지를 결합해 브랜드 정체성을 직관적으로 전달하는 로고 디자인입니다.'
  },
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});