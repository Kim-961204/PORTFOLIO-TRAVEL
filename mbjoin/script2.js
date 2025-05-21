function chkId() {
   let id = memberFrm.member_id.value;
   
   $.ajax(
      {
         type:"get",
         async:true,   //T:동기, F:비동기
         url:"/getData",
         data:{"id":id},
         success:function(data, textStatus) {
            /*alert("데이터 전송 성공");*/
            //alert(data);
            var responseData = JSON.parse(data);
            //alert(responseData);
            if(responseData.id == "y")
               alert("이용 가능한 아이디 입니다!");
            else alert("이용 불가능한 아이디 입니다!");
            /*alert(responseData.id);*/
            
         },
         error:function(data) {
            alert("데이터 전송 실패")
         }
   });
}