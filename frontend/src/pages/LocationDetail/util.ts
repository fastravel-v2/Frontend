export const keyToString = (key: string): string => {
    const keyMap: { [key: string]: string } = {
        scale: '시설 규모',
        creditCard: '신용카드사용여부',
        tel: '문의 및 안내',
        babyEquipmentRental: '유모차 대여',
        address: '주소',
        petsAvailable: '애완동물가능여부',
        fee: '입장료',
        postalCode: '우편번호',
        timeAvailable: '이용시간',
        closedForTheDay: '휴일',
        parking: '주차시설',
    }

    return keyMap[key] || key
}