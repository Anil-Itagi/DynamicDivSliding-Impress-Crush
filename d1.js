const draggables = document.querySelectorAll(".draggable");

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (e) => {
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = draggable.offsetLeft;
        const startTop = draggable.offsetTop;

        draggable.style.transition = '0s';

        document.onmousemove = (e) => {
            const newX = startLeft + e.clientX - startX;
            const newY = startTop + e.clientY - startY;

            draggable.style.left = `${newX}px`;
            draggable.style.top = `${newY}px`;

            bringToFront(draggable);
        };

        document.onmouseup = () => {
            draggable.style.transition = '0.2s';
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });
});

function bringToFront(elem) {
    const highestZIndex = Math.max(
        ...Array.from(document.querySelectorAll('.draggable'), el => parseFloat(el.style.zIndex) || 0)
    );
    elem.style.zIndex = highestZIndex + 1;
}