let staff = JSON.parse(localStorage.getItem("staff")) || [];

function addStaff(){
    let n = document.getElementById("name").value;
    let r = document.getElementById("role").value;

    staff.push({name:n, role:r});
    localStorage.setItem("staff", JSON.stringify(staff));

    load();
}

function load(){
    let list = document.getElementById("list");
    list.innerHTML = "";

    staff.forEach((s,i)=>{
        list.innerHTML += `
        <div class="staff">
            <b>${s.name}</b> - ${s.role}
            <button onclick="del(${i})">Delete</button>
        </div>
        `;
    });
}

function del(i){
    staff.splice(i,1);
    localStorage.setItem("staff", JSON.stringify(staff));
    load();
}

load();