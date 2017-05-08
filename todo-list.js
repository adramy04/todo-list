<!DOCTYPE html>
<html lang='ja'>
<head>
<meta charset='UTF-8'>
<title>Todo List</title>
	</head>
	<body>
	<h1>TODO list</h1>
		
		<main>
		<!--リストに項目を追加する
	    //入力フォームを作成-->
<form id='todo-form'>
	<input type='text'>
		<button type='submit'>追加</button>
			</form>
			
	　<!--追加した項目をリスト化する場所-->
			<ul id='todo-list'><!--jsによりここにリストが表示される--></ul>
		</main>
	
		<script>

			
(function(){
'use strict';  //これ入れると厳格になる

	//フォームとリストの両方から得る
var todoForm = document.getElementById('todo-form');
var todoList = document.getElementById('todo-list');

var todoInput =document.querySelector('#todo-form input');

//追加ボタンが押されたときの動作
var addItem =function(event){
		
	//ページの遷移を阻止。消えなくなる
	event.preventDefault();
	
	//空の時には何もsubmitしない。!は余事象を示す
	if (!todoInput.value)
{return;	
}
	
	//チェックボックス追加
	var checkBox =document.createElement('input');
	checkBox.type='checkbox';
	
	//チェックボックスを入れる空間創造
	var span=document.createElement('span');
	span.textContent=todoInput.value;
	
	//削除ボタン追加
	var deleteButton = document.createElement('button');
	deleteButton.textContent ='削除';
	
	//削除ボタン押す
	deleteButton.addEventListener('click',deleteItem);
	
	
	var listItem = document.createElement('li');
	//いらない　listItem.textContent=todoInput.value;

	//checkBoxとspanも削除ボタンもlistItemに追加
	listItem.appendChild(checkBox);
    listItem.appendChild(span);
	listItem.appendChild(deleteButton);
	
	
	
	//todolist（親）の中に、listItem（子）を追加する
	todoList.appendChild(listItem);
	
	//入力欄を空にする
	todoInput.value='';
};
	
//削除ボタン押された時の動作関数
	var deleteItem=function(event){
		
		//押した削除ボタンの親要素が動作の対象
		var listItem = event.target.parentElement;
		//todoListの中にlistItemがあれば消すよ
		todoList.removeChild(listItem);
		
	};
	
	
	
	//submitに紐づけ
	todoForm.addEventListener('submit',addItem);

	//一瞬で消えるのは、送信した時、ページが遷移する。送信と同時にページが更新される。
	//この動作をキャンセルする。


}());
			
			
			
			
		</script>
	</body>
	</html>
