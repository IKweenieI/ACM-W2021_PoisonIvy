for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 6; j++) {
     let replace = j.toString() + i.toString();
      let starNum = parseInt(replace[0]);
      let starGrp = replace[1];
      document.getElementById(replace).addEventListener("mouseover", function () {
         for (let i = 1; i <= 5; i++) {
           document.getElementById(i.toString() + starGrp).classList.remove("active"); }
            for (let i = 1; i <= starNum; i++) {
               document.getElementById(i.toString() + starGrp).classList.add("active"); }
              }); document.getElementById(replace).addEventListener("mouseleave", function () {
                 if (!document.getElementById(replace).classList.includes("clicked")) {
                    for (let i = 1; i <= 5; i++) {
                      document.getElementById(i.toString() + starGrp).classList.remove("active"); }
                     }
                   }); document.getElementById(replace).addEventListener("click", function () {
                      for (let i = 1; i <= starNum; i++) {
                         document.getElementById(i.toString() + starGrp).classList.add("active clicked"); }
  });
 }
}
