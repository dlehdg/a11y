# no-hash-ref

descriptive 

<!-- 기존 a 태그 안에 href를 사용해서 링크를 지정했는데 이게 아닌 onmouseover 속성 이나 클릭 이벤트 후 함수를 불러올때 href 안에 #을 추가해 이용해 사용 -->

<!-- 즉 a 태그 안에 클릭 이벤트를 실행해야 한다면 href 안에는 #을 추가해야한다 -->
<!-- 버튼 태그를 사용하는게 일반적이지만 a 태그를 사용해야 할때 위의 규칙을 따라야한다 -->
<!-- 또한 href 안에 설명을 추가해도 좋다 -->

<!-- O -->
<a href="#" onClick="test"></a>
<a href="foo#" onClick="footest"></a>

<!-- X -->

<a >