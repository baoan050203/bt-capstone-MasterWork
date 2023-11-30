document.getElementById('btn_project_one').onclick = function() {
    document.getElementById('project_one').style.display = 'block';
    document.getElementById('project_two').style.display = 'none';
    document.getElementById('project_three').style.display = 'none';
}

document.getElementById('btn_project_two').onclick = function () {
    document.getElementById('project_one').style.display = 'none';
    document.getElementById('project_two').style.display = 'block';
    document.getElementById('project_three').style.display = 'none';
}

document.getElementById('btn_project_three').onclick = function () {
    document.getElementById('project_one').style.display = 'none';
    document.getElementById('project_two').style.display = 'none';
    document.getElementById('project_three').style.display = 'block';
}