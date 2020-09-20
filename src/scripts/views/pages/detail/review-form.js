import Review from '../../../data/review';
import Modal from '../../components/modal';
import { createReviews } from '../../templates/template-creator';

class ReviewForm {
  init(reviewForm) {
    this.button = reviewForm.querySelector('#send-button');
    this.info = document.querySelector('#form-review .info');
    this._inputOnFocus(reviewForm);
    this._initSendButton(reviewForm);
  }

  _inputOnFocus(reviewForm) {
    const labels = reviewForm.querySelectorAll('.label-form');
    const inputs = reviewForm.querySelectorAll('.input-form');
    inputs.forEach((input, index) => {
      input.addEventListener('focusin', () => {
        this.__labelFocus({ focus: true, labels, index });
      });
      input.addEventListener('focusout', () => {
        if (!this.__validateInput(input)) {
          this.__labelFocus({ focus: false, labels, index });
        }
      });
    });
  }

  _initSendButton(reviewForm) {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.__disableButton();
      this.__sendReview(reviewForm);
    });
  }

  __labelFocus({ focus, labels, index }) {
    const labelClass = labels[index].classList;
    if (focus) {
      labelClass.add('active');
    } else {
      labelClass.remove('active');
    }
  }

  __disableButton() {
    this.button.classList.add('disabled');
    this.button.setAttribute('disable', 'true');
  }

  __enableButton() {
    this.button.classList.remove('disabled');
    this.button.setAttribute('disable', 'false');
  }

  async __sendReview(reviewForm) {
    const review = this.__collectReview(reviewForm);
    this.__enableButton();
    if (this.__validateForm(review)) {
      this.__hideInfo();
      const response = await Review.post(review);
      this.__handleResponse(response, reviewForm);
    }
  }

  __handleResponse(response, reviewForm) {
    if (response) {
      this.__resetForm(reviewForm);
      Modal.show(response);
    }
    if (!response.error) {
      this.__updateReviews(response);
    }
  }

  __collectReview(form) {
    const getValue = (selector) => form.querySelector(selector).value;
    return {
      id: getValue('#id'),
      name: getValue('#name'),
      review: getValue('#review'),
    };
  }

  __updateReviews({ customerReviews }) {
    const container = document.querySelector('.reviews-container');
    container.innerHTML = createReviews(customerReviews);
  }

  __resetForm(form) {
    form.reset();
    const labels = form.querySelectorAll('.label-form');
    labels.forEach((_label, index) => {
      this.__labelFocus({ focus: false, labels, index });
    });
  }

  __validateForm({ id, name, review }) {
    let passed = true;
    if (!id) {
      passed = this.__showInfo('Error: provide the correct id!');
    }
    if (!name) {
      passed = this.__showInfo('Please provide your name!');
    }
    if (!review) {
      passed = this.__showInfo('Please write your review!');
    }
    return passed;
  }

  __validateInput(input) {
    return input.value;
  }

  __showInfo(text) {
    this.info.classList.add('d-block');
    this.info.innerText = text;
    return false;
  }

  __hideInfo() {
    this.info.classList.remove('d-block');
  }
}

export default ReviewForm;
