/*
      let currentColor = null;
      let isMousePressed = false;
      
      let button = document.getElementById("button");
      
      function colors() {
        let colorDivs = document.querySelectorAll(".colors");
      
        for (let color of colorDivs) {
          let randomColor = generateRandomColor();
          color.style.backgroundColor = randomColor;
          color.dataset.coloor = randomColor;
          color.addEventListener("click", setCurrentColor);
        }
      }
      
      function listenToMain() {
        main.addEventListener("mousedown", click);
        main.addEventListener("mousemove", Move);
        document.body.addEventListener("mouseup", Release);
      }
      
      function listenToButton() {
        button.addEventListener("click", function() {
          currentColor = null;
          let squares = document.querySelectorAll("#main > div");
          for (let square of squares) {
            square.style.backgroundColor = "white";
            button.style.backgroundColor = "white";
          }
        });
      }
      
      function click(e) {
        if (currentColor == null) {
          return;
        }
        isMousePressed = true;
      }
      
      function Move(e) {
        if (!isMousePressed) {
          return;
        }
        let overedDiv = document.elementFromPoint(e.x, e.y);
        overedDiv.style.backgroundColor = currentColor;
      }
      
      function Release(e) {
        isMousePressed = false;
      }
      
      function generateRandomColor() {
        let colorDisplayer = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + colorDisplayer;
      }
      
      function setCurrentColor(e) {
        let choosenColor = e.target.dataset.coloor;
        currentColor = choosenColor;
        button.style.backgroundColor = choosenColor;
      }
      
      colors();
      listenToMain();
      listenToButton();
      */
      let currentColor = null;
      let isMousePressed = false;
      
      let button = document.getElementById("button");
      
      function colors() {
        let colorDivs = document.querySelectorAll(".colors");
      
        for (let color of colorDivs) {
          let randomColor = generateRandomColor();
          color.style.backgroundColor = randomColor;
          color.dataset.coloor = randomColor;
          color.addEventListener("click", setCurrentColor);
        }
      }
      
      function listenToMain() {
        main.addEventListener("mousedown", click);
        main.addEventListener("mousemove", Move);
        document.body.addEventListener("mouseup", Release);
      }
      
      function listenToButton() {
        button.addEventListener("click", function() {
          currentColor = null;
          button.style.backgroundColor = "white";
          let squares = document.querySelectorAll("#main > div");
          for (let square of squares) {
            square.style.backgroundColor = "white";
            //button.style.backgroundColor = "white";
          }
        });
      }
      
      function click(e) {
        if (currentColor == null) {
          return;
        }
        isMousePressed = true;
      }
      
      function Move(e) {
        if (!isMousePressed) {
          return;
        }
        let overedDiv = document.elementFromPoint(e.x, e.y);
        overedDiv.style.backgroundColor = currentColor;
      }
      
      function Release(e) {
        isMousePressed = false;
      }
      
      function generateRandomColor() {
        let colorDisplayer = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + colorDisplayer;
      }
      
      function setCurrentColor(e) {
        let choosenColor = e.target.dataset.coloor;
        currentColor = choosenColor;
        button.style.backgroundColor = choosenColor;
      }
      
      colors();
      listenToMain();
      listenToButton();
      