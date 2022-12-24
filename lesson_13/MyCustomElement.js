class MyCustomElement extends HTMLElement {
  constructor(selector) {
    super();
    this.element = document.createElement(selector);
  }

  addClass(className) {
    this.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.classList.remove(className);
    return this;
  }

  setMyAttribute(attributeName, attributeValue) {
    this.setAttribute(attributeName, attributeValue);
    return this;
  }

  removeMyAttribute(attributeName) {
    this.removeAttribute(attributeName);
    return this;
  }
}
