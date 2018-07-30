var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // document.getElementById("ajax").innerHTML = xhr.responseText;
          $("#ajax").html(xhr.responseText)
      }
  };
xhr.open("GET", "/header.html", true);
xhr.send();
