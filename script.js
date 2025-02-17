const myImage = document.querySelector('.mypicture');
const border1 = document.querySelector('.image1border1');
const border2 = document.querySelector('.image1border2');
const project1Image = document.querySelector('.project1img');
const border3 = document.querySelector('.image2border1');
const project2Image = document.querySelector('.project2img');
const border4 = document.querySelector('.image3border1');

// Image 1
myImage.addEventListener('mouseover', () => {
    
    border1.style.width = '210px';
    border1.style.height = '360px';
    border2.style.width = '220px';
    border2.style.height = '370px';

    border1.style.backgroundColor = '#FCFAFF';
    border2.style.backgroundColor = '#45436D';

    border1.style.transform = 'translate(15px, 15px)';
    border2.style.transform = 'translate(-30px, -30px)';
});
myImage.addEventListener('mouseout', () => {
    
    border1.style.width = '200px';
    border1.style.height = '350px';
    border2.style.width = '200px';
    border2.style.height = '350px';

    border1.style.backgroundColor = 'black';
    border2.style.backgroundColor = 'black';

    border1.style.transform = 'translate(0, 0)';
    border2.style.transform = 'translate(0, 0)';
});

// Image 2
project1Image.addEventListener('mouseover', () => { 
    project1Image.style.transform = 'translate(-15px, -15px)';
    border3.style.width = '460px';
    border3.style.height = '310px';
    border3.style.backgroundColor = '#45436D';
});
project1Image.addEventListener('mouseout', () => { 
    project1Image.style.transform = 'translate(0, 0)';
    border3.style.width = '450px';
    border3.style.height = '300px';
    border3.style.transform = 'translate(0, 0)';
    border3.style.backgroundColor = 'black';
});

// Image 3
project2Image.addEventListener('mouseover', () => { 
    project2Image.style.transform = 'translate(15px, 15px)';
    border4.style.width = '460px';
    border4.style.height = '310px';
    border4.style.top = '-10px';  
    border4.style.left = '-10px';
    border4.style.backgroundColor = '#A8B4FF';
});
project2Image.addEventListener('mouseout', () => { 
    project2Image.style.transform = 'translate(0, 0)';
    border4.style.backgroundColor = 'black';
});
