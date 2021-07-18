const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('#gallery');
const galleryListRef = 
	images.map(item => {
		const galleryImgItemRef = `<li class="gallery__item"><img src="${item.url}" alt="${item.alt}" width="250
	"><li>`;
		return galleryImgItemRef;
	});

galleryRef.insertAdjacentHTML("beforeend", galleryListRef.join(''));
galleryRef.classList.add('flexbox');