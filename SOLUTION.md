## 기능 구현 목록

- **칸반 컬럼과 칸반 아이템의 순서 이동은 모두 Drag & Drop 방식으로 이루어져야 합니다.**  
    > JIRA 제작사 atlassian의 react-beautiful-dnd 라이브러리를 사용하여 Drag&Drop을 구현
    > 칸반 컬럼, 칸반 아이템은 3개의 state 사용
    > + columns (칸반 컬럼)
    >   + 칸반 컬럼 아이디, 타이틀, 칸반 아이템 리스트
    > + columnOrder (칸반 컬럼 순서)
    >   + 칸반 컬럼 아이디 리스트
    > + item (칸반 아이템)
    >   + 칸반 아이템 아이디, 내용  


- **칸반 아이템 (연두색 테두리)**
    - 생성,수정,삭제 기능을 구현해주세요.
        - 내용이 빈 칸반아이템의 생성 및 수정은 불가능합니다.
          > textarea의 값이 empty 일경우 생성/불가 (alert 팝업)
        - 칸반 아이템의 수정 및 삭제는 자유롭게 구현하시면 됩니다.
          > 아이템 오른쪽 연필 클릭시 수정, 수정시 ✓ ✕ 버튼으로 적용/취소 구현
    - 칸반 아이템은 칸반 컬럼간 이동 가능하며, 같은 칸반 컬럼 내에서도 순서가 바뀔 수 있습니다.
      > 칸반(Column)에 다른 칸반의 아이템을 Drop이 가능하도록 중첩하여 구현
- **칸반 컬럼 (하늘색 테두리)**
    - 생성, 네이밍 수정 (위 이미지의 TODO 부분), 삭제 기능을 구현해주세요.
        - 칸반 컬럼의 수정 및 삭제는 자유롭게 구현하시면 됩니다.
          > 칸반 생성
    - 칸반 컬럼은 최소 2개가 필요합니다. 칸반이 2개 이하가 되는 경우 더 이상 삭제할 수 없습니다.
      > 칸반 컬럼 개수가 2개이하일경우 삭제 불가 (alert 팝업)
    - 칸반 컬럼을 생성하면, 항상 오른쪽 끝에 생성됩니다.
      > columnOrder state 리스트에 생성된 칸반을 push하여 우측에 생성
    - 칸반 아이템이 5개 이상인 경우 스크롤을 할 수 있어야 합니다.
      > css의 max-height 값으로 5개 이상이 될경우 스크롤 생기게 작성
    - 칸반 컬럼의 순서도 바뀔 수 있습니다.
      > 칸반 컬럼을 Draggable로 지정하여 Drag&Drop이 가능하게 구현
    
- **데이터**
    - 페이지를 새로고침 하더라도, 데이터가 사라지지 않아야 합니다.
      > redux-persist 라이브러리를 사용하여 브라우저 LocalStorage에 저장되도록 구현  