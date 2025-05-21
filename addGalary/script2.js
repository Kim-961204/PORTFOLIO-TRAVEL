function checkValue() {
	const frm = document.addGalary;
	
	if(frm.title.value == "") {
			window.alert("제목을 입력해주세요!");
			frm.title.focus();
			return;
		}
	if(frm.content.value == "") {
			window.alert("내용을 입력해주세요!");
			frm.content.focus();
			return;
		}
	if(frm.img_file.value == "") {
				window.alert("사진 파일을 넣어주세요!");
				frm.img_file.focus();
				return;
			}
	window.alert("갤러리 등록이 되었습니다!");
		frm.submit();
}
	
