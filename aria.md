# aria-*

`aria-required`

required가 true 이면 스크린 리더 사용자에게 해당 요소를 필수적으로 입력해야한 다는것을 알려준다

<input type="text" name = "username" id = "username" aria-required="true" 
/>

`aria-describedby`

추가 설명을 제공해주는 속성이다

<form>
  <label for="fname">이름</label>
  <input name = "" type="text" id="fname" aria-describedby="int2">
  <p id="int2">테스트중입니다</p>
</form>

`aria-label`

해당 요소가 어떤 일을 하는지 설명을 제공해주는 속성이다

<button aria-label="send email">send</button>

`aria-expanded`

현재 탭 패널이 펼쳐져있는지 아니면 닫혀있는지를 나타낸다

<div role="tabpanel" aria-expanded= "true"></div>


`aria-pressed`

해당 요소가 현재 눌려져 있는지 아니면 눌려있지 않는 상태인지 나타낸다

<button aria-pressed="true">요소가 눌려있는지 확인</button>


`aria-disabled`

자료 흐름도

상태 전이도