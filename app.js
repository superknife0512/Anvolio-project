new Vue({
    el: '#app',
    data: {
        experts: [
            {
                img: 'img/man1.jpg',
                name: 'Andrew G. Schofield',
                specialty: 'Phisycal Therapist',
            },

            {
                img: 'img/man2.jpg',
                name: 'Clifton K. Benjamin',
                specialty: 'Nutrition expert',
            },

            {
                img: 'img/man3.jpg',
                name: 'Arthur D. Clark',
                specialty: 'Mentality therapist',
            },

            {
                img: 'img/man4.jpg',
                name: 'Lissa D. Angela',
                specialty: 'Mental therapist',
            },
        ],

        testimonials:[
            {
                quote: 'In tincidunt lectus lectus, a faucibus diam finibus et. Duis vitae purus eget lacus mattis fringilla eu non ante. Quisque eget lacus arcu. Pellentesque eleifend hendrerit nulla eu porta. Mauris mollis, risus vitae posuere fermentum, quam diam venenatis ligula, et elementum urna arcu quis nibh. ',
                img: 'img/test1.jpeg',
                name: 'Lisa Domera'
            },
            {
                quote: 'Duis accumsan a nunc non posuere. Aenean nec purus nibh. Nullam volutpat et purus eleifend facilisis. Mauris venenatis posuere lectus, eget dignissim ex dignissim at. Nulla facilisi. Sed sollicitudin imperdiet tortor id molestie. Quisque sodales nec tellus nec consectetur. Maecenas a interdum augue. ',
                img: 'img/test2.jpg',
                name: 'Zoe Mandela'
            },

            {
                quote: 'Sed vulputate augue nec tincidunt placerat. Morbi ac porttitor sem. Sed sed laoreet metus, sit amet viverra augue. Phasellus nunc ligula, vulputate non blandit eget, rhoncus a felis. Sed vitae dui ut urna sagittis accumsan. Vestibulum mauris nunc, mattis imperdiet tempor non, pulvinar vitae risus.  ',
                img: 'img/test3.jpg',
                name: 'Angela Tourma'
            },           
        ],

        statics: [
            {
                img: '../img/sta1.png',
                number: 2314,
                name: 'Sastified Customers'
            },
            {
                img: '../img/sta2.png',
                number: 35,
                name: 'outstanding services'
            },
            {
                img: '../img/sta3.png',
                number: 429,
                name: 'awesome methods'
            },
            {
                img: '../img/sta4.png',
                number: 16,
                name: 'Experts'
            }
        ],

        prices:[
            {
                id: 'price-1',
                heading: 'Watsu for Two',
                detail: 'Two specialist therapists ',
                label: '$150',
            },
            {
                id: 'price-2',
                heading: 'Roman Trilogy',
                detail: 'Beginning with a frankincense inhalation ',
                label: '$120',
            },
            {
                id: 'price-3',
                heading: 'Inner Strength',
                detail: 'This ultimate trio of treatments  ',
                label: '$180',
            },
            {
                id: 'price-4',
                heading: 'Aromatherapy Massage',
                detail: ' enhance your mind, body and soul',
                label: '$70',
            },
            {
                id: 'price-5',
                heading: 'De-stress massage',
                detail: 'An intensive and restorative massage',
                label: '$80',
            },
            {
                id: 'price-6',
                heading: 'Revive Hot Stones',
                detail: 'A gentle treatment using the placement of warm basalt stones ',
                label: '$70',
            },
            {
                id: 'price-7',
                heading: 'Deep Relax Hot Stones',
                detail: 'The placement of warm basalt stones,',
                label: '$72',
            },
            {
                id: 'price-8',
                heading: 'Hot Stones Vichy Massage',
                detail: 'A stone, oil and water ritual ',
                label: '$80',
            },
        ],

        services: [
            {
                img:'../img/ser1.jpg',
                heading: 'Hot stone service',
                detail: 'the most popuplar services'
            },
            {
                img:'../img/ser2.jpg',
                heading: 'Medical Bath treatment',
                detail: 'Healing your skin'
            },
            {
                img:'../img/ser3.jpg',
                heading: 'Body massage',
                detail: 'Increase your health'
            },
            {
                img:'../img/ser4.jpg',
                heading: 'Meditate de-stress',
                detail: 'Keep your mentality up'
            },
        ],

        steps:[
            {   
                number: 1,
                name:'Detoxifying Clay',
                detail: 'For your healthy hair'
            }, 
            {   
                number: 2,
                name:'Pumpkin Serum',
                detail: 'Skin care fresh air'
            }, 
            {   
                number: 3,
                name:'Professionnel Purifying',
                detail: 'Boost your hair skin'
            }, 
        ],

        isActive : false,
        modalActive: false,
    },
    created(){
        setTimeout(() => {
            this.modalActive = true
        }, 2000);
    }
})

var indexImg = 0;
changeImg();

function changeImg(){
    var allTests = document.querySelectorAll('.testimonial__section');
    allTests.forEach(ele => {
        ele.style.display = 'none';
    });

    indexImg++; 
    if (indexImg > allTests.length){
        indexImg = 1;
    } 
    allTests[indexImg -1].style.display = 'flex';
    setTimeout(changeImg, 3000);
}

// document.querySelector('#price-7').style.border = 'none';

var html1 = '<span class="promotion--hot">Hot service</span>';
var html2 = '<span class="promotion--popular">popular service</span>'


document.querySelector('.price-1').insertAdjacentHTML('beforeend',
    html1
);
document.querySelector('.price-6').insertAdjacentHTML('beforeend',
    html2
)

// $('.header__responsive').click(function(){
//     $('.header__menu').slideToggle('medium');
//     document.querySelector('.header__menu').style.display = 'flex';
// })