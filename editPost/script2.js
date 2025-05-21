function savePost() {
	let post_id = $(".post_id").val();
	location.href="editPost?post_id=" + post_id;
}
function addFile(button) {
	const parent = button.parentElement;
	var addElement = document.createElement('div');
	addElement.innerHTML = '<input type="file" name="file">'
							+ '<input type="button" value="X" onclick="delFile(this)">';
	parent.appendChild(addElement);
}

function deletePost() {
	
}
function viewRecCnt() {
	searchFrm.submit();
}
function toggle_like() {
	const post_no = document.getElementById("post_no").innerText;
	const user_id = replyFrm.user_id.value;
	location.href="/like?post_no="+post_no+"&user_id="+user_id;
}

function delFile(button) {
	button.parentElement.remove();
}

function deleteReply() {
	
}

function checkValue() {
	const frm = document.writePost;
	
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
	window.alert("글 등록이 되었습니다!");
		frm.submit();
	}
