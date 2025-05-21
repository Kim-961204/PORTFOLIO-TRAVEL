function editUser() {
	document.frmInfo.action = 'editUser';
	document.frmInfo.method = 'post';
	document.frmInfo.submit();
}

function deleteUser() {
	document.frmInfo.action = 'deleteUser';
	document.frmInfo.method = 'post';
	document.frmInfo.submit();
}

function resetpw() {
    let newpw = document.frmresetpw.newpassword.value;
    let chkpw = document.frmresetpw.password.value;
    
    // newpw가 비어있는지 확인
    if (newpw == "") {
        alert("새 비밀번호를 입력해주세요.");
        document.frmresetpw.newpassword.focus();
    }
    else if (newpw == chkpw) { 
        alert("비밀번호를 변경하였습니다.");
        document.frmresetpw.submit();
    }
    else {
        alert("비밀번호가 일치하지 않습니다.");
        document.frmresetpw.reset();
        document.frmresetpw.newpassword.focus();
    }
}

