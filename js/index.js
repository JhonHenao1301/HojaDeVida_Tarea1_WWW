	//modales
	const modalEducation = document.querySelector('#modal-education');
	const modalSkills = document.querySelector('#modal-skills');
	const modalExperience = document.querySelector('#modal-experience');

	//botones
	const modalBtnEducation = document.querySelector('#modal-education-btn');
	const modalBtnSkills = document.querySelector('#modal-skills-btn');
	const modalBtnExperience = document.querySelector('#modal-experience-btn');

	const closeBtn = document.querySelector('.close');

	// Events
	modalBtnEducation.addEventListener('click', openModal);
	modalBtnSkills.addEventListener('click', openModal);
	modalBtnExperience.addEventListener('click', openModal);
	closeBtn.addEventListener('click', closeModal);
	window.addEventListener('click', outsideClick);

	// Open
	function openModal() {
	  if(this.id === 'modal-education-btn'){
		modalEducation.style.display = 'block';
	  }
	  
	  if(this.id === 'modal-experience-btn'){
		modalExperience.style.display = 'block';
	  }

	  if(this.id === 'modal-skills-btn'){
		modalSkills.style.display = 'block';
	  }
	}

	// Close
	function closeModal() {
	  modalEducation.style.display = 'none';
	}

	// Close If Outside Click
	function outsideClick(e) {
	  if (e.target == modalEducation) {
		modalEducation.style.display = 'none';
	  }

	  if (e.target == modalSkills) {
		modalSkills.style.display = 'none';
	  }
	  if (e.target == modalExperience) {
		modalExperience.style.display = 'none';
	  }
	}
