let exerciseCard = document.querySelectorAll('.exercise');

(function () {
	exerciseCard.forEach(exercise => {
		let exerciseData = exercise.getAttribute('data-exercise');
		let answerOption = exercise.querySelectorAll('.exercise__answers li');
		let submitButton = exercise.querySelector('.exercise__submit button');
		let submitFeedback = exercise.querySelector('.exercise__submit--feedback');
		let submitAnswerFeedback = exercise.querySelector('.exercise__answer--feedback');
		// let feedbackText = answerOption.getAttribute('data-feedback');
		let score = 0;

		// Select option, clear the others and enable submit
		answerOption.forEach(option => {
			option.addEventListener('click', function () {
				console.log(exerciseData);
				if (exerciseData === 'one') {
					oneAnswerSelect(option);
				} else if (exerciseData === 'multiple') {
					multipleAnswersSelect(option);
				}
			});
		});

		//Submit button to check only selected class option.
		submitButton.addEventListener('click', function () {
			if (submitButton.getAttribute('type') === 'submit' && submitButton.getAttribute('aria-disabled') === 'false') {
				butttonCheck();
			} else {
				buttonReset();
			}
		});

		function oneAnswerSelect(e) {
			if (submitButton.getAttribute('type') === 'submit') {
				// Clear all selected options
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];
					element.classList.remove('exercise__answers--selected');
				}
				e.classList.add('exercise__answers--selected');
				submitButton.setAttribute('aria-disabled', 'false');
			}
		}

		function multipleAnswersSelect(e) {
			if (submitButton.getAttribute('type') === 'submit') {
				e.classList.toggle('exercise__answers--selected');

				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					if (element.classList.contains('exercise__answers--selected')) {
						submitButton.setAttribute('aria-disabled', 'false');
						return;
					} else {
						submitButton.setAttribute('aria-disabled', 'true');
					}
				}
			}
		}

		function incorrectAnswer(event) {
			feedbackText = event.getAttribute('data-feedback');

			event.classList.remove('exercise__answers--selected');
			event.classList.add('exercise__answers--incorrect');

			// submitFeedback.innerHTML = `<span class="material-symbols-rounded">cancel</span> <strong>Resposta errada!</strong><br><span class="feedback__content">` + feedbackText + `</span>`;
			// submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--correct');
			// submitFeedback.classList.add('exercise__submit__feedback--incorrect');
		}

		function correctAnswer(event) {
			feedbackText = event.getAttribute('data-feedback');

			event.classList.remove('exercise__answers--selected');
			event.classList.add('exercise__answers--correct');

			// submitFeedback.innerHTML = `<span class="material-symbols-rounded">check_circle</span> <strong>Resposta correta!</strong><br><span class="feedback__content">` + feedbackText + `</span>`;
			// submitFeedback.classList.remove('d-none', 'exercise__submit__feedback--incorrect');
			// submitFeedback.classList.add('exercise__submit__feedback--correct');

			if (submitAnswerFeedback) {
				submitAnswerFeedback.classList.remove('d-none');
			}
		}

		function blockAnswerOption() {
			for (let i = 0; i < answerOption.length; i++) {
				const element = answerOption[i];

				element.classList.add('exercise__answers--blocked');
			}
		}

		function butttonCheck() {
			if (submitButton.getAttribute('type') === 'submit') {
				score++;

				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					if (exerciseData === 'one') {
						if (element.classList.contains('exercise__answers--selected')) {
							if (!element.hasAttribute('correct')) {
								console.log('errou');
								incorrectAnswer(element);
								blockAnswerOption();
							} else {
								console.log('acertou');
								correctAnswer(element);
								blockAnswerOption();
							}
						}
					} else if (exerciseData === 'multiple') {
						// Which feedback will show
						if (element.hasAttribute('correct')) {
							if (element.classList.contains('exercise__answers--selected')) {
								console.log('correto e selecionado');
							} else {
								console.log('feedback medio');
							}
						} else {
							if (element.classList.contains('exercise__answers--selected')) {
								console.log('feedback erro');
								return;
							} else {
								console.log('segue em frente');
							}
						}

						// Show who is correct and wrong
						if (element.classList.contains('exercise__answers--selected')) {
							if (!element.hasAttribute('correct')) {
								console.log('errou');
								incorrectAnswer(element);
								blockAnswerOption();
							} else {
								console.log('acertou');
								correctAnswer(element);
								blockAnswerOption();
							}
						}
					}
				}
				submitButton.setAttribute('type', 'reset');
				submitButton.innerHTML = 'Recomeçar';
			}
		}

		function buttonReset() {
			if (submitButton.getAttribute('type') === 'reset') {
				for (let i = 0; i < answerOption.length; i++) {
					const element = answerOption[i];

					element.classList.remove('exercise__answers--correct', 'exercise__answers--incorrect', 'exercise__answers--blocked', 'exercise__answers--selected');
					submitButton.setAttribute('type', 'submit');
					submitButton.innerHTML = 'Conferir';
					submitButton.setAttribute('aria-disabled', 'true');
				}

				if (submitFeedback.classList.contains('exercise__submit__feedback--correct')) {
					score = 0;
				}
				submitFeedback.classList.remove('exercise__submit__feedback--correct', 'exercise__submit__feedback--incorrect');
				submitFeedback.classList.add('d-none');

				if (submitAnswerFeedback) {
					submitAnswerFeedback.classList.add('d-none');
				}
			}
		}
	});
})();
