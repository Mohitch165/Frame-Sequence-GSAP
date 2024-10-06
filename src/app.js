const Frames = {
    currentIndex: 91,
    maxIndex: 539
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

const images = []

let imgLoaded = 90;


let preloadimages =() => {
    for(let i = Frames.currentIndex; i <= Frames.maxIndex; i++){
        const imgUrl = `./Frames/frame_${i.toString().padStart
            (4, "0")
        }.jpg`
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            imgLoaded++;
            if (imgLoaded === Frames.maxIndex) {
                loadImage(Frames.currentIndex);
                startAnimation(); // Animation only starts when all images are loaded
            }
        }        
        images.push(img);
    }
} 

let loadImage = (index) => {
    if (index >= 0 && index <= Frames.maxIndex) {
        const img = images[index];

        // Check if the image exists before trying to access its properties
        if (!img || !img.complete) {
            console.warn(`Image at index ${index} is not loaded or undefined`);
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        console.log(scaleX);
        const scaleY = canvas.height / img.height;
        console.log(scaleY);
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale * -1;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        Frames.currentIndex = index;
    }
};

function startAnimation(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger : ".parent",
            start : "top top",
            scrub : 3,
            end : "bottom bottom"
        }
    })

    tl.to(Frames, {
        currentIndex: Frames.maxIndex,
        onUpdate: function(){
            loadImage(Math.floor(Frames.currentIndex))
        }
    })
}


preloadimages();