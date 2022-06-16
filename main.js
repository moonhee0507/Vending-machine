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
const buttonBuy = document.querySelector('#buy'); // 획득버튼
const ulBuy = document.querySelector('#ul-buy'); // 바구니2의 ul

// let preBalance = 0;
// balance.innerHTML = 0 + '원';

// 입금버튼을 누를 때 메서드
buttonDeposit.addEventListener('click', HandleDepositButton)
    
    // if (inputDeposit.value <= 0) {
    //     alert('입금액을 입력해주세요.');
    // } else { // 입금액이 잔액에 그려진다.
    //     let preBalance = 0;
    //     balance.innerHTML = 0 + '원';
    //     balance.innerHTML = preBalance + parseInt(inputDeposit.value)+ '원';
    //     preBalance += parseInt(inputDeposit.value)
        
    //     // 입금액 입력칸은 비어진다.
    //     inputDeposit.value = '';
    // }
    

// 입금 함수
function HandleDepositButton() {
    if (inputDeposit.value <= 0) {
        alert('입금액을 입력해주세요.');
    } else { // 입금액이 잔액에 그려진다.
        // let preBalance = 0;
        // balance.innerHTML = 0 + '원';
        // balance.innerHTML = preBalance + parseInt(inputDeposit.value)+ '원';
        // preBalance += parseInt(inputDeposit.value)
        
        // // 입금액 입력칸은 비어진다.
        // inputDeposit.value = '';

        depositCalc()
    }

    // return balance;
}

function depositCalc() {
    if (inputDeposit.value > 0) {
        let preBalance = 0;
        balance.innerHTML = 0 + '원';
        balance.innerHTML = preBalance + parseInt(inputDeposit.value)+ '원';
        preBalance += parseInt(inputDeposit.value)
        
        // 입금액 입력칸은 비어진다.
        inputDeposit.value = '';
    }

    return balance;
}

// 거스름돈 반환 버튼을 클릭하면
buttonReturn.addEventListener('click', function() {
    
    // 확인창이 뜬다.
    if (confirm('거스름돈을 받으시겠습니까?')) {
        alert(`반환되었습니다.`);
        balance.innerHTML = 0 + '원';
        inputDeposit.value = '';        
    }
});

// 상품버튼 클릭 시 이벤트
// i번째 버튼을 클릭하면, i번째 버튼에 맞는 리스트가 생긴다.
const arrProducts = ['오리지널 콜라', '바이올렛 콜라', '옐로우 콜라', '쿨 콜라', '그린 콜라', '오렌지 콜라'];

const arrProductsEn = ['Original_Cola', 'Violet_Cola', 'Yellow_Cola', 'Cool_Cola', 'Green_Cola', 'Orange_Cola'];

function makeList(i) {
    let buttonCount = 0;
    document.querySelectorAll('.button-product')[i].addEventListener('click', function() {
        console.log(`처음 또는 계속 버튼누르자마자 버튼 카운트: ${buttonCount}`)
        buttonCount += 1;
        
        if (buttonCount == 1) {
            const basketedProduct = document.createElement('li');
            ulSelect.appendChild(basketedProduct);
            basketedProduct.id = i; // id 적용

            document.getElementById(i).innerHTML = `
                <img src="./images/${arrProductsEn[i]}.png" alt="${arrProducts[i]}" class="list-img">
                ${arrProductsEn[i]}
                <span class="quantity">${buttonCount}</span>
            `;
        } else {
            document.getElementById(i).innerHTML = `
                <img src="./images/${arrProductsEn[i]}.png" alt="${arrProducts[i]}" class="list-img">
                ${arrProductsEn[i]}
                <span class="quantity">${buttonCount}</span>
            `;
        }
    });
}

const 오리지널콜라 = new makeList(0);
const 바이올렛콜라 = new makeList(1);
const 옐로우콜라 = new makeList(2);
const 쿨콜라 = new makeList(3);
const 그린콜라 = new makeList(4);
const 오렌지콜라 = new makeList(5);

// 획득버튼 메서드
buttonBuy.addEventListener('click', function() {
    handleGetButton();
    }
);

// 획득버튼 함수
function handleGetButton() {
    if (parseInt(balance.innerHTML) == 0) {

        alert('입금을 해주세요.')

    } else if (parseInt(balance.innerHTML) >= basketCalc()) {

        for (let i = 0; i < ulSelect.children.length; i++) {
            const boughtProduct = document.createElement('li');
            ulBuy.appendChild(boughtProduct);
    
            const boughtProductImg = document.createElement('img')
            boughtProduct.appendChild(boughtProductImg);
            boughtProductImg.src = ulSelect.children[i].children[0].src;
            boughtProductImg.alt = ulSelect.children[i].children[0].alt;
    
            const boughtProductText = document.createTextNode(ulSelect.children[i].innerText.slice(0, -1))
            boughtProduct.appendChild(boughtProductText);
            
            const boughtProductSpan = document.createElement('span')
            boughtProduct.appendChild(boughtProductSpan);
            boughtProductSpan.classList.add('buy-quantity');
            boughtProductSpan.innerHTML = ulSelect.children[i].children[1].innerHTML;
            }
            
            // 잔액 계산
            // balance.innerHTML = (원래있던 잔액 - 장바구니금액) + '원';
            // balance.innerHTML = parseInt(balance.innerHTML)- basketCalc() + '원';
            balanceCalcAfterGet();

            // 장바구니 비우기
            ulSelect.innerHTML = '';
    
            // 총구매액 계산 함수
            totalCalc()

            //버튼카운트 리셋

    } else if (parseInt(balance.innerHTML) < basketCalc()) {
        alert('입금을 더 해주세요.')
    }
}

// 획득 후 잔액 계산 함수
function balanceCalcAfterGet() {
    // 획득버튼을 누른 후 잔액이 차감되는 기능
    let preBalance = parseInt(depositCalc().innerHTML);
    balance.innerHTML = preBalance - basketCalc() + '원';

    console.log(preBalance)
}

// 장바구니액 계산 함수
function basketCalc() {
    let basketTotal = 0;
    let preBasket = 0;
    for (let i = 0; i < ulSelect.children.length; i++) {
        basketTotal = preBasket + parseInt(document.querySelectorAll('.quantity')[i].innerHTML) * 1000;
        preBasket += parseInt(document.querySelectorAll('.quantity')[i].innerHTML) * 1000
    }
    return basketTotal;
}

// 총구매액 계산 함수
function totalCalc() {
    let buy = document.querySelector('#content-buy');
    let preBuy = 0;
    buy.innerHTML = 0 + '원';

    for (let i = 0; i < ulBuy.children.length; i++) {
        buy.innerHTML = preBuy + parseInt(document.querySelectorAll('.buy-quantity')[i].innerHTML) * 1000 + '원';
        preBuy += parseInt(document.querySelectorAll('.buy-quantity')[i].innerHTML) * 1000;
    }
}