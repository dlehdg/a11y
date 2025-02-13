`Test Driven Development`

TDD : Test Driven Development, 테스트 주도 개발

TDD 프로세스 ( 3단계 과정)

Red
- 실패하는 테스트를 작성하고 이 테스트가 실패하는지 검증 -> 실패 단계
- 실패의 이유는 로직 문제 -> 테스트 케이스 문제가 아니다

Green
- 모든 테스트가 성공하도록 구현 -> 모든 테스트 성공 단계
- 이를 위한 최고한의 코드 변경

Refactor
- 코드 정리 -> 리팩토링 단계
- 구현 설계를 개선 (가독성, 적용성, 성능)

`테스트 주도 개발의 장단점`

장점
- 모듈별 코드 개발 -> 재사용성 확보
- 설계의 수정시간 단축 -> 개발전 설계 검토
- 유지보수의 용이 -> 애초에 고려되어 있다

단점
- 초기 프로세스 구축기간
- 빠른 대응이 어렵다


`TDD 세부 흐름`

<img src="/img/캡처.PNG" />

Write Test -> Run Unit Test -> Develop -> Run Unit Test -> 리팩토링 -> Run Unit Test


설정과 해지
-

`Timer를 이용한 경우 - setTimeout과 같은 메서드`

테스트는 예측이 어려워지고 느려진다
이러한 경우는 fake timer를 사용해야 한다
