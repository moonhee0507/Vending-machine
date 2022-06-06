// 요구사항 명세
// 판매할 음료에 대한 데이터는 따로 분리되어 있어야 한다. (혹은 API로 받아야 한다)
// 돈의 입금과 음료의 선택 시점은 자유롭지만 돈이 모자라면 음료가 나와서는 안된다.
// 거스름돈이 나와야 한다.
// 버튼을 누르면 상품이 1개씩 추가된다. (일반적인 자판기와 동일)


// 입금액을 입력하고 입금 버튼을 클릭하면 잔액이 늘어난다.
const inputDeposit = document.querySelector('#input-deposit'); // 입금액 입력칸
const buttonDeposit = document.querySelector('#button-deposit'); // 입금버튼
const divBalance = document.querySelector('.text-balance'); // 잔액 보이는 div
const balance = document.querySelector('#content-balance'); // 잔액 금액
const buttonReturn = document.querySelector('#button-return'); // 반환버튼
const buttonProduct = document.querySelectorAll('.button-product'); // 상품버튼
const basketSelect = document.querySelector('#basket-select'); // 바구니1
const ulSelect = document.querySelector('#ul-select'); // 바구니1의 ul

let preBalance = 0;
balance.innerHTML = 0 + '원';

buttonDeposit.addEventListener('click', function() {
    
    if (inputDeposit.value <= 0) {
        alert('입금액을 입력해주세요.');
    } else {
        balance.innerHTML = preBalance + parseInt(inputDeposit.value)+ '원';
        preBalance += parseInt(inputDeposit.value)
        
        // 입금액 입력칸은 비어진다.
        inputDeposit.value = '';
    }
    
});

// 거스름돈 반환 버튼을 클릭하면
buttonReturn.addEventListener('click', function() {
    
    // 확인창이 뜬다.
    if (confirm('거스름돈을 받으시겠습니까?')) {
        alert(`반환되었습니다.`);
        balance.innerHTML = 0 + '원';
        inputDeposit.value = '';
        // TODO: 두 장바구니에서 상품이 모두 사라진다.
        
    }
});

// 상품버튼 클릭 시 이벤트
// i번째 버튼을 클릭하면, i번째 버튼에 맞는 리스트가 생긴다.
const arrProducts = ['오리지널 콜라', '바이올렛 콜라', '옐로우 콜라', '쿨 콜라', '그린 콜라', '오렌지 콜라'];

const arrProductsEn = ['Original_Cola', 'Violet_Cola', 'Yellow_Cola', 'Cool_Cola', 'Green_Cola', 'Orange_Cola'];

function makeList(i) {
    let buttonCount = 0;
    document.querySelectorAll('.button-product')[i].addEventListener('click', function() {
        buttonCount += 1;
        
        if (buttonCount == 1) {
            const basketedProduct = document.createElement('li');
            ulSelect.appendChild(basketedProduct);

            basketedProduct.innerHTML = `
                <img src="./images/${arrProductsEn[i]}.png" alt="${arrProducts[i]}">
                ${arrProductsEn[i]}
                <span class="quantity-line${i}">${buttonCount}</span>
            `;
        } else {
            document.querySelector(`.quantity-line${i}`).innerHTML = `${buttonCount}`;
        }
    });
}

const 오리지널콜라 = new makeList(0);
const 바이올렛콜라 = new makeList(1);
const 옐로우콜라 = new makeList(2);
const 쿨콜라 = new makeList(3);
const 그린콜라 = new makeList(4);
const 오렌지콜라 = new makeList(5);




// 획득버튼을 누르면 .right에 있는 .selected-list 안으로 들어간다
    // 돈이 그 이상 있어야 버튼이 작동한다.
    // 돈이 그 이상 없으면 입금 알림이 뜬다.