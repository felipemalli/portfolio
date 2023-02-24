const preventScrolling = () => {
  window.addEventListener('keydown', function(e) {
    if(['ArrowLeft','ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }, false);
};

preventScrolling();

export { };
