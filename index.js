const rentalDeals = [
    {
        img: './images/blue-car.png',
        title: 'Jaguar XE L P250',
        review: '4.8',
        reviewCount: '(2.436 reviews)',
        Passagers: '4 Passagers',
        doorsDec: '2 Doors',
        price: '$1,800'
    },
    {
        img: './images/white-car.png',
        title: 'Audi R8',
        review: '4.6',
        reviewCount: '(1.936 reviews)',
        Passagers: '2 Passagers',
        doorsDec: '2 Doors',
        price: '$2,100'
    },
    {
        img: './images/bmw.png',
        title: 'BMW M3',
        review: '4.5',
        reviewCount: '(2.036 reviews)',
        Passagers: '4 Passagers',
        doorsDec: '4 Doors',
        price: '$1,600'
    },
    {
        img: './images/Lamborghini.png',
        title: 'Lamborghini Huracan',
        review: '4.3',
        reviewCount: '(2.236 reviews)',
        Passagers: '2 Passagers',
        doorsDec: '2 Doors',
        price: '$2,300'
    },
]


let rental = document.querySelector('.car-card')
console.log(rental)
rentalDeals.map((item) => (
    rental.innerHTML += `
        <div class="flex flex-col gap-6 shadow-xl bg-[#ffffff] p-6 rounded-lg" >
            <img src=${item.img} alt=${item.title} >
            <div class="flex flex-col gap-6 justify-center items-start">
                <div class="">
                    <h6 class="text-[#262626] pb-3 font-medium">${item.title}</h6>
                    <p class="w-full text-xs flex gap-1"><img src="./images/Star 1.png" alt=""> <span class="font-bold">${item.review}</span>
                            (2.436 reviews)</p>
                    <div class="flex justify-between gap-4 pt-4 items-start">
                        <div>
                            <div class="flex justify-start gap-1 items-ceter pb-2">
                                <img src="./images/user.png" alt="user">
                                <p class="text-[##959595] text-xs">${item.Passagers}</p>
                            </div>
                            <div class="flex justify-start gap-1 items-ceter">
                                <img src="./images/Frame-b.png" alt="user">
                                <p class="text-[##959595] text-xs">Air Conditioning</p>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-start gap-1 items-ceter pb-2">
                                <img src="./images/Frame.png" alt="user">
                                <p class="text-[##959595] text-xs">Auto</p>
                            </div>
                            <div class="flex justify-start gap-1 items-ceter">
                                <img src="./images/Frame3.png" alt="user">
                                <p class="text-[##959595] text-xs">${item.doorsDec}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-t-1 border-[#E0E0E0] pt-6">
                    <div class="flex justify-between items-center gap-20 pb-6">
                        <p class="text-[#595959] text-sm">Price</p>
                        <p><span class="text-[#292929] font-bold">${item.price}</span>/day</p>
                    </div>
                    <button class="w-full py-2 px-8 bg-[#1572D3] text-white rounded-lg cursor-pointer">Rent Now &#8594;</button>
                </div>
            </div>
        </div>
    
    `))


    