// 요구사항 명세
// 판매할 음료에 대한 데이터는 따로 분리되어 있어야 한다. (혹은 API로 받아야 한다)
// 돈의 입금과 음료의 선택 시점은 자유롭지만 돈이 모자라면 음료가 나와서는 안된다.
// 거스름돈이 나와야 한다.
// 버튼을 누르면 상품이 1개씩 추가된다. (일반적인 자판기와 동일)


// 입금액을 입력하고 입금 버튼을 클릭하면 잔액이 늘어난다.
const inputDeposit = document.querySelector('#inputDeposit'); // 입금액 입력칸
const buttonDeposit = document.querySelector('#buttonDeposit'); // 입금버튼
const divBalance = document.querySelector('.text-balance'); // 잔액 보이는 div
const balance = document.querySelector('#balance-unit'); // 잔액 원부분

buttonDeposit.addEventListener('click', function() {
    balance.innerHTML = inputDeposit.value + '원';
    
});

// 소지금이 늘어난다.
    // 입금액 입력칸은 비어진다.


// 거스름돈 반환 버튼을 클릭하면 확인창이 뜬다.
    // 잔액이 0원이 된다.
    // 소지금이 0원이 된다.
    // 장바구니에서 상품이 모두 사라진다.

// 상품버튼을 클릭하면 
    // .left에 있는 .selected-list 안으로 들어간다
    // 이미 안에 있으면 숫자가 +1된다.

// 획득버튼을 누르면 .right에 있는 .selected-list 안으로 들어간다
    // 돈이 그 이상 있어야 버튼이 작동한다.
    // 돈이 그 이상 없으면 입금 알림이 뜬다.