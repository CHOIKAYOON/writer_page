![샘플](https://user-images.githubusercontent.com/31337244/86211086-bb588400-bbb0-11ea-967d-78d2830fd2cc.JPG)
![샘플2](https://user-images.githubusercontent.com/31337244/86211089-bc89b100-bbb0-11ea-9cb9-7f3c07f21714.JPG)


## 일정표 관리 샘플 페이지

### `Components 폴더의 컴포넌트들 설명`
* Todoist.js 
    * TodoItem을 담는 div 리스트 틀

* Template.js
    * 일정표 전체 기준 틀

* TodoInset.js
    * 글 쓰기 팝업창 

* TodoItem.js
    * 일정표 일정관리 Item 
    
    
    -----------------------------------------------
    
### `useSet / userEffect를 사용하여 개발 - Hook`

* TodoInset에서 useSet을 사용하여, 함수 자체내에서 '' 값을 넣어서 구현.
* TodoInset에서 useEffect를 사용하여 일정표 값 'selecteTodo'값이 비어있으며, 새 팝업창 호출, 그게 아니면 기존에 있던 값으로 노출 되도록 구현. 
