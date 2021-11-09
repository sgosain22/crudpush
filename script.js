document.getElementById("update").style.display = "none";
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  addData();
  showData();
  resetForm();
});

var list = [];

var obj = {
  fullName: "",
  studentCode: "",
  emailId: "",
  contact: "",
  city: "",
};

function showData() {
  var row = "";
  list.map((value, i) => {
    console.log(value);
    row += `<tr>
  <td>${value.fullName}</td>
  <td>${value.studentCode}</td>
  <td>${value.emailId}</td>
  <td>${value.contact}</td>
  <td>${value.city}</td>
  <td>
  <a href="#" onclick="editData(${i})"> Edit </a>  
  <a href="#" onclick="delData(${i})"> Delete </a>
  </td>
  </tr>`;
  });
  document.getElementById("myTable").innerHTML = row;
}


document.getElementById("update").addEventListener("click", (e) => {
  e.preventDefault();
  upDate(x);
  resetForm();
});

function addData() {
  var fullName = document.getElementById("fullName").value;
  var studentCode = document.getElementById("studentCode").value;
  var emailId = document.getElementById("emailId").value;
  var contact = document.getElementById("contact").value;
  var city = document.getElementById("city").value;
 list = JSON.parse(localStorage.getItem("list"));
   localStorage.setItem("list", JSON.stringify(list));
  console.log(list);
  list.push({
    "fullName": fullName,
    "studentCode": studentCode,
    "emailId": emailId,
    "contact": contact,
    "city": city
  });
  localStorage.setItem("list", JSON.stringify(list));
  console.log(list);
  
}

let x;
function editData(i) {
  document.getElementById("update").style.display = "block";
  document.getElementById("btn").style.display = "none";
  x = i;
  document.getElementById("fullName").value = list[i].fullName;
  document.getElementById("studentCode").value = list[i].studentCode;
  document.getElementById("emailId").value = list[i].emailId;
  document.getElementById("contact").value = list[i].contact;
  document.getElementById("city").value = list[i].city;
}

function upDate(i) {
  document.getElementById("btn").style.display = "block";
  document.getElementById("update").style.display = "none";

  var newfullName = document.getElementById("fullName").value;
  var newstudentCode = document.getElementById("studentCode").value;
  var newemailId = document.getElementById("emailId").value;
  var newcontact = document.getElementById("contact").value;
  var newcity = document.getElementById("city").value;
  list[i].fullName = newfullName;
  list[i].studentCode = newstudentCode;
  list[i].emailId = newemailId;
  list[i].contact = newcontact;
  list[i].city = newcity;
  localStorage.setItem("list", JSON.stringify(list));
  var text = localStorage.getItem("list");
  list = JSON.parse(text);
  console.log(i);
  showData();
}

function delData(i) {
  list.splice(i, 1);
  localStorage.setItem("list", JSON.stringify(list));
  var text = localStorage.getItem("list");
  list = JSON.parse(text);
  showData();
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("studentCode").value = "";
  document.getElementById("emailId").value = "";
  document.getElementById("city").value = "";
  document.getElementById("contact").value = "";
}

function searchFunc() {
  var filter = document.getElementById("myInput").value.toUpperCase();
  var studentList = document.getElementById("studentList");
  var tr = studentList.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      var textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

