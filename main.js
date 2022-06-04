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


// 상품버튼을 클릭하면 
for(let i = 0; i < buttonProduct.length; i++) {
    buttonProduct[i].addEventListener('click', function() {
    
        // ul 아래 li 생성 및 li 아래 img, span 생성
        const basketedProduct = document.createElement('li');
        ulSelect.appendChild(basketedProduct);
        
        // 장바구니 img 생성 및 붙이기
        // const imgProduct = document.createElement('img');
        // basketedProduct.appendChild(imgProduct);
        
        // 장바구니 span 생성 및 붙이기
        // const basketedCount = document.createElement('span');
        // basketedProduct.appendChild(basketedCount);

        basketedProduct.classList.add('listProductInfo');
        
        
        // TODO: 이미 안에 있으면 숫자가 +1된다.
        if (buttonCount > 1) {
            let buttonCount = 0;
            // 버튼 카운트가 올라간다.
            buttonCount++;
            
            basketedProduct.innerHTML = `
                <img src="./images/Original_Cola.png" alt="오리지널 콜라">
                Original_Cola
                <span>${buttonCount}</span>
            `;

        } else {
            basketedProduct.innerHTML = `
                <img src="./images/Original_Cola.png" alt="오리지널 콜라">
                Original_Cola
                <span>1</span>
            `;
        }
    });
}

// 획득버튼을 누르면 .right에 있는 .selected-list 안으로 들어간다
    // 돈이 그 이상 있어야 버튼이 작동한다.
    // 돈이 그 이상 없으면 입금 알림이 뜬다.